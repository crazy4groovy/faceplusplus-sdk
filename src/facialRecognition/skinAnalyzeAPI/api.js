import client from "../../client.js";

export default async function lib(headers) {
  return await client(
    "https://api-us.faceplusplus.com/facepp/v1/skinanalyze",
    ...headers
  );
}
