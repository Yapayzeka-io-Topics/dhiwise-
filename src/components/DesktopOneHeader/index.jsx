import React from "react";

import { Text } from "components";

const DesktopOneHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-center text-gray-50_01 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              {props?.messagetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneHeader.defaultProps = { messagetext: "Mesajlar" };

export default DesktopOneHeader;
