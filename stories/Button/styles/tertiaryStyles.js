import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    SMALL_OPTION} from "../constants.js"
import {TERTIARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
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
import {ARROW_BUTTON_VARIANT, ARROW_BUTTON_ICON_VARIANT} from "../constants.js"
import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const tertiaryStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
margin: "0px",
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style1[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style1[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}

Style1[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#190F14",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style1[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style1[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#190F14",
    width: "5.83px",
    height: "10px",
    }
Style1[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
tertiaryStyles.push(styleWrapper1)

// new boton
const Style2 = {}
Style2 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style2[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style2[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
Style2[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#190F14",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px",
}
Style2[ICON_SUBCOMPONENT] = {
    color: "#190F14",
    width: "11.25px",
    height: "11.25px",
}
Style2[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}

Style2[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#190F14",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style2[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style2[ICONARROW_SUBCOMPONENT] = {
    color: "#190F14",
    width: "5.83px",
    height: "10px",
    }
Style2[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style2Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
tertiaryStyles.push(styleWrapper2)

// new boton
const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style3[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style3[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#D1CFD0",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 8px",

}
Style3[ICONARROW_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "5.83px",
    height: "10px",
    }
    
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
tertiaryStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style4[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#D1CFD0",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style4[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#D1CFD0",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style4[ICON_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "11.25px",
    height: "11.25px",
}
Style4[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#D1CFD0",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 8px",
}

Style4[ICONARROW_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "5.83px",
    height: "10px",
    }
    
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
tertiaryStyles.push(styleWrapper4)

const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style5[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style5[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
Style5[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#190F14",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style5[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style5[ICONARROW_SUBCOMPONENT] = {
    color: "#190F14",
    width: "5.83px",
    height: "10px",
    }
Style5[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}

const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
tertiaryStyles.push(styleWrapper5)

const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style6[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style6[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
Style6[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#190F14",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style6[ICON_SUBCOMPONENT] = {
    color: "#190F14",
    width: "11.25px",
    height: "11.25px",
}
Style6[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
Style6[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#190F14",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style6[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style6[ICONARROW_SUBCOMPONENT] = {
    color: "#190F14",
    width: "5.83px",
    height: "10px",
}
Style6[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#747468',
}
    
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
tertiaryStyles.push(styleWrapper6)
// new boton
const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style7[TEXT_SUBCOMPONENT] = {
color: "#D1CFD0",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style7[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
color: "#D1CFD0",
}

Style7[ICONARROW_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "5.83px",
    height: "10px",
}

    
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style7Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
tertiaryStyles.push(styleWrapper7)

const Style8 = {}
Style8 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style8[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#D1CFD0",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style8[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#D1CFD0",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style8[ICON_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "11.25px",
    height: "11.25px",
}
Style8[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#D1CFD0",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}

Style8[ICONARROW_SUBCOMPONENT] = {
    color: "#D1CFD0",
    width: "5.83px",
    height: "10px",
    }
    
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
tertiaryStyles.push(styleWrapper8)


const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
margin: "0px",
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style9[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style9[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}

Style9[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style9[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style9[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#ECE9E1",
    width: "5.83px",
    height: "10px",
    }
Style9[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style9Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style9Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
tertiaryStyles.push(styleWrapper9)

// new boton
const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style10[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style10[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
Style10[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#ECE9E1",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style10[ICON_SUBCOMPONENT] = {
    color: "#ECE9E1",
    width: "11.25px",
    height: "11.25px",
}
Style10[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}

Style10[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style10[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style10[ICONARROW_SUBCOMPONENT] = {
    color: "#ECE9E1",
    width: "5.83px",
    height: "10px",
    }
Style10[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style10Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style10Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style10Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
tertiaryStyles.push(styleWrapper10)

// new boton
const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style11[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#747468",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style11[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#747468",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style11[ICONARROW_SUBCOMPONENT] = {
    color: "#747468",
    width: "5.83px",
    height: "10px",
    }
    
const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style11Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style11Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style11Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
tertiaryStyles.push(styleWrapper11)

const Style12 = {}
Style12 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style12[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#747468",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style12[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#747468",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style12[ICON_SUBCOMPONENT] = {
    color: "#747468",
    width: "11.25px",
    height: "11.25px",
}
Style12[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#747468",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}

Style12[ICONARROW_SUBCOMPONENT] = {
    color: "#747468",
    width: "5.83px",
    height: "10px",
    }
    
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style12Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style12Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
tertiaryStyles.push(styleWrapper12)

const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style13[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style13[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
Style13[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",

}
Style13[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style13[ICONARROW_SUBCOMPONENT] = {
    color: "#ECE9E1",
    width: "5.83px",
    height: "10px",
    }
Style13[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}

const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style13Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style13Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style13Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path
tertiaryStyles.push(styleWrapper13)

const Style14 = {}
Style14 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style14[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style14[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
Style14[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#ECE9E1",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style14[ICON_SUBCOMPONENT] = {
    color: "#ECE9E1",
    width: "11.25px",
    height: "11.25px",
}
Style14[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
Style14[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#ECE9E1",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}
Style14[ICONARROW_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    margin: "0px 0px 0px 8px",
}
Style14[ICONARROW_SUBCOMPONENT] = {
    color: "#ECE9E1",
    width: "5.83px",
    height: "10px",
}
Style14[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#98928F',
}
    
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style14Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style14Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style14Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path
tertiaryStyles.push(styleWrapper14)
// new boton
const Style15 = {}
Style15 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style15[TEXT_SUBCOMPONENT] = {
color: "#747468",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
Style15[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
color: "#747468",
}

Style15[ICONARROW_SUBCOMPONENT] = {
    color: "#747468",
    width: "5.83px",
    height: "10px",
}

    
const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style15Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style15Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style15Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
tertiaryStyles.push(styleWrapper15)

const Style16 = {}
Style16 [BUTTON_SUBCOMPONENT] = {

transition: "0.5s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
alignItems: "center",
height: "20px", 
background: "transparent",
border: "none",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}

Style16[TEXT_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#747468",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style16[ICON_CONTAINER_SUBCOMPONENT] ={
    transition: "0.5s all ease-in-out",
    color: "#747468",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 8px 0px 0px"
}
Style16[ICON_SUBCOMPONENT] = {
    color: "#747468",
    width: "11.25px",
    height: "11.25px",
}
Style16[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#747468",
width: "20px",
height: "20px",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0px 0px 0px 2px",
}

Style16[ICONARROW_SUBCOMPONENT] = {
    color: "#747468",
    width: "5.83px",
    height: "10px",
    }
    
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style16Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style16Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style16Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path
tertiaryStyles.push(styleWrapper16)

// THERE'S NO SPECIFIC STYLE FOR SMALL_OPTION SO WE COPY THE SAME STYLES AS MEDIUM_OPTION
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE]    = TERTIARY_OPTION
Style17Path[SIZE_ATTRIBUTE]         = SMALL_OPTION
Style17Path[COLOR_ATTRIBUTE]        = WHITE_OPTION
Style17Path [STATE_ATTRIBUTE]       = NORMAL_OPTION
Style17Path[ICON_ATTRIBUTE]         = OFF_OPTION 

const styleWrapper17 = {}
styleWrapper17[STYLE_OBJECT]            = {...Style13}
styleWrapper17[COMPONENT_VARIANT_KEY]   = ARROW_BUTTON_VARIANT
styleWrapper17[PATH_STYLE]              = Style17Path
tertiaryStyles.push(styleWrapper17)

const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE]    = TERTIARY_OPTION
Style18Path[SIZE_ATTRIBUTE]         = SMALL_OPTION
Style18Path[COLOR_ATTRIBUTE]        = WHITE_OPTION
Style18Path [STATE_ATTRIBUTE]       = NORMAL_OPTION
Style18Path[ICON_ATTRIBUTE]         = ON_OPTION 

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT]            = {...Style14}
styleWrapper18[COMPONENT_VARIANT_KEY]   = ARROW_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE]              = Style18Path
tertiaryStyles.push(styleWrapper18)

const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE]    = TERTIARY_OPTION
Style19Path[SIZE_ATTRIBUTE]         = SMALL_OPTION
Style19Path[COLOR_ATTRIBUTE]        = WHITE_OPTION
Style19Path [STATE_ATTRIBUTE]       = DISABLED_OPTION
Style19Path[ICON_ATTRIBUTE]         = OFF_OPTION 

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT]            = {...Style15}
styleWrapper19[COMPONENT_VARIANT_KEY]   = ARROW_BUTTON_VARIANT
styleWrapper19[PATH_STYLE]              = Style19Path
tertiaryStyles.push(styleWrapper19)

const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE]    = TERTIARY_OPTION
Style20Path[SIZE_ATTRIBUTE]         = SMALL_OPTION
Style20Path[COLOR_ATTRIBUTE]        = WHITE_OPTION
Style20Path [STATE_ATTRIBUTE]       = DISABLED_OPTION
Style20Path[ICON_ATTRIBUTE]         = ON_OPTION 

const styleWrapper20 = {}
styleWrapper20[STYLE_OBJECT]            = {...Style16}
styleWrapper20[COMPONENT_VARIANT_KEY]   = ARROW_BUTTON_ICON_VARIANT
styleWrapper20[PATH_STYLE]              = Style20Path
tertiaryStyles.push(styleWrapper20)
export  {tertiaryStyles};