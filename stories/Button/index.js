import {ICON_ATTRIBUTE,
  ICON_SELECTION_ATTRIBUTE,
  CHILDREN_ATTRIBUTE,
  ONCLICK_ATTRIBUTE,
  } from "./constants.js"
import {ON_OPTION,
  OFF_OPTION,
  ICON_DEFAULT } from "./constants.js"
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
  
  const buttonOrAnchor = []
  const buttonDefault = document.createElement('button')
  const textNode = document.createTextNode('Call to action')
  buttonDefault.appendChild(textNode)
  buttonDefault.onclick = () => {alert('Call to action')}
  buttonOrAnchor.push(buttonDefault)
  if (this.getElementsByTagName('button').length>0) 
  {
      buttonOrAnchor.pop()
      buttonOrAnchor.push(this.getElementsByTagName('button')[0].cloneNode(true))
  }
  else if (this.getElementsByTagName('a').length>0) 
  {
      buttonOrAnchor.pop()
      buttonOrAnchor.push(this.getElementsByTagName('a')[0].cloneNode(true))
  }
  const attributes = {}
  ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
      if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
      else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                  })
  const keysAttributes = {...attributes}
  delete keysAttributes[CHILDREN_ATTRIBUTE];
  delete keysAttributes[ONCLICK_ATTRIBUTE];
  delete keysAttributes[ICON_SELECTION_ATTRIBUTE];

  if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) keysAttributes[ICON_ATTRIBUTE] = OFF_OPTION
  else keysAttributes[ICON_ATTRIBUTE] = ON_OPTION
  const stylesKeys = setKeys(keysAttributes)
  
  attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
  const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes,buttonOrAnchor)
  //if (this.shadow.children.length === 0) this.shadow.appendChild(button)
  const slotContainer = document.createElement('div')
  slotContainer.style.display = 'none'
  
  const slotSubComponent = document.createElement('slot')
  slotContainer.appendChild(slotSubComponent)
  this.shadow.appendChild(slotContainer)
  this.shadow.appendChild(button)
  
}
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const SEAT_BUTTON = NAME_OF_COMPONENT;

export const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'

export const createSeatButton = (props) => {
 
  const btn = document.createElement(SEAT_BUTTON);
  const parser = new DOMParser();
	const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
  const children = [...doc.body.children]
  btn.appendChild(children[0])
  ATTRIBUTES.forEach((ATTRIBUTE)=> {
    if (props.hasOwnProperty(ATTRIBUTE.attributeName)) btn.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    
  })
  
  return btn;
}