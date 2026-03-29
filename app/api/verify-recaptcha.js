// pages/api/verify-recaptcha.js or app/api/verify-recaptcha/route.js
export async function POST(request) {
  const { token } = await request.json();
  
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  
  const response = await fetch(verificationUrl, { method: 'POST' });
  const data = await response.json();
  
  return Response.json({ success: data.success });
}