import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { FormData } from "formdata-node";

const config = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "creds.json"), "utf8")
);

export default async (url, formNamesValues) => {
  const form = new FormData();
  form.set("api_key", config.api_key);
  form.set("api_secret", config.api_secret);

  Object.entries(formNamesValues).forEach(([name, value]) => {
    form.set(name, value);
  });

  return await fetch(url, {
    method: "POST",
    body: form,
  }).then((r) => r.json());
};
