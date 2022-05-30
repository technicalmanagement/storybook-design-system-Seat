import {COLOR_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    ENABLE_ATTRIBUTE,
    STATE_ATTRIBUTE
    } from "./RadioButton/constants.js"

import {BLACK_OPTION,
    WHITE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    ON_OPTION,
    OFF_OPTION,
    NORMAL_OPTION,
    SELECTED_OPTION
} from "./RadioButton/constants.js"

import {CONTENT_TO_APPEND, createSeatRadioButton} from "./index.js"
const CONTENT_TO_APPEND2 = CONTENT_TO_APPEND + ' 2'
const argOpt = {}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [BLACK_OPTION, WHITE_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION],
}
argOpt[ENABLE_ATTRIBUTE] = {
control: { type: 'select' },
options: [ON_OPTION, OFF_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [NORMAL_OPTION, SELECTED_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
argOpt[CONTENT_TO_APPEND2] = {
    control: { type: 'text' },
    }

export default {
title: 'Seat Components/Radio Button',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[ENABLE_ATTRIBUTE] = ON_OPTION
defaultArgs[CONTENT_TO_APPEND] = `
<input type="radio" id="seatRB" name="SEAT_FIELD_SELECTION" value="radioButton">
<label for="seatRB">Seat Radio Button</label>
`
defaultArgs[CONTENT_TO_APPEND2] = `
<input type="radio" id="seatRB2" name="SEAT_FIELD_SELECTION" value="radioButton2">
<label for="seatRB2">Seat Radio Button 2</label>
`

const Template = ({...args }) => {
//if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
//if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(ENABLE_ATTRIBUTE)) args[ENABLE_ATTRIBUTE] = defaultArgs[ENABLE_ATTRIBUTE]
//if (!args.hasOwnProperty(FORM_WIDTH_ATTRIBUTE)) args[FORM_WIDTH_ATTRIBUTE] = defaultArgs[FOR]
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
if (!args.hasOwnProperty(CONTENT_TO_APPEND2)) args[CONTENT_TO_APPEND2] = defaultArgs[CONTENT_TO_APPEND2]

const args1 = {...args}
delete args1[CONTENT_TO_APPEND2]
const radioButtonElement1 = createSeatRadioButton({ ...args1 })

const args2 = {...args}
delete args2[CONTENT_TO_APPEND2]
args2[CONTENT_TO_APPEND] = args[CONTENT_TO_APPEND2]
const radioButtonElement2 = createSeatRadioButton({ ...args2 })

const parent = document.createElement('div')
parent.style.display = 'contents'
parent.appendChild(radioButtonElement1)
parent.appendChild(document.createElement('br'))
parent.appendChild(radioButtonElement2)
return parent;
};

export const TwoButtons = Template.bind({});
TwoButtons.args= {...defaultArgs}