import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-1, --imageFile1 <1>", "image_file1")
  .option("-2, --imageFile2 <2>", "image_file2")
  .parse(process.argv)
  .opts();
