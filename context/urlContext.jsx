"use client";

import { createContext, useContext, useState } from "react";

export const UrlContext = createContext();

export const UrlContextProvider = ({ children }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState("");

  return (
    <UrlContext.Provider value={{ fileUrl, setFileUrl, fileType, setFileType }}>
      {children}
    </UrlContext.Provider>
  );
};

export function useUrlAndType() {
  return useContext(UrlContext);
}
