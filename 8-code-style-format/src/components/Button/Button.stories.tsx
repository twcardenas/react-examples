// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Button, { BaseButtonInput } from "./BaseButton";
import { PrimaryButton } from "./PrimaryButton";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BaseButtonInput> = (args) => <Button {...args} />;
const PrimaryTemplate: Story<BaseButtonInput> = (args) => (
  <PrimaryButton {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: "Hello Base",
};

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  children: "Hello Primary",
};
