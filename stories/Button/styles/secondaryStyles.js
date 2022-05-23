
import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    WIDTH_ATTRIBUTE} from "../constants.js"
import {SECONDARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    ON_OPTION,
    OFF_OPTION,
    FULL_OPTION,
    FIT_CONTENT_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_ICON_VARIANT, REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const secondaryStyles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",
}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style1[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style1Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
secondaryStyles.push(styleWrapper1)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//
const Style2 = {}

Style2 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",
}
Style2[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style2[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style2[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style2[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style2Path[ICON_ATTRIBUTE] = ON_OPTION
Style2Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
secondaryStyles.push(styleWrapper2)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style3[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style3Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
secondaryStyles.push(styleWrapper3)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style4 = {}

Style4 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style4[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style4[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style4[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "13.5px",
height: "13.5px",
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 
Style4Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
secondaryStyles.push(styleWrapper4)
//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL OFFICON *//
const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",
}
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style5[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style5Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
secondaryStyles.push(styleWrapper5)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL ONICON *//
const Style6 = {}

Style6 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",
}
Style6[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style6[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style6[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style6[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 
Style6Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
secondaryStyles.push(styleWrapper6)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED OFFICON *//
const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style7[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style7Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style7Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
secondaryStyles.push(styleWrapper7)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED ONICON *//
const Style8 = {}

Style8 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style8[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style8[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style8[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "13.5px",
height: "13.5px",
}
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path[ICON_ATTRIBUTE] = ON_OPTION 
Style8Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
secondaryStyles.push(styleWrapper8)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL OFFICON *//
const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",

}
Style9[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style9[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style9Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style9Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style9Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
secondaryStyles.push(styleWrapper9)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL ONICON *//
const Style10 = {}

Style10 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #190F14",
}
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #190F14",
padding: "0px 14px",
}
Style10[TEXT_SUBCOMPONENT] = {
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style10[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style10[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "11.25px",
height: "11.25px",
}
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style10Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style10Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style10Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 
Style10Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
secondaryStyles.push(styleWrapper10)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED OFFICON *//
const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style11[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style11Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style11Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
secondaryStyles.push(styleWrapper11)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED ONICON *//
const Style12 = {}

Style12 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #D1CFD0",
cursor: "default",
}
Style12[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style12[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style12[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "11.25px",
height: "11.25px",
}
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION
Style12Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
secondaryStyles.push(styleWrapper12)
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP WHITE NORMAL OFFICON */
const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",

}
Style13[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style13[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style13Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style13Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style13Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style13Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path
secondaryStyles.push(styleWrapper13)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE NORMAL ONICON *//
const Style14 = {}

Style14 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",
}
Style14[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style14[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style14[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style14[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style14Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style14Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style14Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION 
Style14Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path
secondaryStyles.push(styleWrapper14)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED OFFICON *//
const Style15 = {}


/* Interactive/02 Secondary/01 Enabled */

Style15 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",

}
Style15[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style15Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style15Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style15Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style15Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
secondaryStyles.push(styleWrapper15)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style16 = {}

Style16 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",
}
Style16[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style16[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style16[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "13.5px",
height: "13.5px",
}
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style16Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style16Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style16Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 
Style16Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path
secondaryStyles.push(styleWrapper16)

//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP WHITE NORMAL OFFICON */
const Style17 = {}
Style17 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",
}
Style17[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style17[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style17Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style17Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style17Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style17Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style17Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper17 = {}
styleWrapper17[STYLE_OBJECT] = {...Style17}
styleWrapper17[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper17[PATH_STYLE] = Style17Path
secondaryStyles.push(styleWrapper17)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE NORMAL ONICON *//
const Style18 = {}

Style18 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",
}
Style18[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style18[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style18[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style18[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style18Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style18Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style18Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 
Style18Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT] = {...Style18}
styleWrapper18[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE] = Style18Path
secondaryStyles.push(styleWrapper18)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED OFFICON *//
const Style19 = {}


/* Interactive/02 Secondary/01 Enabled */

Style19 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",
}
Style19[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]

}

const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style19Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style19Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style19Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style19Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT] = {...Style19}
styleWrapper19[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper19[PATH_STYLE] = Style19Path
secondaryStyles.push(styleWrapper19)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style20 = {}

Style20 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",
}
Style20[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style20[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style20[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "13.5px",
height: "13.5px",
}
const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style20Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style20Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style20Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style20Path[ICON_ATTRIBUTE] = ON_OPTION 
Style20Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper20 = {}
styleWrapper20[STYLE_OBJECT] = {...Style20}
styleWrapper20[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper20[PATH_STYLE] = Style20Path
secondaryStyles.push(styleWrapper20)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY SMALL WHITE NORMAL OFFICON */

const Style21 = {}
Style21 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",
}
Style21[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style21[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style21Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style21Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style21Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style21Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper21 = {}
styleWrapper21[STYLE_OBJECT] = {...Style21}
styleWrapper21[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper21[PATH_STYLE] = Style21Path
secondaryStyles.push(styleWrapper21)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE NORMAL ONICON *//
const Style22 = {}

Style22 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #ECE9E1",
}
Style22[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #ECE9E1",
padding: "0px 14px",
}
Style22[TEXT_SUBCOMPONENT] = {
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style22[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style22[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "11.25px",
height: "11.25px",
}
const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style22Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style22Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style22Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style22Path[ICON_ATTRIBUTE] = ON_OPTION 
Style22Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper22 = {}
styleWrapper22[STYLE_OBJECT] = {...Style22}
styleWrapper22[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper22[PATH_STYLE] = Style22Path
secondaryStyles.push(styleWrapper22)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED OFFICON *//
const Style23 = {}


/* Interactive/02 Secondary/01 Enabled */

Style23 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",
}
Style23[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style23Path = {}
Style23Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style23Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style23Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style23Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style23Path[ICON_ATTRIBUTE] = OFF_OPTION
Style23Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper23 = {}
styleWrapper23[STYLE_OBJECT] = {...Style23}
styleWrapper23[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper23[PATH_STYLE] = Style23Path
secondaryStyles.push(styleWrapper23)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style24 = {}

Style24 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
background: "#2E2A2B",

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "0px 15px",
border: "1px solid #6F696C",
cursor: "default",
}
Style24[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style24[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#D1CFD0",
opacity: "0.4",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
}
Style24[ICON_SUBCOMPONENT] = {
color: "#D1CFD0",
width: "11.25px",
height: "11.25px",
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style24Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style24Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style24Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style24Path[ICON_ATTRIBUTE] = ON_OPTION 
Style24Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper24 = {}
styleWrapper24[STYLE_OBJECT] = {...Style24}
styleWrapper24[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper24[PATH_STYLE] = Style24Path
secondaryStyles.push(styleWrapper24)

const copySecondaryStyles = []
secondaryStyles.forEach((style,index) => {
    copySecondaryStyles.push(JSON.parse(JSON.stringify(style)))
    copySecondaryStyles[index][STYLE_OBJECT][BUTTON_SUBCOMPONENT].width = "100%"
    copySecondaryStyles[index][PATH_STYLE][WIDTH_ATTRIBUTE] = FULL_OPTION
})
secondaryStyles.push(...copySecondaryStyles)

export  {secondaryStyles};