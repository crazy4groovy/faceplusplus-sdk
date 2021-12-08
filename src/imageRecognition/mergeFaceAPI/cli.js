import { fileFromPath } from "formdata-node/file-from-path";

import saveB64ImageToFile from "../../saveB64ImageToFile.js";
import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api({
    template_file: await fileFromPath(args.templateFile),
    merge_file: await fileFromPath(args.mergeFile),
    merge_rate: args.merge_rate || "50",
  });

  saveB64ImageToFile(r.result, args.outFile);
  console.log("Saved to:", args.outFile);
}

main();
