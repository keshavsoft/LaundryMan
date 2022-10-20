import { GarmentsHeaderHtmlFunc } from "../Js/HtmlFromTemplates";
import { BuildMastersMenuFunc } from "../../Js/MastersShowInDom";
import { GarmentsInsertFunc } from "../Insert/Js/Insert";
import { GarmentsShowFunc } from "../Show/Js/Show";

let GarmentsHeaderFunc = async () => {
    let jVarLocalFromHbs = await GarmentsHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("MastersHeaderId");
    let jVarLocalGarmentsInsertHeaderId = document.getElementById("GarmentsInsertHeaderId");
    let jVarLocalGarmentsShowHeaderId = document.getElementById("GarmentsShowHeaderId");


    jVarLocalHomeId.addEventListener("click", BuildMastersMenuFunc);
    jVarLocalGarmentsInsertHeaderId.addEventListener("click", GarmentsInsertFunc);
    jVarLocalGarmentsShowHeaderId.addEventListener("click", GarmentsShowFunc);

};


export { GarmentsHeaderFunc };