import React from "react";

import { Button, Img, Line, List, Text } from "components";
import DesktopEightNav from "components/DesktopEightNav";
import DesktopOneHeader from "components/DesktopOneHeader";

const DesktopEightPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-end justify-end mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col gap-5 items-end justify-end mb-[5px] mt-[170px] md:px-5 w-auto sm:w-full">
          <div className="flex flex-col h-[709px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
            <DesktopOneHeader className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start px-5 py-7 w-full" />
            <div className="bg-white-A700 flex flex-col gap-3 h-full items-center justify-between p-5 w-full">
              <List
                className="flex flex-col gap-3 items-start w-[383px] md:w-full"
                orientation="vertical"
              >
                <div className="flex flex-col gap-4 items-start justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                    <div className="md:h-[26px] h-[46px] relative w-[13%] sm:w-full">
                      <div className="absolute md:h-[26px] h-[46px] inset-y-[0] my-auto right-[0] w-[78%]">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-end outline outline-[2px] outline-white-A700 right-[0] rounded-[50%] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_26x26.png"
                            alt="ellipseSix"
                          />
                        </div>
                        <div className="absolute flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] top-[0] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_2.png"
                            alt="ellipseSix_One"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] w-[26px]">
                        <Img
                          className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                          src="images/img_ellipse6_3.png"
                          alt="ellipseSix_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-black-900 w-full"
                        size="txtInterRegular15Black900"
                      >
                        <>
                          Merhaba. Ben Bothrs&#39;ın Asistanıyım. Size nasıl
                          yardım edebilirim?
                        </>
                      </Text>
                      <Text
                        className="text-[15px] text-gray-600 w-full"
                        size="txtInterRegular15Gray600"
                      >
                        Müşteri Hizmetleri・1 gün önce
                      </Text>
                    </div>
                    <Img
                      className="h-3.5 max-h-3.5 sm:w-[]"
                      src="images/img_arrowright_indigo_a700.svg"
                      alt="arrowright"
                    />
                  </div>
                  <Line className="bg-blue_gray-50 h-px rotate-[-180deg] w-full" />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                    <div className="md:h-[26px] h-[46px] relative w-[13%] sm:w-full">
                      <div className="absolute md:h-[26px] h-[46px] inset-y-[0] my-auto right-[0] w-[78%]">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-end outline outline-[2px] outline-white-A700 right-[0] rounded-[50%] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_26x26.png"
                            alt="ellipseSix"
                          />
                        </div>
                        <div className="absolute flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] top-[0] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_2.png"
                            alt="ellipseSix_One"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] w-[26px]">
                        <Img
                          className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                          src="images/img_ellipse6_3.png"
                          alt="ellipseSix_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-black-900 w-full"
                        size="txtInterRegular15Black900"
                      >
                        Bunun dışında aradığınız özel bir şey var mı?
                      </Text>
                      <Text
                        className="text-[15px] text-gray-600 w-full"
                        size="txtInterRegular15Gray600"
                      >
                        Müşteri Hizmetleri・2 gün önce
                      </Text>
                    </div>
                    <Img
                      className="h-3.5 max-h-3.5 sm:w-[]"
                      src="images/img_arrowright_indigo_a700.svg"
                      alt="arrowright"
                    />
                  </div>
                  <Line className="bg-blue_gray-50 h-px rotate-[-180deg] w-full" />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                    <div className="md:h-[26px] h-[46px] relative w-[13%] sm:w-full">
                      <div className="absolute md:h-[26px] h-[46px] inset-y-[0] my-auto right-[0] w-[78%]">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-end outline outline-[2px] outline-white-A700 right-[0] rounded-[50%] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_26x26.png"
                            alt="ellipseSix"
                          />
                        </div>
                        <div className="absolute flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] top-[0] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_ellipse6_2.png"
                            alt="ellipseSix_One"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[2px] outline-white-A700 rounded-[50%] w-[26px]">
                        <Img
                          className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                          src="images/img_ellipse6_3.png"
                          alt="ellipseSix_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-black-900 w-full"
                        size="txtInterBold15"
                      >
                        Merhaba 👋 Yardımcı olabileceğim bir şey var mı?
                      </Text>
                      <Text
                        className="text-[15px] text-gray-600 w-full"
                        size="txtInterRegular15Gray600"
                      >
                        Müşteri Hizmetleri・4 gün önce
                      </Text>
                    </div>
                    <Img
                      className="h-3.5 max-h-3.5 sm:w-[]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                  <Line className="bg-blue_gray-50 h-px rotate-[-180deg] w-full" />
                </div>
              </List>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[200px] rounded-[10px]"
                rightIcon={
                  <div className="h-3.5 mt-px mb-[3px] ml-[11px] w-3.5 bg-white-A700">
                    <Img
                      className="h-3.5"
                      src="images/img_send.svg"
                      alt="send"
                    />
                  </div>
                }
                shape="round"
                color="indigo_A700"
                size="lg"
                variant="fill"
              >
                <div className="!text-white-A700 font-semibold text-[15px] text-left">
                  Bize mesaj gönder
                </div>
              </Button>
            </div>
            <DesktopEightNav className="bg-white-A700 border-blue_gray-50 border-solid border-t flex flex-col gap-[206px] items-start justify-start px-5 py-[18px] shadow-bs2 w-full" />
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

export default DesktopEightPage;
