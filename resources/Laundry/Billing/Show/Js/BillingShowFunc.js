import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { BillingHtmlFunc as BillingShowHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { BillingShowFunc as BillingShowDalFunc } from "../../Show/Js/DalFunc";

let BillingShow = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await BillingShowHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await BillingShowDalFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    if ("KReason" in jVarLocalDataNeeded) {
        console.log("KError : ", jVarLocalDataNeeded.KReason);
    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    let jVarLocalSearchQrCodeTable = document.getElementById("SearchQrCodeTable");
    jVarLocalSearchQrCodeTable.focus();
};

export { BillingShow };