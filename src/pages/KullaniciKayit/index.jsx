import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const KullaniciKayitPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lavishlyyours items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[72px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] h-[875px] md:h-auto items-center justify-start max-w-[1281px] mx-auto w-full">
          <div className="flex flex-1 flex-col items-center justify-center w-full">
            <Text
              className="bg-clip-text bg-gradient3  leading-[28.00px] rotate-[3deg] md:text-3xl sm:text-[28px] text-[32px] text-center text-transparent tracking-[3.00px]"
              size="txtLavishlyYoursRegular32"
            >
              <span className="md:text-5xl text-light_green-700 font-lavishlyyours text-[64px] font-normal">
                Ayzior.org
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                <>
                  <br />
                </>
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                <>
                  Yapay Zeka Yazılım Geliştirme
                  <br />
                </>
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                Ayzio Hedefleri{" "}
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                <>
                  <br />
                </>
              </span>
              <span className="text-light_green-700 tracking-[11.00px] font-lavishlyyours font-normal">
                Yapay zeka (AI){" "}
              </span>
              <span className="md:text-[34px] sm:text-[32px] text-light_green-700 tracking-[7.00px] font-lavishlyyours text-4xl font-normal">
                <>
                  araştırmalarını ve sorumlu kullanımını teşvik etmek
                  <br />
                </>
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                <>
                  Yapay zekanın kamuoyu tarafından daha iyi anlaşılması
                  <br />
                  Yapay zeka uygulayıcılarının öğretimini ve eğitimini
                  iyileştirme
                  <br />
                </>
              </span>
              <span className="text-purple-600 font-lavishlyyours font-normal">
                Araştırma
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                {" "}
              </span>
              <span className="text-red-A700 font-leaguescript font-normal">
                planlamacılarına
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                {" "}
              </span>
              <span className="text-black-900 font-lavishlyyours font-normal">
                ve
              </span>
              <span className="text-black-900_33 font-lavishlyyours font-normal">
                {" "}
              </span>
              <span className="text-light_green-700 font-leaguescript font-normal">
                fon
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                {" "}
                sağlayıcılara mevcut YZ gelişmelerinin önemi ve potansiyeli ve
                gelecekteki yönler konusunda rehberlik etmek
              </span>
              <span className="text-light_green-700 font-lavishlyyours font-normal">
                <>
                  .<br />
                </>
              </span>
            </Text>
          </div>
          <div className="bg-gradient2  flex flex-1 flex-col font-inter h-[838px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs6 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl w-full"
                  size="txtInterRegular24Bluegray800"
                >
                  Yeni Kullanıcı Kaydı
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-full">
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
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame"
                          placeholder="Ad Soyad"
                          className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                          wrapClassName="border border-indigo-50 border-solid flex w-full"
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
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame_One"
                          placeholder="E-posta"
                          className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                          wrapClassName="border border-indigo-50 border-solid flex w-full"
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
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="password"
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
                          suffix={
                            <Img
                              className="mt-0.5 mb-auto h-5 ml-[35px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <Text
                      className="leading-[22.00px] max-w-[452px] md:max-w-full text-blue_gray-400 text-center text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      <span className="text-blue_gray-400 font-inter font-normal">
                        <>
                          &quot;KAYDOL&quot; düğmesini tıklayarak
                          &#123;&#123;newline&#125;
                        </>
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-400 font-inter font-normal underline"
                      >
                        Şart ve Politikanızı
                      </a>
                      <span className="text-blue_gray-400 font-inter font-normal">
                        {" "}
                        kabul ediyorum
                      </span>
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
                    Zaten bir hesabınız var mı?
                  </Text>
                  <Text
                    className="common-pointer text-deep_orange-300 text-sm w-[63px]"
                    size="txtInterRegular14Deeporange300"
                    onClick={() => navigate("/kullanicigiris")}
                  >
                    Üye Girişi
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

export default KullaniciKayitPage;
