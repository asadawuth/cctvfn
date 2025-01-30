import React from "react";

export default function Biglayout({ children }) {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-bg-slate-100 tw-w-screen tw-py-10 tw-overflow-hidden">
        {children}
      </div>
    </>
  );
}
