import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    LINE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    SMALL_OPTION} from "../constants.js"
import {HYPERLINK_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    TITLE_OPTION,
    PARAGRAPH_OPTION,
    OFF_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
        TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const hyperlinkStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#190F14",
    borderBottomWidth: "1px",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "21px", 
    background: "transparent",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style1[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#190F14",
    lineHeight: "20px",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]

}

const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style1Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
hyperlinkStyles.push(styleWrapper1)

const Style2 = {}
Style2 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#190F14",
    borderBottomWidth: "1px",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    height: "25px",
}
Style2[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style2[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#190F14",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    height: "24px",
    lineHeight: "24px"
    


}

const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style2Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
hyperlinkStyles.push(styleWrapper2)

const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ECE9E1",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "21px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style3[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style3[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#ECE9E1",
    lineHeight: "20px",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],

}

const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style3Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style3Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
hyperlinkStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ECE9E1",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "21px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    height: "25px",
}
Style4[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style4[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#ECE9E1",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    height: "24px",
    lineHeight: "24px"

}

const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style4Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style4Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
hyperlinkStyles.push(styleWrapper4)


const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#190F14",
    borderBottomWidth: "1px",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "17px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style5[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#190F14",
    lineHeight: "16px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style5Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
hyperlinkStyles.push(styleWrapper5)

const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#190F14",
    borderBottomWidth: "1px",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "21px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style6[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style6[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#190F14",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    height: "20px",
}

const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style6Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
hyperlinkStyles.push(styleWrapper6)

const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ECE9E1",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "17px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style7[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style7[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#ECE9E1",
    lineHeight: "16px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style7Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style7Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
hyperlinkStyles.push(styleWrapper7)

const Style8 = {}
Style8 [BUTTON_SUBCOMPONENT] = {
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ECE9E1",
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "21px", 
    background: "transparent",
    margin: "0px",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style8[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "RGBA(68,60,64,0.6)",
}
Style8[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#ECE9E1",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    height: "20px",
    lineHeight: "20px",
}

const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style8Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style8Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT]             = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY]    = REGULAR_BUTTON_VARIANT
styleWrapper8[PATH_STYLE]               = Style8Path
hyperlinkStyles.push(styleWrapper8)

// THERE'S NO SPECIFIC STYLE FOR SMALL_OPTION SO WE COPY THE SAME STYLES AS MEDIUM_OPTION
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style9Path[SIZE_ATTRIBUTE]      = SMALL_OPTION
Style9Path[COLOR_ATTRIBUTE]     = BLACK_OPTION
Style9Path [LINE_ATTRIBUTE]     = TITLE_OPTION
Style9Path [ICON_ATTRIBUTE]     = OFF_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT]             = {...Style5}
styleWrapper9[COMPONENT_VARIANT_KEY]    = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE]               = Style9Path
hyperlinkStyles.push(styleWrapper9)

const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE]    = HYPERLINK_OPTION
Style10Path[SIZE_ATTRIBUTE]         = SMALL_OPTION
Style10Path[COLOR_ATTRIBUTE]        = BLACK_OPTION
Style10Path [LINE_ATTRIBUTE]        = PARAGRAPH_OPTION
Style10Path [ICON_ATTRIBUTE]        = OFF_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT]            = {...Style6}
styleWrapper10[COMPONENT_VARIANT_KEY]   = REGULAR_BUTTON_VARIANT
styleWrapper10[PATH_STYLE]              = Style10Path
hyperlinkStyles.push(styleWrapper10)

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style11Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style11Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style7}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
hyperlinkStyles.push(styleWrapper11)

const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style12Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style12Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style8}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
hyperlinkStyles.push(styleWrapper12)

export {hyperlinkStyles}