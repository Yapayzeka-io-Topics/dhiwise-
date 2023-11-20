import React from "react";

import { Img, Text } from "components";

const DesktopOneNav = (props) => {
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
              {props?.userhometext}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
            <Img
              className="h-[30px] w-[22px]"
              src="images/img_icon.svg"
              alt="icon"
            />
            <Text
              className="text-[15px] text-indigo-A700 w-auto"
              size="txtInterSemiBold15IndigoA700"
            >
              {props?.usermessagestext}
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
              {props?.userhelptext}
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
              {props?.usernewstext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneNav.defaultProps = {
  userhometext: "Ev",
  usermessagestext: "Mesajlar",
  userhelptext: "Yardım",
  usernewstext: "Haberler",
};

export default DesktopOneNav;
