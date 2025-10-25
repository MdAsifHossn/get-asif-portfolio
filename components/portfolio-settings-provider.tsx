"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { PortfolioSettings } from '@/lib/types';

interface PortfolioSettingsContextType {
  settings: PortfolioSettings;
  updateSettings: (newSettings: Partial<PortfolioSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: PortfolioSettings = {
  theme: 'system',
  accentColor: 'blue',
  fontFamily: 'inter',
  fontSize: 'medium',
};

const PortfolioSettingsContext = createContext<PortfolioSettingsContextType | undefined>(undefined);

export function PortfolioSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<PortfolioSettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('portfolio-settings');
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse settings:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-settings', JSON.stringify(settings));

      document.documentElement.setAttribute('data-accent', settings.accentColor);
      document.documentElement.setAttribute('data-font', settings.fontFamily);
      document.documentElement.setAttribute('data-size', settings.fontSize);
    }
  }, [settings, mounted]);

  const updateSettings = (newSettings: Partial<PortfolioSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <PortfolioSettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </PortfolioSettingsContext.Provider>
  );
}

export function usePortfolioSettings() {
  const context = useContext(PortfolioSettingsContext);
  if (!context) {
    throw new Error('usePortfolioSettings must be used within PortfolioSettingsProvider');
  }
  return context;
}
