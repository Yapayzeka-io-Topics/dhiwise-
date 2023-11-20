import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const CustomerPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img className="h-5 my-3 w-5" src="images/img_icon_2.svg" alt="icon" />
      ),
      label: "Gösterge Paneli",
    },
    {
      icon: (
        <Img
          className="h-5 mb-1 w-5"
          src="images/img_icon_deep_orange_300_20x20.svg"
          alt="icon_One"
        />
      ),
      label: "Müşteri",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icon_blue_gray_400_20x20.svg"
          alt="icon_Two"
        />
      ),
      label: "İleti",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_icon_20x20.svg"
          alt="icon_Three"
        />
      ),
      label: "Dosya",
    },
    {
      icon: (
        <Img
          className="h-5 mb-[5px] w-5"
          src="images/img_icon_1.svg"
          alt="icon_Four"
        />
      ),
      label: "Takvim",
    },
  ];

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar1 className="!sticky !w-[177px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <Line className="bg-indigo-50 h-[750px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <Header className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
            <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900_01 text-xl w-full"
                  size="txtPoppinsMedium20Bluegray90001"
                >
                  Müşteri
                </Text>
                <div className="bg-white-A700 flex flex-col font-inter items-center justify-center p-8 sm:px-5 rounded shadow-bs7 w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-900_01 text-lg w-auto"
                        size="txtInterRegular18Bluegray90001"
                      >
                        Müşteri listesi
                      </Text>
                      <Img
                        className="h-6 w-[72px]"
                        src="images/img_frame18267.svg"
                        alt="frame18267"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-11 md:h-auto items-start justify-start w-full">
                        <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                          <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                            <CheckBox
                              className=""
                              inputClassName="mr-[5px]"
                              name="file_One"
                              id="file_One"
                              shape="square"
                              color="blue_gray_400"
                              variant="fill"
                            ></CheckBox>
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[87%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col h-11 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-400 w-auto"
                              size="txtInterRegular16Bluegray400"
                            >
                              Müşteri
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-400 w-auto"
                              size="txtInterRegular16Bluegray400"
                            >
                              Adres
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-400 w-auto"
                              size="txtInterRegular16Bluegray400"
                            >
                              Telefon
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-400 w-auto"
                              size="txtInterRegular16Bluegray400"
                            >
                              Sipariş No.
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-400 w-auto"
                              size="txtInterRegular16Bluegray400"
                            >
                              Durum
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-auto">
                          <Text
                            className="text-base text-blue_gray-400 w-auto"
                            size="txtInterRegular16Bluegray400"
                          >
                            Aksiyon
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_robototoyfacefinal2.png"
                                  alt="robototoyfacefi"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Jack
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <Button
                            className="!text-indigo-400 cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            123-456-7890
                          </Button>
                          <Button
                            className="cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            <>&#123;&#123;rota&#125;&#125;21033</>
                          </Button>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file3"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Fort Myers
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterRegular16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-800 text-center w-full"
                              size="txtInterRegular16Bluegray800"
                            >
                              <>&#123;&#123;rota&#125;&#125;21033</>
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <Img
                            className="h-16 max-h-16 sm:w-[] md:w-[]"
                            src="images/img_tablecell.svg"
                            alt="tablecell"
                          />
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file4"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pr-[3px] pt-[3px]">
                                <Text
                                  className="text-base text-blue_gray-800"
                                  size="txtInterRegular16Bluegray800"
                                >
                                  Bünyamin
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <Button
                            className="!text-indigo-400 cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            123-456-7890
                          </Button>
                          <Button
                            className="cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            <>&#123;&#123;rota&#125;&#125;21033</>
                          </Button>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file5"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Flanagan
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterRegular16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-800 text-center w-full"
                              size="txtInterRegular16Bluegray800"
                            >
                              <>&#123;&#123;rota&#125;&#125;21033</>
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="red_600"
                              size="sm"
                              variant="fill"
                            >
                              Hata
                            </Button>
                          </div>
                          <Img
                            className="h-16 max-h-16 sm:w-[] md:w-[]"
                            src="images/img_tablecell.svg"
                            alt="tablecell"
                          />
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file6"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Nicoletti
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <Button
                            className="!text-indigo-400 cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            123-456-7890
                          </Button>
                          <Button
                            className="cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            <>&#123;&#123;rota&#125;&#125;21033</>
                          </Button>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file7"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Robert
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterRegular16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-800 text-center w-full"
                              size="txtInterRegular16Bluegray800"
                            >
                              <>&#123;&#123;rota&#125;&#125;21033</>
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <Img
                            className="h-16 max-h-16 sm:w-[] md:w-[]"
                            src="images/img_tablecell.svg"
                            alt="tablecell"
                          />
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file8"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Rankin
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <Button
                            className="!text-indigo-400 cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            123-456-7890
                          </Button>
                          <Button
                            className="cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            <>&#123;&#123;rota&#125;&#125;21033</>
                          </Button>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="amber_300"
                              size="sm"
                              variant="fill"
                            >
                              Askıda olması
                            </Button>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file9"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Klementin
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterRegular16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-blue_gray-800 text-center w-full"
                              size="txtInterRegular16Bluegray800"
                            >
                              <>&#123;&#123;rota&#125;&#125;21033</>
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <Img
                            className="h-16 max-h-16 sm:w-[] md:w-[]"
                            src="images/img_tablecell.svg"
                            alt="tablecell"
                          />
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="mr-[5px]"
                                name="file"
                                id="file10"
                                shape="square"
                                color="blue_gray_400"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtInterRegular16Bluegray800"
                              >
                                Mitchell
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="leading-[24.00px] max-w-[185px] md:max-w-full text-base text-blue_gray-800"
                              size="txtInterRegular16Bluegray800"
                            >
                              2371 Reppert Kömür Yolu
                            </Text>
                          </div>
                          <Button
                            className="!text-indigo-400 cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            123-456-7890
                          </Button>
                          <Button
                            className="cursor-pointer flex-1 h-16 text-base text-center w-full"
                            shape="square"
                            color="gray_50_01"
                            size="2xl"
                            variant="fill"
                          >
                            <>&#123;&#123;rota&#125;&#125;21033</>
                          </Button>
                          <div className="bg-gray-50_01 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button
                              className="cursor-pointer rounded text-center text-sm w-full"
                              color="green_700"
                              size="sm"
                              variant="fill"
                            >
                              Paralı
                            </Button>
                          </div>
                          <div className="bg-gray-50_01 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Button
                          className="flex h-8 items-center justify-center w-8"
                          shape="square"
                          color="indigo_50"
                          size="md"
                          variant="outline"
                        >
                          <Img
                            src="images/img_arrowleft_blue_gray_400.svg"
                            alt="arrowleft"
                          />
                        </Button>
                        <Button
                          className="cursor-pointer h-8 text-center text-sm w-8"
                          shape="square"
                          color="blue_gray_900_01"
                          size="sm"
                          variant="outline"
                        >
                          1
                        </Button>
                        <Button
                          className="cursor-pointer h-8 text-center text-sm w-8"
                          shape="square"
                          color="indigo_50"
                          size="sm"
                          variant="outline"
                        >
                          2
                        </Button>
                        <Text
                          className="border border-indigo-50 border-solid flex h-8 items-center justify-center text-blue_gray-800 text-center text-sm w-8"
                          size="txtInterRegular14"
                        >
                          <>&#123;&#123;nokta nokta nokta&#125;&#125;</>
                        </Text>
                        <Button
                          className="cursor-pointer h-8 text-center text-sm w-8"
                          shape="square"
                          color="indigo_50"
                          size="sm"
                          variant="outline"
                        >
                          9
                        </Button>
                        <Button
                          className="flex h-8 items-center justify-center w-8"
                          shape="square"
                          color="indigo_50"
                          size="md"
                          variant="outline"
                        >
                          <Img
                            src="images/img_arrowright_blue_gray_400.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <Text
                        className="text-blue_gray-400 text-right text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        <>200 veriden 9&#39;u</>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
