import { v2 as cloudinary } from "cloudinary";
import { extractPublicId } from "cloudinary-build-url";
import fs from "fs";

export const uploadOnCloudinary = async (filePath, cloudinaryFolder) => {
  try {
    if (!filePath) return null;

    const response = await cloudinary.uploader.upload(filePath, {
      folder: cloudinaryFolder,
      resource_type: "auto",
    });

    fs.unlinkSync(filePath);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
};

export const deleteFromCloudinary = async (url, responseType = "image") => {
  const publicId = extractPublicId(url);
  try {
    const resposne = await cloudinary.uploader.destroy(publicId, {
      resource_type: responseType,
    });

    return resposne;
  } catch (error) {
    console.log("Error while deleting from cloudinary");
    console.log(error);
    return null;
  }
};
