import fs from "fs";
import fetch from "node-fetch";
import { FormData } from "formdata-node";

const config = JSON.parse(fs.readFileSync("creds.json", "utf8"));

export default async (url, ...formSetterPairs) => {
  const form = new FormData();
  form.set("api_key", config.api_key);
  form.set("api_secret", config.api_secret);

  formSetterPairs.forEach((pair) => {
    form.set(...pair);
  });

  return fetch(url, {
    method: "POST",
    body: form,
  }).then((r) => r.json());
};
