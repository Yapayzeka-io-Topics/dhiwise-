import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import UIIntroHeader from "components/UIIntroHeader";
import UIIntroReply from "components/UIIntroReply";

const UIIntroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inknutantiqua items-center justify-start mx-auto p-[61px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-14 justify-start max-w-[1197px] mb-3 mx-auto w-full">
          <Text
            className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
            size="txtInknutAntiquaBold42"
          >
            Kullanıcı Arayüzü Girişi
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-end md:ml-[0] ml-[115px] w-[91%] md:w-full">
            <div className="flex flex-col gap-5 items-end justify-start w-auto">
              <div className="bg-white-A700 p-6 sm:px-5 relative rounded-lg w-[319px]">
                <Text
                  className="leading-[140.00%] m-auto max-w-[271px] md:max-w-full text-gray-700_01 text-lg"
                  size="txtInterRegular18Gray70001"
                >
                  Avatarları düzenlemek için 📦 bileşenler sayfasına bakın, tüm
                  renkler değişkendir
                </Text>
                <Img
                  className="absolute bottom-[20%] h-[22px] left-[20%] w-3.5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg w-[319px]">
                <Text
                  className="leading-[140.00%] max-w-[271px] md:max-w-full text-gray-700_01 text-lg"
                  size="txtInterRegular18Gray70001"
                >
                  Mesaj baloncuklarından değişiklik yapmamayı seçtim, aksi
                  takdirde sarma sıklıkla bozulur.
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg w-[319px]">
                <Text
                  className="leading-[140.00%] max-w-[271px] md:max-w-full text-gray-700_01 text-lg"
                  size="txtInterRegular18Gray70001"
                >
                  <>
                    Başka bir mesaj oluşturmak için bir mesajı kopyalayın /
                    yapıştırın. &#39;Operatör&#39; veya &#39;kullanıcı&#39;
                    katmanını seç.
                  </>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg w-[319px]">
                <Text
                  className="leading-[140.00%] max-w-[271px] md:max-w-full text-gray-700_01 text-lg"
                  size="txtInterRegular18Gray70001"
                >
                  <span className="text-gray-700_01 font-inter text-left font-normal">
                    Konuşma,{" "}
                  </span>
                  <span className="text-gray-700_01 font-inter text-left font-bold">
                    💬 Konuşma [beni taşı
                  </span>
                  <span className="text-gray-700_01 font-inter text-left font-normal">
                    ] çerçevesinde yer alır, böylece konuşma uzadığında hareket
                    etmek kolaydır
                  </span>
                  <span className="text-gray-700_01 font-inter text-left font-normal">
                    .
                  </span>
                </Text>
              </div>
              <Button
                className="common-pointer !text-gray-700_01 cursor-pointer min-w-[321px] text-center text-lg"
                onClick={() => navigate("/indexanasayfa")}
                shape="round"
                color="white_A700"
                size="3xl"
                variant="fill"
              >
                Ayzio.org Yapay Zeka Geliştirme
              </Button>
            </div>
            <div className="flex flex-col gap-5 items-end justify-end md:ml-[0] ml-[60px] w-auto sm:w-full">
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
                      className="cursor-pointer min-w-[172px] rounded-md text-[15px] text-center"
                      shape="round"
                      color="blue_50"
                      size="lg"
                      variant="fill"
                    >
                      Başka bir hızlı cevap
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
            <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[61px] w-[217px]">
              <Button
                className="!text-gray-700_01 cursor-pointer min-w-[188px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                Otomatik düzen
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer min-w-[149px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                Değişkenler
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer min-w-[217px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                Maksimum genişlik
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer min-w-[135px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                Varyantlar
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer min-w-[183px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                Harika Yazı Tipi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIIntroPage;
