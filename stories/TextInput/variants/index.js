import {REGULAR_TEXT_INPUT_VARIANT,
        REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT,
        ICON_TEXT_INPUT_VARIANT, 
        ICON_TEXT_INPUT_DESCRIPTOR_VARIANT } from "../constants.js"
import { regularTextInputSeat } from "./regularTextInput.js"
import {regularTextInputDescriptorSeat} from "./regularTextInputDescriptor.js"
import {iconTextInputSeat} from "./iconTextInput.js"
import {iconTextInputDescriptorSeat} from "./iconTextInputDescriptor.js"
const COMPONENTS = []
COMPONENTS[REGULAR_TEXT_INPUT_VARIANT] = regularTextInputSeat
COMPONENTS[REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT] = regularTextInputDescriptorSeat
COMPONENTS[ICON_TEXT_INPUT_VARIANT] = iconTextInputSeat
COMPONENTS[ICON_TEXT_INPUT_DESCRIPTOR_VARIANT] = iconTextInputDescriptorSeat

export {COMPONENTS}
