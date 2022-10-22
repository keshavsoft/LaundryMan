import { HeaderHtmlFunc as BookingsHeaderHtmlFunc } from "./HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { ToHeaderFunc } from "../Today/Js/InsertToDOM";
import { ToKCont1 } from "../Today/Insert/Js/ShowinDOM";

let BuildBookingMenuFunc = async () => {
    let jVarLocalFromHbs = await BookingsHeaderHtmlFunc();

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
    let jVarLocalMastersCustomersId = document.getElementById("BookingTodayHeaderId");
    let jVarLocalMastersGarmentsId = document.getElementById("MastersGarmentsId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalMastersCustomersId.addEventListener("click", LocalFuncToday);
    // jVarLocalMastersGarmentsId.addEventListener("click", LocalFuncGarments);


};

let LocalFuncToday = async () => {
    ToHeaderFunc();
    ToKCont1();
};

let LocalFuncGarments = async () => {
    GarmentsHeaderFunc();
    GarmentsShowFunc();
};


export { BuildBookingMenuFunc }