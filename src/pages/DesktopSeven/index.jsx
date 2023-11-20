import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import DesktopSevenHeader from "components/DesktopSevenHeader";
import UIIntroReply from "components/UIIntroReply";

const DesktopSevenPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-end justify-end mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col gap-5 items-end justify-end mb-[5px] mt-[155px] md:px-5 w-auto sm:w-full">
          <div className="flex flex-col h-[724px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
            <DesktopSevenHeader className="bg-indigo-A700 flex flex-row gap-[30px] items-center justify-start p-5 w-full" />
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-5 px-5 w-full">
              <div className="flex flex-col gap-4 items-end justify-end mb-[17px] w-[383px] sm:w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                    <Img
                      className="h-[31px] w-8"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col items-start justify-end w-auto">
                      <Text
                        className="bg-blue_gray-50 justify-center pb-[15px] pl-[18px] sm:pr-5 pr-[23px] rounded-[10px] text-[15px] text-black-900 w-auto"
                        size="txtInterRegular15Black900"
                      >
                        👋 Merhaba!{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end w-auto">
                  <div className="bg-indigo-A700 flex flex-col items-center justify-end px-[19px] py-4 rounded-md w-auto">
                    <Text
                      className="leading-[140.00%] max-w-[260px] md:max-w-full text-[15px] text-white-A700"
                      size="txtInterRegular15WhiteA700"
                    >
                      Rezervasyon tarihimi değiştirebilir miyim?
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-start w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_volume.svg"
                      alt="volume_One"
                    />
                    <div className="flex flex-col items-start justify-end w-[341px]">
                      <div className="bg-blue_gray-50 flex flex-col gap-3.5 items-start justify-start px-[18px] py-4 rounded-[10px] w-[340px]">
                        <Text
                          className="leading-[140.00%] max-w-[304px] md:max-w-full text-[15px] text-black-900"
                          size="txtInterRegular15Black900"
                        >
                          Evet, rezervasyonunuzun tarihini yedi gün öncesine
                          kadar değiştirebilirsiniz.. Bunun için öncelikle
                          “Rezervasyonlarınız”a gidin ve ilgili olana tıklayın..
                          Ardından “Ayrıntıları Değiştir”e gidin ve yeni bir
                          tarih girin. Son olarak “Onayla”ya tıklayın. Bu kadar!
                        </Text>
                        <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-gray-600_01 w-auto"
                            size="txtInterSemiBold15"
                          >
                            Kaynak
                          </Text>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-[15px] text-gray-600_01 w-auto"
                              size="txtInterRegular15Gray60001"
                            >
                              Rezervasyon tarihinizi değiştirme
                            </Text>
                            <Img
                              className="h-2.5 w-[7px]"
                              src="images/img_arrowright_gray_500_01.svg"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                        <Line className="bg-gray-300 h-px w-full" />
                        <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                          <Text
                            className="bg-gray-600_01 justify-center px-1 py-0.5 rounded-md text-[10px] text-gray-50_01 w-auto"
                            size="txtInterBold10"
                          >
                            yapay zeka
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600_01 w-auto"
                            size="txtInterSemiBold15"
                          >
                            Cevap
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end w-auto sm:w-full">
                  <Input
                    name="language_One"
                    placeholder="Bu yardımcı oldu! "
                    className="p-0 placeholder:text-white-A700 text-[15px] text-left w-full"
                    wrapClassName="rounded-md w-full"
                    shape="round"
                    color="indigo_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <Img
                      className="h-[33px] w-[33px]"
                      src="images/img_barcode.svg"
                      alt="barcode"
                    />
                    <div className="flex flex-col items-start justify-end w-auto">
                      <div className="flex flex-col items-start justify-start px-[18px] py-4 w-auto">
                        <Text
                          className="text-[15px] text-gray-600 w-full"
                          size="txtInterRegular15Gray600"
                        >
                          Düşünme
                        </Text>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default DesktopSevenPage;
