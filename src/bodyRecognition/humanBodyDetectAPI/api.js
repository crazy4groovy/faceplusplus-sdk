import client from "../../client.js";

export default async function lib(headers) {
  return await client(
    "https://api-us.faceplusplus.com/humanbodypp/v1/detect",
    headers
  );
}
