import React, { useEffect, useRef } from "react";

type OtpInputProps = {
  length: number;
  value: string;
  onChange: (otp: string) => void;
};

const OtpInput: React.FC<OtpInputProps> = ({ length, value, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      const otpArray = value.split("");
      otpArray[index] = inputValue || "";
      onChange(otpArray.join(""));

      if (inputValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      const otpArray = value.split("");
      otpArray[index] = "";
      onChange(otpArray.join(""));

      if (otpArray[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (event.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    const pastedData = event.clipboardData.getData("text");
    if (/^\d+$/.test(pastedData) && pastedData.length <= length) {
      const otpArray = Array(length).fill("");
      for (let i = 0; i < pastedData.length; i++) {
        otpArray[i] = pastedData[i];
      }
      onChange(otpArray.join(""));
      
      // Focus the last input after pasting
      inputRefs.current[Math.min(pastedData.length, length) - 1]?.focus();
      event.preventDefault();
    }
    console.log(index)
  };

  useEffect(() => {
    if (value.length === length) {
      inputRefs.current[length - 1]?.blur();
    }
  }, [value, length]);

  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "50px",
        padding: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={value[index] || ""}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={(event) => handlePaste(index, event)}
          maxLength={1}
          style={{ width: "40px", marginRight: "5px", textAlign: "center" }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
