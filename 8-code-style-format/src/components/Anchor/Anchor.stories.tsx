// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Anchor, AnchorInput } from "./Anchor";

export default {
  title: "Example/Anchor",
  component: Anchor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AnchorInput> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  css: { color: "red" },
  children: <h1>This is an anchor</h1>,
};
