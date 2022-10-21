import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { BillPrintHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { BillingPrintFunc as BillPrintDalFunc } from "../../Print/Js/DalFunc";
import { AddListeners } from "./BillToModal";

let BillPrintShowFunc = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await BillPrintHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await BillPrintDalFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    if ("KReason" in jVarLocalDataNeeded) {
        console.log("KError : ", jVarLocalDataNeeded.KReason);
    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    let jVarLocalSearchQrCodeTable = document.getElementById("SearchQrCodeTable");
    jVarLocalSearchQrCodeTable.focus();

    AddListeners();
};

export { BillPrintShowFunc };