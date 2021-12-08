import { fileFromPath } from "formdata-node/file-from-path";

import saveB64ImageToFile from "../../saveB64ImageToFile.js";

import args from "./argv.js";
import api from "./api";

async function main() {
  const r = await api(
    ["return_grayscale", args.returnGrayscale || "0"],
    ["image_file", await fileFromPath(args.imageFile)]
  );

  saveB64ImageToFile(r.body_image, args.outFile);
  console.log("Saved to:", args.outFile);
}

main();
