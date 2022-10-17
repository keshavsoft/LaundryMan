import { ChangeClassFunc } from "../../../CommonFuncs/Header";
import { DeleteWithAlertHtmlFunc } from "./HtmlFuncs/FromHbs";
import { DeleteShowFunc } from "./DalFuncs";
import { DeleteFunc } from "../../../../Dal/Bookings/Delete";
import { AddListeners } from "./ListenerFuncs";

let ShowDatawithAlertForDelete = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await DeleteWithAlertHtmlFunc();

    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DeleteShowFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    AddListeners();
    // LocalAddListeners();
};

let LocalAddListeners = () => {
    let jVarLocalDeleteButtonClass = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtonClass.length; i++) {
        jVarLocalDeleteButtonClass[i].addEventListener('click', async (inEvent) => {
            let jVarInsideCurrentTarget = inEvent.currentTarget;
            let jVarGetAttributeData = jVarInsideCurrentTarget.getAttribute("data-del");
            console.log("jVarGetAttributeData:", jVarGetAttributeData);
            DeleteFunc({ inRowPK: jVarGetAttributeData });
        });
    };

};

export { ShowDatawithAlertForDelete };