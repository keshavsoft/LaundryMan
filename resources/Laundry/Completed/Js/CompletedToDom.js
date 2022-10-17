import { CompletedHeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CompletedShow } from "../Completed/Js/Show";
import { ScanHeaderId } from "../Scan/Js/ScanFuncs";

let CompletedHeaderFunc = async () => {
    let jVarLocalFromHbs = await CompletedHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalScanHeaderId = document.getElementById("ScanHeaderId");
    let jVarLocalCompletedHeaderId = document.getElementById("CompletedHeaderId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalScanHeaderId.addEventListener("click", ScanHeaderId);
    jVarLocalCompletedHeaderId.addEventListener("click", CompletedShow);
};

export { CompletedHeaderFunc };