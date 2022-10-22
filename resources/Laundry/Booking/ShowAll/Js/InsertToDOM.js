import { HeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildBookingMenuFunc } from "../../../Booking/Js/TodayToHeaderDom";
import { ToKCont1 } from "../Insert/Js/ShowinDOM";
import { TodayShowFunc } from "../Today/Js/TodayShow";
import { ShowDataForDelete } from "../Delete/Js/ShowDataForDelete";
import { ShowDatawithAlertForDelete } from "../Delete/Js/ShowDatawithAlertForDelete";
import { ShowAll } from "../ShowAll/Js/ShowinDOMBody";
import { QrcodeShowAll } from "../QrCode/Js/QrCode";
import { LastBookingFunc } from "../LastBooking/Js/LastBooking";
import { FindBookingFunc as FindBookingShowToDOM } from "../FindBooking/Js/FindBooking";
import { DashBoardShow as DashBoardShowToDOM} from "../DashBoard/Js/DashBordShow";

let ToHeaderFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("BookingHomeId");
    jVarLocalHomeId.addEventListener("click", BuildBookingMenuFunc);
    
    let jVarLocalBookingHeaderTodayId = document.getElementById("BookingHeaderTodayId");
    jVarLocalBookingHeaderTodayId.addEventListener("click", TodayShowFunc);

    let jVarLocalBookingHeaderDeleteId = document.getElementById("BookingHeaderDeleteId");
    jVarLocalBookingHeaderDeleteId.addEventListener("click", ShowDatawithAlertForDelete);

    let jVarLocalBookingHeaderShowAllId = document.getElementById("BookingHeaderShowAllId");
    jVarLocalBookingHeaderShowAllId.addEventListener("click", ShowAll);

    let jVarLocalBookingHeaderInsertId = document.getElementById("BookingHeaderInsertId");
    jVarLocalBookingHeaderInsertId.addEventListener("click",ToKCont1 );

    let jVarLocalBookingHeaderQrCodeId = document.getElementById("BookingHeaderQrCodeId");
    jVarLocalBookingHeaderQrCodeId.addEventListener("click", QrcodeShowAll);
 
    let jVarLocalLastBookingHeaderId = document.getElementById("LastBookingHeaderId");
    jVarLocalLastBookingHeaderId.addEventListener("click", LastBookingFunc);

    let jVarLocalFindBookingHeaderId = document.getElementById("FindBookingHeaderId");
    jVarLocalFindBookingHeaderId.addEventListener("click", FindBookingShowToDOM);

    let jVarLocalDashBoardHeaderId = document.getElementById("DashBoardHeaderId");
    jVarLocalDashBoardHeaderId.addEventListener("click", DashBoardShowToDOM);

};

export { ToHeaderFunc };