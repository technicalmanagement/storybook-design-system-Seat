import {CONTAINER_SLOT_WRAPPER,
    CONTAINER_SUB_WRAPPER,
    TEXT_INPUT_CONTAINER_SUBCOMPONENT, 
    TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT, 
    TITLE_SUBCOMPONENT,
    TEXT_SUBCOMPONENT,
    ALL_ICONS_CONTAINER,
    ICON_CONTAINER_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    SUCCESS_ICON_CONTAINER_SUBCOMPONENT,
    SUCCESS_ICON_SUBCOMPONENT,
    DESCRIPTOR_SUBCOMPONENT,
    ERROR_CONTAINER_SUBCOMPONENT, 
    } from "../constants.js"
import {STATE_ATTRIBUTE,   
    TITLE_ATTRIBUTE,
    ERROR_MESSAGE_ATTRIBUTE, 
    FORM_VALUE_ATTRIBUTE, 
    FORM_WIDTH_ATTRIBUTE, 
    ICON_SELECTION_ATTRIBUTE, 
    DESCRIPTOR_ATTRIBUTE } from "../constants.js"
import {DEFAULT_EVENT, 
    INPUT_EVENT, 
    VALIDATED_EVENT, 
    ERROR_EVENT } from "../constants.js"
import {NORMAL_OPTION,
    ACTIVE_OPTION, 
    VALIDATED_OPTION, 
    ERROR_OPTION,
    FILLED_OPTION} from "../constants.js"
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
// I                I----------->ALL_ICONS_CONTAINER
// I                                I
// I                                I----------->ICON_CONTAINER_SUBCOMPONENT
// I                                I               I
// I                                I               I----------->ICON_SUBCOMPONENT
// I                                I               
// I                                I----------->SUCCESS_ICON_CONTAINER_SUBCOMPONENT
// I                                                I
// I                                                I----------->SUCCESS_ICON_SUBCOMPONENT
// I
// I----------->DESCRIPTOR_SUBCOMPONENT
// I
// I----------->ERROR_CONTAINER_SUBCOMPONENT
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
pushingEvents (stylesProcessed) {

this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
this[ACTIVE_OPTION].push(...stylesProcessed[INPUT_EVENT])
this[VALIDATED_OPTION].push(...stylesProcessed[VALIDATED_EVENT])
this[ERROR_OPTION].push(...stylesProcessed[ERROR_EVENT])
}
creatingElement (NAME_OF_SUBCOMPONENT) 
{
const subComponent = document.createElement('div')
const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
this.pushingEvents(stylesProccessed)
return subComponent;
}
connectedCallback() {
const thisComponent = this
const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
thisComponent.setAttribute(FORM_VALUE_ATTRIBUTE, attributes[FORM_VALUE_ATTRIBUTE])
this.removeAttribute(TEMPORARY_ATTRIBUTE)

    
this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
if (attributes[FORM_WIDTH_ATTRIBUTE]!== "") this.styles[CONTAINER_SUB_WRAPPER].width = attributes[FORM_WIDTH_ATTRIBUTE]

//Component width dimensions and display
thisComponent.style.width = this.styles[CONTAINER_SUB_WRAPPER].width
thisComponent.style.minWidth = this.styles[CONTAINER_SUB_WRAPPER].minWidth
thisComponent.style.display = 'block' 

//Creation of all Subcomponents
const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
const inputSlot = document.createElement('slot')
const wrapper = this.creatingElement(CONTAINER_SUB_WRAPPER)
const textInputContainer = this.creatingElement(TEXT_INPUT_CONTAINER_SUBCOMPONENT)
const titleTextContainer = this.creatingElement(TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT)
const titleContainer = this.creatingElement(TITLE_SUBCOMPONENT)
const titleTextNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])

const inputContainer = document.createElement('input')
inputContainer.setAttribute("type","text")
inputContainer.onkeyup = ()=> {
    thisComponent.setAttribute(FORM_VALUE_ATTRIBUTE,inputContainer.value)
    inputSlot.assignedElements()[0].setAttribute('value',inputContainer.value)
}
const stylesProccessedInputContainer = processStyle(inputContainer,this.styles[TEXT_SUBCOMPONENT])
this.pushingEvents(stylesProccessedInputContainer)
this[ACTIVE_OPTION].push(()=> inputContainer.focus())

const allIconsContainer = this.creatingElement(ALL_ICONS_CONTAINER)
const iconSelectedContainer = this.creatingElement(ICON_CONTAINER_SUBCOMPONENT)

const iconSelected = document.createElement(ICON)
iconSelected.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
iconSelected.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
iconSelected.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
iconSelected.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE])

const succesIconContainer = this.creatingElement(SUCCESS_ICON_CONTAINER_SUBCOMPONENT)
const succesIcon = document.createElement(ICON)
const stylesProccessedSuccessIcon= processStyle(succesIcon,this.styles[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT])
this.pushingEvents(stylesProccessedSuccessIcon)
this[VALIDATED_OPTION].push(()=> succesIcon.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, SUCCESS_ICON_ANIMATED_ICON_OPTION))
this[VALIDATED_OPTION].push(()=> succesIcon.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]))
succesIcon.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
succesIcon.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])

const descriptorContainer = this.creatingElement(DESCRIPTOR_SUBCOMPONENT)
const textNodeDescriptorMessage = document.createTextNode(attributes[DESCRIPTOR_ATTRIBUTE])
const errorContainer = this.creatingElement(ERROR_CONTAINER_SUBCOMPONENT)
const textNodeErrorMessage = document.createTextNode(attributes[ERROR_MESSAGE_ATTRIBUTE])
//Appending subcomponents with its respective parent
this.shadow.appendChild(slotWrapper)
slotWrapper.appendChild(inputSlot)
this.shadow.appendChild(wrapper)
    wrapper.appendChild(textInputContainer)
        textInputContainer.appendChild(titleTextContainer)
            titleTextContainer.appendChild(titleContainer)
                titleContainer.appendChild(titleTextNode)
            titleTextContainer.appendChild(inputContainer)
        textInputContainer.appendChild(allIconsContainer)
            allIconsContainer.appendChild(iconSelectedContainer)
                iconSelectedContainer.appendChild(iconSelected)
            allIconsContainer.appendChild(succesIconContainer)
                succesIconContainer.appendChild(succesIcon)
    wrapper.appendChild(descriptorContainer)
        descriptorContainer.appendChild(textNodeDescriptorMessage)
    wrapper.appendChild(errorContainer)
        errorContainer.appendChild(textNodeErrorMessage)


//Adding some behaviour to the component
document.addEventListener('click', function(event) {
    const isClickInsideElement = thisComponent.contains(event.target);
    if (isClickInsideElement && thisComponent.getAttribute(STATE_ATTRIBUTE)!== ERROR_OPTION && thisComponent.getAttribute(STATE_ATTRIBUTE)!== VALIDATED_OPTION) 
    {
        thisComponent.setAttribute(STATE_ATTRIBUTE,ACTIVE_OPTION)
    }
    else 
    {
        if (thisComponent.getAttribute(FORM_VALUE_ATTRIBUTE)=="" && thisComponent.getAttribute(STATE_ATTRIBUTE)!== NORMAL_OPTION) thisComponent.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)
        else 
        {
            if (thisComponent.getAttribute(STATE_ATTRIBUTE)!== ERROR_OPTION && thisComponent.getAttribute(STATE_ATTRIBUTE)!== VALIDATED_OPTION && thisComponent.getAttribute(FORM_VALUE_ATTRIBUTE)!=="") thisComponent.setAttribute(STATE_ATTRIBUTE,FILLED_OPTION)
        }
    }
});

// Stating initial attributes for the component
this[NORMAL_OPTION].forEach( (style)=>  style())
this.setAttribute(STATE_ATTRIBUTE,attributes[STATE_ATTRIBUTE])

}
}

const regularTextInput  = 'icon-text-input-descriptor'
if (customElements.get(regularTextInput) === undefined) customElements.define(regularTextInput, class extends tiComponent {});
export const iconTextInputDescriptorSeat = function (attributes,parentElement)
{
const contentToAppend = {}
const inputElement = 'inputElement'
if (parentElement.getElementsByTagName('input').length>0)  
{
    if (contentToAppend[inputElement] = parentElement.getElementsByTagName('input')[0].type === 'text')
    {
        contentToAppend[inputElement] = parentElement.getElementsByTagName('input')[0].cloneNode(true)
    }
}
while (parentElement.hasChildNodes()) 
{
        parentElement.removeChild(parentElement.firstChild);
}
const customTextInput = document.createElement(regularTextInput)
customTextInput.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

const mutationCallback = (mutationsList) => {
for (const mutation of mutationsList) 
{
  if (mutation.type !== "attributes" || mutation.attributeName !== FORM_VALUE_ATTRIBUTE) return
  const formV =  mutation.target.getAttribute(FORM_VALUE_ATTRIBUTE)
  //if (parentElement.getAttribute(STATE_ATTRIBUTE)=== ERROR_OPTION) parentElement.setAttribute(STATE_ATTRIBUTE, ACTIVE_OPTION)
  parentElement.setAttribute(FORM_VALUE_ATTRIBUTE,formV)
}
}
customTextInput.appendChild(contentToAppend[inputElement])
const observer = new MutationObserver(mutationCallback)
observer.observe(customTextInput, { attributes: true })
return customTextInput;
}