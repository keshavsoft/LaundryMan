import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { BillingHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { BillingShowFunc } from "../Js/DalFunc";

let BillingShow = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await BillingHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await BillingShowFunc();
    
    if (jVarLocalDataNeeded.KTF === false) {

    };

    if ("KReason" in jVarLocalDataNeeded) {
        console.log("KError : ", jVarLocalDataNeeded.KReason);
    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;
};

export { BillingShow };