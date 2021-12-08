export default function (base64Data, filepath) {
  const buffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(filepath, buffer);
}
