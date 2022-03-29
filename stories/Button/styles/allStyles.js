import {primaryStyles} from "./primaryStyles.js"
import {secondaryStyles} from "./secondaryStyles.js"
import {purchaseStyles} from "./purchaseStyles.js"
import {tertiaryStyles} from "./tertiaryStyles.js"
import {ghostStyles} from "./ghostStyles.js"
import {hyperlinkStyles} from "./hyperlinkStyles.js"
import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...primaryStyles)
allStyles.push(...secondaryStyles)
allStyles.push(...purchaseStyles)
allStyles.push(...tertiaryStyles)
allStyles.push(...ghostStyles)
allStyles.push(...hyperlinkStyles)

for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Button_Style_" + i

  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i].path
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}

export  {allStylesKeysAndPaths};
export  {allStylesObjects}
