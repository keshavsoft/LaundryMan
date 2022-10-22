import { HeaderHtmlFunc as BookingsHeaderHtmlFunc } from "./HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { ToHeaderFunc } from "../Today/Js/InsertToDOM";
import { ToKCont1 } from "../Today/Insert/Js/ShowinDOM";
import { ToHeaderFunc as ShowAllHeaderFunc } from "../ShowAll/Js/InsertToDOM";
import { ToKCont1 as ShowAllDOMFunc } from "../ShowAll/Insert/Js/ShowinDOM";

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
    let jVarLocalBookingTodayHeaderId = document.getElementById("BookingTodayHeaderId");
    let jVarLocalBookingShowAllHeaderId = document.getElementById("BookingShowAllHeaderId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalBookingTodayHeaderId.addEventListener("click", LocalFuncToday);
    jVarLocalBookingShowAllHeaderId.addEventListener("click", LocalFuncShowAll);


};

let LocalFuncToday = async () => {
    ToHeaderFunc();
    ToKCont1();
};

let LocalFuncShowAll = async () => {
    ShowAllHeaderFunc();
    ShowAllDOMFunc();
};


export { BuildBookingMenuFunc }