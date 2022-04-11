import { SEAT_BUTTON, createSeatButton, CONTENT_TO_APPEND } from "./Button/index.js";
import { ICON } from "./Icons/index.js";
import {SEAT_ACCORDION, createSeatAccordion} from "./Accordion/index.js"
import {SEAT_TEXT_INPUT, createSeatTextInput} from "./TextInput/index.js";
import {loadFonts} from "./Fonts/index.js"

const styleSheet = document.createElement("style")
//styleSheet.innerText = `${SEAT_ACCORDION}:not(:defined) { display:none }`
//document.head.appendChild(styleSheet)
loadFonts()

export {CONTENT_TO_APPEND}
export {createSeatButton}
export {createSeatAccordion}
export {createSeatTextInput}