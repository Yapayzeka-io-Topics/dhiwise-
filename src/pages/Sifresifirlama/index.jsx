import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const SifresifirlamaPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-center mx-auto md:px-10 sm:px-5 px-[446px] py-[124px] w-auto sm:w-full md:w-full">
        <div className="bg-gradient2  flex flex-col h-[801px] md:h-auto items-start justify-start px-12 md:px-5 py-[59px] rounded-[20px] shadow-bs6 w-[549px] sm:w-full">
          <div className="flex flex-col gap-2 h-[641px] md:h-auto items-start justify-start w-full">
            <Img
              className="common-pointer h-9 w-14"
              src="images/img_iconiconline294.svg"
              alt="iconiconline294"
              onClick={() => navigate("/kullanicigiris")}
            />
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-[25px] justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-900_01 border-solid flex flex-col h-px items-center justify-start md:ml-[0] ml-[131px] mr-[317px] rounded-[50%] w-px">
                    <Img
                      className="h-px rounded-tl-[50%] rounded-tr-[50%] w-px"
                      src="images/img_vector57.svg"
                      alt="vectorFiftySeven"
                    />
                  </div>
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <div className="h-[83px] relative w-full">
                      <Img
                        className="h-px ml-[46px] my-auto"
                        src="images/img_group_blue_gray_900_01.svg"
                        alt="group"
                      />
                      <Text
                        className="absolute h-full inset-[0] justify-center leading-[40.00px] m-auto sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center w-full"
                        size="txtInterRegular28"
                      >
                        <span className="md:text-[34px] sm:text-[32px] text-purple-900 font-inter text-4xl font-bold">
                          Ayzior.org
                        </span>
                        <span className="text-blue_gray-900_01 font-inter font-semibold italic">
                          <>
                            <br />
                            Yapay Zeka Yazılım Geliştirme
                          </>
                        </span>
                      </Text>
                    </div>
                    <div className="bg-gray-50_01 h-px ml-0.5 md:ml-[0] rounded-[1px] w-[1%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl w-full"
                    size="txtInterRegular24Bluegray800"
                  >
                    Parolanızı mı unuttunuz
                  </Text>
                  <Text
                    className="leading-[22.00px] text-blue_gray-800 text-center text-sm"
                    size="txtInterRegular14"
                  >
                    <>
                      Katılırken kullandığınız e-posta adresini girin, şifrenizi
                      sıfırlamanız için size talimatlar gönderelim.
                      <br />
                      Güvenlik nedeniyle şifrenizi saklamıyoruz. Şifreni asla
                      e-posta yoluyla göndermeyeceğimizden emin olabilirsin.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[453px] sm:w-full">
                  <Text
                    className="text-blue_gray-800 text-sm w-full"
                    size="txtInterRegular14"
                  >
                    {" "}
                    E-posta
                  </Text>
                  <Input
                    name="eposta"
                    placeholder="xyz@gmail.com"
                    className="!placeholder:text-blue_gray-800 !text-blue_gray-800 p-0 text-base text-left w-full"
                    wrapClassName="border border-indigo-50 border-solid flex w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-5 mr-4"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <Button
                  className="common-pointer cursor-pointer rounded-[28px] text-center text-sm w-[453px]"
                  onClick={() => navigate("/sifrekurtarmaonayi")}
                  size="xl"
                  variant="gradient"
                  color="purple_600_gray_900_00"
                >
                  Şifremi Sıfırla
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SifresifirlamaPage;
