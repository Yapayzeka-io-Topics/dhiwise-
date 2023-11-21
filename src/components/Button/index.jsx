import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-lg",
};
const variants = {
  fill: {
    blue_50_01: "bg-blue-50_01 text-gray-700",
    amber_300: "bg-amber-300 text-blue_gray-800",
    red_50_01: "bg-red-50_01",
    red_50_02: "bg-red-50_02 text-deep_orange-300",
    deep_orange_50: "bg-deep_orange-50 text-deep_orange-300",
    white_A700: "bg-white-A700 text-gray-900",
    red_600: "bg-red-600 text-white-A700",
    indigo_A700: "bg-indigo-A700 shadow-bs",
    blue_A700: "bg-blue-A700 text-white-A700",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
    deep_purple_900: "bg-deep_purple-900 text-white-A700",
    yellow_100: "bg-yellow-100",
    blue_gray_50: "bg-blue_gray-50 text-black-900",
    green_700: "bg-green-700 text-white-A700",
    blue_50: "bg-blue-50 text-blue-900",
    gray_50_01: "bg-gray-50_01 text-blue_gray-800",
  },
  outline: {
    gray_400: "border border-gray-400 border-solid text-deep_purple-900",
    blue_gray_900_01:
      "border border-blue_gray-900_01 border-solid text-blue_gray-900_01",
    indigo_50: "border border-indigo-50 border-solid text-blue_gray-800",
  },
  gradient: { purple_600_gray_900_00: "bg-gradient  text-white-A700" },
};
const sizes = {
  xs: "p-px",
  sm: "p-[5px]",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "p-[17px]",
  "2xl": "p-[22px] sm:px-5",
  "3xl": "sm:px-5 px-6 py-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "blue_50_01",
    "amber_300",
    "red_50_01",
    "red_50_02",
    "deep_orange_50",
    "white_A700",
    "red_600",
    "indigo_A700",
    "blue_A700",
    "deep_orange_300",
    "deep_purple_900",
    "yellow_100",
    "blue_gray_50",
    "green_700",
    "blue_50",
    "gray_50_01",
    "gray_400",
    "blue_gray_900_01",
    "indigo_50",
    "purple_600_gray_900_00",
  ]),
};

export { Button };
