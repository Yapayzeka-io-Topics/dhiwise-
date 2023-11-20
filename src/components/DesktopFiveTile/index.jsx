import React from "react";

import { Button, Img, Text } from "components";

const DesktopFiveTile = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Img
            className="h-52 sm:h-auto object-cover w-full"
            alt="imageFour"
            src={props?.userimage}
          />
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start p-5 w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            {!!props?.supportbuttontext ? (
              <Button
                className="!text-indigo-A700 cursor-pointer font-inter min-w-[66px] rounded-[13px] text-[15px] text-center"
                color="blue_50"
                size="sm"
                variant="fill"
              >
                {props?.supportbuttontext}
              </Button>
            ) : null}
            {!!props?.newfeaturebuttontext ? (
              <Button
                className="!text-indigo-A700 cursor-pointer font-inter min-w-[95px] rounded-[13px] text-[15px] text-center"
                color="blue_50"
                size="sm"
                variant="fill"
              >
                {props?.newfeaturebuttontext}
              </Button>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="leading-[140.00%] max-w-[343px] md:max-w-full text-base text-black-900"
              size="txtInterSemiBold16"
            >
              {props?.introducingtext}
            </Text>
            <Text
              className="leading-[90.00%] max-w-[343px] md:max-w-full text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFiveTile.defaultProps = {
  userimage: "images/img_image4.png",
  introducingtext:
    "Fin - PDF Yüklemeleri için yeni bir dosya içerik kaynağıyla tanışın",
  descriptiontext:
    " Ayzio Chat bot aracımızı kullanarak makalelerinizi Ayzio’da Yayınlayın makalelerinize otomatik olarak URL yönlendirmeleri oluşturacağız.",
};

export default DesktopFiveTile;
