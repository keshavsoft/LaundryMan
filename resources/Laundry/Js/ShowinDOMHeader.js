import { HeaderHtmlFunc } from "./HtmlFuncs/FromTemplates";
import { ToHeaderFunc } from "../Booking/Js/InsertToDOM";
import { ToKCont1 } from "../Booking/Insert/Js/ShowinDOM";
import { CompletedHeaderFunc } from "../Completed/Js/CompletedToDom";
import { CompletedShow } from "../Completed/Completed/Js/Show";
import { BillingHeaderFunc } from "../Billing/Js/BillingToDOM";
import { BillingShow } from "../Billing/Billing/Js/BillingShowFunc";
import { QrCodeShowHeaderFunc } from "../QrCode/Js/QrCodeToDOM";
import { QrcodeShow } from "../QrCode/Show/Js/Show";


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

    jVarLocalBookingId.addEventListener("click", LocalFuncBooking);

    jVarLocalWashingCompletedId.addEventListener("click", LocalFuncCompleted);

    jVarLocalBillingId.addEventListener("click", LocalFuncBilling);
   
    jVarLocalQrcodeshowId.addEventListener("click", LocalFuncQrCode);

};

let LocalFuncBooking = async () => {
    ToHeaderFunc();
    ToKCont1();
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