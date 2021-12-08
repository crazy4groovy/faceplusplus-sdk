import { fileFromPath } from "formdata-node/file-from-path";

import client from "../../client.js";
import stringify from "../../stringify.js";

import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api(
    ["face_tokens", args.faceTokens?.join(',')],
    ["return_landmark", args.returnLandmark || "1"],
    ["return_attributes", args.returnAttributes?.join(',') || "gender,age,smiling,emotion,beauty,eyestatus"],
  )

  console.log(stringify(r));
}

main();
