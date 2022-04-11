
import {ICON_SELECTION_ATTRIBUTE,
    CHILDREN_ATTRIBUTE,
    } from "../constants.js"
import {DEFAULT_EVENT, HOVER_BUTTON_EVENT} from "../constants.js"
import {BUTTON_SUBCOMPONENT, TEXT_SUBCOMPONENT, ICON_CONTAINER_SUBCOMPONENT, ICON_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"


import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, 
     ICON_HEIGHT_ATTRIBUTE,
     ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

export const regularButtonIcon = function (attributes,elementToAppend)
{
const styleKey = attributes[STYLE_KEY]
const styles = setStyle(styleKey)
if (elementToAppend[0].textContent) attributes[CHILDREN_ATTRIBUTE] = elementToAppend[0].textContent
const button = elementToAppend[0]
while (button.hasChildNodes()) 
{
        button.removeChild(button.firstChild);
}
const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]

const iconParent = document.createElement('div')
const stylesProccessedIcon = processStyle (iconParent, styles[ICON_CONTAINER_SUBCOMPONENT])
onMouseOutButtonStyles.push(...stylesProccessedIcon[DEFAULT_EVENT])
onMouseOverButtonStyles.push(...stylesProccessedIcon[HOVER_BUTTON_EVENT])
const iconChild = document.createElement(ICON)
iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT].color)
iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE, styles[ICON_SUBCOMPONENT].height)
iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE, styles[ICON_SUBCOMPONENT].width)
iconParent.appendChild(iconChild)
button.appendChild(iconParent)    
const textNode = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
const textButton = document.createElement('div')
const stylesProccessedText = processStyle(textButton,styles[TEXT_SUBCOMPONENT])
onMouseOutButtonStyles.push(...stylesProccessedText[DEFAULT_EVENT])
onMouseOverButtonStyles.push(...stylesProccessedText[HOVER_BUTTON_EVENT])
textButton.appendChild(textNode)
button.appendChild(textButton)
onMouseOutButtonStyles.forEach( (style)=> style())
button.onmouseover = () => onMouseOverButtonStyles.forEach((style)=> style())
button.onmouseout = () => onMouseOutButtonStyles.forEach((style)=> style()) 
return button;
}








