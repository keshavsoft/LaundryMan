import { QrcodeHeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { QrcodeShow } from "../Show/Js/Show";

let QrCodeShowHeaderFunc = async () => {
    let jVarLocalFromHbs = await QrcodeHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalQrcodeShowHeaderId = document.getElementById("QrcodeShowHeaderId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalQrcodeShowHeaderId.addEventListener("click", QrcodeShow);
};


export { QrCodeShowHeaderFunc };