import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-i, --imageFile <1>", "image_file")
  .parse(process.argv)
  .opts();
