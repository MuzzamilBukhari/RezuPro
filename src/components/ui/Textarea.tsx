import React from "react";

const Textarea = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  readOnly,
  rows,
  className,
}: {
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  className?: string;
}) => {
  return (
    <div>
      <textarea
        className={`w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default Textarea;
