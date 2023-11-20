import React from "react";

import { Button, Img, List, Text } from "components";

const DesktopFourHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-center w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Button
              className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
              shape="circle"
              color="yellow_100"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_airplane.svg" alt="airplane" />
            </Button>
            <List
              className="sm:flex-col flex-row grid grid-cols-3 justify-start w-auto"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[50%] w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse6.png"
                  alt="ellipseSix"
                />
              </div>
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[50%] w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse6_40x40.png"
                  alt="ellipseSix"
                />
              </div>
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[50%] w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse6_1.png"
                  alt="ellipseSix"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-1.5 items-center justify-start w-[48%] md:w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-gray-50_99 w-auto"
                  size="txtInterSemiBold34"
                >
                  {props?.hithere}
                </Text>
                <Img
                  className="h-[42px] md:h-auto object-cover w-[34px]"
                  src="images/img_.png"
                  alt="Three"
                />
              </div>
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-gray-50_01 w-auto"
                size="txtInterSemiBold34Gray5001"
              >
                {props?.howcanwehelp}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFourHeader.defaultProps = {
  hithere: "Merhaba",
  howcanwehelp: "Nasıl yardımcı olabiliriz?",
};

export default DesktopFourHeader;
