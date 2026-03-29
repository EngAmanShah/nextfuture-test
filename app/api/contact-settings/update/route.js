import { adminDb } from "@/configuration/firebase-admin";
import admin from "firebase-admin";

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: "Email and phone are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update or create contact settings
    await adminDb.collection("settings").doc("contact").set(
      {
        ...data,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return new Response(
      JSON.stringify({ success: true, message: "Contact settings updated" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating contact settings:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update contact settings" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
