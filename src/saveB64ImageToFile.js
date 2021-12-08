import fs from "fs";

export default function saveB64ImageToFile(base64Data, filepath) {
  const buffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(filepath, buffer);
}
