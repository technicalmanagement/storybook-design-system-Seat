export const CUSTOM_ELEMENT_NAME = "seat-accordion"
//variants
export const REGULAR_ACCORDION_COMPONENT = 'regular accordion'
// attributeNames
export const COLOR_ATTRIBUTE = "color";
export const SIZE_ATTRIBUTE = "size";
export const OPEN_ATTRIBUTE = "open";
export const TITLE_ATTRIBUTE = "title";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";
//size options
export const BIG_OPTION = "big";
export const SMALL_OPTION = "small";
export const SMALLEST_OPTION = "smallest";
// open options
export const OPENED_OPTION = "isOpen";
export const CLOSED_OPTION = "isClosed";
// title default option
export const TITLE_DEFAULT = "Title Accordion"

const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : BLACK_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : BIG_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: OPEN_ATTRIBUTE,
    defaultValue : CLOSED_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : TITLE_DEFAULT,
    proccessValue: (value) => {return   value}

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
 export const CONTAINER_SUBCOMPONENT = 'container'
 export const TITLE_SUBCOMPONENT = 'title'
 export const TEXT_TITLE_SUBCOMPONENT = 'text title'
 export const ICON_PARENT_TITLE_SUBCOMPONENT = 'icon parent title'
 export const ICON_CHILD_SUBCOMPONENT = 'icon child'
 export const CONTENT_SUBCOMPONENT = 'content'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const OPEN_ACCORDION_EVENT = 'open'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(OPEN_ACCORDION_EVENT)

export {EVENTS_OF_COMPONENT}