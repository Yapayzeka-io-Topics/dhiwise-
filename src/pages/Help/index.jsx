import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const HelpPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="h-[35px] md:mt-0 my-[7px]"
            src="images/img_frame1.svg"
            alt="frameOne"
          />
          <div className="flex md:flex-1 sm:flex-col flex-row gap-[31px] items-center justify-center md:ml-[0] ml-[268px] md:mt-0 my-[7px] pr-[7px] w-[32%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[61%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-4 items-start justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                <Text
                  className="ml-[7px] text-base text-center text-gray-900_02"
                  size="txtInterRegular16Gray90002"
                >
                  Ürünler
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900_02.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] pl-[3px] py-[3px] w-full">
                <Text
                  className="mt-[5px] text-base text-center text-gray-900_02"
                  size="txtInterRegular16Gray90002"
                >
                  Kaynaklar
                </Text>
                <Img
                  className="h-6 my-0.5 w-6"
                  src="images/img_arrowdown_gray_900_02.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <Text
              className="text-base text-center text-gray-900_02"
              size="txtInterRegular16Gray90002"
            >
              Demo talep edin
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-6 items-center justify-between md:ml-[0] ml-[210px] w-[18%] md:w-full">
            <Text
              className="leading-[26.00px] text-base text-gray-900_02 text-right"
              size="txtInterRegular16Gray90002"
            >
              Kayıt olmak
            </Text>
            <Button
              className="cursor-pointer h-[50px] min-w-[153px] rounded-md text-base text-center"
              color="blue_A700"
              size="xl"
              variant="fill"
            >
              Ücretsiz kaydol
            </Button>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[82px] justify-start max-w-[940px] mb-[212px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] justify-start md:ml-[0] ml-[175px] w-[71%] md:w-full">
            <Text
              className="md:ml-[0] ml-[97px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterRegular36"
            >
              Merhaba, nasıl yardımcı olabiliriz?
            </Text>
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start mr-[70px] w-[90%] md:w-full">
              <Input
                name="inputfield"
                placeholder="Soru sor..."
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex rounded-md w-[83%] md:w-full"
                prefix={
                  <Img
                    className="mt-px mb-auto h-5 mr-3"
                    src="images/img_search_outline.svg"
                    alt="search/Outline"
                  />
                }
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer h-[50px] min-w-[94px] md:mt-0 mt-0.5 rounded-md text-base text-center"
                color="blue_A700"
                size="xl"
                variant="fill"
              >
                Aramak
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-xl"
                    size="txtInterRegular20"
                  >
                    Bu Uygulama Nedir ve Nasıl Çalışır?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_minuscircleoutline.svg"
                    alt="minuscircleoutl"
                  />
                </div>
                <Text
                  className="leading-[26.00px] text-base text-blue_gray-400_02 w-[91%] sm:w-full"
                  size="txtInterRegular16Bluegray40002"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus plaseratı.
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[5px] text-blue_gray-900 text-xl"
                      size="txtInterRegular20"
                    >
                      Bu Uygulama Nedir ve Nasıl Çalışır?
                    </Text>
                    <Img
                      className="h-8 w-8"
                      src="images/img_pluscircleoutline.svg"
                      alt="pluscircleoutli"
                    />
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[5px] text-blue_gray-900 text-xl"
                      size="txtInterRegular20"
                    >
                      Bu Uygulama Nedir ve Nasıl Çalışır?
                    </Text>
                    <Img
                      className="h-8 w-8"
                      src="images/img_pluscircleoutline.svg"
                      alt="pluscircleoutli"
                    />
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[5px] text-blue_gray-900 text-xl"
                      size="txtInterRegular20"
                    >
                      Bu Uygulama Nedir ve Nasıl Çalışır?
                    </Text>
                    <Img
                      className="h-8 w-8"
                      src="images/img_pluscircleoutline.svg"
                      alt="pluscircleoutli"
                    />
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[5px] text-blue_gray-900 text-xl"
                      size="txtInterRegular20"
                    >
                      Bu Uygulama Nedir ve Nasıl Çalışır?
                    </Text>
                    <Img
                      className="h-8 w-8"
                      src="images/img_pluscircleoutline.svg"
                      alt="pluscircleoutli"
                    />
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
