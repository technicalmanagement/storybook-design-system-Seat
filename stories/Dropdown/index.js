import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
// nombre de atributos
import {COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, STATE_ATTRIBUTE} from "./constants.js"
// nombre de options
import {setKeys} from './styles/index.js'
import {COMPONENTS} from './variants/index.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
class SeatDropdown extends HTMLElement {
    constructor()
    {
        super();
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (this.children.length>0) this.children[0].setAttribute(STATE_ATTRIBUTE,state)
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
        const stylesKeys = setKeys(keysAttributes)
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        const dropdown = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        
        this.style.display = 'contents'
        this.appendChild(dropdown)
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SeatDropdown {});
export const SEAT_DROPDOWN = NAME_OF_COMPONENT;
export const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'
export const createSeatDropdown = (props) => {
    const dropdownElement = document.createElement(SEAT_DROPDOWN)

    const parser = new DOMParser();
	const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    const children = [...doc.body.children]


    dropdownElement.appendChild(children[0])

    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) dropdownElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
    
        
    return dropdownElement;
}