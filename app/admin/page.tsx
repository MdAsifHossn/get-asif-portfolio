import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";
import { getSiteContent } from "@/lib/content-repository";
import AdminDashboard from "@/components/admin/admin-dashboard";

export const metadata = { title: "Content dashboard", robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!await verifyAdminToken(cookies().get(ADMIN_COOKIE)?.value)) redirect("/admin/login");
  return <AdminDashboard initialContent={await getSiteContent()} />;
}
