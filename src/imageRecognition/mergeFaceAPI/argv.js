import { Command } from "commander";

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-o, --outFile <o>", "out_file")
  .option("-t, --templateFile <t>", "template_file")
  .option("-u, --templateUrl <u>", "template_url")
  .option("-m, --mergeFile <m>", "merge_file")
  .option("-l, --mergeUrl <l>", "merge_url")
  .option("-r, --mergeRate <r>", "merge_rate")
  .parse(process.argv)
  .opts();
