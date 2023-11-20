import React from "react";

import { Img, Text } from "components";

const ChatBotTile1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-full"
            size="txtInterSemiBold16"
          >
            {props?.sendusamessage}
          </Text>
          <Text
            className="text-[15px] text-gray-600 w-full"
            size="txtInterRegular15Gray600"
          >
            {props?.wetypicallyrepl}
          </Text>
        </div>
        <Img className="h-3.5 w-3.5" src="images/img_icon.svg" alt="icon" />
      </div>
    </>
  );
};

ChatBotTile1.defaultProps = {
  sendusamessage: "Bize mesaj gönder",
  wetypicallyrepl: "Genellikle birkaç dakika içinde yanıt veririz",
};

export default ChatBotTile1;
