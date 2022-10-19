import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";
import { CustomersInsertFunc } from "../Customers/Insert/Js/Insert";
import { CustomersHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { GarmentsHeaderFunc } from "../Garments/Js/GarmentsToDOM";

let ToHeaderFunc = async () => {
    let jVarLocalFromHbs = await MastersHeaderHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);

    let jVarLocalMastersCustomersId = document.getElementById("MastersCustomersId");  
    jVarLocalMastersCustomersId.addEventListener("click", CustomersHeaderFunc);

    let jVarLocalMastersGarmentsId = document.getElementById("MastersGarmentsId");
    jVarLocalMastersGarmentsId.addEventListener("click",GarmentsHeaderFunc);


};

export { ToHeaderFunc };