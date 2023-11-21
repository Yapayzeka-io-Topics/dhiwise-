import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SifrekurtarmaonayiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-center justify-center mx-auto md:px-10 sm:px-5 px-[446px] py-[230px] w-auto sm:w-full md:w-full">
        <div className="bg-gradient2  flex flex-col items-start justify-start px-12 md:px-5 py-[59px] rounded-[25px] shadow-bs6 w-[548px] sm:w-full">
          <div className="bg-gradient2  flex flex-col items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_completed1.png"
                  alt="completedOne"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl w-full"
                    size="txtInterRegular24Bluegray800"
                  >
                    Şifre kurtarıldı
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-center w-full">
                <Button
                  className="common-pointer cursor-pointer rounded-[28px] text-center text-sm w-full"
                  onClick={() => navigate("/kullanicigiris")}
                  size="xl"
                  variant="gradient"
                  color="purple_600_gray_900_00"
                >
                  Kullanıcı Girişi
                </Button>
                <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowleft_indigo_400.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="text-center text-indigo-400 text-sm w-auto"
                    size="txtInterRegular14Indigo400"
                  >
                    Oturum açma sayfasına geri dön
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

export default SifrekurtarmaonayiPage;
