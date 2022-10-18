import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { CustomersHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
// import { CompletedShowFunc } from "./Dalfuncs";

let CustomersShowFunc = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await CustomersHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await CompletedShowFunc();

    if (jVarLocalDataNeeded.KTF === false) {
    
    };

    if ("KReason" in jVarLocalDataNeeded) {
        console.log("KError : ", jVarLocalDataNeeded.KReason);
    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;
};

export { CustomersShowFunc };