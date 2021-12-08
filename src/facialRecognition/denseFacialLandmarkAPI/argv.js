import { Command } from 'commander';

// https://www.npmjs.com/package/commander
const program = new Command();

export default program
  .option("-f, --faceToken <f>", "face_token")
  .option("-i, --imageFile <1>", "image_file")
  .option("-l, --returnLandmark <l>", "return_landmark")
  .parse(process.argv)
  .opts();
