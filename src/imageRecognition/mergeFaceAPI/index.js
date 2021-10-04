import { fileFromPath } from "formdata-node/file-from-path";

import client, {saveB64ImageToFile} from "../../client.js";
import args from "./argv.js";

async function main() {
  const r = await client(
    "https://api-us.faceplusplus.com/imagepp/v1/mergeface",
    ["template_file", await fileFromPath(args.templateFile)],
    ["merge_file", await fileFromPath(args.mergeFile)],
    ["merge_rate", args.merge_rate || "50"],
  )


  saveB64ImageToFile(r.result, args.outFile);
  console.log('Saved to: ', args.outFile);
}

main();
