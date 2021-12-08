# API

Get 1000 key points of the face from the uploading image or the face mark face_token detected by the Detect API, and accurately locate the facial features and facial contours. A Dense Facial Landmark analysis that supports one face at once.

[About face_token](https://console.faceplusplus.com/documents/5679127)
If you want to use the detected face for follow-up operations, we recommend you to add its corresponding face_token into FaceSet. A face_token expires within 72 hours if it is not added into any FaceSet. Every time you operate face detection upon one image, the face within the image will get a different face_token.

## CURL

```bash
curl -X POST "https://api-us.faceplusplus.com/facepp/v1/face/thousandlandmark" -F "api_key=..." -F "api_secret=..." -F "face_token=..." -F "return_landmark=all"
```

## Docs

https://console.faceplusplus.com/documents/55107053
