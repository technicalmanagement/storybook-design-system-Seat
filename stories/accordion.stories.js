

import {COLOR_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    OPEN_ATTRIBUTE,
    TITLE_ATTRIBUTE,
    } from "./Accordion/constants.js"

import {BLACK_OPTION,
    WHITE_OPTION,
    BIG_OPTION,
    SMALL_OPTION,
    SMALLEST_OPTION,
    OPENED_OPTION,
    CLOSED_OPTION,
    TITLE_DEFAULT} from "./Accordion/constants.js"
import { createSeatAccordion } from './index.js';

const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [BLACK_OPTION, WHITE_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [BIG_OPTION, SMALL_OPTION, SMALLEST_OPTION],
}
argOpt[OPEN_ATTRIBUTE] = {
control: { type: 'select' },
options: [OPENED_OPTION, CLOSED_OPTION],
}
argOpt[TITLE_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }

export default {
title: 'Seat Components/Accordion',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[SIZE_ATTRIBUTE] = BIG_OPTION
defaultArgs[OPEN_ATTRIBUTE] = CLOSED_OPTION
defaultArgs[TITLE_ATTRIBUTE] = TITLE_DEFAULT
defaultArgs[CONTENT_TO_APPEND] = '<h1>Some generic content</h1>'
const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
return createSeatAccordion({ ...args });
};

export const All = Template.bind({});
All.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


