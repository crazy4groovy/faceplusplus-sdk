import { fileFromPath } from "formdata-node/file-from-path";

import client from "../../client.js";
import stringify from "../../stringify.js";

import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api(
    ["image_file", await fileFromPath(args.imageFile)],
  )

  console.log(stringify(r));
}

main();
