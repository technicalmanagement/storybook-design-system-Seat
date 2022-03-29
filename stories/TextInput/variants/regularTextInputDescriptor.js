import {CONTAINER_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT, 
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT, 
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        SUCCESS_ICON_CONTAINER_SUBCOMPONENT,
        SUCCESS_ICON_SUBCOMPONENT,
        ERROR_CONTAINER_SUBCOMPONENT, 
        DESCRIPTOR_SUBCOMPONENT,
        } from "../constants.js"
import {STATE_ATTRIBUTE, 
        TITLE_ATTRIBUTE,
        ERROR_MESSAGE_ATTRIBUTE,
        FORM_VALUE_ATTRIBUTE, 
        FORM_WIDTH_ATTRIBUTE,
        DESCRIPTOR_ATTRIBUTE } from "../constants.js"
import {NORMAL_OPTION,
        ACTIVE_OPTION, 
        VALIDATED_OPTION, 
        ERROR_OPTION,
        FILLED_OPTION} from "../constants.js"
import {DEFAULT_EVENT, 
        INPUT_EVENT, 
        VALIDATED_EVENT, 
        ERROR_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT,
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {SUCCESS_ICON_ANIMATED_ICON_OPTION} from "../../Icons/constants.js"
const TEMPORARY_ATTRIBUTE = 'temporary-attribute'
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                I                   I
// I                I                   I----------->TITLE_SUBCOMPONENT
// I                I                   I----------->TEXT_SUBCOMPONENT
// I                I
// I                I----------->SUCCESS_ICON_CONTAINER_SUBCOMPONENT
// I                                    I
// I                                    I----------->SUCCESS_ICON_SUBCOMPONENT
// I
// I----------->DESCRIPTOR_SUBCOMPONENT
// I
// I----------->ERROR_CONTAINER_SUBCOMPONENT
//                  I----------->ERROR_SUBCOMPONENT
class tiComponent extends HTMLElement {
constructor()
{
    super();      
    this[NORMAL_OPTION] = []
    this[ACTIVE_OPTION] = []
    this[VALIDATED_OPTION] = []
    this[ERROR_OPTION] = []
    this.styles = null
    this.shadow = this.attachShadow({mode: 'open'});

}
static get observedAttributes() { return [STATE_ATTRIBUTE]; }
attributeChangedCallback() 
{
    const state = this.getAttribute(STATE_ATTRIBUTE)
    if (state === NORMAL_OPTION)
    {
        
        this[NORMAL_OPTION].forEach( (style)=>  style())
    }
    else if (state === ERROR_OPTION)
    {
        this[ERROR_OPTION].forEach( (style)=>  style())
    }
    else if (state === ACTIVE_OPTION)
    {
        this[ACTIVE_OPTION].forEach( (style)=>  style())
    }
    else if (state === VALIDATED_OPTION)
    {
        this[VALIDATED_OPTION].forEach( (style)=>  style())
    }
}

connectedCallback() {
    const thisComponent = this
    const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
    thisComponent.setAttribute(FORM_VALUE_ATTRIBUTE, attributes[FORM_VALUE_ATTRIBUTE])
    this.removeAttribute(TEMPORARY_ATTRIBUTE)
    this.styles = setStyle(attributes[STYLE_KEY])
    
    const wrapper = document.createElement('div')
    const stylesProccessedWrapper = processStyle(wrapper,this.styles[CONTAINER_SUB_WRAPPER])
    this[NORMAL_OPTION].push(...stylesProccessedWrapper[DEFAULT_EVENT])
    this[ERROR_OPTION].push(...stylesProccessedWrapper[ERROR_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedWrapper[INPUT_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedWrapper[VALIDATED_EVENT])

    const textInputContainer = document.createElement('div')
    const stylesProccessedTextInputContainer = processStyle(textInputContainer,this.styles[TEXT_INPUT_CONTAINER_SUBCOMPONENT])

    this[NORMAL_OPTION].push(...stylesProccessedTextInputContainer[DEFAULT_EVENT])
    this[ERROR_OPTION].push(...stylesProccessedTextInputContainer[ERROR_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedTextInputContainer[INPUT_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedTextInputContainer[VALIDATED_EVENT])

    const titleTextContainer = document.createElement('div')
    const stylesProccessedTitleTextContainer = processStyle(titleTextContainer,this.styles[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedTitleTextContainer[DEFAULT_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedTitleTextContainer[INPUT_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedTitleTextContainer[VALIDATED_EVENT])
    textInputContainer.appendChild(titleTextContainer)

    const titleContainer = document.createElement('div')
    const stylesProccessedTitleContainer = processStyle(titleContainer,this.styles[TITLE_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedTitleContainer[DEFAULT_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedTitleContainer[INPUT_EVENT])
    const titleTextNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])
    titleContainer.appendChild(titleTextNode)
    titleTextContainer.appendChild(titleContainer)

    const inputContainer = document.createElement('input')
    inputContainer.setAttribute("type","text")
    inputContainer.onkeyup=()=> thisComponent.setAttribute(FORM_VALUE_ATTRIBUTE,inputContainer.value)
   
    const stylesProccessedInputContainer = processStyle(inputContainer,this.styles[TEXT_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedInputContainer[DEFAULT_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedInputContainer[INPUT_EVENT])
    this[ACTIVE_OPTION].push(()=> inputContainer.focus())
    titleTextContainer.appendChild(inputContainer)

    const succesIconContainer = document.createElement('div')
    const stylesProccessedIconContainer = processStyle(succesIconContainer,this.styles[SUCCESS_ICON_CONTAINER_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedIconContainer[DEFAULT_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedIconContainer[INPUT_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedIconContainer[VALIDATED_EVENT])
    textInputContainer.appendChild(succesIconContainer)

    const succesIcon = document.createElement(ICON)
    const stylesProccessedSuccessIcon= processStyle(succesIcon,this.styles[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedSuccessIcon[DEFAULT_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedSuccessIcon[VALIDATED_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedSuccessIcon[INPUT_EVENT])
    this[ERROR_OPTION].push(...stylesProccessedSuccessIcon[ERROR_EVENT])
    this[VALIDATED_OPTION].push(()=> succesIcon.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, SUCCESS_ICON_ANIMATED_ICON_OPTION))
    this[VALIDATED_OPTION].push(()=> succesIcon.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]))
    
    succesIcon.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
    succesIcon.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
    succesIconContainer.appendChild(succesIcon)

    const descriptorContainer = document.createElement('div')
    const stylesProccessedDescriptorContainer = processStyle(descriptorContainer,this.styles[DESCRIPTOR_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedDescriptorContainer[DEFAULT_EVENT])

    const textNodeDescriptorMessage = document.createTextNode(attributes[DESCRIPTOR_ATTRIBUTE])
    descriptorContainer.appendChild(textNodeDescriptorMessage)

    const errorContainer = document.createElement('div')
    const stylesProccessedErrorContainer = processStyle(errorContainer,this.styles[ERROR_CONTAINER_SUBCOMPONENT])
    this[NORMAL_OPTION].push(...stylesProccessedErrorContainer[DEFAULT_EVENT])
    this[ERROR_OPTION].push(...stylesProccessedErrorContainer[ERROR_EVENT])
    this[VALIDATED_OPTION].push(...stylesProccessedErrorContainer[VALIDATED_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessedErrorContainer[INPUT_EVENT])


    const textNodeErrorMessage = document.createTextNode(attributes[ERROR_MESSAGE_ATTRIBUTE])
    errorContainer.appendChild(textNodeErrorMessage)

    wrapper.appendChild(textInputContainer)
    wrapper.appendChild(descriptorContainer)
    wrapper.appendChild(errorContainer)
    
    this.shadow.appendChild(wrapper)
    this[NORMAL_OPTION].forEach( (style)=>  style())
    this.setAttribute(STATE_ATTRIBUTE,attributes[STATE_ATTRIBUTE])

}
}

const regularTextInput  = 'regular-text-input-descriptor'
if (customElements.get(regularTextInput) === undefined) customElements.define(regularTextInput, class extends tiComponent {});
export const regularTextInputDescriptorSeat = function (attributes,parentElement)
{
const styles = {...setStyle(attributes[STYLE_KEY])}
if (attributes[FORM_WIDTH_ATTRIBUTE]!== "") styles[CONTAINER_WRAPPER].width = attributes[FORM_WIDTH_ATTRIBUTE]
const wrapper = document.createElement('div')
const stylesProccessedWrapper = processStyle(wrapper,styles[CONTAINER_WRAPPER])
const customTextInput = document.createElement(regularTextInput)
customTextInput.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
stylesProccessedWrapper[DEFAULT_EVENT].forEach(style => style())
wrapper.appendChild(customTextInput)
document.addEventListener('click', function(event) {
    const isClickInsideElement = wrapper.contains(event.target);
    if (isClickInsideElement) 
    {
        customTextInput.setAttribute(STATE_ATTRIBUTE,ACTIVE_OPTION)
    }
    else 
    {
        if (customTextInput.getAttribute(FORM_VALUE_ATTRIBUTE)=="" && customTextInput.getAttribute(STATE_ATTRIBUTE)!== NORMAL_OPTION) customTextInput.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)
        else 
        {
            if (customTextInput.getAttribute(STATE_ATTRIBUTE)!== FILLED_OPTION) customTextInput.setAttribute(STATE_ATTRIBUTE,FILLED_OPTION)
        }
    }
});
const mutationCallback = (mutationsList) => {
    for (const mutation of mutationsList) 
    {
      if (mutation.type !== "attributes" || mutation.attributeName !== FORM_VALUE_ATTRIBUTE) return
      const formV =  mutation.target.getAttribute(FORM_VALUE_ATTRIBUTE)
      parentElement.setAttribute(FORM_VALUE_ATTRIBUTE,formV)
    }
}
const observer = new MutationObserver(mutationCallback)
observer.observe(customTextInput, { attributes: true })
return wrapper;
}