import { fileFromPath } from "formdata-node/file-from-path";

import stringify from "../../stringify.js";

import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api(
    ["face_token", args.faceToken ?? undefined],
    ["image_file", args.imageFile ? await fileFromPath(args.imageFile) : undefined],
    ["return_landmark", args.returnLandmark || "all"],
  )

  console.log(stringify(r));
}

main();
