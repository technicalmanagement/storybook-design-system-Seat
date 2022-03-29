

import {HIERARCHY_ATTRIBUTE,
    PURCHASE_HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    STATE_ATTRIBUTE, 
    ICON_ATTRIBUTE,
    ICON_SELECTION_ATTRIBUTE,
    CHILDREN_ATTRIBUTE, 
    ONCLICK_ATTRIBUTE } from "./Button/constants.js"

import {PURCHASE_OPTION,
    PRIMARY_PURCHASE_HIERARCHY_OPTION,
    SECONDARY_PURCHASE_HIERARCHY_OPTION,
    TERTIARY_PURCHASE_HIERARCHY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    ON_OPTION,
    OFF_OPTION,
    CHILDREN_DEFAULT_OPTION} from "./Button/constants.js"
import { ATTRIBUTES } from "./Button/constants.js"
import { createSeatButton } from './index.js';
import Icons from "./Icons/allIcons.js"

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [PURCHASE_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[PURCHASE_HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [PRIMARY_PURCHASE_HIERARCHY_OPTION, SECONDARY_PURCHASE_HIERARCHY_OPTION, TERTIARY_PURCHASE_HIERARCHY_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [NORMAL_OPTION, DISABLED_OPTION],
}
argOpt[ICON_ATTRIBUTE] = {
control: { type: 'select' },
options: [ON_OPTION, OFF_OPTION],
}
argOpt[ICON_SELECTION_ATTRIBUTE] = {
control: { type: 'select' },
options: Object.keys(Icons),
}

export default {
title: 'Seat Components/Buttons/Buttons Purchase',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[ICON_ATTRIBUTE] = OFF_OPTION
defaultArgs[CHILDREN_ATTRIBUTE] = CHILDREN_DEFAULT_OPTION
defaultArgs[ONCLICK_ATTRIBUTE] = " "
const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
return createSeatButton({ ...args });
};

export const PurchaseButton = Template.bind({});
PurchaseButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


