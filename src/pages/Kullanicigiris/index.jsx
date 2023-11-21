import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const KullanicigirisPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[106px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] h-[1139px] md:h-auto items-center justify-start max-w-[1260px] mx-auto w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[84px] h-[901px] md:h-auto items-center justify-start w-full">
            <Text
              className="leading-[40.00px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01"
              size="txtInterRegular28"
            >
              <span className="md:text-[34px] sm:text-[32px] text-purple-900 font-kaushanscript text-left text-4xl font-normal">
                Ayzior.org
              </span>
              <span className="text-blue_gray-900_01 font-kaushanscript text-left font-normal">
                <>
                  <br />
                  Yapay Zeka Yazılım Geliştirme
                  <br />
                  <br />
                </>
              </span>
              <span className="text-light_green-700 font-kaushanscript text-left font-normal">
                Yapay Zekayı Geliştirme Derneği düşüncenin ve akıllı davranışın
                altında yatan mekanizmalar ve bunların makinelerdeki
                uygulamalarına ilişkin bilimsel anlayışı geliştirmeye adanmış
                önde gelen bilimsel topluluktur .
              </span>
            </Text>
            <Img
              className="h-[454px] w-full"
              src="images/img_workingtime.svg"
              alt="workingtime"
            />
          </div>
          <div className="bg-gradient2  flex flex-1 flex-col h-[803px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs6 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[452px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl"
                  size="txtInterRegular24Bluegray800"
                >
                  <>
                    Ayzio <br />
                    Giriş Yapın
                  </>
                </Text>
                <Button
                  className="border border-indigo-50 border-solid cursor-pointer flex items-center justify-center min-w-[452px] sm:min-w-full rounded"
                  leftIcon={
                    <Img
                      className="h-[18px] mb-px mr-[35px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  }
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  <div className="!text-blue_gray-800 text-center text-sm">
                    Google ile giriş yap
                  </div>
                </Button>
                <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full">
                  <Line className="bg-indigo-50 h-px w-[37%]" />
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Veya
                  </Text>
                  <Line className="bg-indigo-50 h-px w-[37%]" />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-800 text-sm w-full"
                        size="txtInterRegular14"
                      >
                        E-posta
                      </Text>
                      <Input
                        name="email_One"
                        placeholder="xyz@gmail.com"
                        className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
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
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-800 text-sm w-full"
                        size="txtInterRegular14"
                      >
                        Şifre
                      </Text>
                      <Input
                        name="password_One"
                        placeholder="************"
                        className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                        wrapClassName="border border-indigo-50 border-solid flex w-full"
                        prefix={
                          <Img
                            className="mt-0.5 mb-auto h-5 mr-4"
                            src="images/img_icon_blue_gray_800.svg"
                            alt="Icon "
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <CheckBox
                      className="text-blue_gray-800 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="remember"
                      id="remember"
                      label="Hatırlamak"
                      shape="square"
                      size="xs"
                    ></CheckBox>
                    <Text
                      className="common-pointer flex-1 text-blue_gray-800 text-right text-sm w-auto"
                      size="txtInterRegular14"
                      onClick={() => navigate("/sifresifirlama")}
                    >
                      Parolanızı mı unuttunuz?
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button
                  className="cursor-pointer rounded-[28px] text-center text-sm w-full"
                  size="xl"
                  variant="gradient"
                  color="purple_600_gray_900_00"
                >
                  GİRİŞ YAPMAK
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Henüz bir hesabınız yok mu?
                  </Text>
                  <Text
                    className="common-pointer leading-[16.00px] max-w-[51px] md:max-w-full text-deep_orange-300 text-sm"
                    size="txtInterRegular14Deeporange300"
                    onClick={() => navigate("/kullanicikayit")}
                  >
                    Üye olmak
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KullanicigirisPage;
