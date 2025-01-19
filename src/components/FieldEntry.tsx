import { FieldEntryProps } from "@/types";
import React from "react";

function FieldEntry({
  title,
  entryType,
  placeholder,
  labelStyle,
  inputStyle,
}: FieldEntryProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className={`font-bold ${labelStyle}`} htmlFor={title}>
        {title}
      </label>
      <input
        className={`border-2 border-black ${inputStyle}`}
        type={entryType}
        id={title}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FieldEntry;
