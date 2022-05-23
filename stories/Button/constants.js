// attributeNames
export const HIERARCHY_ATTRIBUTE = "data-hierarchy";
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const LINE_ATTRIBUTE = "data-line";
export const ICON_ATTRIBUTE = "data-icon";
export const ICON_SELECTION_ATTRIBUTE = "data-icon-selection";
export const PURCHASE_HIERARCHY_ATTRIBUTE = "data-purchase-hierarchy";
export const CHILDREN_ATTRIBUTE = "data-children";
export const WIDTH_ATTRIBUTE = "data-size-width"
// hierarchy options
export const PRIMARY_OPTION = "primary";
export const SECONDARY_OPTION = "secondary";
export const TERTIARY_OPTION = "tertiary";
export const PURCHASE_OPTION = "purchase";
export const HYPERLINK_OPTION = "hyperlink";
//device options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";
//state options
export const NORMAL_OPTION = "normal";
export const DISABLED_OPTION = "disabled";
export const HOVER_OPTION = "hover"
//line options
export const TITLE_OPTION = "title";
export const PARAGRAPH_OPTION = "paragraph"
// icon option
export const ON_OPTION = "on";
export const OFF_OPTION = "off";
// purchase-hierarchy options 
export const PRIMARY_PURCHASE_HIERARCHY_OPTION = "primary";
export const SECONDARY_PURCHASE_HIERARCHY_OPTION = "secondary";
export const TERTIARY_PURCHASE_HIERARCHY_OPTION = "tertiary";
//data-size-width options
export const FULL_OPTION = "full"
export const FIT_CONTENT_OPTION = "fit-content"
// children default value
export const CHILDREN_DEFAULT_OPTION = "Call to action";
//icon selection default value
export const ICON_DEFAULT = "nothing"

// VIEWPORTS CEIL DIMENSIONS 
export const MAX_WIDTH_SMALL_OPTION = 764
export const MAX_WIDTH_MEDIUM_OPTION = 1016


const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: HIERARCHY_ATTRIBUTE,
    defaultValue: null,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : (() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < MAX_WIDTH_SMALL_OPTION)
        {
           return SMALL_OPTION;
        }
        else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
        {
           return MEDIUM_OPTION;
        }
        else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
        {
           return LARGE_OPTION;
        }
    }) (),
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: LINE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ICON_ATTRIBUTE,
    defaultValue : OFF_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : ICON_DEFAULT,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: CHILDREN_ATTRIBUTE,
    defaultValue : CHILDREN_DEFAULT_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: PURCHASE_HIERARCHY_ATTRIBUTE,
    defaultValue: null,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: WIDTH_ATTRIBUTE,
    defaultValue: FULL_OPTION,
    proccessValue: (value) => {return   value}
})
export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const BUTTON_SUBCOMPONENT = 'button'
export const ICON_CONTAINER_SUBCOMPONENT = 'icon container'
export const ICON_SUBCOMPONENT = 'icon'
export const ICONARROW_CONTAINER_SUBCOMPONENT = 'icon Arrow container'
export const ICONARROW_SUBCOMPONENT = 'icon Arrow'
export const TEXT_SUBCOMPONENT = 'textButton'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const HOVER_BUTTON_EVENT = 'hoverButton'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(HOVER_BUTTON_EVENT)

export {EVENTS_OF_COMPONENT}

// components variants of buttons
export const REGULAR_BUTTON_VARIANT = 'regular button'
export const REGULAR_BUTTON_ICON_VARIANT = 'regular button icon'
export const ARROW_BUTTON_VARIANT = 'arrow button'
export const ARROW_BUTTON_ICON_VARIANT = 'arrow button icon'

export const NAME_OF_COMPONENT = 'seat-button'
