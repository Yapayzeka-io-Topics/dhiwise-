import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DesktopFourTile = (props) => {
  const [frame31310value, setFrame31310value] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
          <Input
            name="frame31310"
            placeholder="Yardım arayın"
            value={frame31310value}
            onChange={(e) => setFrame31310value(e)}
            className="!placeholder:text-black-900 !text-black-900 font-inter font-semibold p-0 text-base text-left w-full"
            wrapClassName="flex rounded-md w-full"
            suffix={
              <div className="mb-[3px] ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-indigo-A700">
                {frame31310value?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer my-auto"
                    onClick={() => setFrame31310value("")}
                    fillColor="#000000"
                    height={19}
                    width={14}
                    viewBox="0 0 14 19"
                  />
                ) : (
                  <Img
                    className="cursor-pointer my-auto"
                    src="images/img_search_indigo_a700.svg"
                    alt="search"
                  />
                )}
              </div>
            }
            shape="round"
            color="blue_gray_50"
            size="xs"
            variant="fill"
          ></Input>
          <div className="flex flex-col gap-5 items-start justify-start px-3 w-full">
            <div className="flex flex-row gap-1.5 items-center justify-between w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.pricingoption}
              </Text>
              <Img
                className="h-3.5 w-[9px]"
                src="images/img_arrowright_indigo_a700.svg"
                alt="arrowright_One"
              />
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-between w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.customuseroption}
              </Text>
              <Img
                className="h-3.5 w-[9px]"
                src="images/img_arrowright_indigo_a700.svg"
                alt="arrowright_Two"
              />
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-between w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.newsexplainedoption}
              </Text>
              <Img
                className="h-3.5 w-[9px]"
                src="images/img_arrowright_indigo_a700.svg"
                alt="arrowright_Three"
              />
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-between w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.forwardemailoption}
              </Text>
              <Img
                className="h-3.5 w-[9px]"
                src="images/img_arrowright_indigo_a700.svg"
                alt="arrowright_Four"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFourTile.defaultProps = {
  pricingoption: "Fiyatlandırma",
  customuseroption: <>İnterkom&#39;a özel kullanıcı öznitelikleri gönder</>,
  newsexplainedoption: "Haber açıklandı",
  forwardemailoption: "E-postanızı gelen kutunuza iletin",
};

export default DesktopFourTile;
