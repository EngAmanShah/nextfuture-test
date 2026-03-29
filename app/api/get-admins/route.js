import { authAdmin } from "@/configuration/firebase-admin";

export async function GET() {
  try {
    const listUsersResult = await authAdmin.listUsers(1000);
    
    const admins = listUsersResult.users
      .filter(user => user.customClaims?.admin || user.customClaims?.isAdmin)
      .map(user => ({
        id: user.uid,
        name: user.displayName || 'Admin',
        email: user.email || 'No email',
        createdAt: new Date(parseInt(user.metadata.creationTime))
      }));

    return new Response(JSON.stringify({ admins }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return new Response(JSON.stringify({ admins: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}