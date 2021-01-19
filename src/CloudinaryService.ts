import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";
/*import axios from "axios";

export interface CloudinaryPic {
  public_id: string;
  version: number;
  format: string;
  width: number;
  height: number;
  type: string;
  created_at: Date;
}

interface Resource {
  resources: CloudinaryPic[];
}

const url = (tag: string) =>
  `https://res.cloudinary.com/chichaswan/image/list/${tag}.json`;

 */
export const openUploadWidget = (options: any, callback: any) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  // @ts-ignore
  window.cloudinary.openUploadWidget(scOptions, callback);
};
/*
export const fetchPhotos = async (imageTag: string) => {
  try {
    const res = await axios.get<Resource>(url(imageTag));
    return res.data.resources;
  } catch (err) {
    console.error(err);
  }
};*/
export const url = (publicId: string, options: any) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new({ cloud_name: "chichaswan" });
  return cl.url(publicId, scOptions);
};
export async function fetchPhotos(imageTag: string, setter: any) {
  const options = {
    cloudName: "chichaswan",
    format: "json",
    type: "list",
    version: Math.ceil(new Date().getTime() / 1000),
  };

  const urlPath = url(imageTag, options);

  fetch(urlPath)
    .then((res) => res.text())
    .then((text) =>
      text
        ? setter(
            JSON.parse(text).resources.map((image: any) => image.public_id)
          )
        : []
    )
    .catch((err) => console.log(err));
}
