import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-i, --imageFile <i>", "image_file")
  .option("-l, --returnLandmark <l>", "return_landmark")
  .option("-a, --returnAttributes <a><space...>", "return_attributes")
  .parse(process.argv)
  .opts();
