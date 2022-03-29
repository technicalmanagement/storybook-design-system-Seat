import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        ICON_ON_ATTRIBUTE,
        DESCRIPTOR_ON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        DESCRIPTOR_ATTRIBUTE,
        STATE_ATTRIBUTE} from './constants.js'
import {ICON_DEFAULT,
        DESCRIPTOR_DEFAULT,
        DESCRIPTOR_ON_OPTION,
        DESCRIPTOR_OFF_OPTION,
        ICON_OFF_OPTION,
        ICON_ON_OPTION} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
class SeatTI extends HTMLElement {
    constructor()
    {
        super();
        
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (this.children.length>0) this.children[0].children[0].setAttribute(STATE_ATTRIBUTE,state)
    }
    connectedCallback() {
        const WebComponent = this
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const keysAttributes = {}
        keysAttributes[SIZE_ATTRIBUTE] = attributes[SIZE_ATTRIBUTE]
        keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
        if (attributes[DESCRIPTOR_ATTRIBUTE] === DESCRIPTOR_DEFAULT) keysAttributes[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION
        else if (attributes[DESCRIPTOR_ATTRIBUTE] !== DESCRIPTOR_DEFAULT) keysAttributes[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION

        if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) keysAttributes[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION
        else if (attributes[ICON_SELECTION_ATTRIBUTE] !== ICON_DEFAULT) keysAttributes[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION

        const stylesKeys = setKeys(keysAttributes) 
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        const container = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        this.appendChild(container)
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SeatTI {});
export const SEAT_TEXT_INPUT = NAME_OF_COMPONENT;

