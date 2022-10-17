import { BillingHeaderHtmlFunc } from "./HtmlFromTemplates";
import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { BillingShow } from "../Billing/Js/BillingShowFunc";
import { BillingScanHeaderId } from "../Scan/Js/ScanFuncs";

let BillingHeaderFunc = async () => {
    let jVarLocalFromHbs = await BillingHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    LocalFuncAddListeners();
};

let LocalFuncAddListeners = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);

    
    let jVarLocalBillingHeaderId = document.getElementById("BillingHeaderId");

    jVarLocalBillingHeaderId.addEventListener("click", BillingShow);

    
    let jVarLocalBillingScanHeaderId = document.getElementById("BillingScanHeaderId");

    jVarLocalBillingScanHeaderId.addEventListener("click", BillingScanHeaderId);
};
export{BillingHeaderFunc};