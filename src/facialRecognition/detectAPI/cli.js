import { fileFromPath } from "formdata-node/file-from-path";

import client from "../../client.js";
import stringify from "../../stringify.js";

import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api({
    return_landmark: args.returnLandmark || "1",
    return_attributes:
      args.returnAttributes?.join(",") || "gender,age,smiling,emotion,beauty",
    image_file: await fileFromPath(args.imageFile),
  });

  console.log(stringify(r));
}

main();
