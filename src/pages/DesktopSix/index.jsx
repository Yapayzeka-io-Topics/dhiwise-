import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import UIIntroHeader from "components/UIIntroHeader";
import UIIntroReply from "components/UIIntroReply";

const DesktopSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inknutantiqua sm:gap-10 md:gap-10 gap-[68px] justify-end mx-auto p-[30px] sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[86px] mr-[662px] mt-[58px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
          size="txtInknutAntiquaBold42"
        >
          Bot sohbeti + hızlı yanıtlar
        </Text>
        <div className="flex flex-col font-inter items-end mb-[5px] md:ml-[0] ml-[86px] sm:pl-5 pl-[871px] md:px-5 w-[94%] md:w-full">
          <div className="flex flex-col gap-5 items-end justify-end w-auto sm:w-full">
            <div className="flex flex-col h-[643px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
              <UIIntroHeader className="bg-indigo-A700 flex flex-row gap-[30px] items-center justify-start p-5 w-full" />
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[78px] items-center justify-start p-5 w-full">
                <div className="flex flex-col gap-4 items-end justify-end w-[383px] sm:w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                      <Button
                        className="flex h-8 items-center justify-center rounded-[50%] w-8"
                        shape="circle"
                        color="yellow_100"
                        size="xs"
                        variant="fill"
                      >
                        <Img src="images/img_airplane.svg" alt="airplane" />
                      </Button>
                      <div className="flex flex-col items-start justify-end w-auto">
                        <Button
                          className="cursor-pointer min-w-[127px] rounded-[10px] text-[15px] text-center"
                          shape="round"
                          color="blue_gray_50"
                          size="xl"
                          variant="fill"
                        >
                          👋 Merhaba!{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end justify-end w-auto">
                    <Button
                      className="!text-white-A700 cursor-pointer min-w-[192px] rounded-md text-[15px] text-center"
                      shape="round"
                      color="indigo_A700"
                      size="xl"
                      variant="fill"
                    >
                      Sadece göz atıyorum!
                    </Button>
                    <Text
                      className="text-[13px] text-gray-600 w-auto"
                      size="txtInterRegular13"
                    >
                      2 dakika önce. Görülen
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                      <Img
                        className="h-[55px] w-8"
                        src="images/img_music.svg"
                        alt="music"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-end w-auto">
                        <div className="bg-blue_gray-50 flex flex-col items-start justify-start px-[18px] py-4 rounded-[10px] w-auto">
                          <Text
                            className="leading-[140.00%] text-[15px] text-black-900"
                            size="txtInterRegular15Black900"
                          >
                            <>
                              Sorun değil.
                              <br />
                              Yardıma ihtiyacınız olursa aşağıya yazarak soru
                              sorabilirsiniz 👇
                            </>
                          </Text>
                        </div>
                        <Text
                          className="text-[13px] text-gray-600 w-auto"
                          size="txtInterRegular13"
                        >
                          Bot・Az önce
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-end mb-0.5 w-[377px] sm:w-full">
                  <div className="flex flex-col items-end justify-end w-auto">
                    <div className="bg-blue-50 flex flex-col items-center justify-end px-3.5 py-3 rounded-md w-auto">
                      <Text
                        className="text-[15px] text-blue-900 text-right w-auto"
                        size="txtInterRegular15"
                      >
                        Bana nasıl yardım edebilirsin?
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer min-w-[118px] rounded-md text-[15px] text-center"
                    onClick={() => navigate("/desktoptwo")}
                    shape="round"
                    color="blue_50"
                    size="lg"
                    variant="fill"
                  >
                    Canlı Destek
                  </Button>
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

export default DesktopSixPage;
