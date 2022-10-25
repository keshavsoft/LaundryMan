import { StartFunc as DalBillingStartFunc } from "../../Dal/Billing/PullFuncs/Original";
//import { ToDOMBodyFromPK as FindBookingToDOMBodyFromPK } from "../../FindBooking/Js/FindBooking";
import { ToDOMBodyFromPKAndQrCode as FindBookingToDOMBodyFromPKAndQrCode } from "../../Laundry/Booking/Today/FindBooking/Js/FindBooking";
import { StartFunc as DalForPKFunsStartFunc } from "../../Dal/Bookings/PullFuncs/CheckFuncs/ForPKFuns";

let AddlistenersFunc = () => {
    let jVarLocalMainHeaderSearchId = document.getElementById("MainHeaderSearchId");

    jVarLocalMainHeaderSearchId.addEventListener('keypress', LocaljFHeaderSearchInputKeyPress);

    // jVarLocalTableButtons.forEach(function (element) {
    //     // element refers to the DOM node
    //     element.addEventListener('click', LocalTableButtonFunc);
    // });

};


let LocaljFHeaderSearchInputKeyPress = async (event) => {
    if (event.key === 'Enter') { // key code of the keybord key
        event.preventDefault();
        let jVarLocalCurrentTarget = event.currentTarget;
        let LocalScanAsArray = jVarLocalCurrentTarget.value.split("/");
        let jVarLocalBookingPK = LocalScanAsArray[LocalScanAsArray.length - 1];
        let jVarLocalQrCode = LocalScanAsArray[0];
        
        let jVarLoalFromDalForPKFunsStartFunc = await DalForPKFunsStartFunc();

        if (jVarLoalFromDalForPKFunsStartFunc.KTF === false) {
            LocalReturnObject.KReason = jVarLoalFromDalForPKFunsStartFunc.KReason;
            return await LocalReturnObject;
        };

        let jVarLoalFromDalBillingStartFunc = await DalBillingStartFunc();

        if (jVarLoalFromDalBillingStartFunc.KTF === false) {
            LocalReturnObject.KReason = jVarLoalFromDalBillingStartFunc.KReason;
            return await LocalReturnObject;
        };

        await FindBookingToDOMBodyFromPKAndQrCode({
            inBookingPK: jVarLocalBookingPK,
            inQrCode: jVarLocalQrCode
        });

        jVarLocalCurrentTarget.value = "";

        console.log("1111111111 : ", jVarLocalCurrentTarget.value, jVarLoalFromDalBillingStartFunc);
    };
};


export { AddlistenersFunc }
