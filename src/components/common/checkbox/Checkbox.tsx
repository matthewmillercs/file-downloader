import React, { FC } from "react";
import "./checkbox.scss";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: any) => void;
  disabled?: boolean;
  indeterminate?: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange, indeterminate, disabled = false } = props;
  const checkboxRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (checkboxRef.current !== null) {
      if (indeterminate) {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }
  }, [indeterminate]);

  return (
    <>
      <input
        className={indeterminate ? "indeterminate" : undefined}
        type="checkbox"
        onChange={onChange}
        ref={checkboxRef}
        checked={checked}
        disabled={disabled}
      ></input>
      <label className="checkbox-label"></label>
    </>
  );
};
