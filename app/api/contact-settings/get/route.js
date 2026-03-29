import { adminDb } from "@/configuration/firebase-admin";

export async function GET() {
  try {
    const doc = await adminDb.collection("settings").doc("contact").get();
    
    if (!doc.exists) {
      // Return default settings if none exist
      return new Response(
        JSON.stringify({
          email: "info@nextfuture.com",
          phone: "+966 50 000 0000",
          address: "Riyadh, Saudi Arabia",
          workingHours: "Sun - Thu: 9:00 AM - 6:00 PM",
          whatsapp: "+966500000000",
          facebook: "",
          twitter: "",
          linkedin: "",
          instagram: "",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(doc.data()), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact settings:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch contact settings" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
