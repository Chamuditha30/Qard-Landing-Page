import React from "react";
import { BsAndroid2 } from "react-icons/bs";
import { updateDownloads } from "../firebase/controllers/reviewController";
import toast from "react-hot-toast";

export default function DownloadButton({ text }) {
  //download apk handler
  const downloadHandler = async () => {
    //show loading toast
    const toastId = toast.loading("Downloading...");
    try {
      //trigger download
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=14I2kw2VfGABtb_qNaqW3Cs02LMYILBJJ"; //APK in google drive
      link.download = "Qard.apk"; //suggested filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      //update download count
      const success = await updateDownloads();
      if (success) {
        toast.success("Download successful!", { id: toastId });
      } else {
        toast.error("Failed to update downloads.", { id: toastId });
      }
    } catch (error) {
      console.error("Download handler error:", error);
    }
  };

  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-2 py-1 duration-300 ease-out hover:bg-green-700"
      onClick={downloadHandler}
    >
      <BsAndroid2 className="text-lg text-white md:text-xl" />
      <p className="text-lg font-semibold text-white md:text-xl">{text}</p>
    </button>
  );
}
