import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-o, --outFile <o>", "out_file")
  .option("-i, --imageFile <i>", "image_file")
  .option("-g, --returnGrayscale <l>", "return_grayscale")
  .parse(process.argv)
  .opts();
