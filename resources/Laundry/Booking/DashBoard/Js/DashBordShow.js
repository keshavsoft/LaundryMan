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

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DalShowAll();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    LocalApplyRowColours({ inJsonData: jVarLocalDataNeeded.JsonData });

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    //   AddListeners();
};

let LocalApplyRowColours = ({ inJsonData }) => {
    Object.entries(inJsonData).forEach(
        ([key, value]) => {
            if (value.QrCodesCompleted === value.QrCodesTotal) {
                value.TableRowColour = "table-success";
            };

            if (value.QrCodesCompleted < value.QrCodesTotal) {
                value.TableRowColour = "table-danger";
            };
        }
    );
};

export { DashBoardShow }
