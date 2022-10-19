import { BookingInsertSuccessFunc } from "./HtmlFuns/FromHbs";
import { InsertFunc as CustomersInsertDalFunc } from "../../../../Dal/Customers/Insert";

let CommonGarmentDetailsKeyName = "GarmentDetails";

let CustomersSaveFunc = async () => {
    //  LocalPreSaveFunc();
    let jVarLocalObject = {};
    let LocalCustomerDetails = jFCustomerDetails();

    if (LocalCustomerDetails.KTF) {
        jVarLocalObject = LocalCustomerDetails.KResult
    };

    let jVarLocalFromInsert = await CustomersInsertDalFunc({ inDataToSave: jVarLocalObject });
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

let jFCustomerDetails =  () => {
    let jVarLocalReturnObject = { KTF: false, KResult: {} };

    let jVarLocalCustomerName = document.getElementById("CustomerName");
    let JVarLocalMobileNumber = document.getElementById("Mobile");

    jVarLocalReturnObject.KTF = true;

    jVarLocalReturnObject.KResult = {
        CustomerName: jVarLocalCustomerName.value,
        Mobile: JVarLocalMobileNumber.value
    };

    return jVarLocalReturnObject;
};


export { CustomersSaveFunc };