import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUPER_WRAPPER,
        CONTAINER_WRAPPER,
        CONTAINER_SUBWRAPPER,
        TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT,
        TITLE_SUBCOMPONENT, 
        TITLE_ITEM, 
        OPTION_SELECTED_SUBCOMPONENT, 
        ARROW_ICON_SUBCOMPONENT, 
        ARROW_ICON_CONTAINER, 
        ARROW_ICON_ITEM,
        OPTION_WRAPPER,
        OPTION_Ni_SUBCOMPONENT,
        OPTION_Ni_ITEM 
        } from "../constants.js"
import {TEMPORARY_ATTRIBUTE,
        STATE_ATTRIBUTE,
        OPTION_VALUE_ATTRIBUTE,
        DROPDOWN_VALUE_ATTRIBUTE,
        DROPDOWN_WIDTH_ATTRIBUTE,
        TITLE_ATTRIBUTE,
        OPTIONS_ATTRIBUTE,
        OPTIONS_VALUE_SUBATTRIBUTE,
        OPTIONS_TEXT_SUBATTRIBUTE } from "../constants.js"
import {NORMAL_OPTION,
        SELECTED_OPTION,
        OPEN_OPTION} from "../constants.js"
import {DEFAULT_EVENT, 
        SELECTION_EVENT, 
        OPEN_EVENT,
        HOVER_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"


import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, 
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {NAV_ARROW_ICON_OPTION} from "../../Icons/constants.js"
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT
// I
// I----------->CONTAINER_SUPER_WRAPPER
//                  I----------->CONTAINER_WRAPPER
//                                     I----------->CONTAINER_SUBWRAPPER
//                                     I                I----------->TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT
//                                     I                I               I----------->TITLE_SUBCOMPONENT
//                                     I                I               I                   I----------->TITLE_ITEM
//                                     I                I               I                                   I----------->TITLE_TEXT_NODE
//                                     I                I               I----------->OPTION_SELECTED_SUBCOMPONENT
//                                     I                I                                   I----------->OPTION_TEXT_NODE
//                                     I                I
//                                     I                I
//                                     I                I----------->ARROW_ICON_SUBCOMPONENT
//                                     I                                I----------->ARROW_ICON_CONTAINER
//                                     I                                                    I----------->ARROW_ICON_ITEM
//                                     I
//                                     I----------->OPTION_WRAPPER
//                                                      I----------->OPTION_Ni_SUBCOMPONENT
//                                                                      I----------->OPTION_Ni_ITEM
//                                                                                          I----------->OPTION_TEXT_NODE

class regDropdown extends HTMLElement {
constructor()
{
    super();      
    this[NORMAL_OPTION] = []
    this[SELECTED_OPTION] = []
    this[OPEN_OPTION] = []
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
    else if (state === SELECTED_OPTION)
    {
        this[SELECTED_OPTION].forEach( (style)=>  style())
    }
    else if (state === OPEN_OPTION)
    {
        this[OPEN_OPTION].forEach( (style)=>  style())
    }
}
pushingEvents (stylesProcessed) {
        this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
        this[SELECTED_OPTION].push(...stylesProcessed[SELECTION_EVENT])
        this[OPEN_OPTION].push(...stylesProcessed[OPEN_EVENT])
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
    this.removeAttribute(TEMPORARY_ATTRIBUTE)
    //Obtain an independent copy of the style Object selected
    this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
    //Calculate the height neccesary to deploy dropdown when it's open
    const containerWrapperHeight = parseInt(this.styles[CONTAINER_WRAPPER].height.slice(0, -2))
    const optionHeight = parseInt(this.styles[OPTION_Ni_SUBCOMPONENT].height.slice(0, -2))
    const totalHeight = containerWrapperHeight + optionHeight * attributes[OPTIONS_ATTRIBUTE].length
    // Establishing the height calculated when the dropdown is opened
    this.styles[CONTAINER_WRAPPER][OPEN_EVENT].height = `${totalHeight}px`

    //Check if the user established a width for the dropdown component
    if (attributes.hasOwnProperty(DROPDOWN_WIDTH_ATTRIBUTE)) 
    {
        this.styles[CONTAINER_WRAPPER].width = attributes[DROPDOWN_WIDTH_ATTRIBUTE]
        this.styles[CONTAINER_SUPER_WRAPPER].width = attributes[DROPDOWN_WIDTH_ATTRIBUTE]
    }

    //Component width dimensions and display
    thisComponent.style.width = this.styles[CONTAINER_WRAPPER].width
    thisComponent.style.display = 'block' 

    //Creation of all Subcomponents
    const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
    const slotElement = document.createElement('slot')
    const superWrapper = this.creatingElement(CONTAINER_SUPER_WRAPPER)
    const wrapper = this.creatingElement(CONTAINER_WRAPPER)
    const subwrapper = this.creatingElement(CONTAINER_SUBWRAPPER)
    const titleplusOptionSubcomponent = this.creatingElement(TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT)
    const titleSubcomponent = this.creatingElement(TITLE_SUBCOMPONENT)
    const titleItem = this.creatingElement(TITLE_ITEM)
    const textNodeTitleSubcomponent = document.createTextNode(attributes[TITLE_ATTRIBUTE])
    const optionSelectedSubcomponent = this.creatingElement(OPTION_SELECTED_SUBCOMPONENT)
    const textNodeOptionSelected = document.createTextNode(" ")
    const arrowIconSubcomponent = this.creatingElement(ARROW_ICON_SUBCOMPONENT)
    const arrowIconContainer = this.creatingElement(ARROW_ICON_CONTAINER)
    const arrowIcon = document.createElement(ICON)
    arrowIcon.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, NAV_ARROW_ICON_OPTION)
    arrowIcon.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE])
    arrowIcon.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[ARROW_ICON_ITEM][ICON_WIDTH_ATTRIBUTE])
    arrowIcon.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[ARROW_ICON_ITEM][ICON_HEIGHT_ATTRIBUTE])
    //  OPTIONS 
    const optionsWrapper = this.creatingElement(OPTION_WRAPPER)
    const OneOptionArray = []
    const solvingClosure = () =>
        {
            const indexCopy = i
            return () => {return indexCopy};
        }
    for (var i=0; i<attributes[OPTIONS_ATTRIBUTE].length;i++)
    {
        //Creation of all Subcomponents options
        const indexCopy = solvingClosure()()
        OneOptionArray.push(this.creatingElement(OPTION_Ni_SUBCOMPONENT))
        const oneOptItem = this.creatingElement(OPTION_Ni_ITEM)
        const textNodeOneOptItem = document.createTextNode(attributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_TEXT_SUBATTRIBUTE])

        //Appending subcomponents with its respective parent 
        optionsWrapper.appendChild(OneOptionArray[indexCopy])
        OneOptionArray[indexCopy].appendChild(oneOptItem)
        oneOptItem.appendChild(textNodeOneOptItem)

        //Adding some behaviour to the component
        OneOptionArray[indexCopy].onmouseover = () => {
            processStyle(OneOptionArray[indexCopy],this.styles[OPTION_Ni_SUBCOMPONENT])[HOVER_EVENT].forEach(style=> style())
        };
        OneOptionArray[indexCopy].onmouseout = () => {
            processStyle(OneOptionArray[indexCopy],this.styles[OPTION_Ni_SUBCOMPONENT])[DEFAULT_EVENT].forEach(style=> style())
        };

        OneOptionArray[indexCopy].onclick = (e) => {
            e.preventDefault();
            if (thisComponent.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) !== OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE)) 
            {
                thisComponent.setAttribute(DROPDOWN_VALUE_ATTRIBUTE, OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE))
                thisComponent.setAttribute(STATE_ATTRIBUTE, SELECTED_OPTION)
                textNodeOptionSelected.nodeValue = attributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_TEXT_SUBATTRIBUTE]
            }
            else if (thisComponent.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) === OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE)) thisComponent.setAttribute(DROPDOWN_VALUE_ATTRIBUTE,attributes[DROPDOWN_VALUE_ATTRIBUTE])
        }
        // Stating value attributes for the option-i-component
        OneOptionArray[indexCopy].setAttribute(OPTION_VALUE_ATTRIBUTE, attributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_VALUE_SUBATTRIBUTE])
        
    }
    //Appending subcomponents with its respective parent 
    this.shadow.appendChild(slotWrapper)
        slotWrapper.appendChild(slotElement)
    this.shadow.appendChild(superWrapper)
        superWrapper.appendChild(wrapper)
            wrapper.appendChild(subwrapper)
                subwrapper.appendChild(titleplusOptionSubcomponent)
                    titleplusOptionSubcomponent.appendChild(titleSubcomponent)
                        titleSubcomponent.appendChild(titleItem)
                            titleItem.appendChild(textNodeTitleSubcomponent)
                    titleplusOptionSubcomponent.appendChild(optionSelectedSubcomponent)
                        optionSelectedSubcomponent.appendChild(textNodeOptionSelected)
                subwrapper.appendChild(arrowIconSubcomponent)
                    arrowIconSubcomponent.appendChild(arrowIconContainer)
                        arrowIconContainer.appendChild(arrowIcon)
            wrapper.appendChild(optionsWrapper)

   //Adding some behaviour to the component
    subwrapper.onclick= () => {
        if (thisComponent.getAttribute(STATE_ATTRIBUTE) === NORMAL_OPTION) 
        {
            thisComponent.setAttribute(STATE_ATTRIBUTE, OPEN_OPTION)
        }
        else if (thisComponent.getAttribute(STATE_ATTRIBUTE) === OPEN_OPTION) 
        {
            thisComponent.setAttribute(STATE_ATTRIBUTE, NORMAL_OPTION)
        }
        else if (thisComponent.getAttribute(STATE_ATTRIBUTE) === SELECTED_OPTION) 
        {
            textNodeOptionSelected.nodeValue = " "
            thisComponent.setAttribute(DROPDOWN_VALUE_ATTRIBUTE,attributes[DROPDOWN_VALUE_ATTRIBUTE])
            thisComponent.setAttribute(STATE_ATTRIBUTE, OPEN_OPTION)
        }
    }
    document.addEventListener('click', function(event) {
        const isClickInsideElement = thisComponent.contains(event.target);
        if (!isClickInsideElement) 
        {
            if (thisComponent.getAttribute(STATE_ATTRIBUTE) === OPEN_OPTION)  thisComponent.setAttribute(STATE_ATTRIBUTE, NORMAL_OPTION)
        }
    });
    

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if(entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            if (contentBoxSize.blockSize=== (parseInt(this.styles[CONTAINER_WRAPPER].height.slice(0, -2))-2)) wrapper.style.zIndex = "initial"
            else if (contentBoxSize.blockSize===(totalHeight - 2)) wrapper.style.zIndex = "1"
          }
        }
      });
    resizeObserver.observe(wrapper);

    // Stating initial attributes for the component
    thisComponent.setAttribute(DROPDOWN_VALUE_ATTRIBUTE, attributes[DROPDOWN_VALUE_ATTRIBUTE])
    thisComponent.setAttribute(STATE_ATTRIBUTE, attributes[STATE_ATTRIBUTE])
}
}

const regularDropdown  = 'regular-dropdown'
if (customElements.get(regularDropdown) === undefined) customElements.define(regularDropdown, class extends regDropdown {});

export const regularDropdownSeat = function (attributes,parentElement)
{
    const dropdownList = []
    if (parentElement.getElementsByTagName('select').length>0)  dropdownList.push(parentElement.getElementsByTagName('select')[0].cloneNode(true))
    else {console.log("WARNING FOR THIS COMPONENT AT LEAST ONE CHILD NODE SHOULD HAVE SELECT TAG")}
    while (parentElement.hasChildNodes()) 
    {
            parentElement.removeChild(parentElement.firstChild);
    }
    //Parsing Options List
    const options = dropdownList[0].getElementsByTagName('option')
    const optionsObject = []
    if (dropdownList[0].hasAttribute(DROPDOWN_WIDTH_ATTRIBUTE)) attributes[DROPDOWN_WIDTH_ATTRIBUTE] = dropdownList[0].getAttribute(DROPDOWN_WIDTH_ATTRIBUTE)
    for (var i=0; i<options.length; i++)
    {
        const optObj = {}
        optObj[OPTIONS_VALUE_SUBATTRIBUTE] = options[i].getAttribute('value')
        optObj[OPTIONS_TEXT_SUBATTRIBUTE] = options[i].textContent
        optionsObject.push({...optObj})
    }
    const customDropdown = document.createElement(regularDropdown)
    if (dropdownList[0].hasAttribute('name')) attributes[TITLE_ATTRIBUTE] = dropdownList[0].getAttribute('name')
    attributes[OPTIONS_ATTRIBUTE] = optionsObject
    customDropdown.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    customDropdown.appendChild(dropdownList[0])

    const mutationCallback = (mutationsList) => {
        for (const mutation of mutationsList) 
        {
          if (mutation.type !== "attributes" || mutation.attributeName !== DROPDOWN_VALUE_ATTRIBUTE) return
          const dropdownValue =  mutation.target.getAttribute(DROPDOWN_VALUE_ATTRIBUTE)
          dropdownList[0].setAttribute('value',dropdownValue)
        }
    }
    const observerDropdown = new MutationObserver(mutationCallback)
    observerDropdown.observe(customDropdown, { attributes: true })

    return customDropdown;
}


