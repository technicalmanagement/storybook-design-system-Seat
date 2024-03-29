

import {HIERARCHY_ATTRIBUTE,
        SIZE_ATTRIBUTE, 
        COLOR_ATTRIBUTE, 
        STATE_ATTRIBUTE, 
        ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE, 
        WIDTH_ATTRIBUTE } from "./Button/constants.js"
  
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
        FIT_CONTENT_OPTION,
        FULL_OPTION,
        CHILDREN_DEFAULT_OPTION,
        HOVER_OPTION} from "./Button/constants.js"
import { ATTRIBUTES } from "./Button/constants.js"
import { createSeatButton, CONTENT_TO_APPEND } from './index.js';
import Icons from "./Icons/allIcons.js"

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
argOpt[WIDTH_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [FULL_OPTION, FIT_CONTENT_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [BLACK_OPTION, WHITE_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [NORMAL_OPTION, DISABLED_OPTION, HOVER_OPTION],
}

argOpt[ICON_SELECTION_ATTRIBUTE] = {
  control: { type: 'select' },
  options: Object.keys(Icons),
}
argOpt[CONTENT_TO_APPEND] = {
  control: { type: 'text' },
  }
export default {
  title: 'Seat Components/Buttons',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[WIDTH_ATTRIBUTE] = FULL_OPTION
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button  onclick="alert('Hi!')">Click Me!</button>`

const Template = ({...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(WIDTH_ATTRIBUTE)) args[WIDTH_ATTRIBUTE] = defaultArgs[WIDTH_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

  return createSeatButton({ ...args });
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


