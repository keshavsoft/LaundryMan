import { QrCodeModalPopUp } from "../../QrCode/Js/HtmlFuncs/FromHbs";
import { PickFuncForQrCode } from "../../../../Dal/Bookings/Pick";

let ToModal = async ({ inRowPK }) => {
    let jVarLocalDataNeeded = await PickFuncForQrCode({ inRowPK });

    if (jVarLocalDataNeeded.KTF) {
        let jVarLocalModalBody = document.getElementById("ModalBody");

        let jVarLocalFromTemplate = await QrCodeModalPopUp();

        var template = Handlebars.compile(jVarLocalFromTemplate);
        jVarLocalDataNeeded.KResult.PK = inRowPK;
        jVarLocalModalBody.innerHTML = template(jVarLocalDataNeeded.KResult);
        
        for (let i = 0; i < jVarLocalDataNeeded.KResult.QrCodesForPrint.length; i++) {
            let LocalRowNumber = jVarLocalDataNeeded.KResult.QrCodesForPrint[i].RowNumber;
            let LocalPK = jVarLocalDataNeeded.KResult.QrCodesForPrint[i].PK;
            let LocalId = `${inRowPK}-${LocalRowNumber}-${LocalPK}`;
            
            let jVarLocalHtmlQr = document.getElementById(LocalId);

            let jVarLocalQrData = `${inRowPK}-${LocalRowNumber}/${jVarLocalDataNeeded.KResult.CustomerName}/${jVarLocalDataNeeded.KResult.Mobile}/${jVarLocalDataNeeded.KResult.Garments}/${jVarLocalDataNeeded.KResult.Weight}`;

            GenerateQrCodeOnModal({
                inQrData: jVarLocalQrData,
                inCanvasId: jVarLocalHtmlQr
            });
        };

        let jVarLocalId = "ModalForQrCode";

        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

        myModal.show();
    };
};


let ToModal_old = async ({ inRowPK }) => {
    let jVarLocalDataNeeded = await PickFuncForQrCode({ inRowPK });

    if (jVarLocalDataNeeded.KTF) {
        let jVarLocalModalBody = document.getElementById("ModalBody");

        let jVarLocalFromTemplate = await QrCodeModalPopUp();

        var template = Handlebars.compile(jVarLocalFromTemplate);
        jVarLocalDataNeeded.KResult.PK = inRowPK;
        jVarLocalModalBody.innerHTML = template(jVarLocalDataNeeded.KResult);
        
        for (let i = 0; i < jVarLocalDataNeeded.KResult.QrCodesForPrint.length; i++) {
            let LocalRowNumber = jVarLocalDataNeeded.KResult.QrCodesForPrint[i].RowNumber;
            let LocalPK = jVarLocalDataNeeded.KResult.QrCodesForPrint[i].PK;
            let LocalId = `${inRowPK}-${LocalRowNumber}-${LocalPK}`;
            
            let jVarLocalHtmlQr = document.getElementById(LocalId);

            let jVarLocalQrData = `${inRowPK}-${LocalRowNumber}/${jVarLocalDataNeeded.KResult.CustomerName}/${jVarLocalDataNeeded.KResult.Mobile}/${jVarLocalDataNeeded.KResult.Garments}/${jVarLocalDataNeeded.KResult.Weight}`;

            GenerateQrCodeOnModal({
                inQrData: jVarLocalQrData,
                inCanvasId: jVarLocalHtmlQr
            });
        };

        let jVarLocalId = "ModalForQrCode";

        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

        myModal.show();
    };
};

let AddListeners = () => {
    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("QrCodeButtonClass");

    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener('click', async (inEvent) => {
            let jVarInsideCurrentTarget = inEvent.currentTarget;
            let jVarInsideClosestTr = jVarInsideCurrentTarget.closest("tr");
            let jVarInsideQrCodeValue = jVarInsideClosestTr.dataset.qrcode;
            ToModal({ inRowPK: jVarInsideQrCodeValue });
        });
    };
};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrData;
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

export { AddListeners, ToModal };