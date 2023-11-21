import React from "react";

import { Img, List, Text } from "components";

const ChatBotHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row grid grid-cols-3 justify-start w-auto"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[34%]">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse6.png"
                  alt="ellipseSix"
                />
              </div>
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[34%]">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse6_40x40.png"
                  alt="ellipseSix"
                />
              </div>
              <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[34%]">
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
              <div className="flex flex-row gap-1.5 items-center justify-start w-1/2 md:w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-gray-50_99 w-auto"
                  size="txtInterSemiBold34"
                >
                  {props?.hithere}
                </Text>
                <Img
                  className="h-[42px] md:h-auto object-cover w-[34px]"
                  src="images/img_.png"
                  alt="One"
                />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 w-auto"
                size="txtInterSemiBold32"
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

ChatBotHeader.defaultProps = {
  hithere: "Selamlar",
  howcanwehelp: "Nasıl yardımcı olabiliriz?",
};

export default ChatBotHeader;
