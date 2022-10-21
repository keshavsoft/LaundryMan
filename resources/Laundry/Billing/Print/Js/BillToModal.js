import { BillModalPopUpHtmlFunc } from "./HtmlFuncs/FromHbs";
import { FromPk as DalFromPk } from "../../../../Dal/Bookings/PullFuncs/PickFuncs";

let ToModal = async ({ inBookingPK }) => {
    //  let jVarLocalDataNeeded = await PickFuncForQrCode({ inRowPK });
    let jVarLocalDataNeeded = await DalFromPk({ inRowPK: inBookingPK });
    console.log("jVarLocalDataNeeded : ", jVarLocalDataNeeded, inBookingPK);
    try {
        if (jVarLocalDataNeeded.KTF) {
            let jVarLocalModalBody = document.getElementById("ModalBody");

            let jVarLocalFromTemplate = await BillModalPopUpHtmlFunc();

            var template = Handlebars.compile(jVarLocalFromTemplate);
            let LocalQrCodesData = jVarLocalDataNeeded.KResult;

            jVarLocalModalBody.innerHTML = template(LocalQrCodesData);

            let jVarLocalId = "ModalForBilling";

            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        };
    } catch (error) {
        console.log("error -------: ", error);
    };
};

let AddListeners = () => {
    let jVarLocalBillButtonClass = document.getElementsByClassName("BillButtonClass");

    for (var i = 0; i < jVarLocalBillButtonClass.length; i++) {
        jVarLocalBillButtonClass[i].addEventListener('click', async (inEvent) => {
            let jVarInsideCurrentTarget = inEvent.currentTarget;
            let jVarInsideClosestTr = jVarInsideCurrentTarget.closest("tr");
            let jVarInsideBookingCode = jVarInsideCurrentTarget.dataset.qrcode;
            console.log("aaaaaa : ", jVarInsideBookingCode);
            ToModal({ inBookingPK: jVarInsideBookingCode });
        });
    };
};

export { AddListeners, ToModal };