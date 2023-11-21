import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
      <Sidebar className={props.className}>
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px 14px 14px 31px",
              gap: "16px",
              color: "#828fa2",
              fontSize: "14px",
              fontFamily: "Inter",
              [`&:hover, &.ps-active`]: {
                color: "#36414f",
                fontWeight: "400 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[18px] sm:pr-5 pr-8 pt-[3px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
          <SubMenu
            icon={
              <Img
                className="h-5 mb-1 w-5"
                src="images/img_trash.svg"
                alt="trash"
              />
            }
            label={<Text className="flex-1 w-auto">Mağaza</Text>}
          >
            <div className="flex flex-col items-center justify-end w-full">
              <MenuItem>
                <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-9 pr-1 py-1 md:w-full">
                  <Text className="w-auto">Araba</Text>
                </div>
              </MenuItem>
            </div>
          </SubMenu>
          <MenuItem icon={<div className="bg-white-A700 h-5 mb-0.5 w-5"></div>}>
            <Text className="flex-1 w-auto">Ayarlar</Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
