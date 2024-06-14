"use client";

import React, { useContext } from "react";
import { UrlContext } from "@/context/urlContext";
import Image from "next/image";

function Media() {
  const { fileUrl, fileType } = useContext(UrlContext);

  console.log(fileUrl, fileType);

  if (!fileUrl) {
    return <p>No media file to display</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {fileType === "image" ? (
        <Image
          src={fileUrl}
          alt={fileType}
          width={400}
          height={400}
          className="object-cover w-full h-64"
        />
      ) : (
        <video width="320" height="240" controls autoPlay preload="none">
          <source src={fileUrl} type="video/mp4" />
          <track src={fileUrl} kind="subtitles" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Media;
