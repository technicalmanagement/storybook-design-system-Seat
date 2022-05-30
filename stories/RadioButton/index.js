import {NAME_OF_COMPONENT, NORMAL_OPTION} from './constants.js'
import {ATTRIBUTES, COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, STATE_ATTRIBUTE,ENABLE_ATTRIBUTE} from './constants.js'
import {setKeys} from './styles/index.js'
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
export const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'
export const createSeatRadioButton = (props) => {
    const radioButtonElement = document.createElement(SEAT_RADIO_BUTTON)

    const parser = new DOMParser();
	const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    const children = [...doc.body.children]
    console.log(children)

    radioButtonElement.appendChild(children[0])
    radioButtonElement.appendChild(children[1])

    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) radioButtonElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
            
    return radioButtonElement;
}