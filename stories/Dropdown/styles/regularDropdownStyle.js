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
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE, SIZE_ATTRIBUTE} from "../constants.js"
import {BLACK_OPTION, 
        WHITE_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION } from "../constants.js"
import {REGULAR_DROPDOWN_VARIANT} from "../constants.js"
import {SELECTION_EVENT,
        OPEN_EVENT,
        HOVER_EVENT} from "../constants.js"
import {CONTAINER_SUPER_WRAPPER,
        CONTAINER_WRAPPER,
        CONTAINER_SLOT_WRAPPER,
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
        OPTION_Ni_ITEM } from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
const largeHeight = "60px"
const regularDropdownStyle = []
const Style1 = {}
Style1[CONTAINER_SUPER_WRAPPER] = {
    position: "relative",
    width: "260px",
    height: largeHeight,
}
Style1[CONTAINER_WRAPPER] = {
    width: "260px",
    height: largeHeight, 
    border: "1px solid #7F7F72",
    boxSizing: "border-box",
    borderRadius: "2px",
    overflow: "hidden",
    transition: "height 0.2s ease-in-out ",
    position: "absolute",
    backgroundColor: "#FFFFFF",
    padding: "0px"
}
Style1[CONTAINER_WRAPPER][OPEN_EVENT] = {
    height: "600px",
    zIndex: "2",
}
Style1[CONTAINER_WRAPPER][SELECTION_EVENT] = {
    height: largeHeight
}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[CONTAINER_SUBWRAPPER] = {
    padding: "7px",
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    width: "100%", 
    height: `calc(${largeHeight} - 2px)`,
    display: "grid",
    gridTemplateColumns: "auto 24px",
    gridColumnGap: "8px",
    transition: "0.2s all ease-in-out",
}


Style1[TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT] = {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
}

Style1[TITLE_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    padding: "0px 0px 0px 0px",
    display: "flex",
    alignItems: "center"
}
Style1[TITLE_SUBCOMPONENT][SELECTION_EVENT] = {
    height: "20px",
    padding: "0px 0px 4px 0px"
}
Style1[TITLE_SUBCOMPONENT][OPEN_EVENT] = {
    height: "100%",
    padding: "0px 0px 0px 0px"
}
Style1[TITLE_ITEM] = {
    boxSizing: "border-box",
    width: "100%",
    padding: "0px",
    margin: "0px",
    border: "0px",
    height: "20px",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#747468",
    transition: "0.2s all ease-in-out",
    
}
Style1[TITLE_ITEM][SELECTION_EVENT] = {
    height: "16px",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
}
Style1[TITLE_ITEM][OPEN_EVENT] = {
    
    height: "20px",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
}
Style1[OPTION_SELECTED_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "0px",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0px",
    lineHeight: "24px",
    color: "#190F14",
}
Style1[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT] = {
    fontSize: "16px",
    height: "24px",
}
Style1[OPTION_SELECTED_SUBCOMPONENT][OPEN_EVENT] = {
    height: "0px",
    fontSize: "0px",
}
Style1[ARROW_ICON_SUBCOMPONENT] = {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER] = {
    height: "24px",
    width: "24px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "0.2s all ease-in-out",
    transform: "rotate(90deg)",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER][SELECTION_EVENT] = {
    transform: "rotate(90deg)",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER][OPEN_EVENT] = {
    transform: "rotate(270deg)",
    border: "none"
}
Style1[ARROW_ICON_ITEM]={}
Style1[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]="#7F7F72"
Style1[ARROW_ICON_ITEM][ICON_HEIGHT_ATTRIBUTE]="12px"
Style1[ARROW_ICON_ITEM][ICON_WIDTH_ATTRIBUTE]="7px"

Style1[OPTION_WRAPPER] = {
    display: "none"
}
Style1[OPTION_WRAPPER][OPEN_EVENT] = {
    display: "contents"
}
Style1[OPTION_WRAPPER][SELECTION_EVENT] = {
    display: "none"
}
Style1[OPTION_Ni_SUBCOMPONENT] = {
    width: "100%",
    height: "40px",
    padding: "8px 7px",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
}
Style1[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT] = {
    backgroundColor: "#ECE9E1"
}
Style1[OPTION_Ni_ITEM] = {
    width: "100%",
    height: "100%",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#190F14",
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularDropdownStyle.push(style1Wrapper)


const Style2 = JSON.parse(JSON.stringify(Style1))

const mediumHeight = "56px"
Style2[CONTAINER_WRAPPER].height = mediumHeight
Style2[CONTAINER_WRAPPER].height = mediumHeight
Style2[CONTAINER_WRAPPER][SELECTION_EVENT].height = mediumHeight
Style2[CONTAINER_SUBWRAPPER].height = `calc(${mediumHeight} - 2px)`

Style2[TITLE_ITEM].fontSize = "14px"
Style2[TITLE_ITEM].lineHeight = "16px"
Style2[TITLE_ITEM].height = "16px"

Style2[TITLE_ITEM][OPEN_EVENT].fontSize = "14px"
Style2[TITLE_ITEM][OPEN_EVENT].lineHeight = "16px"
Style2[TITLE_ITEM][OPEN_EVENT].height = "16px"

Style2[OPTION_SELECTED_SUBCOMPONENT].lineHeight = "20px"
Style2[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].fontSize = "14px"
Style2[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].height = "20px"
Style2[OPTION_Ni_SUBCOMPONENT].height = "36px"
Style2[OPTION_Ni_ITEM].fontSize = "14px"
Style1[OPTION_Ni_ITEM].lineHeight = "20px"


const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularDropdownStyle.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))

Style3[CONTAINER_WRAPPER].backgroundColor = "#2E2A2B"
Style3[CONTAINER_SUBWRAPPER].backgroundColor = "#2E2A2B"
Style3[TITLE_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style3[OPTION_SELECTED_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style3[ARROW_ICON_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style3[ARROW_ICON_CONTAINER].backgroundColor = "#2E2A2B"
Style3[OPTION_Ni_SUBCOMPONENT].backgroundColor = "#2E2A2B"

Style3[TITLE_ITEM].color = "#ECE9E1"
Style3[OPTION_SELECTED_SUBCOMPONENT].color = "#ECE9E1"
Style3[CONTAINER_WRAPPER].border = "1px solid #FFFFFF"

Style3[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]="#ECE9E1"
Style3[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT].backgroundColor = "#7F7F72"
Style3[OPTION_Ni_ITEM].color = "#ECE9E1"

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularDropdownStyle.push(style3Wrapper)

const Style4= JSON.parse(JSON.stringify(Style2))
Style4[CONTAINER_WRAPPER].backgroundColor = "#2E2A2B"
Style4[CONTAINER_SUBWRAPPER].backgroundColor = "#2E2A2B"
Style4[TITLE_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style4[OPTION_SELECTED_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style4[ARROW_ICON_SUBCOMPONENT].backgroundColor = "#2E2A2B"
Style4[ARROW_ICON_CONTAINER].backgroundColor = "#2E2A2B"
Style4[OPTION_Ni_SUBCOMPONENT].backgroundColor = "#2E2A2B"

Style4[TITLE_ITEM].color = "#ECE9E1"
Style4[OPTION_SELECTED_SUBCOMPONENT].color = "#ECE9E1"
Style4[CONTAINER_WRAPPER].border = "1px solid #FFFFFF"

Style4[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]="#ECE9E1"
Style4[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT].backgroundColor = "#7F7F72"
Style4[OPTION_Ni_ITEM].color = "#ECE9E1"

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularDropdownStyle.push(style4Wrapper)

export  {regularDropdownStyle};