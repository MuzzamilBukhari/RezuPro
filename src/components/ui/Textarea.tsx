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
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
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
