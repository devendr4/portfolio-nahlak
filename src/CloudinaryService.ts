import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

export const url = (publicId: string, options: any) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new({ cloud_name: "chichaswan" });
  return cl.url(publicId, scOptions);
};

export const openUploadWidget = (options: any, callback: any) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  // @ts-ignore
  window.cloudinary.openUploadWidget(scOptions, callback);
};

export async function fetchPhotos(imageTag: any, setter: any) {
  const options = {
    cloudName: "chichaswan",
    format: "json",
    type: "list",
    version: Math.ceil(new Date().getTime() / 1000),
  };

  const urlPath = url(imageTag.toString(), options);

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

