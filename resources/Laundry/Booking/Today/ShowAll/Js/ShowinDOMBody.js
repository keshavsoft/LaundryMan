import { ShowAllHtmlFunc } from "./HtmlFuncs/FromHbs";
import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { ShowAllFunc } from "./DalFuncs";

let ShowAll = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await ShowAllHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await ShowAllFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;
};

export { ShowAll };