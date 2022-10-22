import { HeaderHtmlFunc } from "./HtmlFromTemplate";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { HeaderHtmlFunc as TodayHeaderFunc } from "../Today/Js/HtmlFromTemplates";

let ToHeaderFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    
    let jVarLocalBookingHeaderTodayId = document.getElementById("BookingTodayHeaderId");
    jVarLocalBookingHeaderTodayId.addEventListener("click", TodayHeaderFunc);

    let jVarLocalBookingHeaderShowAllId = document.getElementById("BookingHeaderShowAllId");
    jVarLocalBookingHeaderShowAllId.addEventListener("click", ShowAll);

};

export { ToHeaderFunc };