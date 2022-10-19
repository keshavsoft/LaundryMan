import { CustomersHeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CustomersInsertFunc } from "../Insert/Js/Insert";
import { CustomersShowFunc } from "../Show/Js/Show";

let CustomerHeaderFunc = async () => {
    let jVarLocalFromHbs = await CustomersHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalCustomersInsertHeaderId = document.getElementById("CustomersInsertHeaderId");
    let jVarLocalCustomersShowHeaderId = document.getElementById("CustomersShowHeaderId");


    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalCustomersInsertHeaderId.addEventListener("click", CustomersInsertFunc);
    jVarLocalCustomersShowHeaderId.addEventListener("click", CustomersShowFunc);

};


export { CustomerHeaderFunc };