import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { CustomersHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { CustomersShowFunc } from "../Customers/Show/Js/Show";
import { GarmentsHeaderFunc } from "../Garments/Js/GarmentsToDOM";
import { GarmentsShowFunc } from "../Garments/Show/Js/Show";

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
    jVarLocalMastersGarmentsId.addEventListener("click", LocalFuncGarments);


};

let LocalFuncCustomers = async () => {
    CustomersHeaderFunc();
    CustomersShowFunc();
};

let LocalFuncGarments = async () => {
    GarmentsHeaderFunc();
    GarmentsShowFunc();
};


export { BuildMastersMenuFunc }