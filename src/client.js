import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { FormData } from "formdata-node";

let config;

if (fs.existsSync(path.join(process.cwd(), "creds-fpp.json"))) {
  config = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "creds-fpp.json"), "utf8")
  );
}

export default async function client(url, formNamesValues) {
  if (config === undefined) {
    throw new Error(
      "API client missing auth creds-fpp.json; see documentation."
    );
  }

  const form = new FormData();
  form.set("api_key", config.api_key);
  form.set("api_secret", config.api_secret);

  Object.entries(formNamesValues).forEach(([name, value]) => {
    if (value !== undefined) {
      form.set(name, value);
    }
  });

  return await fetch(url, {
    method: "POST",
    body: form,
  }).then((r) => r.json());
}

export const configCreds = (credsJson) => {
  config = credsJson;
};
