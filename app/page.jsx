"use client";

import React, { useContext, useState } from "react";
import { UrlContext } from "@/context/urlContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setFileUrl, setFileType } = useContext(UrlContext);
  const router = useRouter();

  const [file, setFile] = useState(null);

  // sconsole.log(file);

  // console.log(fileUrl);

  const handleUpload = (e) => {
    e.preventDefault();

    const fileType = file.type.startsWith("image") ? "image" : "video";
    const url = URL.createObjectURL(file);
    // console.log(url);
    // console.log(fileType);
    setFileUrl(url);
    setFileType(fileType);
    router.push("/media");
  };

  return (
    <div className="m-6 ">
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="file"
          required
          className="bg-white text-blackrounded text-black"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit" className=" ml-2 bg-white text-black p-1 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
