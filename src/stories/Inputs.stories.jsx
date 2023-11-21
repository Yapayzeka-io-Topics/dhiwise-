import React from "react";

import { Input } from "components";

export default {
  title: "anonim_01_s_application9/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
