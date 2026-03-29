import { authAdmin } from "@/configuration/firebase-admin";
import admin from "firebase-admin";

export async function POST(req) {
  try {
    const { uid } = await req.json();

    if (!uid) {
      return new Response(JSON.stringify({ error: "Missing admin UID" }), {
        status: 400,
      });
    }

    // Delete from Firebase Authentication
    await authAdmin.deleteUser(uid);

    // Try to delete from Firestore (if exists)
    try {
      const db = admin.firestore();
      await db.collection("admins").doc(uid).delete();
    } catch (firestoreError) {
      console.log("No Firestore record to delete, continuing...");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error removing admin:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}