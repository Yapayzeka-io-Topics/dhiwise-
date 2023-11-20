import React from "react";

import { Img, Text } from "components";

const DesktopSevenHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[18px] w-2.5"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-8 w-8"
            src="images/img_trash_white_a700.svg"
            alt="trash"
          />
          <div className="flex flex-col gap-1 items-start justify-center w-auto">
            <Text
              className="text-gray-50_01 text-lg w-auto"
              size="txtInterSemiBold18"
            >
              {props?.usertext}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Text
                  className="bg-white-A700 justify-center px-1 py-0.5 rounded-md text-[10px] text-indigo-A700 w-auto"
                  size="txtInterBold10IndigoA700"
                >
                  {props?.userailabel}
                </Text>
                <Text
                  className="text-gray-50_01 text-sm w-auto"
                  size="txtInterRegular14Gray5001"
                >
                  {props?.userbot}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSevenHeader.defaultProps = {
  usertext: "Yüzgeç",
  userailabel: "yapay zeka",
  userbot: "Bot",
};

export default DesktopSevenHeader;
