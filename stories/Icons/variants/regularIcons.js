import {
    ICON_COLOR_ATTRIBUTE, 
    ICON_HEIGHT_ATTRIBUTE, 
    ICON_WIDTH_ATTRIBUTE, 
    ICON_SELECTION_ATTRIBUTE,
    PARTICULAR_ICON_PATH_ATTRIBUTE,
    PARTICULAR_ICON_VIEWBOX_ATTRIBUTE
    } from '../constants.js'
export const regularIconFunction = function (attributes)
{
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_VIEWBOX_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "width", attributes[ICON_WIDTH_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "height", attributes[ICON_HEIGHT_ATTRIBUTE]);

    const g = document.createElementNS(xmlns, "g");
    g.setAttributeNS(null, 'fill', 'none');
    g.setAttributeNS(null, 'fillRule', 'evenodd');

    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'd', attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_PATH_ATTRIBUTE]);
    path.setAttributeNS(null, 'fill',attributes[ICON_COLOR_ATTRIBUTE])

    svgElem.appendChild(g);
    g.appendChild(path);
    return svgElem;
}

