import React from "react";

import { Button, Img, Input, List, Text } from "components";
import ChatBotHeader from "components/ChatBotHeader";
import ChatBotNav from "components/ChatBotNav";
import ChatBotTile from "components/ChatBotTile";
import ChatBotTile1 from "components/ChatBotTile1";

const ChatbotPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-alice items-center justify-end mx-auto py-[17px] w-full">
        <div className="flex flex-col md:gap-10 gap-[77px] justify-start w-full">
          <header className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center md:px-5 w-full">
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1013px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
                size="txtAliceRegular40"
              >
                Ayzio
              </Text>
              <div className="flex md:flex-1 md:flex-col flex-row font-poppins gap-[50px] items-end justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    AnaSayfa
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-center text-gray-700 text-xl w-auto"
                    size="txtPoppinsMedium20Gray700"
                  >
                    Ürün{" "}
                  </Text>
                  <Img className="h-1" src="images/img_frame.svg" alt="frame" />
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-center text-gray-700 text-xl w-auto"
                    size="txtPoppinsMedium20Gray700"
                  >
                    Hakkımızda
                  </Text>
                  <Img
                    className="h-1"
                    src="images/img_frame.svg"
                    alt="frame_One"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-center text-gray-700 text-xl w-auto"
                    size="txtPoppinsMedium20Gray700"
                  >
                    Fiyatlandırma
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-center text-gray-700 text-xl w-auto"
                    size="txtPoppinsMedium20Gray700"
                  >
                    Demo İste
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row font-poppins gap-[15px] items-start justify-start w-[249px]">
              <Button
                className="!text-deep_purple-900 border border-gray-400 border-solid cursor-pointer font-medium min-w-[131px] rounded-[20px] text-center text-xl tracking-[0.08px]"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Kayıt Ol
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[93px] rounded-[20px] text-center text-xl tracking-[0.08px]"
                color="deep_purple_900"
                size="lg"
                variant="fill"
              >
                Giriş
              </Button>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1212px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[5px] w-[36%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtInterRegular32"
                  >
                    Herhangi bir sorunuz var mı?{" "}
                  </Text>
                  <div className="flex flex-col gap-[27px] items-start justify-start mt-[83px]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      Adres
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtInterRegular18"
                    >
                      Göksu Evleri B2B Beykoz Anadoluhisarı/İstanbul
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-11 w-[37%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_envelopeoutline.svg"
                      alt="envelopeoutline"
                    />
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtInterRegular18"
                    >
                      İnfo@Ayzio.org
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-[29px] w-[41%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_phonealtoutline.svg"
                      alt="phonealtoutline"
                    />
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtInterRegular18"
                    >
                      +905309213458
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start mt-[26px] w-[34%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[646px] sm:h-[842px] h-[903px] relative w-1/2 md:w-full">
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[86%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtInterRegular18Bluegray900"
                  >
                    Cep numarası
                  </Text>
                  <Input
                    name="group10198"
                    placeholder="Numaranızı Girin"
                    className="!placeholder:text-blue_gray-200 !text-blue_gray-200 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid mt-[3px] rounded-lg w-full"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-[21px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtInterRegular18Bluegray900"
                  >
                    E-posta
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start mt-0.5 p-3 rounded-lg w-full">
                    <Text
                      className="mb-0.5 mt-[5px] text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      E-postanızı giriniz
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[19px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtInterRegular18Bluegray900"
                  >
                    Firma Adı
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start mt-1 p-3 rounded-lg w-full">
                    <Text
                      className="mb-0.5 mt-[5px] text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Şirket Girin
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[17px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtInterRegular18Bluegray900"
                  >
                    İleti
                  </Text>
                  <Input
                    name="group10199"
                    placeholder="Mesaj.."
                    className="!placeholder:text-blue_gray-200 !text-blue_gray-200 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex rounded-lg w-full"
                    suffix={
                      <Img
                        className="mt-3.5 mb-auto h-4 ml-[35px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="bg-blue-A700 flex flex-col items-center justify-end mt-6 p-3.5 rounded-md w-full">
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtInterRegular16WhiteA700"
                  >
                    Göndermek
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-5 items-end justify-end right-[0] w-auto">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotPage;
