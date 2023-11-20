import React from "react";

import { Button, Img, Line, Text } from "components";
import DesktopTwoHeader from "components/DesktopTwoHeader";
import UIIntroReply from "components/UIIntroReply";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[97px] justify-end mx-auto p-[30px] sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[86px] mr-[889px] mt-[87px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
          size="txtInterBold42"
        >
          Botu kişiye aktarma
        </Text>
        <div className="flex flex-col items-end mb-[5px] md:ml-[0] ml-[86px] sm:pl-5 pl-[871px] md:px-5 w-[94%] md:w-full">
          <div className="flex flex-col gap-5 items-end justify-end w-auto sm:w-full">
            <div className="flex flex-col h-[643px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
              <DesktopTwoHeader className="bg-indigo-A700 flex flex-row gap-[30px] items-center justify-start p-5 w-full" />
              <div className="bg-white-A700 flex flex-col items-center justify-start pb-5 px-5 w-full">
                <div className="flex flex-col gap-4 items-end justify-end mb-14 w-[383px] sm:w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                      <div className="h-[29px] relative w-[9%]">
                        <div className="bg-yellow-100 h-[29px] m-auto rounded-[16px] w-full"></div>
                        <Img
                          className="absolute h-[27px] inset-[0] justify-center m-auto"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end w-auto">
                        <Text
                          className="bg-blue_gray-50 justify-center pb-3.5 pl-[18px] sm:pr-5 pr-[23px] rounded-[10px] text-[15px] text-black-900 w-auto"
                          size="txtInterRegular15Black900"
                        >
                          👋 Merhaba!{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end w-auto">
                    <Button
                      className="!text-white-A700 cursor-pointer min-w-[288px] rounded-md text-[15px] text-center"
                      shape="round"
                      color="indigo_A700"
                      size="xl"
                      variant="fill"
                    >
                      kusura bakma bot ama yanılıyorsun
                    </Button>
                  </div>
                  <div className="flex flex-col items-end justify-end w-auto">
                    <div className="bg-indigo-A700 flex flex-col items-center justify-end px-[19px] py-4 rounded-md w-auto">
                      <Text
                        className="text-[15px] text-white-A700 w-auto"
                        size="txtInterRegular15WhiteA700"
                      >
                        Birisiyle konuşabilir miyim lütfen?
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                      <Img
                        className="h-8 w-8"
                        src="images/img_music.svg"
                        alt="music"
                      />
                      <div className="flex flex-col items-start justify-end w-auto">
                        <Button
                          className="cursor-pointer min-w-[125px] rounded-[10px] text-[15px] text-center"
                          shape="round"
                          color="blue_gray_50"
                          size="xl"
                          variant="fill"
                        >
                          Sorun değil!{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-[23px] w-8">
                        <div className="flex flex-col items-start justify-end rounded-[50%] w-8">
                          <Img
                            className="h-8 md:h-auto rounded-[50%] w-8"
                            src="images/img_ellipse6_32x32.png"
                            alt="ellipseSix_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-end w-auto">
                        <Button
                          className="cursor-pointer min-w-[108px] rounded-[10px] text-[15px] text-center"
                          shape="round"
                          color="blue_gray_50"
                          size="xl"
                          variant="fill"
                        >
                          Merhaba!{" "}
                        </Button>
                        <Text
                          className="text-[13px] text-gray-600 w-auto"
                          size="txtInterRegular13"
                        >
                          Hannah・Az önce
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end justify-end w-auto">
                    <Button
                      className="!text-white-A700 cursor-pointer min-w-[247px] rounded-md text-[15px] text-center"
                      shape="round"
                      color="indigo_A700"
                      size="xl"
                      variant="fill"
                    >
                      Ah sonunda bir insan, wohoo!
                    </Button>
                    <Text
                      className="text-[13px] text-gray-600 w-auto"
                      size="txtInterRegular13"
                    >
                      Az önce・Henüz görülmedi
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-200 h-px w-full" />
              <UIIntroReply className="bg-white-A700 flex flex-col gap-[30px] h-[66px] md:h-auto items-center justify-start p-5 w-full" />
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

export default DesktopTwoPage;
