import React from "react";

import { Button, Img, Line, List, Text } from "components";
import DesktopHeader from "components/DesktopHeader";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inknutantiqua gap-[29px] justify-center mx-auto p-[30px] sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[86px] mr-[440px] mt-[53px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
          size="txtInknutAntiquaBold42"
        >
          İlk mesaj, kısa mesaj yanıtı gizlendi
        </Text>
        <div className="flex flex-col font-inter items-end mb-[5px] md:ml-[0] ml-[86px] sm:pl-5 pl-[871px] md:px-5 w-[94%] md:w-full">
          <div className="flex flex-col gap-5 items-end justify-end w-auto sm:w-full">
            <div className="flex flex-col h-[687px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
              <DesktopHeader className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start p-5 w-full" />
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[250px] items-center justify-start p-5 w-full">
                <div className="flex flex-col items-end justify-end w-[383px] sm:w-full">
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
                        <div className="bg-blue_gray-50 flex flex-col items-start justify-start px-[18px] py-4 rounded-[10px] w-auto">
                          <Text
                            className="leading-[140.00%] max-w-[260px] md:max-w-full text-[15px] text-black-900"
                            size="txtInterRegular15Black900"
                          >
                            <>
                              Merhaba. Ben Bothrs&#39;ın Asistanıyım. Bugün sana
                              nasıl yardımcı olabilirim?
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end mb-[3px] w-[377px] sm:w-full">
                  <div className="flex flex-col gap-2.5 items-end justify-start w-[81%]">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <div className="flex flex-col items-end justify-end w-auto">
                        <Button
                          className="cursor-pointer min-w-[138px] rounded-md text-[15px] text-center"
                          shape="round"
                          color="blue_50"
                          size="lg"
                          variant="fill"
                        >
                          Ödeme durumu
                        </Button>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[157px] rounded-md text-[15px] text-center"
                        shape="round"
                        color="blue_50"
                        size="lg"
                        variant="fill"
                      >
                        Uygulama durumu
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-end w-[58%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[98px] rounded-md text-[15px] text-center"
                        shape="round"
                        color="blue_50"
                        size="lg"
                        variant="fill"
                      >
                        Müşteri ol
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[66px] rounded-md text-[15px] text-center"
                        shape="round"
                        color="blue_50"
                        size="lg"
                        variant="fill"
                      >
                        Diğer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-200 h-px w-full" />
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

export default DesktopPage;
