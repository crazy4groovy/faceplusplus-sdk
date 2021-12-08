# API

Skin Analyze API can analyze face skin within the image that you provided.

[About face_token](https://console.faceplusplus.com/documents/5679127)
If you want to use the detected face for follow-up operations, we recommend you to add its corresponding face_token into FaceSet. A face_token expires within 72 hours if it is not added into any FaceSet. Every time you operate face detection upon one image, the face within the image will get a different face_token.

## CURL

```bash
curl -X POST "https://api-us.faceplusplus.com/facepp/v1/skinanalyze" -F "api_key=..." -F "api_secret=..." -F "image_file=@img.jpg"
```

## Docs

https://console.faceplusplus.com/documents/129100210
