import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
        COLOR_ATTRIBUTE,
        DESCRIPTOR_ON_ATTRIBUTE} from "../constants.js"
import {LARGE_OPTION,
        MEDIUM_OPTION,
        BLACK_OPTION,
        WHITE_OPTION,  
        DESCRIPTOR_ON_OPTION} from "../constants.js"
import {REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT,
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        DESCRIPTOR_SUBCOMPONENT,
        } from "../constants.js"
import {INPUT_EVENT, 
        VALIDATED_EVENT} from "../constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                                    I
// I                                    I----------->TITLE_SUBCOMPONENT
// I                                    I----------->TEXT_SUBCOMPONENT
// I
// I----------->DESCRIPTOR_SUBCOMPONENT
const regularTextAreaDescriptorStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}

Style1[CONTAINER_SUB_WRAPPER] = {
    transition: "0.2s all ease-in-out",
    margin: "0px",
    width: "260px",
    minHeight: "104px", 
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "default"

}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT] = {
    //transition: "0.2s all ease-in-out",
    width: "100%",
    minHeight: "84px",
    height: "fit-content", 
    backgroundColor: "transparent",
    border: "1px solid #7F7F72",
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: "8px 8px 20px 8px",
    display: "flex",
    justifyContent: "flex-start"

}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    padding: "8px 8px",
    borderColor: "#7F7F72",
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    borderColor: "#009196",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT] = {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
}

Style1[TITLE_SUBCOMPONENT] ={
    transition: "0.2s all ease-in-out",
    width: "100%",
    height: "100%",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#747468",
    userSelect: "none",
    paddingTop: "12px",

}
Style1[TITLE_SUBCOMPONENT][INPUT_EVENT] ={
    fontSize: "12px",
    height: "16px",
    lineHeight: "16px",
    marginBottom: "4px",
    paddingTop: "0px"
}
Style1[TEXT_SUBCOMPONENT] = {
    padding: "0px 0px 0px 2px",
	background: "none",
	border: "none",
	borderRadius: "0",
	outline: "none",
	appearance: "none",
    transition: "0.2s all ease-in-out",
    height: "0px",
    width: "calc(100%-2px)",
    backgroundColor: "transparent",
    color: "#190F14",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontSize: "16px",
    resize: "none",
}
Style1[TEXT_SUBCOMPONENT][INPUT_EVENT] ={
    height: "fit-content",
    lineHeight:"20px",
}

Style1[DESCRIPTOR_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    
    height: "16px", 
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    backgroundColor: "transparent",
    color: "#747468",
    padding: "0px 8px 0px 8px",
    width: "calc(100% - 16px)",
    paddingTop: "4px",
}

const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style1Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTextAreaDescriptorStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLE_SUBCOMPONENT].color = "#ECE9E1"
Style2[DESCRIPTOR_SUBCOMPONENT].color = "#ECE9E1"
Style2[TEXT_SUBCOMPONENT].color = "#FFFFFF"
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT].border = "1px solid #7F7F72"
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = "#FFFFFF"
const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style2Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularTextAreaDescriptorStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_SUB_WRAPPER].minHeight = "96px" 
Style3[TEXT_INPUT_CONTAINER_SUBCOMPONENT].minHeight = "76px"  

Style3[TITLE_SUBCOMPONENT].fontSize = "14px"
Style3[TITLE_SUBCOMPONENT].lineHeight = "16px"
Style3[TEXT_SUBCOMPONENT].fontSize = "14px"

const Style3Path = {}

Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style3Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;


const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularTextAreaDescriptorStyles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style3))
Style4[TITLE_SUBCOMPONENT].color = "#ECE9E1"
Style4[DESCRIPTOR_SUBCOMPONENT].color = "#ECE9E1"
Style4[TEXT_SUBCOMPONENT].color = "#FFFFFF"
Style4[TEXT_INPUT_CONTAINER_SUBCOMPONENT].border = "1px solid #7F7F72"
Style4[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = "#FFFFFF"
const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularTextAreaDescriptorStyles.push(style4Wrapper)

export  {regularTextAreaDescriptorStyles};