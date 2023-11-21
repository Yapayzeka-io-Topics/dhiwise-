import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
          <div className="header-row mt-[22px] mb-5">
            <Text
              className="flex-1 text-blue_gray-800 text-sm"
              size="txtInterRegular14"
            >
              Hoşgeldiniz Ekip!
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col sm:hidden items-start justify-start p-2.5 w-auto">
            <div className="bg-white-A700 border border-blue_gray-200_01 border-solid flex flex-row gap-2 items-center justify-start p-2.5 rounded w-full">
              <Img
                className="h-5 ml-1.5 w-5"
                src="images/img_search.svg"
                alt="search"
              />
              <Text
                className="text-blue_gray-400 text-xs"
                size="txtInterRegular12"
              >
                Ara...
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-6 h-10 md:h-auto sm:hidden items-center justify-end w-full">
            <Img
              className="h-6 w-6"
              src="images/img_iconiconline293.svg"
              alt="iconiconline293"
            />
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterRegular16Gray500"
              >
                Merhaba Sam
              </Text>
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_sherlocktoyfacelow.png"
                  alt="sherlocktoyface"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
