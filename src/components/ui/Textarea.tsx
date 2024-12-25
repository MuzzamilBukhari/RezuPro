import React from "react";

const Textarea = ({
  value,
  onChange,
  placeholder,
  readOnly,
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}) => {
  return (
    <div>
      <textarea
        name=""
        id=""
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      ></textarea>
    </div>
  );
};

export default Textarea;
