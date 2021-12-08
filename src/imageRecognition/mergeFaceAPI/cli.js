import { fileFromPath } from "formdata-node/file-from-path";

import saveB64ImageToFile from "../../saveB64ImageToFile.js";
import args from "./argv.js";
import api from "./api.js";

async function main() {
  const r = await api({
    template_file: args.templateFile ? await fileFromPath(args.templateFile) : undefined,
    template_url: args.templateUrl || undefined,
    merge_file: args.mergeFile ? await fileFromPath(args.mergeFile): undefined,
    merge_url: args.mergeUrl || undefined,
    merge_rate: args.merge_rate || "50",
  });

  saveB64ImageToFile(r.result, args.outFile);
  console.log("Saved to:", args.outFile);
}

main();
