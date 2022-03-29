import {regularIconFunction} from "./regularIcons.js";
import {animatedIconFunction} from "./animatedIcons.js";
import { accordionIcons } from "./accordionIcons.js";
import { REGULAR_ICONS_COMPONENT } from "../constants.js";
import { ANIMATED_ICONS_COMPONENT } from "../constants.js";
import { ACCORDION_ICONS_COMPONENT } from "../constants.js";
const COMPONENTS = {};

COMPONENTS[REGULAR_ICONS_COMPONENT] = regularIconFunction
COMPONENTS[ANIMATED_ICONS_COMPONENT] = animatedIconFunction
COMPONENTS[ACCORDION_ICONS_COMPONENT] = accordionIcons

export default COMPONENTS;