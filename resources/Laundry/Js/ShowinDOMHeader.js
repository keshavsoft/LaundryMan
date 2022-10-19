import { HeaderHtmlFunc } from "./HtmlFuncs/FromTemplates";
import { ToHeaderFunc as BookingInsertToDOMHeader } from "../Booking/Js/InsertToDOM";
import { ToKCont1 as BookingInsertToDOMBody } from "../Booking/Insert/Js/ShowinDOM";
import { CompletedHeaderFunc } from "../Completed/Js/CompletedToDom";
import { CompletedShow } from "../Completed/Show/Js/Show";
import { BillingHeaderFunc } from "../Billing/Js/BillingToDOM";
import { BillingShow } from "../Billing/Show/Js/BillingShowFunc";
import { QrCodeShowHeaderFunc } from "../QrCode/Js/QrCodeToDOM";
import { QrcodeShow } from "../QrCode/Show/Js/Show";
import { CustomerHeaderFunc } from "../Customers/Js/CustomersToDOM";
import { CustomersInsertFunc } from "../Customers/Insert/Js/Insert";


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
    let jVarLocalCustomersId = document.getElementById("CustomersId");

    jVarLocalBookingId.addEventListener("click", LocalFuncBooking);

    jVarLocalWashingCompletedId.addEventListener("click", LocalFuncCompleted);

    jVarLocalBillingId.addEventListener("click", LocalFuncBilling);

    jVarLocalQrcodeshowId.addEventListener("click", LocalFuncQrCode);

    jVarLocalCustomersId.addEventListener("click", LocalFuncCustomers);

};

let LocalFuncBooking = async () => {
    BookingInsertToDOMHeader();
    BookingInsertToDOMBody();
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

let LocalFuncCustomers = async () => {
    CustomerHeaderFunc();
    CustomersInsertFunc();
};

export { BuildMenuFunc }