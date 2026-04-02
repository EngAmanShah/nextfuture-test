import { redirect } from "next/navigation";

// Prevent static prerendering of this dynamic redirect page
export const dynamic = "force-dynamic";

export default function AdminDashboard({ params }) {
  const lang = typeof params.lang === "string" ? params.lang : params.lang?.[0] || "en";
  redirect(`/${lang}/admin/erp-details`);
}

