import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-i, --imageFile <i>", "image_file")
  .option("-a, --returnAttributes <a><space...>", "return_attributes")
  .parse(process.argv)
  .opts();
