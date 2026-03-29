import { authAdmin, adminDb, adminInitializedFlag } from "@/configuration/firebase-admin";
import admin from "firebase-admin";

export async function POST(req) {
  try {
    if (!adminInitializedFlag || !authAdmin || !adminDb) {
      const msg = "Server: Firebase Admin SDK not initialized. Set FIREBASE_SERVICE_ACCOUNT_KEY in .env.local and restart.";
      console.error(msg);
      return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return new Response(
        JSON.stringify({ error: "Email, password, and name are required" }), 
        { status: 400 }
      );
    }

    console.log("Creating admin user:", { name, email });

    // Create user in Firebase Authentication
    const userRecord = await authAdmin.createUser({
      email,
      password,
      displayName: name,
      emailVerified: true,
    });

    console.log("User created with UID:", userRecord.uid);

    // Set custom admin claims
    await authAdmin.setCustomUserClaims(userRecord.uid, { 
      admin: true,
      isAdmin: true 
    });

    console.log("Custom claims set for user:", userRecord.uid);

    // ALSO save to Firestore for admin list display
    await adminDb.collection("admins").doc(userRecord.uid).set({
      id: userRecord.uid,
      name: name,
      email: email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Admin saved to Firestore");


    const response = {
      success: true,
      message: `Admin ${name} created successfully`,
      uid: userRecord.uid,
      email: email,
      timestamp: new Date().toISOString()
    };

    console.log("Admin creation successful:", response);

    return new Response(
      JSON.stringify(response),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error creating admin:", error);
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