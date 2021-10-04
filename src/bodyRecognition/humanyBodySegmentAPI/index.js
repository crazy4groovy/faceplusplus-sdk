import { fileFromPath } from "formdata-node/file-from-path";

import client, { saveB64ImageToFile } from "../../client.js";

import args from "./argv.js";

async function main() {

  const r = await client(
    "https://api-us.faceplusplus.com/humanbodypp/v2/segment",
    ["return_grayscale", args.returnGrayscale || "0"],
    ["image_file", await fileFromPath(args.imageFile)],
  )

  saveB64ImageToFile(r.body_image, args.outFile);
  console.log('Saved to:', args.outFile);
}

main();
