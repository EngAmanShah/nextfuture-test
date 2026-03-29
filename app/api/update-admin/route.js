import { authAdmin, adminDb, adminInitializedFlag } from "@/configuration/firebase-admin";
import admin from "firebase-admin";

export async function POST(req) {
  try {
    if (!adminInitializedFlag || !authAdmin || !adminDb) {
      const msg = "Server: Firebase Admin SDK not initialized. Set FIREBASE_SERVICE_ACCOUNT_KEY in .env.local and restart.";
      console.error(msg);
      return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { "Content-Type": "application/json" } });
    }

    const { uid, email, password, name } = await req.json();

    if (!uid || !email || !name) {
      return new Response(
        JSON.stringify({ error: "UID, email, and name are required" }), 
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Updating admin user:", { uid, name, email });

    // Prepare update object for Firebase Auth
    const updateData = {
      email,
      displayName: name,
    };

    // Only update password if provided
    if (password && password.trim()) {
      updateData.password = password;
      console.log("Password will be updated");
    }

    // Update user in Firebase Authentication
    const userRecord = await authAdmin.updateUser(uid, updateData);
    console.log("User updated in Firebase Auth:", userRecord.uid);

    // Update admin data in Firestore
    await adminDb.collection("admins").doc(uid).update({
      name: name,
      email: email,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Admin updated in Firestore");

    const response = {
      success: true,
      message: `Admin ${name} updated successfully`,
      uid: userRecord.uid,
      email: email,
      timestamp: new Date().toISOString()
    };

    console.log("Admin update successful:", response);

    return new Response(
      JSON.stringify(response),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error updating admin:", error);
    console.error("Error stack:", error.stack);

    // Provide detailed error info for debugging
    const errorResponse = {
      error: error.message,
      code: error.code || "unknown_error",
      details: error.toString(),
      timestamp: new Date().toISOString()
    };

    console.error("Detailed error response:", errorResponse);
    
    return new Response(
      JSON.stringify(errorResponse),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}