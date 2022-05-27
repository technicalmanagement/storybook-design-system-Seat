import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT, 
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT, 
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT} from "../constants.js"
import {STATE_ATTRIBUTE,
        TITLE_ATTRIBUTE,
        FORM_VALUE_ATTRIBUTE,
        FORM_WIDTH_ATTRIBUTE,
        TEMPORARY_ATTRIBUTE} from "../constants.js"
import {NORMAL_OPTION,
        ACTIVE_OPTION,
        VALIDATED_OPTION,
        FILLED_OPTION} from "../constants.js"
import {DEFAULT_EVENT, 
        INPUT_EVENT, 
        VALIDATED_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
//                  I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
//                                      I
//                                      I----------->TITLE_SUBCOMPONENT
//                                      I----------->TEXT_SUBCOMPONENT
//                  

class taComponent extends HTMLElement {
    constructor()
    {
        super();      
        this[NORMAL_OPTION] = []
        this[ACTIVE_OPTION] = []
        this[VALIDATED_OPTION] = []
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
        this.style.display = 'contents' 
        
        //Creation of all Subcomponents
        const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
        const inputSlot = document.createElement('slot')
        const wrapper = this.creatingElement(CONTAINER_SUB_WRAPPER)
        const textInputContainer = this.creatingElement(TEXT_INPUT_CONTAINER_SUBCOMPONENT)
        const titleTextContainer = this.creatingElement(TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT)
        const titleContainer = this.creatingElement(TITLE_SUBCOMPONENT)
        const titleTextNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])
        
        const inputContainer = document.createElement('div')
        inputContainer.setAttribute("contenteditable","true")
        inputContainer.onkeyup = ()=> {
            thisComponent.setAttribute(FORM_VALUE_ATTRIBUTE,inputContainer.innerText)
            inputSlot.assignedElements()[0].innerText = inputContainer.innerText
            }
        const stylesProccessedInputContainer = processStyle(inputContainer,this.styles[TEXT_SUBCOMPONENT])
        this.pushingEvents(stylesProccessedInputContainer)
        this[ACTIVE_OPTION].push(()=> inputContainer.focus())
        
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper)
            slotWrapper.appendChild(inputSlot)
        this.shadow.appendChild(wrapper)
            wrapper.appendChild(textInputContainer)
                textInputContainer.appendChild(titleTextContainer)
                    titleTextContainer.appendChild(titleContainer)
                        titleContainer.appendChild(titleTextNode)
                    titleTextContainer.appendChild(inputContainer)

        //Adding some behaviour to the component
        document.addEventListener('click', function(event) {
            const isClickInsideElement = thisComponent.contains(event.target);
            if (isClickInsideElement && thisComponent.getAttribute(STATE_ATTRIBUTE)!== VALIDATED_OPTION) 
            {
                thisComponent.setAttribute(STATE_ATTRIBUTE,ACTIVE_OPTION)
            }
            else 
            {
                if (thisComponent.getAttribute(FORM_VALUE_ATTRIBUTE)=="" && thisComponent.getAttribute(STATE_ATTRIBUTE)!== NORMAL_OPTION) thisComponent.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)
                else 
                {
                    if (thisComponent.getAttribute(STATE_ATTRIBUTE)!== VALIDATED_OPTION && thisComponent.getAttribute(FORM_VALUE_ATTRIBUTE)!=="") 
                    {
                        inputContainer.blur()
                        thisComponent.setAttribute(STATE_ATTRIBUTE,FILLED_OPTION)
                    }
                }
            }
        });
        

        this[NORMAL_OPTION].forEach( (style)=>  style())
        this.setAttribute(STATE_ATTRIBUTE,attributes[STATE_ATTRIBUTE])

    }
}

const regularTextArea  = 'regular-textarea'
if (customElements.get(regularTextArea) === undefined) customElements.define(regularTextArea, class extends taComponent {});
export const regularTextareaSeat = function (attributes,parentElement)
{
    const contentToAppend = {}
    const inputElement = 'inputElement'
    if (parentElement.getElementsByTagName('textarea').length>0)  
    {
            contentToAppend[inputElement] = parentElement.getElementsByTagName('textarea')[0]
    }
    
    const customTextarea = document.createElement(regularTextArea)
    customTextarea.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    
    const mutationCallback = (mutationsList) => {
        for (const mutation of mutationsList) 
        {
          if (mutation.type !== "attributes" || mutation.attributeName !== FORM_VALUE_ATTRIBUTE) return
          const formV =  mutation.target.getAttribute(FORM_VALUE_ATTRIBUTE)
          parentElement.setAttribute(FORM_VALUE_ATTRIBUTE,formV)
        }
    }
    customTextarea.appendChild(contentToAppend[inputElement])
    const observer = new MutationObserver(mutationCallback)
    observer.observe(customTextarea, { attributes: true })
    return customTextarea;
}