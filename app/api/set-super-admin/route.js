import { authAdmin, adminDb, adminInitializedFlag } from "@/configuration/firebase-admin";
import admin from "firebase-admin";

export async function POST(req) {
  try {
    if (!adminInitializedFlag || !authAdmin || !adminDb) {
      return new Response(
        JSON.stringify({ error: "Firebase Admin SDK not initialized" }), 
        { status: 500 }
      );
    }

    const { uid, name, email } = await req.json();

    if (!uid) {
      return new Response(
        JSON.stringify({ error: "UID is required" }), 
        { status: 400 }
      );
    }

    console.log("Setting super admin claims for UID:", uid);

    // Set custom admin claims
    await authAdmin.setCustomUserClaims(uid, { 
      admin: true,
      isAdmin: true,
      superAdmin: true
    });

    console.log("Custom claims set successfully");

    // Save to Firestore
    await adminDb.collection("admins").doc(uid).set({
      id: uid,
      name: name || "Super Admin",
      email: email || "",
      role: "super",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log("Super admin saved to Firestore");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Super admin claims set successfully",
        uid: uid
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error setting super admin:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
