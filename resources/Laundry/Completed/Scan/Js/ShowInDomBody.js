import { ScanHtmlFunc } from "../../../Completed/Scan/Js/HtmlFuncs/FromHbs";
import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { AddListeners } from "./ListenersFuncs";

let ShowWithInputValue = async ({ inToShowValue }) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarInsideTemplate = await ScanHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = jVarInsideTemplate;
    LocalSetFocusFunc();
    AddListeners();

    let jVarLocalScanId = document.getElementById("ScanId");
    jVarLocalScanId.value = inToShowValue;
};

let LocalSetFocusFunc = () => {
    let jVarLocalScanId = document.getElementById("ScanId");
    jVarLocalScanId.focus();
};

export { ShowWithInputValue };