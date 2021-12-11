# FacePlusPlus API client

A JavaScript SDK / API client for common FPP APIs, for example:

- [face-detection](https://www.faceplusplus.com/face-detection/#demo)
- [body demo](https://console.faceplusplus.com/service/body/intro)

## Usage

`npm i faceplusplus-sdk`

```javascript
import { bHumanBodyDetectAPI } from "faceplusplus-sdk";

...

const result = await bHumanBodyDetectAPI({
  return_attributes: 'gender,upper_body_cloth,lower_body_cloth',
  image_file: '~/myimage.jpg', // see image_file note below!
})
```

## Auth credentials

**REQUIRED**!

You can make a [free account](https://console.faceplusplus.com/documents/6329693) to get your [API key and secret](https://console.faceplusplus.com/app/apikey/list).

If credentials are not set correctly, the api client will throw an Error.

### Option 1: `creds-fpp.json`

Create a `creds-fpp.json` file in the app's `process.cwd()` (root):

```json
{
  "api_key": "...",
  "api_secret": "..."
}
```

### Option 2: `configCreds`

Import `configCreds` function to set your auth credentials:

```js
import { configCreds } from "faceplusplus-sdk";
...
configCreds({
  api_key: "...",
  api_secret: "..."
});
```

## QPS rate throttle

**OPTIONAL**!

You can configure a basic throttle to help maintain the [QPS](https://www.faceplusplus.com/v2/pricing/) rate limits of your account. Import `configQPS` function to set your throttle delay times:

```js
import { configQPS } from "faceplusplus-sdk";
...
configQPS({
  beforeCallDelaySeconds: 0, // default
  afterCallDelaySeconds: 0, // default
});
```

- `beforeCallDelaySeconds`: Before the API call is made, start this timer delay.
  - Effective timer delay: `beforeCallDelaySeconds` - `API_CALL_DURATION`
- `afterCallDelaySeconds`: After the API call is made, start this timer delay.
  - Effective timer delay: `afterCallDelaySeconds` + `API_CALL_DURATION`

Note: API call will only return when *all* timers have expired.

## APIs

- [bHumanBodyDetectAPI](https://console.faceplusplus.com/documents/10880589):
  - image_file
  - return_attributes
- [bHumanBodySegmentAPI](https://console.faceplusplus.com/documents/40608260):
  - image_file
  - return_grayscale
  - > response: `.body_image` (A base64 encoded ~~JPG~~ PNG image)
- [fCompareAPI](https://console.faceplusplus.com/documents/5679308):
  - image_file1
  - image_file2
- [fDenseFacialLandmarkAPI](https://console.faceplusplus.com/documents/55107053):
  - face_token
  - image_file
  - return_landmark
- [fDetectAPI](https://console.faceplusplus.com/documents/5679127):
  - image_file
  - return_landmark
  - return_attributes
- [fFaceAnalyzeAPI](https://console.faceplusplus.com/documents/6329465):
  - face_tokens
  - return_landmark
  - return_attributes
- [fSkinAnalyzeAPI](https://console.faceplusplus.com/documents/129100210):
  - image_file
- [iMergeFaceAPI](https://console.faceplusplus.com/documents/20815649):
  - template_file
  - template_url
  - merge_file
  - merge_url
  - merge_rate
  - > response: `.result` (A base64 encoded JPG image, size of template image)

More info about [face_token](https://console.faceplusplus.com/documents/5679127).

## Input image files, eg. for `image_file`, etc

Please use the peer dependency `formdata-node` / `file-from-path`, for example:

```js
import { anyAPIExample } from "faceplusplus-sdk";
import { fileFromPath } from "formdata-node/file-from-path";
...
const r = await anyAPIExample({
  image_file: await fileFromPath(pathToImageFile),
});
```

## Tip: How to write a base64 image result to a file (NodeJS)

A simple example:

```js
import fs from "fs";

function saveB64ImageToFile(base64Data, filepath) {
  const buffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(filepath, buffer);
}
```

## CLI scripts

If you `git clone` this repo, there are npm scripts you can run that provide a command line interface to the library API client. See `package.json` for a list of scripts available.

## Notebooks

If you `git clone` this repo, there are [VS restbook](https://github.com/tanhakabir/rest-book#usage) notebooks you can run that provide a GUI to the API raw endpoints. See `/notebooks` for a list of available restbooks.
