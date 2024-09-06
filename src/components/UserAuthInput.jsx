import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

function UserAuthInput({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  getEmailValidationStatus,
}) {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleTextChange = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);
    if (placeHolder === "Email Here") {
      const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegx.test(value);
      setIsEmailValid(status);
      getEmailValidationStatus(status);
    }
  };
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div
        className={`flex items-center justify-center gap-2 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid &&
          placeHolder === "Email Here" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        <Icon className="text-text555 text-xl" />
        <input
          type={isPass && showPass ? "password" : "text"}
          name=""
          id=""
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-1 outline-none border-none bg-transparent text-text555 text-md"
          value={value}
          onChange={handleTextChange}
        />
        {isPass && (
          <motion.div
            onClick={() => setShowPass(!showPass)}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEyeSlash className="text-text555 text-xl" />
            ) : (
              <FaEye className="text-text555 text-xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default UserAuthInput;
