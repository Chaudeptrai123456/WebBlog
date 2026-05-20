import { randomUUID } from "crypto";

export function generateId(title = "") {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const uuid = randomUUID().replace(/-/g, "").slice(0, 8);

  const timestamp = Date.now();
  return `${slug || "post"}-${uuid}-${timestamp}`;
}
