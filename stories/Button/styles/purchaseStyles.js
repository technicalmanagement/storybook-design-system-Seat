
import {HIERARCHY_ATTRIBUTE, 
    PURCHASE_HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    ARROW_BUTTON_VARIANT,
    ARROW_BUTTON_ICON_VARIANT} from "../constants.js"
import {PURCHASE_OPTION,
    PRIMARY_PURCHASE_HIERARCHY_OPTION,
    SECONDARY_PURCHASE_HIERARCHY_OPTION,
    TERTIARY_PURCHASE_HIERARCHY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    ON_OPTION,
    OFF_OPTION,} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    ICONARROW_CONTAINER_SUBCOMPONENT,
    ICONARROW_SUBCOMPONENT,        
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import { SIZE_STYLES } from "./commonStyles.js"
import {REGULAR_BUTTON_ICON_VARIANT, REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,
STYLE_OBJECT,
COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const purchaseStyles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1.0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style1[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style1Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
purchaseStyles.push(styleWrapper1)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//
const Style2 = {}

Style2 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1.0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style2[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style2[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style2[ICON_CONTAINER_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style2[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style2Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style2Path[ICON_ATTRIBUTE] = ON_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
purchaseStyles.push(styleWrapper2)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style3[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style3Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
purchaseStyles.push(styleWrapper3)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style4 = {}

Style4 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style4[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style4[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style4[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style4Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
purchaseStyles.push(styleWrapper4)
//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL OFFICON *//
const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style5[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style5Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
purchaseStyles.push(styleWrapper5)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL ONICON *//
const Style6 = {}

Style6 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style6[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style6[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style6[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style6[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style6Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
purchaseStyles.push(styleWrapper6)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED OFFICON *//
const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style7[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style7Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
purchaseStyles.push(styleWrapper7)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED ONICON *//
const Style8 = {}

Style8 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style8[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style8[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style8[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style8Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
purchaseStyles.push(styleWrapper8)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL OFFICON *//
const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style9[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style9[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style9Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style9Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
purchaseStyles.push(styleWrapper9)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL ONICON *//
const Style10 = {}

Style10 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#EA5D1A",
border: "none",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
opacity: "0.8"
}
Style10[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style10[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style10[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "11.25px",
height: "11.25px",
}
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style10Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style10Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style10Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
purchaseStyles.push(styleWrapper10)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED OFFICON *//
const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style11[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style11Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style11Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
purchaseStyles.push(styleWrapper11)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED ONICON *//
const Style12 = {}

Style12 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#EEA786",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style12[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style12[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style12[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "11.25px",
height: "11.25px",
}
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style12Path[PURCHASE_HIERARCHY_ATTRIBUTE] = PRIMARY_PURCHASE_HIERARCHY_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
purchaseStyles.push(styleWrapper12)
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP WHITE NORMAL OFFICON */
const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
opacity: "1.0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style13[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style13[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EA5D1A",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style13Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style13Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style13Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path
purchaseStyles.push(styleWrapper13)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY DESKTOP BLACK NORMAL ONICON *//
const Style14 = {}

Style14 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
boxSizing: "border-box",
opacity: "1.0",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style14[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style14[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EA5D1A",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style14[ICON_CONTAINER_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style14[ICON_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "13.5px",
height: "13.5px",
}
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style14Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style14Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style14Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION

const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path
purchaseStyles.push(styleWrapper14)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY DESKTOP BLACK DISABLED OFFICON *//
const Style15 = {}
Style15 [BUTTON_SUBCOMPONENT] = {
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style15[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EEA786",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style15Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style15Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style15Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
purchaseStyles.push(styleWrapper15)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY DESKTOP BLACK DISABLED ONICON *//
const Style16 = {}

Style16 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style16[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EEA786",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style16[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#EEA786",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style16[ICON_SUBCOMPONENT] = {
color: "#EEA786",
width: "13.5px",
height: "13.5px",
}
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style16Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style16Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style16Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path
purchaseStyles.push(styleWrapper16)
//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL OFFICON *//
const Style17 = {}
Style17 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
width: "230px",
height: "38px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style17[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style17[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style17Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style17Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style17Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style17Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper17 = {}
styleWrapper17[STYLE_OBJECT] = {...Style17}
styleWrapper17[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper17[PATH_STYLE] = Style17Path
purchaseStyles.push(styleWrapper17)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK NORMAL ONICON *//
const Style18 = {}

Style18 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style18[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style18[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style18[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#EA5D1A",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style18[ICON_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "13.5px",
height: "13.5px",
}
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style18Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style18Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style18Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT] = {...Style18}
styleWrapper18[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE] = Style18Path
purchaseStyles.push(styleWrapper18)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED OFFICON *//
const Style19 = {}
Style19 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style19[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style19Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style19Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style19Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT] = {...Style19}
styleWrapper19[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper19[PATH_STYLE] = Style19Path
purchaseStyles.push(styleWrapper19)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY TABLET&MOBILE BLACK DISABLED ONICON *//
const Style20 = {}

Style20 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style20[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style20[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#EEA786",
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style20[ICON_SUBCOMPONENT] = {
color: "#EEA786",
width: "13.5px",
height: "13.5px",
}
const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style20Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style20Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style20Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style20Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper20 = {}
styleWrapper20[STYLE_OBJECT] = {...Style20}
styleWrapper20[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper20[PATH_STYLE] = Style20Path
purchaseStyles.push(styleWrapper20)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL OFFICON *//
const Style21 = {}
Style21 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style21[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style21[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style21Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style21Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style21Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper21 = {}
styleWrapper21[STYLE_OBJECT] = {...Style21}
styleWrapper21[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper21[PATH_STYLE] = Style21Path
purchaseStyles.push(styleWrapper21)


//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK NORMAL ONICON *//
const Style22 = {}

Style22 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "transparent",
border: "1px solid #EA5D1A",
borderRadius: "2px",
boxShadow: "none",
opacity: "1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style22[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
border: "2px solid #EA5D1A",
}
Style22[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style22[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style22[ICON_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "11.25px",
height: "11.25px",
}
const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style22Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style22Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style22Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style22Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper22 = {}
styleWrapper22[STYLE_OBJECT] = {...Style22}
styleWrapper22[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper22[PATH_STYLE] = Style22Path
purchaseStyles.push(styleWrapper22)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED OFFICON *//
const Style23 = {}
Style23 [BUTTON_SUBCOMPONENT] = {
transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style23[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style23Path = {}
Style23Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style23Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style23Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style23Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style23Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper23 = {}
styleWrapper23[STYLE_OBJECT] = {...Style23}
styleWrapper23[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper23[PATH_STYLE] = Style23Path
purchaseStyles.push(styleWrapper23)
//*----------------NEW BUTTON ------------------------*/
//* SECONDARY SMALL BLACK DISABLED ONICON *//
const Style24 = {}

Style24 [BUTTON_SUBCOMPONENT] = {

transition: "0.1s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "transparent",
border: "1px solid #EEA786",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style24[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style24[ICON_CONTAINER_SUBCOMPONENT] ={
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
Style24[ICON_SUBCOMPONENT] = {
color: "#EEA786",
width: "11.25px",
height: "11.25px",
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style24Path[PURCHASE_HIERARCHY_ATTRIBUTE] = SECONDARY_PURCHASE_HIERARCHY_OPTION
Style24Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style24Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style24Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper24 = {}
styleWrapper24[STYLE_OBJECT] = {...Style24}
styleWrapper24[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper24[PATH_STYLE] = Style24Path
purchaseStyles.push(styleWrapper24)

// TERTIARY PURCHASE HIERARCHY 

const Style25 = {}
Style25 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],

}
Style25[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EA5D1A",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style25[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}

Style25[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style25[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
margin: "0px 0px 0px 8px",
}
Style25[ICONARROW_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "5.83px",
height: "10px",
}
Style25[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}

const Style25Path = {}
Style25Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style25Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style25Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style25Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style25Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper25 = {}
styleWrapper25[STYLE_OBJECT] = {...Style25}
styleWrapper25[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper25[PATH_STYLE] = Style25Path
purchaseStyles.push(styleWrapper25)

const Style26 = {}
Style26 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style26[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EA5D1A",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT],
}
Style26[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}
Style26[ICON_CONTAINER_SUBCOMPONENT] ={
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 8px 0px 0px",
}
Style26[ICON_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "11.25px",
height: "11.25px",
}
Style26[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}

Style26[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style26[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
margin: "0px 0px 0px 8px",
}
Style26[ICONARROW_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "5.83px",
height: "10px",
}
Style26[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}
const Style26Path = {}
Style26Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style26Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style26Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style26Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style26Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper26 = {}
styleWrapper26[STYLE_OBJECT] = {...Style26}
styleWrapper26[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper26[PATH_STYLE] = Style26Path
purchaseStyles.push(styleWrapper26)

const Style27 = {}
Style27 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style27[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EEA786",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
}
Style27[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style27[ICONARROW_SUBCOMPONENT] = {
color: "#EEA786",
width: "5.83px",
height: "10px",
}

const Style27Path = {}
Style27Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style27Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style27Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style27Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style27Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper27 = {}
styleWrapper27[STYLE_OBJECT] = {...Style27}
styleWrapper27[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper27[PATH_STYLE] = Style27Path
purchaseStyles.push(styleWrapper27)

const Style28 = {}
Style28 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
}

Style28[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#EEA786",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT],
}

Style28[ICON_CONTAINER_SUBCOMPONENT] ={
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 8px 0px 0px",
}
Style28[ICON_SUBCOMPONENT] = {
color: "#EEA786",
width: "11.25px",
height: "11.25px",
}
Style28[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 8px",
}

Style28[ICONARROW_SUBCOMPONENT] = {
color: "#EEA786",
width: "5.83px",
height: "10px",
}

const Style28Path = {}
Style28Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style28Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style28Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style28Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style28Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper28 = {}
styleWrapper28[STYLE_OBJECT] = {...Style28}
styleWrapper28[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper28[PATH_STYLE] = Style28Path
purchaseStyles.push(styleWrapper28)


const Style29 = {}
Style29 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style29[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style29[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}
Style29[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style29[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
margin: "0px 0px 0px 8px",
}
Style29[ICONARROW_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "5.83px",
height: "10px",
}
Style29[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}

const Style29Path = {}
Style29Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style29Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style29Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style29Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style29Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper29 = {}
styleWrapper29[STYLE_OBJECT] = {...Style29}
styleWrapper29[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper29[PATH_STYLE] = Style29Path
purchaseStyles.push(styleWrapper29)

const Style30 = {}
Style30 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style30[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
width: "152px",
}
Style30[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EA5D1A",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style30[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}
Style30[ICON_CONTAINER_SUBCOMPONENT] ={
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 8px 0px 0px",
}
Style30[ICON_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "11.25px",
height: "11.25px",
}
Style30[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}
Style30[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EA5D1A",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style30[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
margin: "0px 0px 0px 8px",
}
Style30[ICONARROW_SUBCOMPONENT] = {
color: "#EA5D1A",
width: "5.83px",
height: "10px",
}
Style30[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
color: '#EEA786',
}

const Style30Path = {}
Style30Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style30Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style30Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style30Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style30Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper30 = {}
styleWrapper30[STYLE_OBJECT] = {...Style30}
styleWrapper30[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper30[PATH_STYLE] = Style30Path
purchaseStyles.push(styleWrapper30)

const Style31 = {}
Style31 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style31[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style31[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style31[ICONARROW_SUBCOMPONENT] = {
color: "#EEA786",
width: "5.83px",
height: "10px",
}

const Style31Path = {}
Style31Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style31Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style31Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style31Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style31Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper31 = {}
styleWrapper31[STYLE_OBJECT] = {...Style31}
styleWrapper31[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper31[PATH_STYLE] = Style31Path
purchaseStyles.push(styleWrapper31)

const Style32 = {}
Style32 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style32[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#EEA786",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style32[ICON_CONTAINER_SUBCOMPONENT] ={
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 8px 0px 0px"
}
Style32[ICON_SUBCOMPONENT] = {
color: "#EEA786",
width: "11.25px",
height: "11.25px",
}
Style32[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#EEA786",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}

Style32[ICONARROW_SUBCOMPONENT] = {
color: "#EEA786",
width: "5.83px",
height: "10px",
}

const Style32Path = {}
Style32Path[HIERARCHY_ATTRIBUTE] = PURCHASE_OPTION
Style32Path[PURCHASE_HIERARCHY_ATTRIBUTE] = TERTIARY_PURCHASE_HIERARCHY_OPTION
Style32Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style32Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style32Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper32 = {}
styleWrapper32[STYLE_OBJECT] = {...Style32}
styleWrapper32[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper32[PATH_STYLE] = Style32Path
purchaseStyles.push(styleWrapper32)

export  {purchaseStyles};