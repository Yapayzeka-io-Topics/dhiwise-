import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import ChatBotHeader from "components/ChatBotHeader";
import ChatBotNav from "components/ChatBotNav";
import ChatBotTile from "components/ChatBotTile";
import ChatBotTile1 from "components/ChatBotTile1";

const IndexAnasayfaPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-alice items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-12 items-center justify-start w-auto md:w-full">
          <header className="flex flex-col items-center justify-center md:px-5 px-[163px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[173px] items-center justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[287px] items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
                  size="txtAliceRegular40"
                >
                  Ayzio
                </Text>
                <div className="flex md:flex-col flex-row font-poppins gap-[50px] items-end justify-start w-auto md:w-full">
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
                    <Img
                      className="h-1"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
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
              <div className="flex flex-row font-poppins gap-[15px] items-start justify-start w-auto">
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
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[93px] items-center justify-start max-w-[1764px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[135px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                <Button
                  className="border border-deep_purple-900 border-solid cursor-pointer min-w-[120px] text-base text-center tracking-[0.10px]"
                  shape="round"
                  color="blue_50_01"
                  size="md"
                  variant="fill"
                >
                  MERHABA!{" "}
                </Button>
                <div className="flex flex-col gap-[45px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="leading-[71.00px] max-w-[950px] md:max-w-full md:text-5xl text-8xl text-gray-900"
                    size="txtCantoraOneRegular96"
                  >
                    Ayzio Ai-Destekli Chat Botumuzla Müşterilerinize Hızlı
                    Destek Sağlayın
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[783px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                    size="txtPoppinsRegular20"
                  >
                    Sorunsuz, kişiselleştirilmiş hizmet için müşterilerle Ses,
                    E-posta, Canlı Sohbet, WhatsApp üzerinden bağlantı kurun.
                    Birleştirilmiş müşteri görünümü ve yapay zeka destekli
                    otomasyonlarımızla verimliliği artırın.
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] rounded-[20px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-1 mb-[9px] ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    }
                    color="deep_purple_900"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-medium font-poppins text-center text-xl tracking-[0.08px]">
                      Başlamak
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  <>Türkiye çapında 2000&#39;den fazla şirketin güvendiği</>
                </Text>
                <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-10 md:h-auto object-cover w-[152px] sm:w-full"
                    src="images/img_amara.png"
                    alt="amara"
                  />
                  <Img
                    className="h-10 md:h-auto object-cover w-[134px] sm:w-full"
                    src="images/img_aven.png"
                    alt="aven"
                  />
                  <Img
                    className="h-10 md:h-auto object-cover w-[168px] sm:w-full"
                    src="images/img_earth20.png"
                    alt="earthTwenty"
                  />
                  <Img
                    className="h-10 md:h-auto object-cover w-[171px] sm:w-full"
                    src="images/img_foxhub.png"
                    alt="foxhub"
                  />
                </div>
              </div>
            </div>
            <div className="font-inter md:h-[867px] h-[882px] relative w-[41%] md:w-full">
              <Img
                className="absolute h-[867px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image_Two"
              />
              <div className="absolute bottom-[0] flex flex-col gap-5 items-end justify-end right-[17%] w-auto">
                <div className="flex flex-col h-[709px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
                  <ChatBotHeader className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start pb-[22px] pt-[30px] sm:px-5 px-8 w-full" />
                  <div className="flex flex-col md:gap-10 gap-[206px] h-full items-center justify-start px-5 w-full">
                    <div className="bg-gradient1  flex flex-col h-full items-start justify-start px-5 w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <ChatBotTile className="bg-white-A700 border border-black-900_23 border-solid flex flex-col gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[10px] shadow-bs1 w-full" />
                        <ChatBotTile1 className="bg-white-A700 border border-black-900_23 border-solid flex flex-row gap-2.5 items-center justify-start sm:px-5 px-6 py-[22px] rounded-[13px] shadow-bs1 w-full" />
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
        <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[68px] items-center justify-start max-w-[1595px] mt-[267px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Text
              className="leading-[65.00px] max-w-[634px] md:max-w-full md:text-5xl text-[64px] text-gray-900 tracking-[-1.59px]"
              size="txtAliceRegular64"
            >
              Gelişmiş Yapay Zeka Teknolojisi nasıl çalışır?
            </Text>
            <Text
              className="leading-[35.00px] max-w-[843px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
              size="txtPoppinsRegular20"
            >
              Canlı sohbet web sitesi için içerik sohbet robotu, web sitesindeki
              ziyaretçilerle etkileşim kurmak ve onlara alakalı ve yararlı
              içerik sağlamak için tasarlanmış bir sanal asistandır.
            </Text>
            <Button
              className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[293px] rounded-[20px]"
              rightIcon={
                <Img
                  className="h-4 mt-[5px] mb-[9px] ml-2.5"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <div className="font-medium font-poppins text-center text-xl tracking-[0.08px]">
                Daha fazla bilgi edin
              </div>
            </Button>
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="bg-blue-50_01 border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start pl-[14.08px] sm:pr-5 pr-[33px] py-[14.08px] rotate-[3deg] rounded-lg w-auto">
                    <Img
                      className="h-7 md:h-auto object-cover w-7"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <Text
                      className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                      size="txtPoppinsRegular1689"
                    >
                      Akıllı Konuşma
                    </Text>
                  </div>
                  <Img
                    className="h-6 mt-8 w-6"
                    src="images/img_fluentcursor24filled.svg"
                    alt="fluentcursor24f"
                  />
                </div>
                <div className="border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start mt-3 p-[14.08px] rounded-lg w-[285px]">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_maskgroup_28x28.png"
                    alt="maskgroup_One"
                  />
                  <Text
                    className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                    size="txtPoppinsRegular1689"
                  >
                    Analitik ve raporlama
                  </Text>
                </div>
                <div className="border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start mt-[15px] pl-[14.08px] pr-10 sm:pr-5 py-[14.08px] rounded-lg w-[285px]">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_maskgroup_1.png"
                    alt="maskgroup_Two"
                  />
                  <Text
                    className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                    size="txtPoppinsRegular1689"
                  >
                    Her zaman açık erişilebilirlik
                  </Text>
                </div>
                <div className="border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start mt-4 p-[14.08px] rounded-lg w-[285px]">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_maskgroup_2.png"
                    alt="maskgroup_Three"
                  />
                  <Text
                    className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                    size="txtPoppinsRegular1689"
                  >
                    Kişiselleştirilmiş etkileşimler
                  </Text>
                </div>
                <div className="border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start mt-[15px] pl-[14.08px] sm:pr-5 pr-[30px] py-[14.08px] rounded-lg w-auto">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_maskgroup_3.png"
                    alt="maskgroup_Four"
                  />
                  <Text
                    className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                    size="txtPoppinsRegular1689"
                  >
                    Çoklu dil desteği
                  </Text>
                </div>
                <div className="border-2 border-gray-900 border-solid flex flex-row gap-[7.04px] items-start justify-start mt-4 pl-[14.08px] sm:pr-5 pr-8 py-[14.08px] rounded-lg w-[285px]">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_maskgroup_4.png"
                    alt="maskgroup_Five"
                  />
                  <Text
                    className="text-[16.89px] text-center text-gray-900 tracking-[0.07px] w-auto"
                    size="txtPoppinsRegular1689"
                  >
                    Güvenli veri şifreleme
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col justify-end p-[22px] sm:px-5 rounded-[20px] w-[51%] md:w-full">
              <div className="flex flex-col items-end justify-start md:ml-[0] ml-[68px] mr-[137px] mt-[13px] w-auto">
                <Button
                  className="cursor-pointer min-w-[95px] rounded-bl-[17px] rounded-tl-[17px] rounded-tr-[17px] shadow-bs4 text-[14.16px] text-center tracking-[0.07px]"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  MERHABA
                </Button>
              </div>
              <div className="flex flex-col items-end justify-start md:ml-[0] ml-[9px] mr-[215px] mt-3.5 w-auto">
                <Button
                  className="cursor-pointer min-w-[76px] rounded-bl-[17px] rounded-tl-[17px] rounded-tr-[17px] shadow-bs4 text-[14.16px] text-center tracking-[0.07px]"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Naber!
                </Button>
              </div>
              <div className="bg-deep_purple-900 flex flex-col items-center justify-center mt-[203px] mx-auto p-5 rounded-lg w-[296px]">
                <Text
                  className="text-center text-white-A700 text-xl tracking-[0.08px] w-auto"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Ne soruyorsun?
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-poppins gap-8 items-center justify-start max-w-[1595px] mt-[139px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[46%] md:w-full">
            <div className="h-[607px] relative w-full">
              <Img
                className="h-[607px] m-auto object-cover w-full"
                src="images/img_image_607x720.png"
                alt="image_Eleven"
              />
              <div className="absolute bottom-[0] h-[576px] right-[9%] w-[73%] sm:w-full">
                <div className="h-[576px] m-auto w-full">
                  <Img
                    className="h-[576px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow"
                  />
                  <div className="absolute h-[571px] inset-y-[0] left-[1%] my-auto w-[85%] sm:w-full">
                    <Img
                      className="h-[571px] m-auto object-cover w-full"
                      src="images/img_main.png"
                      alt="main"
                    />
                    <Img
                      className="absolute bottom-[0] h-[541px] inset-x-[0] mx-auto object-cover rounded-[47px] w-[88%]"
                      src="images/img_iphone13mockup.png"
                      alt="iphone13mockup"
                    />
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-end p-[16.51px] right-[8%] rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] shadow-bs5 w-[304px]">
                  <div className="flex flex-col gap-[11.66px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[23.32px] items-start justify-between w-full">
                      <Text
                        className="text-[16.51px] text-gray-900 text-justify tracking-[0.08px] w-auto"
                        size="txtPoppinsMedium1651"
                      >
                        Gönderim yeri
                      </Text>
                      <Text
                        className="text-[13.99px] text-gray-900 text-right tracking-[0.08px] w-auto"
                        size="txtPoppinsRegular1399"
                      >
                        Ayrıntılara bakınız
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-[-5.83px] items-start justify-start w-full">
                        <Text
                          className="text-[15.16px] text-gray-900 text-justify tracking-[0.08px] w-auto"
                          size="txtPoppinsRegular1516"
                        >
                          Şişli Mah Karakuş AP, No 203
                        </Text>
                        <Text
                          className="text-[11.66px] text-gray-900_8e text-justify tracking-[0.08px] w-auto"
                          size="txtPoppinsRegular1166"
                        >
                          En yakın Indopo
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[11.66px] items-start justify-start w-auto">
                      <div className="flex flex-row gap-[4.66px] items-center justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_mdimapmarkeroutline.svg"
                          alt="mdimapmarkerout"
                        />
                        <Text
                          className="text-[15.16px] text-gray-800 text-justify tracking-[0.08px] w-auto"
                          size="txtPoppinsRegular1516Gray800"
                        >
                          Şu anki konumunuz
                        </Text>
                      </div>
                      <Img
                        className="h-[78px] md:h-auto object-cover rounded-tl-[11px] rounded-tr-[11px] w-[271px] sm:w-full"
                        src="images/img_rectangle5568.png"
                        alt="rectangle5568"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Text
              className="leading-[65.00px] max-w-[634px] md:max-w-full md:text-5xl text-[64px] text-gray-900 tracking-[-1.59px]"
              size="txtAliceRegular64"
            >
              Müşteri memnuniyetini artırın
            </Text>
            <Text
              className="leading-[35.00px] max-w-[843px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
              size="txtPoppinsRegular20"
            >
              Canlı sohbet web sitesi için içerik sohbet robotu, web sitesindeki
              ziyaretçilerle etkileşim kurmak ve onlara alakalı ve yararlı
              içerik sağlamak için tasarlanmış bir sanal asistandır.
            </Text>
            <Button
              className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[293px] rounded-[20px]"
              rightIcon={
                <Img
                  className="h-4 mt-[5px] mb-[9px] ml-2.5"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <div className="font-medium font-poppins text-center text-xl tracking-[0.08px]">
                Daha fazla bilgi edin
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-alice gap-[50px] items-center justify-start max-w-[1593px] mt-[337px] mx-auto md:px-5 w-full">
          <Text
            className="leading-[65.00px] max-w-[634px] md:max-w-full md:text-5xl text-[64px] text-center text-gray-900 tracking-[-1.59px]"
            size="txtAliceRegular64"
          >
            Tüm kanallarda bağlantıda kalın
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-4 items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_image374.png"
                alt="image374"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.10px] w-auto"
                size="txtPoppinsRegular24"
              >
                İnternet sitesi
              </Text>
              <Text
                className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                size="txtPoppinsRegular20"
              >
                Gelişmiş şifreleme ve güvenli erişim kontrolleri bu platformdaki
                müşteri verilerini korur.
              </Text>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-4 items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_image375.png"
                alt="image375"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.10px] w-auto"
                size="txtPoppinsRegular24"
              >
                App-Uygulamanız
              </Text>
              <Text
                className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                size="txtPoppinsRegular20"
              >
                Platformumuzla çeşitli kanallar üzerinden hem ekip üyeleriyle
                hem de müşterilerle kolayca işbirliği yapın ve iletişim kurun
              </Text>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-4 items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_image376.png"
                alt="image376"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.10px] w-auto"
                size="txtPoppinsRegular24"
              >
                Whatsapp-Telegram
              </Text>
              <Text
                className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                size="txtPoppinsRegular20"
              >
                Whelp, işletmelerin müşterilere çeşitli kanallardan ulaşmasını
                sağlayarak iletişim kurabilmelerini sağlar
              </Text>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[120px] items-center justify-start max-w-[1575px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-900 tracking-[-1.59px] w-auto"
              size="txtAliceRegular64"
            >
              Analitik ve raporlama
            </Text>
            <Text
              className="leading-[35.00px] max-w-[843px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
              size="txtPoppinsRegular20"
            >
              Chatbot, kullanıcı etkileşimlerini, içerik kullanımını ve
              kullanıcı memnuniyetini takip etmek için analiz ve raporlama
              yeteneklerine sahip olmalıdır.. Bu, web sitesi sahiplerinin
              kullanıcı davranışını anlamalarına, içerik boşluklarını
              belirlemelerine ve sohbet robotunun performansını sürekli olarak
              iyileştirmelerine yardımcı olabilir.
            </Text>
            <Button
              className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[293px] rounded-[20px]"
              rightIcon={
                <Img
                  className="h-4 mt-[5px] mb-[9px] ml-2.5"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <div className="font-medium font-poppins text-center text-xl tracking-[0.08px]">
                Daha fazla bilgi edin
              </div>
            </Button>
          </div>
          <div className="md:h-[331px] h-[441px] relative w-[39%] md:w-full">
            <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-col h-[262px] md:h-auto items-center justify-start left-[0] p-[30px] sm:px-5 rounded-[20px] w-auto">
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Ortalama teslim süresi
                  </Text>
                  <div className="flex flex-row gap-5 items-end justify-start w-auto">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
                      <div className="flex flex-row items-end justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtPoppinsRegular32"
                        >
                          5
                        </Text>
                        <Text
                          className="text-base text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtPoppinsRegular16"
                        >
                          M
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtPoppinsRegular32"
                        >
                          24
                        </Text>
                        <Text
                          className="text-base text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtPoppinsRegular16"
                        >
                          S
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[3px] items-end justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_materialsymbol.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-base text-center text-green-800 tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular16Green800"
                      >
                        %6.4
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-24 sm:h-auto object-cover w-[395px] md:w-full"
                  src="images/img_frame3578.png"
                  alt="frame3578"
                />
              </div>
            </div>
            <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 right-[0] rounded-[20px] top-[0] w-auto">
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Konuşma sayısı
                  </Text>
                  <div className="flex flex-row gap-5 items-end justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtPoppinsRegular32"
                        >
                          252
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[3px] items-end justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_materialsymbol.svg"
                        alt="materialsymbol_One"
                      />
                      <Text
                        className="text-base text-center text-green-800 tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular16Green800"
                      >
                        %0.2
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[149px] w-[241px]"
                  src="images/img_frame3583.svg"
                  alt="frame3583"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[12%] h-6 right-[10%] w-6"
              src="images/img_fluentcursor24filled.svg"
              alt="fluentcursor24f_One"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1595px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[46%] md:w-full">
            <div className="h-[607px] relative w-full">
              <Img
                className="h-[607px] m-auto object-cover w-full"
                src="images/img_image_607x720.png"
                alt="image_Seventeen"
              />
              <div className="absolute h-[591px] inset-y-[0] my-auto right-[9%] w-[73%] sm:w-full">
                <Img
                  className="h-[591px] m-auto object-cover w-full"
                  src="images/img_shadow_591x524.png"
                  alt="shadow_One"
                />
                <div className="absolute h-[586px] inset-y-[0] left-[1%] my-auto w-[85%] sm:w-full">
                  <Img
                    className="h-[586px] m-auto object-cover w-full"
                    src="images/img_main_586x445.png"
                    alt="main_One"
                  />
                  <Img
                    className="absolute h-[567px] inset-[0] justify-center m-auto object-cover w-[90%]"
                    src="images/img_iphone13mockup_567x398.png"
                    alt="iphone13mockup_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Text
              className="leading-[65.00px] max-w-[634px] md:max-w-full md:text-5xl text-[64px] text-gray-900 tracking-[-1.59px]"
              size="txtAliceRegular64"
            >
              Ölçeklenebilirlik ve bakım
            </Text>
            <Text
              className="leading-[35.00px] max-w-[843px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
              size="txtPoppinsRegular20"
            >
              Chatbot, çok sayıda eşzamanlı kullanıcıyı yönetebilecek şekilde
              tasarlanmalı ve bakımı ve güncellenmesi kolay olmalıdır.. Bu,
              sohbet robotunun zaman içinde doğru ve alakalı içerik sağlamaya
              devam etmesini sağlamak için düzenli izleme, test etme ve
              güncellemeleri içerebilir.
            </Text>
            <Button
              className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[293px] rounded-[20px]"
              rightIcon={
                <Img
                  className="h-4 mt-[5px] mb-[9px] ml-2.5"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <div className="font-medium font-poppins text-center text-xl tracking-[0.08px]">
                Daha fazla bilgi edin
              </div>
            </Button>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col font-alice items-start justify-center max-w-[1920px] mt-[150px] md:px-10 sm:px-5 px-[163px] py-[150px] w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1581px] mx-auto w-full">
            <Text
              className="md:text-5xl text-[64px] text-center text-white-A700 tracking-[-1.59px] w-auto"
              size="txtAliceRegular64WhiteA700"
            >
              Neden Ayzio Chat bot?
            </Text>
            <List
              className="sm:flex-col flex-row font-poppins gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900_01 flex flex-col gap-4 items-center justify-start pl-[32.48px] pr-[33.8px] sm:px-5 py-10 rounded-[20px] w-[511px] sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue-200_01 text-center tracking-[-1.59px] w-auto"
                  size="txtPoppinsSemiBold48"
                >
                  2000+
                </Text>
                <Text
                  className="text-blue-50_02 text-center text-xl tracking-[0.10px] w-auto"
                  size="txtPoppinsRegular20Blue5002"
                >
                  Memnun Şirketler
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-4 items-center justify-start pl-[32.48px] pr-[33.8px] sm:px-5 py-10 rounded-[20px] w-[511px] sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue-200_01 text-center tracking-[-1.59px] w-auto"
                  size="txtPoppinsSemiBold48"
                >
                  8+ Milyon
                </Text>
                <Text
                  className="text-blue-50_02 text-center text-xl tracking-[0.10px] w-auto"
                  size="txtPoppinsRegular20Blue5002"
                >
                  Etkileşim
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-4 items-center justify-start pl-[32.48px] pr-[33.8px] sm:px-5 py-10 rounded-[20px] w-[511px] sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue-200_01 text-center tracking-[-1.59px] w-auto"
                  size="txtPoppinsSemiBold48"
                >
                  120+
                </Text>
                <Text
                  className="text-blue-50_02 text-center text-xl tracking-[0.10px] w-auto"
                  size="txtPoppinsRegular20Blue5002"
                >
                  Dil desteği
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-arimamadurai items-end mt-[126px] md:px-10 sm:px-5 px-[73px] w-full">
          <div className="flex flex-col gap-[50px] items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[877px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-8xl text-gray-900 tracking-[-1.59px] w-auto"
                size="txtArimaMaduraiRegular96"
              >
                Müşterilerimizden haber alın
              </Text>
              <div className="bg-deep_purple-900 flex flex-row font-poppins gap-2.5 items-center justify-start sm:px-5 px-[30px] py-5 rounded-[20px] w-[171px]">
                <Text
                  className="text-center text-white-A700 text-xl tracking-[0.08px] w-auto"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Hepsini gör
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              </div>
            </div>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-center w-auto md:w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-auto"
                items={[...Array(4)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      <div className="border-2 border-gray-900 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
                        <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                          <Text
                            className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-900 text-xl tracking-[0.10px]"
                            size="txtPoppinsRegular20Gray900"
                          >
                            Harika bir yazılım! Yazılım sayesinde Müşteri
                            desteğimizde iyilişme oldu.Teşşekürler.
                          </Text>
                          <Line className="bg-gray-400 h-px w-full" />
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                              src="images/img_placeholder.png"
                              alt="placeholder"
                            />
                            <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.10px] w-auto"
                                size="txtPoppinsRegular24"
                              >
                                Melek Yağmur Atasev
                              </Text>
                              <Text
                                className="text-base text-gray-800_01 tracking-[0.10px] w-auto"
                                size="txtPoppinsRegular16Gray80001"
                              >
                                Yağmur Butik
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-gray-900 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
                        <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                          <Text
                            className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-900 text-xl tracking-[0.10px]"
                            size="txtPoppinsRegular20Gray900"
                          >
                            Kullanımı Çok Kolay Sadece Müşterilerinize odaklana
                            Bilirsiniz.
                          </Text>
                          <Line className="bg-gray-400 h-px w-full" />
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                              src="images/img_placeholder.png"
                              alt="placeholder"
                            />
                            <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xl w-auto"
                                size="txtPoppinsMedium20"
                              >
                                Eray Karakuş
                              </Text>
                              <Text
                                className="text-base text-gray-800_01 tracking-[0.10px] w-full"
                                size="txtPoppinsRegular16Gray80001"
                              >
                                Golden Time Hotel
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-gray-900 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-[511px] sm:w-full">
                        <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                          <Text
                            className="leading-[35.00px] max-w-[451px] md:max-w-full text-gray-900 text-xl tracking-[0.10px]"
                            size="txtPoppinsRegular20Gray900"
                          >
                            Hızlı Destek Mutlu Müşteriler Sayenizde Müşteri
                            Desteğimiz iyileşti. Teşşekürler.
                          </Text>
                          <Line className="bg-gray-400 h-px w-full" />
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                              src="images/img_placeholder.png"
                              alt="placeholder"
                            />
                            <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xl w-auto"
                                size="txtPoppinsMedium20"
                              >
                                Lokman Kurt
                              </Text>
                              <Text
                                className="text-base text-gray-800_01 tracking-[0.10px] w-full"
                                size="txtPoppinsRegular16Gray80001"
                              >
                                Asia Less İn Hotel
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-deep_purple-900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-deep_purple-900_56 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex gap-5 h-[15px] items-center justify-start w-[120px]"
                count={4}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-deep_purple-900 w-[15px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-deep_purple-900_56 w-[15px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 border-b border-gray-900_0f border-solid flex flex-col items-center justify-center max-w-[1920px] mt-[255px] py-[150px] w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-[29%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-900 tracking-[-1.59px] w-auto"
                size="txtAliceRegular64"
              >
                Şimdi başla!
              </Text>
              <Text
                className="leading-[35.00px] max-w-[523px] md:max-w-full text-center text-gray-700 text-xl tracking-[0.10px]"
                size="txtPoppinsRegular20"
              >
                Araçlarımız ve çözümlerimiz sayesinde müşteri desteğinizi
                geliştirmek için hemen kaydolun.
              </Text>
              <div className="flex sm:flex-col flex-row font-poppins gap-[15px] items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[188px] rounded-[20px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-1 mb-[9px] ml-2.5"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                  color="deep_purple_900"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-medium text-center text-xl tracking-[0.08px]">
                    Başlamak
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[351px] rounded-[20px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-[5px] mb-2 ml-2.5"
                      src="images/img_arrowright_deep_purple_900.svg"
                      alt="arrow_right"
                    />
                  }
                  color="gray_400"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-medium text-center text-xl tracking-[0.08px]">
                    Fiyatlandırmayı Görüntüle
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-alice gap-[50px] items-center justify-start max-w-[1593px] mt-[150px] mx-auto md:px-5 w-full">
          <Text
            className="leading-[65.00px] max-w-[1164px] md:max-w-full md:text-5xl text-[64px] text-black-900 text-center tracking-[-1.59px]"
            size="txtAliceRegular64Black900"
          >
            İhtiyaçlarınıza Uygun Etkin ve Esnek Fiyatlandırma
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col h-[781px] md:h-auto items-start justify-start outline outline-[1px] outline-gray-900 p-10 sm:px-5 rounded-[30px] w-[511px] sm:w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] h-full items-start justify-between w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400_01 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray40001"
                    >
                      Küçük Takımlar İçin
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 tracking-[0.10px] w-auto"
                      size="txtPoppinsMedium40"
                    >
                      Başlangıç ​​Planı
                    </Text>
                  </div>
                  <Line className="bg-gray-400 h-px w-[94%]" />
                  <Text
                    className="leading-[35.00px] max-w-[431px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                    size="txtPoppinsRegular20"
                  >
                    Zamanın özgürce, en iyi çözüm, en iyi seçeneklerden biri
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş marka monitör
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_One"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş anahtar kelime monitörü
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Two"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Tam sosyal profiller
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-900 tracking-[-1.59px] w-auto"
                      size="txtPoppinsSemiBold48Deeppurple900"
                    >
                      49,99$
                    </Text>
                    <Text
                      className="text-blue_gray-900_02 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray90002"
                    >
                      /Aylık
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[176px] rounded-[20px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-[5px] mb-2 ml-2.5"
                        src="images/img_arrowright_gray_900.svg"
                        alt="arrow_right"
                      />
                    }
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-medium text-center text-xl tracking-[0.08px]">
                      Birini seç
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col h-[781px] md:h-auto items-start justify-start outline outline-[1px] outline-gray-900 p-10 sm:px-5 rounded-[30px] w-[511px] sm:w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] h-full items-start justify-between w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400_01 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray40001"
                    >
                      İşe Başlamak İçin
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 tracking-[0.10px] w-auto"
                      size="txtPoppinsMedium40"
                    >
                      Temel Plan
                    </Text>
                  </div>
                  <Line className="bg-gray-400 h-px w-[94%]" />
                  <Text
                    className="leading-[35.00px] max-w-[431px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                    size="txtPoppinsRegular20"
                  >
                    Zamanın özgürce, en iyi çözüm, en iyi seçeneklerden biri
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş marka monitör
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_One"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş anahtar kelime monitörü
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Two"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Tam sosyal profiller
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Three"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        500 Arama Sonucu
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-900 tracking-[-1.59px] w-auto"
                      size="txtPoppinsSemiBold48Deeppurple900"
                    >
                      $79,99
                    </Text>
                    <Text
                      className="text-blue_gray-900_02 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray90002"
                    >
                      /Aylık
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[176px] rounded-[20px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-[5px] mb-2 ml-2.5"
                        src="images/img_arrowright_gray_900.svg"
                        alt="arrow_right"
                      />
                    }
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-medium text-center text-xl tracking-[0.08px]">
                      Birini seç
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-gray-900 p-10 sm:px-5 rounded-[30px] w-[511px] sm:w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400_01 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray40001"
                    >
                      Büyük Takımlar İçin
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 tracking-[0.10px] w-auto"
                      size="txtPoppinsMedium40"
                    >
                      Gelişmiş Plan
                    </Text>
                  </div>
                  <Line className="bg-gray-400 h-px w-[94%]" />
                  <Text
                    className="leading-[35.00px] max-w-[431px] md:max-w-full text-gray-700 text-xl tracking-[0.10px]"
                    size="txtPoppinsRegular20"
                  >
                    Zamanın özgürce, en iyi çözüm, en iyi seçeneklerden biri
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş marka monitör
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_One"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Beş anahtar kelime monitörü
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Two"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        Tam sosyal profiller
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Three"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        500 Arama Sonucu
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[403px] sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_akariconscirclecheckfill.svg"
                        alt="akariconscircle_Four"
                      />
                      <Text
                        className="flex-1 text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray900"
                      >
                        PDF Raporu
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-900 tracking-[-1.59px] w-auto"
                      size="txtPoppinsSemiBold48Deeppurple900"
                    >
                      119,99$
                    </Text>
                    <Text
                      className="text-blue_gray-900_02 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray90002"
                    >
                      /Aylık
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[176px] rounded-[20px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-[5px] mb-2 ml-2.5"
                        src="images/img_arrowright_gray_900.svg"
                        alt="arrow_right"
                      />
                    }
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-medium text-center text-xl tracking-[0.08px]">
                      Birini seç
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </List>
        </div>
        <footer className="bg-gray-900 flex font-alice items-center justify-center mt-[150px] pb-[50px] pt-[150px] md:px-5 px-[163px] w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[150px] items-start justify-start overflow-auto w-auto">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[290px] items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtAliceRegular40WhiteA700"
                >
                  Ayzio Chat Bot
                </Text>
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 gap-[150px] items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.10px] w-auto"
                      size="txtPoppinsRegular24WhiteA700"
                    >
                      Ürünler
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Ayzio Chat Bot
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">CRM</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Web Sitesi{" "}
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Sohbet robotu
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">Tasarım</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Entegrasyonlar
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.10px] w-auto"
                      size="txtPoppinsRegular24WhiteA700"
                    >
                      Kaynaklar
                    </Text>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                      <Text
                        className="text-gray-400 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray400"
                      >
                        Blog
                      </Text>
                      <Text
                        className="text-gray-400 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray400"
                      >
                        Durum
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.10px] w-auto"
                      size="txtPoppinsRegular24WhiteA700"
                    >
                      Şirket
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Hakkında
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            İletişim
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Gizlilik Politikası
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-400 text-xl tracking-[0.10px]"
                        >
                          <Text size="txtPoppinsRegular20Gray400">
                            Kullanım Şartları
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                    <Text
                      className="leading-[35.00px] max-w-[116px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.10px]"
                      size="txtPoppinsRegular24WhiteA700"
                    >
                      Karşılaştırmak
                    </Text>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[84px]">
                      <Text
                        className="text-gray-400 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray400"
                      >
                        Müşteri
                      </Text>
                      <Text
                        className="text-gray-400 text-xl tracking-[0.10px] w-auto"
                        size="txtPoppinsRegular20Gray400"
                      >
                        Zendesk
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[391px] items-center justify-between w-auto md:w-full">
                <Text
                  className="text-base text-white-A700 tracking-[0.10px] w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    © 2023 Canlı Sohbet için Ayzio Chat Bot. Her hakkı
                    saklıdır.{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-white-A700 font-poppins text-left font-normal underline"
                  >
                    Ayzio Terchnology
                  </a>
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    {" "}
                    sevgilerle
                  </span>
                </Text>
                <ul className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-white-A700 text-xl tracking-[0.08px]"
                    >
                      <Text size="txtPoppinsMedium20WhiteA700">Yasal</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-white-A700 text-xl tracking-[0.08px]"
                    >
                      <Text size="txtPoppinsMedium20WhiteA700">
                        Ülke site haritası
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="leading-[24.00px] text-white-A700 text-xl tracking-[0.08px]"
                    >
                      <Text size="txtPoppinsMedium20WhiteA700">
                        Gizlilik Politikası
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="leading-[24.00px] text-white-A700 text-xl tracking-[0.08px]"
                    >
                      <Text size="txtPoppinsMedium20WhiteA700">
                        Çerez politikası
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexAnasayfaPage;
