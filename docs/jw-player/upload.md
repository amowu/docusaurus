# Upload

JW Player 的 direct upload via S3 文件寫得不清楚，尤其是 browser 這塊。

如果你想要透過瀏覽器來上傳影片到 JW Player，你應該：

1. 使用 HTTP **PUT** method 取代預設的 **POST**
2. Request headers 的 `Content-Type` **必須**是 MIME type（例如：`video/mp4`）而不是 `multipart/form-data`
3. JWP API 的 MIME type 相關參數**必須**給值（例如：v1 的 `upload_content_type` 或 v2 的 `mime_type`）

以下提供 React + Ant Design 的範例：

## V2 API

```jsx
import { Button, Upload } from "antd";
import axios from "axios";
import { useState } from "react";

const V2_API_CREDENTIALS_SECRET = "<V2_API_Credentials_Secret>";
const SITE_ID = "<SITE_ID>";

export default function App() {
  const [uploadUrl, setUploadUrl] = useState(null);

  const createUploadUrlV2 = () => {
    // https://docs.jwplayer.com/platform/reference/post_v2-sites-site-id-media
    axios({
      method: "POST",
      url: `https://api.jwplayer.com/v2/sites/${SITE_ID}/media/`,
      headers: {
        Authorization: V2_API_CREDENTIALS_SECRET
      },
      data: {
        upload: {
          method: "direct",
          mime_type: "video/mp4" // 👈 IMPORTANT!
        }
      }
    }).then(({ data }) => {
      setUploadUrl(data.upload_link);
    });
  };

  return (
    <div>
      <button onClick={createUploadUrlV2}>
        Create S3 direct upload URL via V2 API
      </button>
      <div>S3 direct upload URL: {uploadUrl}</div>
      <Upload
        action={uploadUrl}
        headers={{
          "Content-Type": "video/mp4" // 👈 IMPORTANT!
        }}
        method="PUT" // 👈 IMPORTANT!
        name="file"
        customRequest={({
          action,
          file,
          headers,
          method,
          onError,
          onProgress,
          onSuccess
        }) => {
          axios({
            method,
            url: action,
            data: file,
            headers,
            onUploadProgress: ({ total, loaded }) => {
              onProgress(
                { percent: Math.round((loaded / total) * 100).toFixed(2) },
                file
              );
            }
          })
            .then((event) => {
              const { data } = event;

              onSuccess(data, file);
            })
            .catch(onError);
          return {
            abort() {
              console.log("upload progress is aborted.");
            }
          };
        }}
      >
        <Button disabled={!uploadUrl}>Click to Upload</Button>
      </Upload>
    </div>
  );
}
```

## V1 API

```jsx
import { Button, Upload } from "antd";
import axios from "axios";
import JWPlatformAPI from "jwplatform";
import { useState } from "react";

const V1_API_CREDENTIALS_KEY = "<V1_API_Credentials_Key>";
const V1_API_CREDENTIALS_SECRET = "<V1_API_Credentials_Secret>";

const jwpApi = new JWPlatformAPI({
  apiKey: V1_API_CREDENTIALS_KEY,
  apiSecret: V1_API_CREDENTIALS_SECRET
});

export default function App() {
  const [uploadUrl, setUploadUrl] = useState(null);

  const createUploadUrlV1 = () => {
    // https://docs.jwplayer.com/platform/reference/post_videos-create
    jwpApi.videos
      .create({
        upload_method: "s3",
        upload_content_type: "video/mp4" // 👈 IMPORTANT!
      })
      .then((response) => {
        const {
          link: {
            protocol,
            address,
            path,
            query: { AWSAccessKeyId, Expires, Signature }
          }
        } = response;

        // https://docs.jwplayer.com/platform/reference/manage-your-library-with-the-management-api#authentication
        const encodedSignature = encodeURIComponent(Signature);
        const signedUrl = `${protocol}://${address}${path}?AWSAccessKeyId=${AWSAccessKeyId}&Expires=${Expires}&Signature=${encodedSignature}&api_format=json`;

        setUploadUrl(signedUrl);
      });
  };

  return (
    <div>
      <button onClick={createUploadUrlV1}>
        Create S3 direct upload URL via V1 API
      </button>
      <div>S3 direct upload URL: {uploadUrl}</div>
      <Upload
        action={uploadUrl}
        headers={{
          "Content-Type": "video/mp4" // 👈 IMPORTANT!
        }}
        method="PUT" // 👈 IMPORTANT!
        name="file"
        customRequest={({
          action,
          file,
          headers,
          method,
          onError,
          onProgress,
          onSuccess
        }) => {
          axios({
            method,
            url: action,
            data: file,
            headers,
            onUploadProgress: ({ total, loaded }) => {
              onProgress(
                { percent: Math.round((loaded / total) * 100).toFixed(2) },
                file
              );
            }
          })
            .then((event) => {
              const { data } = event;

              onSuccess(data, file);
            })
            .catch(onError);
          return {
            abort() {
              console.log("upload progress is aborted.");
            }
          };
        }}
      >
        <Button disabled={!uploadUrl}>Click to Upload</Button>
      </Upload>
    </div>
  );
}
```

## References

- https://stackoverflow.com/questions/57697391/jwplayer-and-s3-calculated-signature-does-not-match-the-provided-one
