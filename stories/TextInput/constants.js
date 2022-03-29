export const NAME_OF_COMPONENT = 'seat-text-input'
// components variants of text Inputs
export const REGULAR_TEXT_INPUT_VARIANT = 'regular text input'
export const REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT = 'regular text input descriptor'
export const ICON_TEXT_INPUT_VARIANT = 'icon text input'
export const ICON_TEXT_INPUT_DESCRIPTOR_VARIANT = 'icon text input descriptor'

// attributeNames
export const SIZE_ATTRIBUTE = "size";
export const COLOR_ATTRIBUTE = "color";
export const STATE_ATTRIBUTE = "state";
export const ERROR_MESSAGE_ATTRIBUTE = "errorMessage";
export const TITLE_ATTRIBUTE = "title";
export const DESCRIPTOR_ATTRIBUTE = "descriptor";
export const ICON_SELECTION_ATTRIBUTE = "iconSelection";
export const FORM_VALUE_ATTRIBUTE = "form-value";
export const FORM_WIDTH_ATTRIBUTE = "form-width";
//size options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";
//state options
export const NORMAL_OPTION = "normal";
export const ACTIVE_OPTION = "active";
export const VALIDATED_OPTION = "validated";
export const ERROR_OPTION = "error";
export const FILLED_OPTION = "filled";
//icon selection default value
export const ICON_DEFAULT = "";
//descriptor default value
export const DESCRIPTOR_DEFAULT = "";
export const ERROR_MESSAGE_DEFAULT = "Error message"
export const TITLE_DEFAULT = "Title value"

export const ICON_ON_ATTRIBUTE = "iconOnAttribute"
export const DESCRIPTOR_ON_ATTRIBUTE = "descriptorOnAttribute"

export const ICON_ON_OPTION = "on"
export const ICON_OFF_OPTION = "off"

export const DESCRIPTOR_ON_OPTION = "on"
export const DESCRIPTOR_OFF_OPTION = "off"

const ATTRIBUTES = [];

ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : TITLE_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : NORMAL_OPTION,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: DESCRIPTOR_ATTRIBUTE,
    defaultValue : DESCRIPTOR_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : ICON_DEFAULT,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ERROR_MESSAGE_ATTRIBUTE,
    defaultValue : ERROR_MESSAGE_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: FORM_VALUE_ATTRIBUTE,
    defaultValue : "",
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: FORM_WIDTH_ATTRIBUTE,
    defaultValue : "",
    proccessValue: (value) => {return   value}

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
//CONTAINER_WRAPPER
// I
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                I                   I
// I                I                   I----------->TITLE_SUBCOMPONENT
// I                I                   I----------->TEXT_SUBCOMPONENT
// I                I
// I                I----------->ALL_ICONS_CONTAINER
// I                                I
// I                                I----------->ICON_CONTAINER_SUBCOMPONENT
// I                                I               I
// I                                I               I----------->ICON_SUBCOMPONENT
// I                                I               
// I                                I----------->SUCCESS_ICON_CONTAINER_SUBCOMPONENT
// I                                                I
// I                                                I----------->SUCCESS_ICON_SUBCOMPONENT
// I
// I----------->DESCRIPTOR_SUBCOMPONENT
// I
// I----------->ERROR_CONTAINER_SUBCOMPONENT
export const CONTAINER_WRAPPER = 'container wrapper'
export const CONTAINER_SUB_WRAPPER = 'container sub wrapper'
export const TEXT_INPUT_CONTAINER_SUBCOMPONENT = 'textInput container'
export const TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT = "title + text container"
export const TITLE_SUBCOMPONENT = 'title'
export const TEXT_SUBCOMPONENT = 'text'
export const ALL_ICONS_CONTAINER = 'all icons'
export const ICON_CONTAINER_SUBCOMPONENT = 'icon container'
export const ICON_SUBCOMPONENT = 'icon'
export const SUCCESS_ICON_CONTAINER_SUBCOMPONENT = 'success icon container'
export const SUCCESS_ICON_SUBCOMPONENT = 'success icon'
export const DESCRIPTOR_SUBCOMPONENT = 'descriptor'
export const ERROR_CONTAINER_SUBCOMPONENT = 'error container'
//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const INPUT_EVENT = 'inputEvent'
export const VALIDATED_EVENT = 'validated'
export const ERROR_EVENT = 'errorEvent'
//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(INPUT_EVENT)
EVENTS_OF_COMPONENT.push(VALIDATED_EVENT)
EVENTS_OF_COMPONENT.push(ERROR_EVENT)

export {EVENTS_OF_COMPONENT}




