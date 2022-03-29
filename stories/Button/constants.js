// attributeNames
export const HIERARCHY_ATTRIBUTE = "hierarchy";
export const SIZE_ATTRIBUTE = "size";
export const COLOR_ATTRIBUTE = "color";
export const STATE_ATTRIBUTE = "state";
export const LINE_ATTRIBUTE = "line";
export const ICON_ATTRIBUTE = "icon";
export const ICON_SELECTION_ATTRIBUTE = "iconSelection";
export const PURCHASE_HIERARCHY_ATTRIBUTE = "purchaseHierarchy";
export const CHILDREN_ATTRIBUTE = "children";
export const ONCLICK_ATTRIBUTE = "onClick";
// hierarchy options
export const PRIMARY_OPTION = "primary";
export const SECONDARY_OPTION = "secondary";
export const TERTIARY_OPTION = "tertiary";
export const GHOST_OPTION = "ghost";
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
// children default value
export const CHILDREN_DEFAULT_OPTION = "Call to action";
//icon selection default value
export const ICON_DEFAULT = "nothing"




const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: HIERARCHY_ATTRIBUTE,
    defaultValue: null,
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
    attributeName: ONCLICK_ATTRIBUTE,
    defaultValue: ()=>{},
    proccessValue: (value) => {return  Function("return " + value)()}

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
