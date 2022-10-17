import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { CompletedHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { CompletedShowFunc } from "../Js/Dalfuncs";

let CompletedShow = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await CompletedHtmlFunc();

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

export { CompletedShow };