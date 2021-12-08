# API

Get face landmarks and attributes by passing its face_token which you can get from Detect API. Face Analyze API allows you to process up to 5 face_token at a time.

[About face_token](https://console.faceplusplus.com/documents/5679127)
If you want to use the detected face for follow-up operations, we recommend you to add its corresponding face_token into FaceSet. A face_token expires within 72 hours if it is not added into any FaceSet. Every time you operate face detection upon one image, the face within the image will get a different face_token.

## CURL

```bash
curl -X POST "https://api-us.faceplusplus.com/facepp/v3/face/analyze" -F "api_key=..." -F "api_secret=..." -F "face_tokens=...,..." -F "return_landmark=1" -F "return_attributes=gender,age,smiling,eyestatus"
```

## Docs

https://console.faceplusplus.com/documents/6329465
