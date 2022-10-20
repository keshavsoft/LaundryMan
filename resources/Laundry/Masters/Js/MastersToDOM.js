import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CustomersHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { CustomersShowFunc } from "../Customers/Show/Js/Show";
import { GarmentsHeaderFunc } from "../Garments/Js/GarmentsToDOM";
import { GarmentsShowFunc } from "../Garments/Show/Js/Show";

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
    jVarLocalMastersCustomersId.addEventListener("click", CustomersShowFunc,true);

    let jVarLocalMastersGarmentsId = document.getElementById("MastersGarmentsId");
    jVarLocalMastersGarmentsId.addEventListener("click",GarmentsHeaderFunc,true);
    jVarLocalMastersGarmentsId.addEventListener("click",GarmentsShowFunc,true);


};

export { ToHeaderFunc };