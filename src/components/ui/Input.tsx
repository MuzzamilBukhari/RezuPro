import React from "react";

const Input = ({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  required,
  readOnly,
  className,
}: {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        className={
          "w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
        }
      />
    </div>
  );
};

export default Input;
