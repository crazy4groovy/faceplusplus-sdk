import { fileFromPath } from "formdata-node/file-from-path";

import client from "../../client.js";

import args from "./argv.js";

async function main() {
  const r = await client(
    "https://api-us.faceplusplus.com/facepp/v3/compare",
    ["image_file1", await fileFromPath(args.imageFile1)],
    ["image_file2", await fileFromPath(args.imageFile2)]
  );

  console.log(r);
  return r;
}

main();
