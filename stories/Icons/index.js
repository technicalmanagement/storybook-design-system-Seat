import { ICON_ATTRIBUTES, 
         ICON_SELECTION_ATTRIBUTE} from './constants.js';
import {ICON_WIDTH_ATTRIBUTE,ICON_HEIGHT_ATTRIBUTE, ICON_COLOR_ATTRIBUTE} from "./constants.js"
import { PARTICULAR_ICON_COMPONENT_ATTRIBUTE } from './constants.js';
import {NAME_OF_COMPONENT} from './constants.js'
import components from './variants/index.js'
import icons from './allIcons.js'
export  class SvgIconSeat extends HTMLElement {
    constructor() 
    {
        super();
    }
    static get observedAttributes() { return [ICON_COLOR_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        this.connectedCallback()
    }
    connectedCallback() 
    {
        const attributes = {}
        ICON_ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
        if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
        else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
        })
        const iconSelected = attributes[ICON_SELECTION_ATTRIBUTE]
        attributes[ICON_SELECTION_ATTRIBUTE] = icons[iconSelected]
        const functionComponent = attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_COMPONENT_ATTRIBUTE] 
        const svgEl = components[functionComponent](attributes)
        this.innerHTML=`${svgEl.outerHTML}`
        this.style.width = attributes[ICON_WIDTH_ATTRIBUTE]
        this.style.height = attributes [ICON_HEIGHT_ATTRIBUTE] 
    }
}
customElements.define(NAME_OF_COMPONENT, class extends SvgIconSeat {});
export const ICON = NAME_OF_COMPONENT;

