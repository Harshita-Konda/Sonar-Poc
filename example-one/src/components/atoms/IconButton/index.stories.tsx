import React from "react";
import { ComponentStory,ComponentMeta } from "@storybook/react";

import MuiIconButton from ".";
import LogoutIcon from "@mui/icons-material/Logout";

export default {
    title : 'IconButton',
    component :MuiIconButton,
    argTypes: {
      onClick: { action: 'clicked' },
      color: {
        options: ['primary', 'secondary','success','danger'],
        control: { type: 'radio' },
      },
    },
} as ComponentMeta<typeof MuiIconButton>;


const Template: ComponentStory<typeof MuiIconButton> = (args) => <MuiIconButton {...args} />;

export const Logout = Template.bind({});
Logout.args = {
  icon:<LogoutIcon/>,
};
