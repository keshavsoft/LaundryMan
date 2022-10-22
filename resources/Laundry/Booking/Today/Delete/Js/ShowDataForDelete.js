import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { DeleteHtmlFunc } from "../../Delete/Js/HtmlFuncs/FromHbs";
import { DeleteShowFunc } from "../../Delete/Js/DalFuncs";
import { DeleteFunc } from "../../../../../Dal/Bookings/Delete";
import { ShowDatawithAlertForDelete } from "./ShowDatawithAlertForDelete";
import { AddListeners } from "./ListenerFuncs";
let ShowDataForDelete = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await DeleteHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DeleteShowFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;
    AddListeners();
    // LocalAddListeners();
};

export { ShowDataForDelete };