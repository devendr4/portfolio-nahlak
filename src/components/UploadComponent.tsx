import React from "react";
import { openUploadWidget } from "../CloudinaryService";

export const UploadButton = () => {
  const beginUpload = (tag: string[]) => {
    const uploadOptions = {
      cloudName: "chichaswan",
      tags: [tag],
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (err: any, pic: any) => {
      console.log(pic);
    });
  };
  return (
    <div>
      <button onClick={() => beginUpload(["art", "logos"])}>logos</button>
      <button onClick={() => beginUpload(["art", "ilustraciones"])}>
        ilustraciones
      </button>
      <button onClick={() => beginUpload(["art", "productos"])}>
        productos
      </button>
    </div>
  );
};
