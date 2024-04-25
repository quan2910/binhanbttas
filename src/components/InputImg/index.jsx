import React, { useState } from "react";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { Input } from "../ui/input";
import { storage } from "../../firebase";
const InputImg = ({ onChange }) => {
  const [imgUrl, setImgUrl] = useState("");
  const handleGetImage = async (e) => {
    const value = e.target.files[0];
    if (value) {
      setImgUrl(URL.createObjectURL(value));

      const storageRef = ref(storage, `images/${value.name}`);
      await uploadBytes(storageRef, value);
      const imageUrl = await getDownloadURL(storageRef);
      onChange(imageUrl);
    }
  };
  return (
    <>
      {!imgUrl ? (
        <Input
          type="file"
          onChange={(value) => handleGetImage(value)}
          className="w-full bg-white"
        />
      ) : (
        <div className="w-fit h-fit p-1 border border-dashed rounded-xl border-text">
          <img
            src={imgUrl}
            alt=""
            className="max-w-full max-h-[500px] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default InputImg;
