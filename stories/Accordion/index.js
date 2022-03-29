import { COMPONENTS } from "./variants/index.js";
import { CUSTOM_ELEMENT_NAME } from "./constants.js";
import { ATTRIBUTES } from "./constants.js";
import { OPEN_ATTRIBUTE, TITLE_ATTRIBUTE } from "./constants.js";
import { setKeys } from "./styles/index.js";
import {COMPONENT_VARIANT_KEY, STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
class vanillaAccordion extends HTMLElement {
    constructor()
    {
        super();
    }
  
    connectedCallback() {
        
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const styleAttributes = {...attributes}
        delete styleAttributes[OPEN_ATTRIBUTE];
        delete styleAttributes[TITLE_ATTRIBUTE];
        const keys = setKeys(styleAttributes)
        attributes[STYLE_KEY] = keys[STYLE_KEY]
        const accordion = COMPONENTS[keys[COMPONENT_VARIANT_KEY]] (attributes)
        const divWrapper = document.createElement('div')
        const children = [...this.children]
        for (var i=0;i<children.length;i++)
        {
            divWrapper.appendChild(children[i])
        }
        accordion.appendChild(divWrapper)
        this.appendChild(accordion)
      }
}

if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends vanillaAccordion {});
export const SEAT_ACCORDION = CUSTOM_ELEMENT_NAME;


const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'
export const createSeatAccordion = (props) => {
    const accordion = document.createElement(SEAT_ACCORDION)
    var parser = new DOMParser();
	var doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    var children = [...doc.body.children]
    for (var i=0;i<children.length;i++)
        {
            accordion.appendChild(children[i])
        }
    console.log(accordion)
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) accordion.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
    return accordion
}