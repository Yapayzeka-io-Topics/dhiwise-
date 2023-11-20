import React from "react";

import { Img, Text } from "components";

const DesktopTwoHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[18px] w-2.5"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-10">
            <div className="outline outline-[3px] outline-indigo-A700 relative rounded-[50%] w-10">
              <Img
                className="h-10 m-auto rounded-[50%] w-10"
                src="images/img_ellipse6_5.png"
                alt="ellipseSix"
              />
              <div className="absolute bg-light_green-500 bottom-[0] h-[9px] outline outline-[2px] outline-indigo-A700 right-[0] rounded w-[9px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center w-auto">
            <Text
              className="text-gray-50_01 text-lg w-auto"
              size="txtInterSemiBold18"
            >
              {props?.username}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-gray-50_01 text-sm w-auto"
                size="txtInterRegular14Gray5001"
              >
                {props?.useractivity}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopTwoHeader.defaultProps = {
  username: "Canlı müşteri Hiz.",
  useractivity: "1 saat önce aktif",
};

export default DesktopTwoHeader;
