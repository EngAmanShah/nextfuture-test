"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Prevent static prerendering of this dynamic redirect page
export const dynamic = "force-dynamic";

export default function AdminDashboard({ params }) {
  const router = useRouter();
  const lang = typeof params.lang === 'string' ? params.lang : params.lang?.[0] || 'en';

  useEffect(() => {
    // Redirect to erp-details as default admin page
    router.push(`/${lang}/admin/erp-details`);
  }, [lang, router]);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Admin Dashboard</h2>
      <p>Redirecting...</p>
    </div>
  );
}
