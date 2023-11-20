import React from "react";

import { Img, Text } from "components";

const ChatBotTile = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-full"
            size="txtInterSemiBold16"
          >
            {props?.messagetext}
          </Text>
          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
            <div className="md:h-[26px] h-[46px] relative w-[15%]">
              <div className="absolute md:h-[26px] h-[46px] inset-y-[0] my-auto right-[0] w-[78%]">
                <div className="absolute bottom-[0] flex flex-col items-center justify-end outline outline-[2px] outline-white-A700 right-[0] rounded-[50%] w-[26px]">
                  <Img
                    className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                    src="images/img_ellipse6_26x26.png"
                    alt="ellipseSix"
                  />
                </div>
                <div className="absolute flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] top-[0] w-[26px]">
                  <Img
                    className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                    src="images/img_ellipse6_2.png"
                    alt="ellipseSix_One"
                  />
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] w-[26px]">
                <Img
                  className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                  src="images/img_ellipse6_3.png"
                  alt="ellipseSix_Two"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
              <Text
                className="text-[15px] text-black-900 w-full"
                size="txtInterRegular15Black900"
              >
                {props?.messagetexttwo}
              </Text>
              <Text
                className="text-[15px] text-gray-600 w-full"
                size="txtInterRegular15Gray600"
              >
                {props?.messagetextthree}
              </Text>
            </div>
            <Img
              className="h-3.5 max-h-3.5"
              src="images/img_arrowright_indigo_a700.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ChatBotTile.defaultProps = {
  messagetext: "Son mesaj",
  messagetexttwo: (
    <>Merhaba. Ben Bothrs&#39;ın Asistanıyım. Size nasıl yardım edebilirim?</>
  ),
  messagetextthree: "Müşteri Hizmetleri・9 dakika önce",
};

export default ChatBotTile;
