import React from "react";
import { CheckBox } from "components";

export default {
  title: "anonim_01_s_application9/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "RoundedBorder0",
  variant: "FillBluegray400",
  label: "Checkbox",
  inputClassName: "mr-1",
};
