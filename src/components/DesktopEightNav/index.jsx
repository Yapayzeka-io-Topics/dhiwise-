import React from "react";

import { Img, Text } from "components";

const DesktopEightNav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-between px-3.5 w-full">
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-[30px] w-[25px]"
              src="images/img_home.svg"
              alt="home"
            />
            <Text
              className="text-[15px] text-black-900"
              size="txtInterRegular15Black900"
            >
              {props?.homeOne}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <div className="relative w-9">
              <Img
                className="h-[30px] mt-auto w-[22px]"
                src="images/img_icon.svg"
                alt="icon"
              />
              <Text
                className="absolute bg-red-500_01 flex h-4 items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-4"
                size="txtInterSemiBold12"
              >
                {props?.notificationnumber}
              </Text>
            </div>
            <Text
              className="text-[15px] text-indigo-A700 w-auto"
              size="txtInterSemiBold15IndigoA700"
            >
              {props?.messages}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-[31px] w-[22px]"
              src="images/img_question.svg"
              alt="question"
            />
            <Text
              className="text-[15px] text-black-900 w-auto"
              size="txtInterRegular15Black900"
            >
              {props?.helptext}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-[31px] w-[22px]"
              src="images/img_home.svg"
              alt="home_Two"
            />
            <Text
              className="text-[15px] text-black-900 w-auto"
              size="txtInterRegular15Black900"
            >
              {props?.newstext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopEightNav.defaultProps = {
  homeOne: "Ev",
  notificationnumber: "1",
  messages: "Mesajlar",
  helptext: "Yardım",
  newstext: "Haberler",
};

export default DesktopEightNav;
