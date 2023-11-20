import React from "react";

import { Img, Input, List, Text } from "components";

const UIIntroHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[18px] w-2.5"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <List
            className="sm:flex-col flex-row grid grid-cols-3 justify-start w-auto"
            orientation="horizontal"
          >
            <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[35%]">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_ellipse6_4.png"
                alt="ellipseSix"
              />
            </div>
            <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[35%]">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_ellipse6_5.png"
                alt="ellipseSix"
              />
            </div>
            <div className="flex flex-col items-start justify-end outline outline-[3px] outline-indigo-A700 rounded-[20px] w-[35%]">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_ellipse6_6.png"
                alt="ellipseSix"
              />
            </div>
          </List>
          <div className="flex flex-col gap-1 items-start justify-center w-auto">
            <Text
              className="text-gray-50_01 text-lg w-auto"
              size="txtInterSemiBold18"
            >
              {props?.bothrs}
            </Text>
            <Input
              name="frame31286"
              placeholder="Birkaç dakika"
              className="font-inter p-0 placeholder:text-gray-50_01 text-gray-50_01 text-left text-sm w-full"
              wrapClassName="flex w-full"
              prefix={
                <div className="mr-1 sm:w-full sm:mx-0 w-[14%] bg-gray-50_01">
                  <Img
                    className="my-auto"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                </div>
              }
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

UIIntroHeader.defaultProps = { bothrs: "Her ikisi de" };

export default UIIntroHeader;
