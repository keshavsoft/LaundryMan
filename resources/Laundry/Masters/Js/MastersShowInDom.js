import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";
import { CustomersHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { CustomersInsertFunc } from "../Customers/Insert/Js/Insert";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { GarmentsHeaderHtmlFunc } from "../Garments/Js/HtmlFromTemplates";
import { GarmentsInsertFunc } from "../Garments/Insert/Js/Insert";

let BuildMastersMenuFunc = async () => {
    let jVarLocalFromHbs = await MastersHeaderHtmlFunc();

    let jVarLocalKHeader = document.getElementById("KHeader");
    jVarLocalKHeader.innerHTML = jVarLocalFromHbs;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = "";

    LocalFuncAddListeners();
};

let BuildMenuWithHeaderOnlyFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKHeader = document.getElementById("KHeader");
    jVarLocalKHeader.innerHTML = jVarLocalFromHbs;

    LocalFuncAddListener();
};

let LocalFuncAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalMastersCustomersId = document.getElementById("MastersCustomersId");
    let jVarLocalMastersGarmentsId = document.getElementById("MastersGarmentsId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalMastersCustomersId.addEventListener("click", LocalFuncCustomers);
    // jVarLocalMastersGarmentsId.addEventListener("click", LocalFuncGarments);


};

let LocalFuncCustomers = async () => {
    CustomersHeaderFunc();
    CustomersInsertFunc();
};

let LocalFuncGarments = async () => {
    GarmentsHeaderHtmlFunc();
    GarmentsInsertFunc();
};


export { BuildMastersMenuFunc }