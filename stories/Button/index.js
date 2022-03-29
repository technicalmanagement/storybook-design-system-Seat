import {ICON_SELECTION_ATTRIBUTE,
  CHILDREN_ATTRIBUTE,
  ONCLICK_ATTRIBUTE} from "./constants.js"
import {ATTRIBUTES} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"


class vanillaButton extends HTMLElement {
constructor()
{
  super();
  this.shadow = this.attachShadow({mode: 'open'});
  
}
connectedCallback() {
  
  const attributes = {}
  ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
      if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
      else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                  })
  const keysAttributes = {...attributes}
  delete keysAttributes[CHILDREN_ATTRIBUTE];
  delete keysAttributes[ONCLICK_ATTRIBUTE];
  delete keysAttributes[ICON_SELECTION_ATTRIBUTE];
  const stylesKeys = setKeys(keysAttributes)
  
  const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes,stylesKeys[STYLE_KEY])
  if (this.shadow.children.length === 0) this.shadow.appendChild(button)
  
}
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const SEAT_BUTTON = NAME_OF_COMPONENT;

export const createSeatButton = (props) => {
 
  console.log(props)
  const btn = document.createElement(SEAT_BUTTON);
  ATTRIBUTES.forEach((ATTRIBUTE)=> {
    if (props.hasOwnProperty(ATTRIBUTE.attributeName)) btn.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
  })
  
  return btn;
}