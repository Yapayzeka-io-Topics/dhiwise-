import React from "react";

import { Button, Img, List, Text } from "components";
import DesktopFiveNav from "components/DesktopFiveNav";
import DesktopFiveTile from "components/DesktopFiveTile";
import DesktopOneHeader from "components/DesktopOneHeader";

const DesktopFivePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter gap-[35px] justify-end mx-auto p-[30px] sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[86px] mr-[1115px] mt-[83px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
          size="txtInterBold42"
        >
          Haberler
        </Text>
        <div className="flex flex-col font-inknutantiqua items-end mb-[5px] md:ml-[0] ml-[86px] sm:pl-5 pl-[871px] md:px-5 w-[94%] md:w-full">
          <div className="flex flex-col gap-5 items-end justify-end w-auto sm:w-full">
            <div className="flex flex-col h-[709px] md:h-auto items-start justify-start rounded-[18px] shadow-bs3 w-[423px] sm:w-full">
              <DesktopOneHeader
                className="bg-indigo-A700 flex flex-col gap-[30px] items-center justify-start px-5 py-7 w-full"
                messagetext="Haberler"
              />
              <div className="font-inter md:h-[705px] sm:h-[772px] h-full p-5 relative w-full">
                <div className="h-[635px] md:h-[705px] sm:h-[772px] m-auto w-full">
                  <div className="absolute bg-white-A700 h-[546px] inset-x-[0] mx-auto top-[0] w-full"></div>
                  <div className="absolute flex flex-col gap-[18px] h-max inset-[0] items-center justify-start m-auto w-[383px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 w-full"
                            size="txtInterSemiBold16"
                          >
                            En sonuncu
                          </Text>
                          <Text
                            className="text-[15px] text-black-900 w-full"
                            size="txtInterRegular15Black900"
                          >
                            Yapayzeka.io En Son Makaleler
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[-2px] grid grid-cols-3 justify-start w-auto"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-end outline outline-[3px] outline-white-A700 rounded-[50%] w-full">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse6_4.png"
                              alt="ellipseSix"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-end outline outline-[3px] outline-white-A700 rounded-[50%] w-full">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse6_5.png"
                              alt="ellipseSix"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-end outline outline-[3px] outline-white-A700 rounded-[50%] w-full">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse6_6.png"
                              alt="ellipseSix"
                            />
                          </div>
                        </List>
                      </div>
                    </div>
                    <DesktopFiveTile
                      className="bg-white-A700 border border-black-900_23 border-solid flex flex-col items-start justify-center rounded-[10px] shadow-bs1 w-full"
                      supportbuttontext="Destek"
                      newfeaturebuttontext="Yeni özellik"
                    />
                    <DesktopFiveTile
                      className="bg-white-A700 border border-black-900_23 border-solid flex flex-col md:gap-10 gap-[60px] items-start justify-center rounded-[10px] shadow-bs1 w-full"
                      userimage="images/img_image4_148x383.png"
                      descriptiontext={
                        <>
                          Zendesk taşıma aracımızı kullanarak makalelerinizi
                          Intercom&#39;a taşıdığınızda, artık önceki
                          URL&#39;lerinizden yeni Intercom makalelerinize
                          otomatik olarak URL yönlendirmeleri oluşturacağız.
                        </>
                      }
                    />
                  </div>
                </div>
                <DesktopFiveNav className="absolute bg-white-A700 border-blue_gray-50 border-solid border-t bottom-[0] flex flex-1 flex-col gap-[206px] inset-x-[0] items-center justify-start mx-auto px-5 py-[18px] shadow-bs2 w-full" />
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
    </>
  );
};

export default DesktopFivePage;
