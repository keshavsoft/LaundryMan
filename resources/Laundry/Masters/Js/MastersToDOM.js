import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CustomersHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { CustomersInsertFunc } from "../Customers/Insert/Js/Insert";
import { GarmentsHeaderFunc } from "../Garments/Js/GarmentsToDOM";
import { GarmentsInsertFunc } from "../Garments/Insert/Js/Insert";

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
    jVarLocalMastersCustomersId.addEventListener("click", CustomersHeaderFunc,true);
    jVarLocalMastersCustomersId.addEventListener("click", CustomersInsertFunc,true);

    let jVarLocalMastersGarmentsId = document.getElementById("MastersGarmentsId");
    jVarLocalMastersGarmentsId.addEventListener("click",GarmentsHeaderFunc,true);
    jVarLocalMastersGarmentsId.addEventListener("click",GarmentsInsertFunc,true);


};

export { ToHeaderFunc };