import { GarmentsHeaderHtmlFunc } from "../Js/HtmlFromTemplates";
import { BuildMenuFunc } from "../../../Js/ShowinDOMHeader";
import { CustomersInsertFunc } from "../Insert/Js/Insert";
import { GarmentsInsertFunc } from "../Insert/Js/Insert";

let GarmentsHeaderFunc = async () => {
    let jVarLocalFromHbs = await GarmentsHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalGarmentsInsertHeaderId = document.getElementById("GarmentsInsertHeaderId");
    let jVarLocalGarmentsShowHeaderId = document.getElementById("GarmentsShowHeaderId");


    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalGarmentsInsertHeaderId.addEventListener("click", GarmentsInsertFunc);

};


export { GarmentsHeaderFunc };