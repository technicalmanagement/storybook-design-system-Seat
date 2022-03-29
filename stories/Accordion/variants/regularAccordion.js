import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {OPENED_OPTION, CLOSED_OPTION, OPEN_ATTRIBUTE, TITLE_ATTRIBUTE} from "../constants.js"
import { OPEN_ACCORDION_EVENT, DEFAULT_EVENT } from "../constants.js"
import {CONTAINER_SUBCOMPONENT, TITLE_SUBCOMPONENT, TEXT_TITLE_SUBCOMPONENT, ICON_PARENT_TITLE_SUBCOMPONENT, ICON_CHILD_SUBCOMPONENT , CONTENT_SUBCOMPONENT} from "../constants.js"

import {PLUS_ICON_OPTION, MINUS_ICON_OPTION} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE } from "../../Icons/constants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"

const TEMPORARY_ATTRIBUTE = 'temporary-attribute'
class vanillaRegularAccordion extends HTMLElement {
    constructor()
    {
        super();
        this.styles = null
        this.openStyles = []
        this.closeStyles = []
        this.iconParent = document.createElement('div')
        this.slotty = null        
        this.shadow = this.attachShadow({mode: 'open'});

    }
    static get observedAttributes() { return [OPEN_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(OPEN_ATTRIBUTE)
        if (state === OPENED_OPTION)
            {                
                if (this.iconChild) this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(ICON)
                this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, MINUS_ICON_OPTION)
                this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE])
                this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
                this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
                this.iconParent.appendChild(this.iconChild)
                this.openStyles.forEach( (style)=>  style())
            }
        else if (state !== OPENED_OPTION)
            {                
                if(this.iconChild) this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(ICON)
                this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, PLUS_ICON_OPTION)
                this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE])
                this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
                this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
                this.iconParent.appendChild(this.iconChild)
                this.closeStyles.forEach( (style)=>  style())
                return;
            }

    }
    connectedCallback() {
      
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        this.styles = setStyle(attributes[STYLE_KEY])

        const container = document.createElement('div')
        const stylesProccessedContainer = processStyle(container,this.styles[CONTAINER_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedContainer[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedContainer[OPEN_ACCORDION_EVENT])
        
        const title = document.createElement('button')
        const stylesProccessedTitle = processStyle(title,this.styles[TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedTitle[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedTitle[OPEN_ACCORDION_EVENT])

        const content = document.createElement('div')    
        const contentToAppend = document.createElement('slot')
        content.appendChild(contentToAppend)

        const textTitleNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])
        const textTitle= document.createElement('div')
        const stylesProccessedText = processStyle(textTitle,this.styles[TEXT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedText[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedText[OPEN_ACCORDION_EVENT])
        textTitle.appendChild(textTitleNode)
        title.appendChild(textTitle)

        
        const stylesProccessedIconParent = processStyle (this.iconParent, this.styles[ICON_PARENT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedIconParent[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconParent[OPEN_ACCORDION_EVENT])

        this.iconChild = document.createElement(ICON)
        if (attributes[OPEN_ATTRIBUTE] === OPENED_OPTION) this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, MINUS_ICON_OPTION)
        else if (attributes[OPEN_ATTRIBUTE] !== OPENED_OPTION)this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, PLUS_ICON_OPTION)
        this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE])
        this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
        this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
        this.iconParent.appendChild(this.iconChild)
      
        title.appendChild(this.iconParent)
        this.slotty = contentToAppend
       
        

       
        const customClass = this

        this.closeStyles.forEach((style) =>  style())
        const clickAccordion = (event) => {
            event.preventDefault()
            const state = customClass.getAttribute(OPEN_ATTRIBUTE)
            if (state === OPENED_OPTION)
            {
                customClass.setAttribute(OPEN_ATTRIBUTE,CLOSED_OPTION)
                return;
            }
            else if (state !== OPENED_OPTION)
            {
                customClass.setAttribute(OPEN_ATTRIBUTE,OPENED_OPTION)
                return;
            }
            
        }
        title.addEventListener('click',clickAccordion)
        contentToAppend.addEventListener('slotchange', function(e) {
            contentToAppend.assignedElements()[0].style['padding']='1px'
            contentToAppend.assignedElements()[0].style['margin']='0px'
            contentToAppend.assignedElements()[0].style['border']='0px'
            const copyStyleObject = JSON.parse(JSON.stringify(customClass.styles));
            copyStyleObject[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT][ICON_HEIGHT_ATTRIBUTE] = `${contentToAppend.assignedElements()[0].scrollHeight}px`
            const stylesProccessedContent = processStyle(content,copyStyleObject[CONTENT_SUBCOMPONENT])
            customClass.closeStyles.push(...stylesProccessedContent[DEFAULT_EVENT])
            customClass.openStyles.push(...stylesProccessedContent[OPEN_ACCORDION_EVENT])
            customClass.closeStyles.forEach((style) =>  style())
            if (attributes[OPEN_ATTRIBUTE] === OPENED_OPTION) customClass.openStyles.forEach( (style)=>  style())
        })
     
        container.appendChild(title)
        container.appendChild(content)
        if (this.shadow.children.length === 0)  this.shadow.appendChild(container) 
        this.setAttribute(OPEN_ATTRIBUTE,attributes[OPEN_ATTRIBUTE])
      }
}

const regularAccordionCustomComponent = 'regular-accordion'
customElements.define(regularAccordionCustomComponent, class extends vanillaRegularAccordion {});

export const createRegularAccordion =   (attributes) => {
    const regularAccordionElement = document.createElement(regularAccordionCustomComponent)
    regularAccordionElement.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    return regularAccordionElement;
}