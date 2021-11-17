import { fileFromPath } from "formdata-node/file-from-path";

import client from "../../client.js";

import args from "./argv.js";

async function main() {
  const r = await client(
    "https://api-us.faceplusplus.com/facepp/v3/detect",
    ["return_landmark", args.returnLandmark || "1"],
    ["return_attributes", args.returnAttributes?.join(',') || "gender,age,smiling,emotion,beauty"],
    ["image_file", await fileFromPath(args.imageFile)],
  )

  console.log(r);
  return r;
}

main();
