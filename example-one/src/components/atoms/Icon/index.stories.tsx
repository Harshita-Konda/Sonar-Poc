import React from "react";
import { ComponentStory,ComponentMeta } from "@storybook/react";

import MuiIcon from ".";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";

export default {
    title : 'Icon',
    component :MuiIcon,
    argTypes: {
      onClick: { action: 'clicked' },
      color: {
        options: ['primary', 'secondary','success','danger'],
        control: { type: 'radio' },
      },
    },
} as ComponentMeta<typeof MuiIcon>;


const Template: ComponentStory<typeof MuiIcon> = (args) => <MuiIcon {...args} />;

export const Grid = Template.bind({});
Grid.args = {
  icon:<GridViewOutlined/>,
  iconColor:"primary",
};
export const People = Template.bind({});
People.args = {
  icon:<PeopleAltOutlinedIcon/>,
};
export const Gavel = Template.bind({});
Gavel.args = {
  icon:<GavelIcon/>,
};
export const Description = Template.bind({});
Description.args = {
  icon:<DescriptionIcon/>,
};
export const Assessment = Template.bind({});
Assessment.args = {
  icon:<AssessmentOutlinedIcon/>,
};
export const Account = Template.bind({});
Account.args = {
  icon:<ManageAccountsOutlinedIcon/>,
};
export const Screenings = Template.bind({});
Screenings.args = {
  icon:<WysiwygIcon/>,
};
