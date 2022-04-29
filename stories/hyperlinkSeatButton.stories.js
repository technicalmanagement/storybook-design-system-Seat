

import {HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    LINE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    CHILDREN_ATTRIBUTE, 
    ONCLICK_ATTRIBUTE, 
    STATE_ATTRIBUTE,
    } from "./Button/constants.js"

import {HYPERLINK_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    PARAGRAPH_OPTION,
    TITLE_OPTION,
    OFF_OPTION,
    CHILDREN_DEFAULT_OPTION,
    NORMAL_OPTION,
    HOVER_OPTION} from "./Button/constants.js"
import { ATTRIBUTES } from "./Button/constants.js"
import { createSeatButton, CONTENT_TO_APPEND } from './index.js';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [HYPERLINK_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [BLACK_OPTION, WHITE_OPTION],
}
argOpt[LINE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ TITLE_OPTION, PARAGRAPH_OPTION],
    }
argOpt[STATE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ NORMAL_OPTION, HOVER_OPTION],
    }
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }
export default {
title: 'Seat Components/Buttons/Buttons Hyperlink',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[LINE_ATTRIBUTE] = TITLE_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button  onclick="alert('Hi!')">Click Me!</button>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (args.hasOwnProperty(STATE_ATTRIBUTE))
{
    if (args[STATE_ATTRIBUTE] === NORMAL_OPTION)
    {
        delete args[STATE_ATTRIBUTE]
    }
} 
if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(LINE_ATTRIBUTE)) args[LINE_ATTRIBUTE] = defaultArgs[LINE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
//if (!args.hasOwnProperty(ICON_ATTRIBUTE)) args[ICON_ATTRIBUTE] = defaultArgs[ICON_ATTRIBUTE]
return createSeatButton({ ...args });
};

export const HyperlinkButton = Template.bind({});
HyperlinkButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


