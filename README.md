# FacePlusPlus API client

A JavaScript API client for common FPP APIs, for example:

- [face-detection](https://www.faceplusplus.com/face-detection/#demo)
- [body demo](https://console.faceplusplus.com/service/body/intro)

## Usage

`npm i faceplusplus-api-client`

```javascript
import { bHumanBodyDetectAPI } from 'faceplusplus-api-client`;

...

const result = await bHumanBodyDetectAPI({
  return_attributes: 'gender,upper_body_cloth,lower_body_cloth',
  image_file: '~/myimage.jpg',
})
```

## `creds.json` file

**REQUIRED**!

Create a `creds.json` file in the root directory of the project. You can make a [free account](https://console.faceplusplus.com/documents/6329693) to get your [API key and secret](https://console.faceplusplus.com/app/apikey/list):

```json
{
  "api_key": "...",
  "api_secret": "..."
}
```

## APIs

- [bHumanBodyDetectAPI](https://console.faceplusplus.com/documents/10880589):
  - -i, --imageFile
  - -a, --returnAttributes
- [bHumanBodySegmentAPI](https://console.faceplusplus.com/documents/40608260):
  - -o, --outFile
  - -i, --imageFile
  - -g, --returnGrayscale
- [fCompareAPI](https://console.faceplusplus.com/documents/5679308):
  - -1, --imageFile1
  - -2, --imageFile2
- [fDenseFacialLandmarkAPI](https://console.faceplusplus.com/documents/55107053):
  - -f, --faceToken
  - -i, --imageFile
  - -l, --returnLandmark
- [fDetectAPI](https://console.faceplusplus.com/documents/5679127):
  - -i, --imageFile
  - -l, --returnLandmark
  - -a, --returnAttributes
- [fFaceAnalyzeAPI](https://console.faceplusplus.com/documents/6329465):
  - -f, --faceTokens
  - -l, --returnLandmark
  - -a, --returnAttributes
- [fSkinAnalyzeAPI](https://console.faceplusplus.com/documents/129100210):
  - -i, --imageFile
- [iMergeFaceAPI](https://console.faceplusplus.com/documents/20815649):
  - -o, --outFile
  - -t, --templateFile
  - -m, --mergeFile
  - -r, --mergeRate

More info about [face_token](https://console.faceplusplus.com/documents/5679127).

## Image format of `--outFile`

PNG / .png
