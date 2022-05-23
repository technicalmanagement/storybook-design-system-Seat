import {LARGE_OPTION,
    SMALL_OPTION,
    MEDIUM_OPTION,
    REGULAR_BUTTON_VARIANT,
    REGULAR_BUTTON_ICON_VARIANT,
    ARROW_BUTTON_VARIANT,
    ARROW_BUTTON_ICON_VARIANT,
    BUTTON_SUBCOMPONENT,
    TEXT_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    ICONARROW_CONTAINER_SUBCOMPONENT} from "../constants.js"
const SIZE_STYLES = {}

SIZE_STYLES[LARGE_OPTION] = {}

SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
display: "flex",
justifyContent: "center",
alignItems: "center",
textDecoration: "none",
padding: "0px 16px",
maxWidth: "670px",
minWidth: "214px",
width: "fit-content",
height: "48px",
boxSizing: "border-box",
border: "none",
borderRadius: "2px",
boxShadow: "none",
cursor: "pointer",

}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "14px 0px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
height: "20px",
maxWidth: "638px",
overflow: "hidden",
lineHeight: "20px",
whiteSpace: "nowrap",
userSelect: "none",
}

SIZE_STYLES[MEDIUM_OPTION] = {}

SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES [MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
display: "flex",
justifyContent: "center",
alignItems: "center",
textDecoration: "none",
padding: "0px 16px",
maxWidth: "951px",
minWidth: "212px",
width: "fit-content",
boxSizing: "border-box",
height: "40px",
border: "none",
borderRadius: "2px",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "12px 0px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
height: "16px",
maxWidth: "919px",
overflow: "hidden",
lineHeight: "16px",
whiteSpace: "nowrap",
userSelect: "none",

}

SIZE_STYLES[SMALL_OPTION] = {}

SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES [SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "0px 16px",
maxWidth: "731px",
minWidth: "136px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "32px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
borderRadius: "2px",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "8px 0px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
height: "16px",
maxWidth: "699px",
overflow: "hidden",
lineHeight: "16px",
whiteSpace: "nowrap",
userSelect: "none",
}

//REGULAR BUTTON ICON VARIANT
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "0px 16px",
maxWidth: "670px",
minWidth: "214px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "48px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
borderRadius: "2px",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "14px 0px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
height: "20px",
maxWidth: "614px",
overflow: "hidden",
lineHeight: "20px",
whiteSpace: "nowrap",
userSelect: "none",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    padding: "12px 0px",
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px"
}


SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "0px 16px",
maxWidth: "951px",
minWidth: "212px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "40px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
borderRadius: "2px",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "12px 0px",
fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
height: "16px",
maxWidth: "899px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    padding: "8px 0px",
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",  
    margin: "0px 8px 0px 0px" 
}

SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "0px 16px",
maxWidth: "731px",
minWidth: "136px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px",
border: "none",
borderRadius: "2px",
boxShadow: "none", 
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
padding: "8px 0px",
fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
height: "16px",
maxWidth: "679px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    padding: "6px 0px",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px"
}


//ARROW BUTTON VARIANT
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT] = {}
SIZE_STYLES [LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
height: "20px",
maxWidth: "642px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "20px",
userSelect: "none",
}

SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 2px",
}

SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT] = {}

SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
height: "16px",
maxWidth: "923px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 2px",
}

SIZE_STYLES[SMALL_OPTION][ARROW_BUTTON_VARIANT] = {}

SIZE_STYLES [SMALL_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "8px 16px",
maxWidth: "731px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
height: "16px",
maxWidth: "671px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}

//ARROW BUTTON ICON VARIANT
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT] = {}
SIZE_STYLES [LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {

fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
height: "20px",
maxWidth: "614px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "20px",
userSelect: "none",
}

SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px"
}

SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_ICON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 2px",
}



SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {

textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {

fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
height: "16px",
maxWidth: "895px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_ICON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 2px",
}

SIZE_STYLES[SMALL_OPTION][ARROW_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [SMALL_OPTION][ARROW_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
textDecoration: "none",
padding: "0px 16px",
maxWidth: "731px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][ARROW_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
height: "16px",
maxWidth: "646px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
export  {SIZE_STYLES};