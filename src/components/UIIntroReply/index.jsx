import React from "react";

import { Img, Text } from "components";

const UIIntroReply = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between pb-1 w-full">
          <Text
            className="text-[15px] text-center text-gray-600 w-auto"
            size="txtInterRegular15Gray600"
          >
            {props?.typeareply}
          </Text>
          <Img
            className="h-[22px] w-[72px]"
            src="images/img_dashboard.svg"
            alt="dashboard"
          />
        </div>
      </div>
    </>
  );
};

UIIntroReply.defaultProps = { typeareply: "Bir yanıt yazın..." };

export default UIIntroReply;
