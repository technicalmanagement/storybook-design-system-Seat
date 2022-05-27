import {REGULAR_TEXT_AREA_VARIANT} from "../constants.js"
import {REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT} from "../constants.js"
import { regularTextareaSeat } from "./regularTextarea.js"
import { regularTextAreaDescriptorSeat } from "./regularTextareaDescriptor.js"
const COMPONENTS = []
COMPONENTS[REGULAR_TEXT_AREA_VARIANT] = regularTextareaSeat
COMPONENTS[REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT] = regularTextAreaDescriptorSeat

export {COMPONENTS}
