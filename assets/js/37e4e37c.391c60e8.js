"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},l="Upload",i={unversionedId:"jw-player/upload",id:"jw-player/upload",title:"Upload",description:"JW Player \u7684 direct upload via S3 \u6587\u4ef6\u5beb\u5f97\u4e0d\u6e05\u695a\uff0c\u5c24\u5176\u662f browser \u9019\u584a\u3002",source:"@site/docs/jw-player/upload.md",sourceDirName:"jw-player",slug:"/jw-player/upload",permalink:"/docusaurus/docs/jw-player/upload",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jw-player/upload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JW Player",permalink:"/docusaurus/docs/category/jw-player"}},p={},d=[{value:"V2 API",id:"v2-api",level:2},{value:"V1 API",id:"v1-api",level:2},{value:"References",id:"references",level:2}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload"},"Upload"),(0,o.kt)("p",null,"JW Player \u7684 direct upload via S3 \u6587\u4ef6\u5beb\u5f97\u4e0d\u6e05\u695a\uff0c\u5c24\u5176\u662f browser \u9019\u584a\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u900f\u904e\u700f\u89bd\u5668\u4f86\u4e0a\u50b3\u5f71\u7247\u5230 JW Player\uff0c\u4f60\u61c9\u8a72\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 HTTP ",(0,o.kt)("strong",{parentName:"li"},"PUT")," method \u53d6\u4ee3\u9810\u8a2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ol"},"Request headers \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," ",(0,o.kt)("strong",{parentName:"li"},"\u5fc5\u9808"),"\u662f MIME type\uff08\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"video/mp4"),"\uff09\u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data")),(0,o.kt)("li",{parentName:"ol"},"JWP API \u7684 MIME type \u76f8\u95dc\u53c3\u6578",(0,o.kt)("strong",{parentName:"li"},"\u5fc5\u9808"),"\u7d66\u503c\uff08\u4f8b\u5982\uff1av1 \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"upload_content_type")," \u6216 v2 \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"mime_type"),"\uff09")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u63d0\u4f9b React + Ant Design \u7684\u7bc4\u4f8b\uff1a"),(0,o.kt)("h2",{id:"v2-api"},"V2 API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button, Upload } from "antd";\nimport axios from "axios";\nimport { useState } from "react";\n\nconst V2_API_CREDENTIALS_SECRET = "<V2_API_Credentials_Secret>";\nconst SITE_ID = "<SITE_ID>";\n\nexport default function App() {\n  const [uploadUrl, setUploadUrl] = useState(null);\n\n  const createUploadUrlV2 = () => {\n    // https://docs.jwplayer.com/platform/reference/post_v2-sites-site-id-media\n    axios({\n      method: "POST",\n      url: `https://api.jwplayer.com/v2/sites/${SITE_ID}/media/`,\n      headers: {\n        Authorization: V2_API_CREDENTIALS_SECRET\n      },\n      data: {\n        upload: {\n          method: "direct",\n          mime_type: "video/mp4" // \ud83d\udc48 IMPORTANT!\n        }\n      }\n    }).then(({ data }) => {\n      setUploadUrl(data.upload_link);\n    });\n  };\n\n  return (\n    <div>\n      <button onClick={createUploadUrlV2}>\n        Create S3 direct upload URL via V2 API\n      </button>\n      <div>S3 direct upload URL: {uploadUrl}</div>\n      <Upload\n        action={uploadUrl}\n        headers={{\n          "Content-Type": "video/mp4" // \ud83d\udc48 IMPORTANT!\n        }}\n        method="PUT" // \ud83d\udc48 IMPORTANT!\n        name="file"\n        customRequest={({\n          action,\n          file,\n          headers,\n          method,\n          onError,\n          onProgress,\n          onSuccess\n        }) => {\n          axios({\n            method,\n            url: action,\n            data: file,\n            headers,\n            onUploadProgress: ({ total, loaded }) => {\n              onProgress(\n                { percent: Math.round((loaded / total) * 100).toFixed(2) },\n                file\n              );\n            }\n          })\n            .then((event) => {\n              const { data } = event;\n\n              onSuccess(data, file);\n            })\n            .catch(onError);\n          return {\n            abort() {\n              console.log("upload progress is aborted.");\n            }\n          };\n        }}\n      >\n        <Button disabled={!uploadUrl}>Click to Upload</Button>\n      </Upload>\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"v1-api"},"V1 API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button, Upload } from "antd";\nimport axios from "axios";\nimport JWPlatformAPI from "jwplatform";\nimport { useState } from "react";\n\nconst V1_API_CREDENTIALS_KEY = "<V1_API_Credentials_Key>";\nconst V1_API_CREDENTIALS_SECRET = "<V1_API_Credentials_Secret>";\n\nconst jwpApi = new JWPlatformAPI({\n  apiKey: V1_API_CREDENTIALS_KEY,\n  apiSecret: V1_API_CREDENTIALS_SECRET\n});\n\nexport default function App() {\n  const [uploadUrl, setUploadUrl] = useState(null);\n\n  const createUploadUrlV1 = () => {\n    // https://docs.jwplayer.com/platform/reference/post_videos-create\n    jwpApi.videos\n      .create({\n        upload_method: "s3",\n        upload_content_type: "video/mp4" // \ud83d\udc48 IMPORTANT!\n      })\n      .then((response) => {\n        const {\n          link: {\n            protocol,\n            address,\n            path,\n            query: { AWSAccessKeyId, Expires, Signature }\n          }\n        } = response;\n\n        // https://docs.jwplayer.com/platform/reference/manage-your-library-with-the-management-api#authentication\n        const encodedSignature = encodeURIComponent(Signature);\n        const signedUrl = `${protocol}://${address}${path}?AWSAccessKeyId=${AWSAccessKeyId}&Expires=${Expires}&Signature=${encodedSignature}&api_format=json`;\n\n        setUploadUrl(signedUrl);\n      });\n  };\n\n  return (\n    <div>\n      <button onClick={createUploadUrlV1}>\n        Create S3 direct upload URL via V1 API\n      </button>\n      <div>S3 direct upload URL: {uploadUrl}</div>\n      <Upload\n        action={uploadUrl}\n        headers={{\n          "Content-Type": "video/mp4" // \ud83d\udc48 IMPORTANT!\n        }}\n        method="PUT" // \ud83d\udc48 IMPORTANT!\n        name="file"\n        customRequest={({\n          action,\n          file,\n          headers,\n          method,\n          onError,\n          onProgress,\n          onSuccess\n        }) => {\n          axios({\n            method,\n            url: action,\n            data: file,\n            headers,\n            onUploadProgress: ({ total, loaded }) => {\n              onProgress(\n                { percent: Math.round((loaded / total) * 100).toFixed(2) },\n                file\n              );\n            }\n          })\n            .then((event) => {\n              const { data } = event;\n\n              onSuccess(data, file);\n            })\n            .catch(onError);\n          return {\n            abort() {\n              console.log("upload progress is aborted.");\n            }\n          };\n        }}\n      >\n        <Button disabled={!uploadUrl}>Click to Upload</Button>\n      </Upload>\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/57697391/jwplayer-and-s3-calculated-signature-does-not-match-the-provided-one"},"https://stackoverflow.com/questions/57697391/jwplayer-and-s3-calculated-signature-does-not-match-the-provided-one"))))}c.isMDXComponent=!0}}]);