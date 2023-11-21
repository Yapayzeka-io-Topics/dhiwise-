import React from "react";

import { Button, Img, Input, List, Text } from "components";
import ChatBotNav from "components/ChatBotNav";
import ChatBotTile from "components/ChatBotTile";
import ChatBotTile1 from "components/ChatBotTile1";
import DesktopFourHeader from "components/DesktopFourHeader";
import DesktopFourTile from "components/DesktopFourTile";

import { CloseSVG } from "../../assets/images";

const DesktopFourPage = () => {
  const [frame31310value, setFrame31310value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inknutantiqua justify-center mx-auto p-[30px] sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[85px] mr-[828px] mt-[58px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
          size="txtInknutAntiquaBold42"
        >
          Ana ekran + yardım
        </Text>
        <div className="flex flex-col font-inter items-end mb-[5px] md:ml-[0] ml-[85px] mt-0.5 sm:pl-5 pl-[871px] md:px-5 w-[94%] md:w-full">
          <div className="flex flex-col gap-5 items-end justify-end w-auto sm:w-full">
            <div className="flex flex-col h-[709px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
              <DesktopFourHeader className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start pb-[22px] pt-[30px] sm:px-5 px-8 w-full" />
              <div className="md:h-[590px] sm:h-[762px] h-full px-5 relative w-full">
                <div className="flex flex-col md:gap-10 gap-[212px] h-full items-center justify-start m-auto w-full">
                  <div className="h-[464px] md:h-[468px] relative w-full">
                    <div className="absolute bg-gradient1  h-[374px] inset-x-[0] mx-auto top-[0] w-full"></div>
                    <div className="absolute flex flex-col gap-3 h-full inset-[0] items-center justify-start m-auto w-[383px] sm:w-full">
                      <ChatBotTile className="bg-white-A700 border border-black-900_23 border-solid flex flex-col gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[10px] shadow-bs1 w-full" />
                      <ChatBotTile1 className="bg-white-A700 border border-black-900_23 border-solid flex flex-row gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[10px] shadow-bs1 w-full" />
                      <DesktopFourTile className="bg-white-A700 border border-black-900_23 border-solid flex flex-col gap-2.5 items-center justify-start pb-5 pt-2.5 px-2.5 rounded-[10px] shadow-bs1 w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 items-end justify-end w-full">
                    <div className="flex flex-col items-end justify-end w-auto">
                      <Text
                        className="bg-blue-50 justify-end pt-3 px-3.5 text-[15px] text-blue-900 text-right w-auto"
                        size="txtInterRegular15"
                      >
                        Ödeme durumu
                      </Text>
                    </div>
                    <div className="bg-blue-50 flex flex-col items-center justify-end px-3.5 py-3 w-auto">
                      <Text
                        className="text-[15px] text-blue-900 text-right w-auto"
                        size="txtInterRegular15"
                      >
                        Uygulama durumu
                      </Text>
                    </div>
                    <Text
                      className="bg-blue-50 justify-end pt-3 px-3.5 text-[15px] text-blue-900 text-right w-auto"
                      size="txtInterRegular15"
                    >
                      Müşteri ol
                    </Text>
                    <div className="bg-blue-50 flex flex-col items-center justify-end px-3.5 py-3 w-auto">
                      <Text
                        className="text-[15px] text-blue-900 text-right w-auto"
                        size="txtInterRegular15"
                      >
                        Diğer
                      </Text>
                    </div>
                  </div>
                </div>
                <ChatBotNav
                  className="absolute bg-white-A700 border-blue_gray-50 border-solid border-t bottom-[0] flex flex-1 flex-col gap-[206px] inset-x-[0] items-center justify-start mx-auto px-5 py-[18px] shadow-bs2 w-full"
                  question="images/img_question.svg"
                  userhelp="Yardım"
                  homeTwo="images/img_home.svg"
                  usernews="Haberler"
                />
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
      </div>
    </>
  );
};

export default DesktopFourPage;
