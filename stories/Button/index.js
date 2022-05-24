
import {ICON_ATTRIBUTE,
  ICON_SELECTION_ATTRIBUTE,
  CHILDREN_ATTRIBUTE,
  SIZE_ATTRIBUTE
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
  const WebComponent = this
  WebComponent.style.display = 'none'
  const construction = () => {
  const buttonOrAnchor = []
  //CREATION OF A DEFAULT BUTTON IF NOTHING IS APPENDED 
  const buttonDefault = document.createElement('button')
  const textNode = document.createTextNode('Call to action')
  buttonDefault.appendChild(textNode)
  buttonDefault.onclick = () => {alert('Call to action')}
  buttonOrAnchor.push(buttonDefault)
  if (WebComponent.getElementsByTagName('button').length>0) 
  {
      buttonOrAnchor.pop()
      buttonOrAnchor.push(WebComponent.getElementsByTagName('button')[0])
  }
  else if (WebComponent.getElementsByTagName('a').length>0) 
  {
      buttonOrAnchor.pop()
      buttonOrAnchor.push(WebComponent.getElementsByTagName('a')[0])
  }
  const slotContainer = document.createElement('div')
  slotContainer.style.display = 'none'
  const slotSubComponent = document.createElement('slot')

  const attributes = {}
  ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
      if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
      else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                  })
  if (!WebComponent.getAttribute(SIZE_ATTRIBUTE)) WebComponent.setAttribute(SIZE_ATTRIBUTE,attributes[SIZE_ATTRIBUTE])
  
  const keysAttributes = {...attributes}
  delete keysAttributes[CHILDREN_ATTRIBUTE];
  delete keysAttributes[ICON_SELECTION_ATTRIBUTE];
  if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) keysAttributes[ICON_ATTRIBUTE] = OFF_OPTION
  else keysAttributes[ICON_ATTRIBUTE] = ON_OPTION
  
  
  const stylesKeys = setKeys(keysAttributes)
  
  attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
  attributes[CHILDREN_ATTRIBUTE] = buttonOrAnchor[0].textContent
  const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes)
  button.onclick = () => {buttonOrAnchor[0].click()}
 
  WebComponent.shadow.appendChild(slotContainer)
      slotContainer.appendChild(slotSubComponent)
  WebComponent.shadow.appendChild(button) 
  WebComponent.style.display = 'contents'
  }
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', construction);
  } else {  // `DOMContentLoaded` has already fired
    construction();
  }
}
}


if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const SEAT_BUTTON = NAME_OF_COMPONENT;

export const CONTENT_TO_APPEND = 'Content to Append (using HTML tags)'

export const createSeatButton = (props) => {
 
  console.log(props)
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