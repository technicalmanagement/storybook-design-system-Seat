import {NAME_OF_COMPONENT, NORMAL_OPTION} from './constants.js'
import {ATTRIBUTES, COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, STATE_ATTRIBUTE,ENABLE_ATTRIBUTE} from './constants.js'
import {setKeys} from './Styles/index.js'
import {COMPONENTS} from './variants/index.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
class radioButton extends HTMLElement {
    constructor()
    {
        super();        
    }
    connectedCallback() {
        const WebComponent = this
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const keysAttributes = {}
        keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
        keysAttributes[SIZE_ATTRIBUTE] = attributes[SIZE_ATTRIBUTE]
        keysAttributes[ENABLE_ATTRIBUTE] = attributes[ENABLE_ATTRIBUTE]
        keysAttributes[STATE_ATTRIBUTE] = attributes[STATE_ATTRIBUTE]
        const stylesKeys = setKeys(keysAttributes)
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        const radioButtonComponent = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        this.appendChild(radioButtonComponent)
      }
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends radioButton {});
export const SEAT_RADIO_BUTTON = NAME_OF_COMPONENT;