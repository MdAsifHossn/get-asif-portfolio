"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Sun, Moon, Monitor, Type, Palette, RotateCcw } from 'lucide-react';
import { usePortfolioSettings } from './portfolio-settings-provider';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Separator } from './ui/separator';

const accentColors = [
  { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
  { name: 'Green', value: 'green', class: 'bg-green-500' },
  { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
  { name: 'Teal', value: 'teal', class: 'bg-teal-500' },
  { name: 'Rose', value: 'rose', class: 'bg-rose-500' },
  { name: 'Violet', value: 'violet', class: 'bg-violet-500' },
];

const fontFamilies = [
  { name: 'Inter', value: 'inter' },
  { name: 'Roboto', value: 'roboto' },
  { name: 'Open Sans', value: 'opensans' },
  { name: 'Poppins', value: 'poppins' },
  { name: 'Montserrat', value: 'montserrat' },
];

const fontSizes = [
  { name: 'Small', value: 'small' as const },
  { name: 'Medium', value: 'medium' as const },
  { name: 'Large', value: 'large' as const },
  { name: 'Extra Large', value: 'extra-large' as const },
];

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings, resetSettings } = usePortfolioSettings();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open settings"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-background border-l z-50 overflow-y-auto"
            >
              <Card className="h-full rounded-none border-0">
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Settings</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <Label className="flex items-center gap-2 text-base font-semibold mb-3">
                        <Sun className="w-4 h-4" />
                        Theme
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={theme === 'light' ? 'default' : 'outline'}
                          onClick={() => setTheme('light')}
                          className="flex flex-col items-center gap-2 h-auto py-3"
                        >
                          <Sun className="w-5 h-5" />
                          <span className="text-xs">Light</span>
                        </Button>
                        <Button
                          variant={theme === 'dark' ? 'default' : 'outline'}
                          onClick={() => setTheme('dark')}
                          className="flex flex-col items-center gap-2 h-auto py-3"
                        >
                          <Moon className="w-5 h-5" />
                          <span className="text-xs">Dark</span>
                        </Button>
                        <Button
                          variant={theme === 'system' ? 'default' : 'outline'}
                          onClick={() => setTheme('system')}
                          className="flex flex-col items-center gap-2 h-auto py-3"
                        >
                          <Monitor className="w-5 h-5" />
                          <span className="text-xs">System</span>
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="flex items-center gap-2 text-base font-semibold mb-3">
                        <Palette className="w-4 h-4" />
                        Accent Color
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        {accentColors.map((color) => (
                          <Button
                            key={color.value}
                            variant={settings.accentColor === color.value ? 'default' : 'outline'}
                            onClick={() => updateSettings({ accentColor: color.value })}
                            className="flex items-center gap-2 justify-start"
                          >
                            <div className={`w-4 h-4 rounded-full ${color.class}`} />
                            <span className="text-xs">{color.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="flex items-center gap-2 text-base font-semibold mb-3">
                        <Type className="w-4 h-4" />
                        Font Family
                      </Label>
                      <div className="space-y-2">
                        {fontFamilies.map((font) => (
                          <Button
                            key={font.value}
                            variant={settings.fontFamily === font.value ? 'default' : 'outline'}
                            onClick={() => updateSettings({ fontFamily: font.value })}
                            className="w-full justify-start"
                          >
                            {font.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="flex items-center gap-2 text-base font-semibold mb-3">
                        <Type className="w-4 h-4" />
                        Font Size
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        {fontSizes.map((size) => (
                          <Button
                            key={size.value}
                            variant={settings.fontSize === size.value ? 'default' : 'outline'}
                            onClick={() => updateSettings({ fontSize: size.value })}
                          >
                            {size.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <Button
                      variant="destructive"
                      onClick={resetSettings}
                      className="w-full flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset to Defaults
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
