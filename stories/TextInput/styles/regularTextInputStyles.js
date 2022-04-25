import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,COLOR_ATTRIBUTE,STATE_ATTRIBUTE,DESCRIPTOR_ON_ATTRIBUTE,ICON_ON_ATTRIBUTE, CONTAINER_WRAPPER, SUCCESS_ICON_CONTAINER_SUBCOMPONENT, SUCCESS_ICON_SUBCOMPONENT} from "../constants.js"
import { LARGE_OPTION,
         MEDIUM_OPTION,
         BLACK_OPTION,
         WHITE_OPTION, 
         ICON_ON_OPTION, 
         ICON_OFF_OPTION, 
         DESCRIPTOR_ON_OPTION, 
         DESCRIPTOR_OFF_OPTION  } from "../constants.js"
import {INPUT_EVENT, VALIDATED_EVENT, ERROR_EVENT} from "../constants.js"
import {REGULAR_TEXT_INPUT_VARIANT } from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT,
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        ERROR_CONTAINER_SUBCOMPONENT,
    } from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                I                   I
// I                I                   I----------->TITLE_SUBCOMPONENT
// I                I                   I----------->TEXT_SUBCOMPONENT
// I                I
// I                I----------->SUCCESS_ICON_CONTAINER_SUBCOMPONENT
// I                                    I
// I                                    I----------->SUCCESS_ICON_SUBCOMPONENT
// I
// I----------->ERROR_CONTAINER_SUBCOMPONENT
//                  I----------->ERROR_SUBCOMPONENT
const regularTextInputStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[CONTAINER_WRAPPER] = {
    margin: "0px",
    width: "260px",
    cursor: "default"

}
Style1[CONTAINER_SUB_WRAPPER] = {
    transition: "0.2s all ease-in-out",
    margin: "0px",
    width: "260px",
    height: "60px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "default"

}
Style1[CONTAINER_SUB_WRAPPER][ERROR_EVENT] = {
    height: "80px", 
}
Style1[CONTAINER_SUB_WRAPPER][INPUT_EVENT] = {
    height: "60px", 
}
Style1[CONTAINER_SUB_WRAPPER][VALIDATED_EVENT] = {
    height: "60px", 
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    width: "100%",
    height: "60px", 
    backgroundColor: "transparent",
    border: "1px solid #7F7F72",
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: "20px 8px",
    display: "flex",
    justifyContent: "flex-start"

}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    padding: "8px 8px",
    borderColor: "#7F7F72",
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    borderColor: "#BB1A20",
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    borderColor: "#009196",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT] = {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    width: "calc(100% - 32px)",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    width: "100%",
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
    userSelect: "none"

}
Style1[TITLE_SUBCOMPONENT][INPUT_EVENT] ={
    fontSize: "12px",
    height: "16px",
    lineHeight: "16px",
    marginBottom: "4px",
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
    
}
Style1[TEXT_SUBCOMPONENT][INPUT_EVENT] ={
    height: "100%",
    lineHeight:"100%",
}

Style1[SUCCESS_ICON_CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    width: "0px",
    height: "0px", 
    padding: "0px",
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

}
Style1[SUCCESS_ICON_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    width: "24px",
    height: "24px", 
    padding: "10px 0px 10px 8px",
    margin: "0px",
    border: "none"
}
Style1[SUCCESS_ICON_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    margin: "0px",
    width: "0px",
    height: "0px", 
    padding: "0px",
    cursor: "default"
}
Style1[SUCCESS_ICON_SUBCOMPONENT] = {}
Style1[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT] = {
    display: "none",
}
Style1[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT][VALIDATED_EVENT] = {
    display: "initial",
}
Style1[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT][ERROR_EVENT] = {
    display: "none",
}
Style1[SUCCESS_ICON_SUBCOMPONENT][SUCCESS_ICON_SUBCOMPONENT][INPUT_EVENT] = {
    display: "none",
}
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]="#009196"
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="16.5px"
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="12.38px"
Style1[ERROR_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    
    height: "0px", 
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    backgroundColor: "transparent",
    color: "transparent",
    padding: "0px 8px 0px 8px",
    width: "calc(100% - 16px)",
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    paddingTop: "4px",
    height: "16px", 
    color: "#BB1A20",
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
    height: "0px",
    color: "transparent",
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    paddingTop: "0px",
    height: "0px",
    color: "transparent",
}

const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style1Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style1Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTextInputStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLE_SUBCOMPONENT].color = "#ECE9E1"
Style2[TEXT_SUBCOMPONENT].color = "#FFFFFF"
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT].border = "1px solid #F9F8F6"
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = "#FFFFFF"
const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style2Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style2Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularTextInputStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_SUB_WRAPPER].height = "56px" 
Style3[CONTAINER_SUB_WRAPPER][ERROR_EVENT].height = "76px"
Style3[CONTAINER_SUB_WRAPPER][INPUT_EVENT].height = "56px"
Style3[CONTAINER_SUB_WRAPPER][VALIDATED_EVENT].height = "56px"
Style3[TEXT_INPUT_CONTAINER_SUBCOMPONENT].height = "56px"  

Style3[TITLE_SUBCOMPONENT].fontSize = "14px"
Style3[TITLE_SUBCOMPONENT].lineHeight = "16px"
Style3[TEXT_SUBCOMPONENT].fontSize = "14px"

const Style3Path = {}

Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style3Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style3Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;


const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularTextInputStyles.push(style3Wrapper)


const Style4 = JSON.parse(JSON.stringify(Style2))
Style4[TITLE_SUBCOMPONENT].color = "#ECE9E1"
Style4[TEXT_SUBCOMPONENT].color = "#FFFFFF"
Style4[TEXT_INPUT_CONTAINER_SUBCOMPONENT].border = "1px solid #F9F8F6"
Style4[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = "#FFFFFF"
const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style4Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularTextInputStyles.push(style4Wrapper)

export  {regularTextInputStyles};