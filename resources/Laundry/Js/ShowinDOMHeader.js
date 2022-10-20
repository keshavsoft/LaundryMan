import { HeaderHtmlFunc } from "./HtmlFuncs/FromTemplates";
import { ToHeaderFunc as BookingInsertToDOMHeader } from "../Booking/Js/InsertToDOM";
import { ToKCont1 as BookingInsertToDOMBody } from "../Booking/Insert/Js/ShowinDOM";
import { CompletedHeaderFunc } from "../Completed/Js/CompletedToDom";
import { CompletedShow } from "../Completed/Show/Js/Show";
import { BillingHeaderFunc } from "../Billing/Js/BillingToDOM";
import { BillingShow } from "../Billing/Show/Js/BillingShowFunc";
import { QrCodeShowHeaderFunc } from "../QrCode/Js/QrCodeToDOM";
import { QrcodeShow } from "../QrCode/Show/Js/Show";
import { ToHeaderFunc as MastersToDOMHeader} from "../Masters/Js/MastersToDOM";
import { CustomersHeaderFunc } from "../Masters/Customers/Js/CustomersToDOM";

let BuildMenuFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKHeader = document.getElementById("KHeader");
    jVarLocalKHeader.innerHTML = jVarLocalFromHbs;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = "";

    LocalFuncAddListener();
};

let BuildMenuWithHeaderOnlyFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKHeader = document.getElementById("KHeader");
    jVarLocalKHeader.innerHTML = jVarLocalFromHbs;

    LocalFuncAddListener();
};

let LocalFuncAddListener = () => {
    let jVarLocalBookingId = document.getElementById("BookingId");
    let jVarLocalWashingCompletedId = document.getElementById("WashingCompletedId");
    let jVarLocalBillingId = document.getElementById("BillingId");
    let jVarLocalQrcodeshowId = document.getElementById("QrcodeshowId");
    let jVarLocalMastersId = document.getElementById("MastersId");

    jVarLocalBookingId.addEventListener("click", LocalFuncBooking);
    
    jVarLocalWashingCompletedId.addEventListener("click", LocalFuncCompleted);

    jVarLocalBillingId.addEventListener("click", LocalFuncBilling);

    jVarLocalQrcodeshowId.addEventListener("click", LocalFuncQrCode);

    jVarLocalMastersId.addEventListener("click", LocalFuncMasters);

};

let LocalFuncBooking = async () => {
    BookingInsertToDOMHeader();
    BookingInsertToDOMBody();
};

let LocalFuncMasters = async () => {
    MastersToDOMHeader();
};

let LocalFuncCompleted = async () => {
    CompletedHeaderFunc();
    CompletedShow();
};

let LocalFuncBilling = async () => {
    BillingHeaderFunc();
    BillingShow();
};

let LocalFuncQrCode = async () => {
    QrCodeShowHeaderFunc();
    QrcodeShow();
};

export { BuildMenuFunc }