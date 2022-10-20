import { CustomersHeaderHtmlFunc } from "../Js/HtmlFromTemplates";
import { BuildMastersMenuFunc } from "../../../Masters/Js/MastersShowInDom";
import { CustomersInsertFunc } from "../../Customers/Insert/Js/Insert";
import { CustomersShowFunc } from "../Show/Js/Show";

let CustomersHeaderFunc = async () => {
    let jVarLocalFromHbs = await CustomersHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("MastersHeaderId");
    let jVarLocalCustomersInsertHeaderId = document.getElementById("CustomersInsertHeaderId");
    let jVarLocalCustomersShowHeaderId = document.getElementById("CustomersShowHeaderId");


    jVarLocalHomeId.addEventListener("click", BuildMastersMenuFunc);
    jVarLocalCustomersInsertHeaderId.addEventListener("click", CustomersInsertFunc);
    jVarLocalCustomersShowHeaderId.addEventListener("click", CustomersShowFunc);

};


export { CustomersHeaderFunc };