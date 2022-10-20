import { CustomersShowHtmlFunc } from "./HtmlFuns/FromHbs";
import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { ShowFunc as CustomersShowDalFunc } from "../../../../../Dal/Customers/Show";

let CustomersShowFunc = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await CustomersShowHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await CustomersShowDalFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;
};

export { CustomersShowFunc };