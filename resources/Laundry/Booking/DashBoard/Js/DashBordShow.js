import { DashBoardHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { ShowAll as DalShowAll } from "./Dalfuncs";
import { ChangeClassFunc } from "../../../CommonFuncs/Header";
//import { AddListeners } from "./QrCodeToModal";

let DashBoardShow = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await DashBoardHtmlFunc();
    //    console.log("jVarLocalFromTemplate : ",jVarLocalFromTemplate);

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DalShowAll();
    console.log("jVarLocalFromTemplate : ", jVarLocalDataNeeded);

    if (jVarLocalDataNeeded.KTF === false) {

    };
    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    //   AddListeners();
};

export { DashBoardShow }
