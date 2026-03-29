import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
      ),
    });
  } catch (err) {
    console.error("Firebase Admin initialization error:", err);
  }
}

const adminInitialized = !!admin.apps.length;

export { admin };
export const authAdmin = adminInitialized ? admin.auth() : null;
export const adminDb = adminInitialized ? admin.firestore() : null;
export const adminInitializedFlag = adminInitialized;
