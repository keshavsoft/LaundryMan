import { CustomersHeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CustomersShowFunc } from "../Show/Js/Show";

let CustomerHeaderFunc = async () => {
    let jVarLocalFromHbs = await CustomersHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalCustomersHeaderId = document.getElementById("CustomersHeaderId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalCustomersHeaderId.addEventListener("click", CustomersShowFunc);
};


export { CustomerHeaderFunc };