export const NAME_OF_COMPONENT = 'seat-dropdown'


//Attributes names
export const TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
export const COLOR_ATTRIBUTE = "data-color"
export const DROPDOWN_WIDTH_ATTRIBUTE = "data-dropdown-width"
export const DROPDOWN_VALUE_ATTRIBUTE = "data-dropdown-value"
export const OPTION_VALUE_ATTRIBUTE = "data-option-value"
export const SIZE_ATTRIBUTE = "data-size"
export const STATE_ATTRIBUTE = "data-state"
export const TITLE_ATTRIBUTE = "data-title"
export const OPTIONS_ATTRIBUTE = "data-options"
export const OPTIONS_VALUE_SUBATTRIBUTE = "value subAttribute"
export const OPTIONS_TEXT_SUBATTRIBUTE = "text subAttribute"

//Options names
export const BLACK_OPTION = 'black'
export const WHITE_OPTION = 'white'
export const LARGE_OPTION = "L"
export const MEDIUM_OPTION = "M"
export const NORMAL_OPTION = "normal"
export const SELECTED_OPTION = "selected"
export const OPEN_OPTION = "open"
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue: BLACK_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue: LARGE_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue: NORMAL_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: DROPDOWN_VALUE_ATTRIBUTE,
    defaultValue: "",
    proccessValue: (value) => {return   value}
})

ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue: "Dropdown Title",
    proccessValue: (value) => {return   value}
})
export {ATTRIBUTES}


export const DEFAULT_EVENT = 'default'
export const SELECTION_EVENT = 'selection'
export const OPEN_EVENT = "open"
export const HOVER_EVENT = "hover"

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(OPEN_EVENT)
EVENTS_OF_COMPONENT.push(SELECTION_EVENT)
EVENTS_OF_COMPONENT.push(HOVER_EVENT)

export {EVENTS_OF_COMPONENT}

//SubCOmponents
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT
// I
// I----------->CONTAINER_SUPER_WRAPPER
//                  I----------->CONTAINER_WRAPPER
//                                     I----------->CONTAINER_SUBWRAPPER
//                                     I                I----------->TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT
//                                     I                I               I----------->TITLE_SUBCOMPONENT
//                                     I                I               I                   I----------->TITLE_ITEM
//                                     I                I               I                                   I----------->TITLE_TEXT_NODE
//                                     I                I               I----------->OPTION_SELECTED_SUBCOMPONENT
//                                     I                I                                   I----------->OPTION_TEXT_NODE
//                                     I                I
//                                     I                I
//                                     I                I----------->ARROW_ICON_SUBCOMPONENT
//                                     I                                I----------->ARROW_ICON_CONTAINER
//                                     I                                                    I----------->ARROW_ICON_ITEM
//                                     I
//                                     I----------->OPTION_WRAPPER
//                                                      I----------->OPTION_Ni_SUBCOMPONENT
//                                                                      I----------->OPTION_Ni_ITEM
//                                                                                          I----------->OPTION_TEXT_NODE
export const CONTAINER_SLOT_WRAPPER = 'container slot wrapper'
export const CONTAINER_SUPER_WRAPPER = 'CONTAINER SUPER WRAPPER'
export const CONTAINER_WRAPPER = 'container wrapper'
export const CONTAINER_SUBWRAPPER = 'container subwrapper'
export const TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT = "title + option selected"
export const TITLE_SUBCOMPONENT = "title subcomponent"
export const TITLE_ITEM = "title item"
export const OPTION_SELECTED_SUBCOMPONENT = "option selected"
export const ARROW_ICON_SUBCOMPONENT = "arrow icon subcomponent"
export const ARROW_ICON_CONTAINER = "arrow icon container"
export const ARROW_ICON_ITEM = "arrow icon item"
export const OPTION_WRAPPER = "option wrapper"
export const OPTION_Ni_SUBCOMPONENT = 'option Ni'
export const OPTION_Ni_ITEM = 'option Ni item'
//Variants keys
export const REGULAR_DROPDOWN_VARIANT = 'regular-dropdown-variant'
