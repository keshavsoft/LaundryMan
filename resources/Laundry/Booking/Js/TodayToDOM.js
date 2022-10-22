import { HeaderHtmlFunc } from "./HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { ToHeaderFunc } from "../Today/Js/InsertToDOM";
import { ToKCont1 } from "../Today/Insert/Js/ShowinDOM";
import { ToHeaderFunc as ShowAllHeaderFuncs } from "../ShowAll/Js/InsertToDOM";
import { ToKCont1 as ShowAllDOMFunc } from "../ShowAll/Insert/Js/ShowinDOM";

let TodayHeaderFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    
    let jVarLocalBookingTodayHeaderId = document.getElementById("BookingTodayHeaderId");
    jVarLocalBookingTodayHeaderId.addEventListener("click", ToHeaderFunc,true);
    jVarLocalBookingTodayHeaderId.addEventListener("click",ToKCont1,true);


    let jVarLocalBookingShowAllHeaderId = document.getElementById("BookingShowAllHeaderId");
    jVarLocalBookingShowAllHeaderId.addEventListener("click", ShowAllHeaderFuncs,true);
    jVarLocalBookingShowAllHeaderId.addEventListener("click", ShowAllDOMFunc,true);

};

export { TodayHeaderFunc };