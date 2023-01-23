import React from "react";
import { ComponentStory,ComponentMeta } from "@storybook/react";

import MuiCard from ".";

export default {
    title : 'Card',
    component :MuiCard,
    argTypes: {
        color:{
            options:["Blue","Pink","yellow"],
        },
      onClick: { action: 'clicked' },
    },
} as ComponentMeta<typeof MuiCard>;


const Template: ComponentStory<typeof MuiCard> = (args) => <MuiCard />;

export const Card = Template.bind({});
Card.args={
    color:"blue",
}