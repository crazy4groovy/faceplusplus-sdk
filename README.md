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

## `creds-fpp.json` file

**REQUIRED**!

Create a `creds-fpp.json` file in the `process.cwd()` (root) of the app. You can make a [free account](https://console.faceplusplus.com/documents/6329693) to get your [API key and secret](https://console.faceplusplus.com/app/apikey/list):

```json
{
  "api_key": "...",
  "api_secret": "..."
}
```

## APIs

- [bHumanBodyDetectAPI](https://console.faceplusplus.com/documents/10880589):
  - image_file
  - return_attributes
- [bHumanBodySegmentAPI](https://console.faceplusplus.com/documents/40608260):
  - out_file
  - image_file
  - return_grayscale
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
  - out_file
  - template_file
  - template_url
  - merge_file
  - merge_url
  - merge_rate

More info about [face_token](https://console.faceplusplus.com/documents/5679127).

## Input image files, eg. for `image_file`, etc

Please use the peer dependency `formdata-node/file-from-path`, for example:

```js
import { anyAPIExample } from "faceplusplus-sdk";
import { fileFromPath } from "formdata-node/file-from-path";
...
const r = await anyAPIExample({
  image_file: await fileFromPath(pathToImageFile),
});
```

## Image format of `out_file`

PNG / .png

## Tip: How to write a base64 image result to a file (NodeJS)

A simple example:

```js
import fs from "fs";

function saveB64ImageToFile(base64Data, filepath) {
  const buffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(filepath, buffer);
}
```
