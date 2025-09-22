import React from "react";
import { FiDownload } from "react-icons/fi";

export default function DownloadsStat({ downloads }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <FiDownload className="text-white/60" />
      <p className="text-sm text-white/60">{downloads}+ downloads</p>
    </div>
  );
}
