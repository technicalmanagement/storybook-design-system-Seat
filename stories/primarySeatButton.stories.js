

import {HIERARCHY_ATTRIBUTE,
        SIZE_ATTRIBUTE, 
        COLOR_ATTRIBUTE, 
        STATE_ATTRIBUTE, 
        ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE, 
        ONCLICK_ATTRIBUTE } from "./Button/constants.js"
  
import {PRIMARY_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION,
        SMALL_OPTION,
        BLACK_OPTION,
        WHITE_OPTION,
        NORMAL_OPTION,
        DISABLED_OPTION,
        ON_OPTION,
        OFF_OPTION,
        CHILDREN_DEFAULT_OPTION} from "./Button/constants.js"
import { ATTRIBUTES } from "./Button/constants.js"
import { createSeatButton } from './index.js';
import Icons from "./Icons/allIcons.js"
import { useArgs } from '@storybook/api';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[HIERARCHY_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [PRIMARY_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [BLACK_OPTION, WHITE_OPTION],
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
  title: 'Seat Components/Buttons/Buttons Primary',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[ICON_ATTRIBUTE] = OFF_OPTION
defaultArgs[CHILDREN_ATTRIBUTE] = CHILDREN_DEFAULT_OPTION
defaultArgs[ONCLICK_ATTRIBUTE] = " "
const Template = ({...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(ICON_ATTRIBUTE)) args[ICON_ATTRIBUTE] = defaultArgs[ICON_ATTRIBUTE]
  return createSeatButton({ ...args });
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


