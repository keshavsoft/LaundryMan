import { BookingInsertSuccessFunc } from "./HtmlFuns/FromHbs";
import { InsertFunc as GarmentsInsertDalFunc } from "../../../../../Dal/Garments/Insert";


let GarmentsSaveFunc = async () => {
    //  LocalPreSaveFunc();
    let jVarLocalObject = {};
    let LocalCustomerDetails = jFGarmentsDetails();

    if (LocalCustomerDetails.KTF) {
        jVarLocalObject = LocalCustomerDetails.KResult
    };

    let jVarLocalFromInsert = await GarmentsInsertDalFunc({ inDataToSave: jVarLocalObject });
    // await LocalPostSaveFunc({ inFromSave: jVarLocalFromInsert });
};

// let LocalPostSaveFunc = async ({ inFromSave }) => {
//     if (inFromSave.KTF) {

//         let jVarLocalKCont1 = document.getElementById("KCont1");
//         let jVarLocalFromBookingInsertSuccessFunc = await BookingInsertSuccessFunc();

//         var template = Handlebars.compile(jVarLocalFromBookingInsertSuccessFunc);

//         let jVarLocalHtml = template({ key: inFromSave.kPK, KResult: inFromSave.KResult });

//         jVarLocalKCont1.insertAdjacentHTML('afterbegin', jVarLocalHtml);

//         setTimeout(() => {
//             const alert = bootstrap.Alert.getOrCreateInstance('#BookingInsertSuccessId');
//             alert.close();
//         }, 10000);

//         let jVarLocalBookingInsertSuccessIdMsg = document.getElementById("BookingInsertSuccessIdMsg");

//         jVarLocalBookingInsertSuccessIdMsg.innerHTML = inFromSave.KResult;

//         let jVarLocalPrintQrCodeButtonId = document.getElementById("PrintQrCodeButtonId");

//         jVarLocalPrintQrCodeButtonId.addEventListener('click', (event) => {
//             let jVarInsideCurrentTarget = event.currentTarget;
//             let jVarLocalqrcode = jVarInsideCurrentTarget.dataset.qrcode;

//             ToModal({ inRowPK: jVarLocalqrcode });
//         });
//     } else {

//     };
// };

let LocalPreSaveFunc = () => {
    let jVarLocalBookingInsertSuccessId = document.getElementById("BookingInsertSuccessId");
    jVarLocalBookingInsertSuccessId.classList.add("d-none");
};

let jFGarmentsDetails = () => {
    let jVarLocalReturnObject = { KTF: false, KResult: {} };

    let jVarLocalGarmentName = document.getElementById("GarmentName");
    let JVarLocalGarmentDescription = document.getElementById("GarmentDescription");
    let JVarLocalPrice = document.getElementById("Price");

    jVarLocalReturnObject.KTF = true;

    jVarLocalReturnObject.KResult = {
        GarmentName: jVarLocalGarmentName.value,
        GarmentDescription: JVarLocalGarmentDescription.value,
        Price: JVarLocalPrice.value
    };

    return jVarLocalReturnObject;
};


export { GarmentsSaveFunc };