import { LastBookingtHtmlFunc } from "./HtmlFuns/FromHbs";
import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
// import { BookingSaveFunc } from "../Js/SaveFuncs";
// import { BookingClear } from "../Js/ClearFunc";
import { LastBooking } from "../../../../../Dal/Bookings/Pick";
import { LastPkData } from "../../../../../Dal/Bookings/PullFuncs/PickFuncs";

let LastBookingFunc = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromHbs = await LastBookingtHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KCont1");

    var template = Handlebars.compile(jVarLocalFromHbs);
    let jVarLocalDataToShow = await LastPkData();

    if (jVarLocalDataToShow.KTF) {

        jVarLocalKCont1.innerHTML = template(jVarLocalDataToShow.KResult);

    };

    // LocalFuncAddListeners();
    LocalSetFocusFunc();
};

let LocalSetFocusFunc = () => {
    let jVarLocalCustomerName = document.getElementById("CustomerName");
    jVarLocalCustomerName.focus();
};

// let LocalFuncAddListeners = () => {
//     let jVarLocalBookingSaveButtonId = document.getElementById("BookingSaveButtonId");

//     jVarLocalBookingSaveButtonId.addEventListener("click", BookingSaveFunc);
//     jVarLocalBookingSaveButtonId.addEventListener("click", BookingClear );

// };

export { LastBookingFunc };