export default async function uploadToCloudinary(file: File) {
  console.log("FILE:", file);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  console.log("cloudName:", cloudName);
  console.log("preset:", preset);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset || "");

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  console.log("UPLOAD URL:", url);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const text = await res.text();
  console.log("RAW RESPONSE:", text);

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}
