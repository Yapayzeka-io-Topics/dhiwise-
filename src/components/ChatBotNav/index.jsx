import React from "react";

import { Img, Text } from "components";

const ChatBotNav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-between px-3.5 w-full">
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-8 w-[26px]"
              src="images/img_icon.svg"
              alt="icon_One"
            />
            <Text
              className="text-[15px] text-indigo-A700"
              size="txtInterSemiBold15IndigoA700"
            >
              {props?.home}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-8 w-[23px]"
              src="images/img_home.svg"
              alt="home_One"
            />
            <Text
              className="text-[15px] text-black-900 w-auto"
              size="txtInterRegular15Black900"
            >
              {props?.usermessages}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            {!!props?.question ? (
              <Img
                className="h-[33px] w-[23px]"
                alt="question"
                src={props?.question}
              />
            ) : null}
            {!!props?.userhelp ? (
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtInterRegular15Black900"
              >
                {props?.userhelp}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            {!!props?.homeTwo ? (
              <Img
                className="h-8 w-[23px]"
                alt="home_Two"
                src={props?.homeTwo}
              />
            ) : null}
            {!!props?.usernews ? (
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtInterRegular15Black900"
              >
                {props?.usernews}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ChatBotNav.defaultProps = { home: "Ev", usermessages: "Mesajlar" };

export default ChatBotNav;
