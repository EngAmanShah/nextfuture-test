import { put } from "@vercel/blob";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const path = formData.get("path");

    if (!file || !path) {
      return new Response(JSON.stringify({ error: "File or path missing" }), {
        status: 400,
      });
    }

    const blob = await put(path, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      token: process.env.VERCEL_BLOB_TOKEN || "vercel_blob_rw_nv0hBDXrimcapTiN_s8HABMgFmV4oQYJ6upJkwYDV1QrGrQ"
    });

    console.log("Upload successful:", { path, url: blob.url });
    return new Response(JSON.stringify({ url: blob.url }), { status: 200 });
  } catch (err) {
    console.error("Upload failed:", err);
    return new Response(JSON.stringify({ error: err.message || "Upload failed", details: err.toString() }), {
      status: 500,
    });
  }
}
