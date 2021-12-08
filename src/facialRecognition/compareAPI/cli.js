import { fileFromPath } from "formdata-node/file-from-path";

import stringify from "../../stringify.js";

import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api({
    image_file1: await fileFromPath(args.imageFile1),
    image_file2: await fileFromPath(args.imageFile2),
  });

  console.log(stringify(r));
}

main();
