import { fileFromPath } from "formdata-node/file-from-path";

import stringify from "../../stringify.js";
import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api(
    [
      "return_attributes",
      args.returnAttributes?.join(",") ||
        "gender,upper_body_cloth,lower_body_cloth",
    ],
    ["image_file", await fileFromPath(args.imageFile)]
  );

  console.log(stringify(r));
}

main();
