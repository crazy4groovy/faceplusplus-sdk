import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { FormData } from "formdata-node";

let credsOpts; // { api_key, api_secret }
let qpsDelayOpts = {
  beforeCallDelaySeconds: 0,
  afterCallDelaySeconds: 0,
};

const delay = (secs) => new Promise((res) => setTimeout(res, secs * 1000));

if (fs.existsSync(path.join(process.cwd(), "creds-fpp.json"))) {
  credsOpts = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "creds-fpp.json"), "utf8")
  );
}

export default async function client(url, formNamesValues) {
  if (credsOpts === undefined) {
    throw new Error(
      "ERROR: API client auth creds config; See lib documentation."
    );
  }

  const form = new FormData();
  form.set("api_key", credsOpts.api_key);
  form.set("api_secret", credsOpts.api_secret);

  Object.entries(formNamesValues).forEach(([name, value]) => {
    if (value !== undefined) {
      form.set(name, value);
    }
  });

  const qpsBeforeP = delay(qpsDelayOpts.beforeCallDelaySeconds);
  const responseP = fetch(url, {
    method: "POST",
    body: form,
  }).then((r) => r.json());
  const qpsAfterP = delay(qpsDelayOpts.afterCallDelaySeconds)

  const [response] = await Promise.all([responseP, qpsBeforeP, qpsAfterP]);
  return response;
}

export const configCreds = (credsJson) => {
  credsOpts = credsJson;
};

export const configQPS = (qpsDelayJson) => {
  qpsDelayOpts = qpsDelayJson;
};
