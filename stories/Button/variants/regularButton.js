
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {CHILDREN_ATTRIBUTE,
        ONCLICK_ATTRIBUTE} from "../constants.js"
import {DEFAULT_EVENT, HOVER_BUTTON_EVENT} from "../constants.js"
import {BUTTON_SUBCOMPONENT, TEXT_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"

export const regularButton = function (attributes,elementToAppend)
{
    if (elementToAppend[0].textContent) attributes[CHILDREN_ATTRIBUTE] = elementToAppend[0].textContent
    const button = elementToAppend[0]
    while (button.hasChildNodes()) 
    {
            button.removeChild(button.firstChild);
    }
    const styleKey = attributes[STYLE_KEY]
    const styles = setStyle(styleKey)
    
    const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
    const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
    const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]
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


