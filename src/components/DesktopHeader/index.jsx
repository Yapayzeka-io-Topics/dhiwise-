import React from "react";

import { Img, List, Text } from "components";

const DesktopHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[26px] items-center justify-center w-full">
          <div className="flex flex-row gap-[123px] items-center justify-start w-full">
            <Img
              className="h-[18px] w-2.5"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Text
              className="flex-1 text-center text-gray-50_01 text-lg w-auto"
              size="txtInterSemiBold18"
            >
              {props?.customerservice}
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row grid grid-cols-3 justify-start w-auto"
            orientation="horizontal"
          >
            <div className="flex flex-col items-start justify-end outline outline-[4px] outline-indigo-A700 rounded-[31px] w-[34%]">
              <Img
                className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                src="images/img_ellipse6_62x62.png"
                alt="ellipseSix"
              />
            </div>
            <div className="flex flex-col items-start justify-end outline outline-[4px] outline-indigo-A700 rounded-[31px] w-[34%]">
              <Img
                className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                src="images/img_ellipse6_7.png"
                alt="ellipseSix"
              />
            </div>
            <div className="flex flex-col items-start justify-end outline outline-[4px] outline-indigo-A700 rounded-[31px] w-[34%]">
              <Img
                className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                src="images/img_ellipse6_8.png"
                alt="ellipseSix"
              />
            </div>
          </List>
          <div className="flex flex-col gap-3 items-center justify-center w-auto">
            <Text
              className="text-base text-gray-50_01 w-auto"
              size="txtInterSemiBold16Gray5001"
            >
              {props?.wetypicallyrepl}
            </Text>
            <Text
              className="text-gray-50_a2 text-sm w-auto"
              size="txtInterRegular14Gray50a2"
            >
              {props?.pleaseaskyour}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHeader.defaultProps = {
  customerservice: "Müşteri servisi",
  wetypicallyrepl: "Genellikle birkaç dakika içinde yanıt veririz",
  pleaseaskyour: "Lütfen sorunuzu sorun.",
};

export default DesktopHeader;
