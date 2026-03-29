import { authAdmin, adminDb, adminInitializedFlag } from "@/configuration/firebase-admin";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get('uid') || 'ev1kYZvZq2RQ9AguTpFTsGhSGaD3';

    if (!adminInitializedFlag || !authAdmin) {
      return new Response(
        JSON.stringify({ 
          error: "Firebase Admin SDK not initialized",
          adminInitializedFlag,
          hasAuthAdmin: !!authAdmin,
          hasEnvVar: !!process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
        }), 
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get user from Firebase Auth
    const userRecord = await authAdmin.getUser(uid);
    
    // Get custom claims
    const claims = userRecord.customClaims || {};

    // Check Firestore
    let firestoreData = null;
    try {
      const doc = await adminDb.collection("admins").doc(uid).get();
      firestoreData = doc.exists ? doc.data() : null;
    } catch (err) {
      firestoreData = { error: err.message };
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName,
        },
        customClaims: claims,
        hasIsAdminClaim: !!claims.isAdmin,
        firestoreAdmin: firestoreData,
        timestamp: new Date().toISOString()
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: error.message,
        code: error.code,
        stack: error.stack
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
