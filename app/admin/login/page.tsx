import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";
import AdminLoginForm from "@/components/admin/admin-login-form";

export const metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await verifyAdminToken(cookies().get(ADMIN_COOKIE)?.value))
    redirect("/admin");
  return (
    <main className="min-h-screen bg-[#07111f] px-5 pb-20 pt-32 text-white">
      <AdminLoginForm />
    </main>
  );
}
