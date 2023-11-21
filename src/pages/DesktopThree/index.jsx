import React from "react";

import { Button, Img, List, Text } from "components";
import ChatBotHeader from "components/ChatBotHeader";
import ChatBotNav from "components/ChatBotNav";
import ChatBotTile from "components/ChatBotTile";
import ChatBotTile1 from "components/ChatBotTile1";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-end justify-end mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col gap-5 items-end justify-end mb-[5px] mt-[170px] md:px-5 w-auto sm:w-full">
          <div className="flex flex-col h-[709px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
            <ChatBotHeader className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start pb-[22px] pt-[30px] sm:px-5 px-8 w-full" />
            <div className="flex flex-col md:gap-10 gap-[206px] h-full items-start justify-start px-5 w-full">
              <div className="bg-gradient1  flex flex-col h-full items-start justify-start px-5 w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <ChatBotTile className="bg-white-A700 border border-black-900_23 border-solid flex flex-col gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[10px] shadow-bs1 w-full" />
                  <ChatBotTile1 className="bg-white-A700 border border-black-900_23 border-solid flex flex-row gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[10px] shadow-bs1 w-full" />
                </div>
              </div>
              <div className="flex h-[90px] md:h-[91px] justify-end relative w-full">
                <div className="flex flex-row gap-2.5 h-full items-end justify-end mt-auto mx-auto w-[383px] sm:w-full">
                  <div className="flex flex-col items-end justify-end w-auto">
                    <div className="bg-blue-50 flex flex-col items-center justify-end px-3.5 py-3 rounded-md w-auto">
                      <Text
                        className="text-[15px] text-blue-900 text-right w-auto"
                        size="txtInterRegular15"
                      >
                        Ödeme durumu
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col items-center justify-end px-3.5 py-3 rounded-md w-auto">
                    <Text
                      className="text-[15px] text-blue-900 text-right w-auto"
                      size="txtInterRegular15"
                    >
                      Uygulama durumu
                    </Text>
                  </div>
                </div>
                <ChatBotNav className="absolute bg-white-A700 border-blue_gray-50 border-solid border-t flex flex-col gap-[206px] h-full inset-[0] items-center justify-start m-auto md:px-10 sm:px-5 px-[70px] py-[18px] shadow-bs2 w-[423px] sm:w-full" />
              </div>
            </div>
          </div>
          <Button
            className="flex h-[60px] items-center justify-center w-[60px]"
            shape="circle"
            color="indigo_A700"
            size="xl"
            variant="fill"
          >
            <Img src="images/img_arrowdown.svg" alt="arrowdown" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
