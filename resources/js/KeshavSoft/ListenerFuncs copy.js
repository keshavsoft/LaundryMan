import { StartFunc as DalBillingStartFunc } from "../../Dal/Billing/PullFuncs/Original";

import { StartFunc as DalForPKFunsStartFunc } from "../../Dal/Bookings/PullFuncs/CheckFuncs/ForPKFuns";
import { StartFunc as DalQrCodesForPKFunsStartFunc } from "../../Dal/QrCodes/PullFuncs/CheckFuncs/ForPKFuns";
import { StartFunc as DalBillingForPKFunsStartFunc } from "../../Dal/Billing/PullFuncs/CheckFuncs/ForPKFuns";
import { StartFunc as DalCompletedForPKFunsStartFunc } from "../../Dal/Completed/PullFuncs/CheckFuncs/ForPKFuns";

let AddlistenersFunc = () => {
    let jVarLocalMainHeaderSearchId = document.getElementById("MainHeaderSearchId");

    jVarLocalMainHeaderSearchId.addEventListener('keypress', LocaljFHeaderSearchInputKeyPress);
};

let LocaljFHeaderSearchInputKeyPress = async (event) => {
    if (event.key === 'Enter') { // key code of the keybord key
        event.preventDefault();
        let jVarLocalCurrentTarget = event.currentTarget;
        let LocalScanAsArray = jVarLocalCurrentTarget.value.split("/");
        let jVarLocalBookingPK = LocalScanAsArray[LocalScanAsArray.length - 1];
        let jVarLocalQrCode = LocalScanAsArray[0];

        let jVarLoalFromDalForPKFunsStartFunc = await DalForPKFunsStartFunc({ inBookingPK: jVarLocalBookingPK });

        if (jVarLoalFromDalForPKFunsStartFunc.KTF === false) {
            console.log("jVarLoalFromDalForPKFunsStartFunc : ", jVarLoalFromDalForPKFunsStartFunc.KReason);
            return;
        };

        let jVarLocalFromDalQrCodesForPKFunsStartFunc = await DalQrCodesForPKFunsStartFunc({ inQrCode: jVarLocalQrCode });
        console.log("111111 --------: ", jVarLocalFromDalQrCodesForPKFunsStartFunc);

        if (jVarLocalFromDalQrCodesForPKFunsStartFunc.KTF === false) {
            console.log("jVarLocalFromDalQrCodesForPKFunsStartFunc : ", jVarLocalFromDalQrCodesForPKFunsStartFunc.KReason);
            return;
        };

        let jVarLoalFromDalBillingForPKFunsStartFunc = await DalBillingForPKFunsStartFunc({ inBookingPK: jVarLocalBookingPK });

        if (jVarLoalFromDalBillingForPKFunsStartFunc.KTF === false) {
            let jVarLoalFromDalCompletedForPKFunsStartFunc = await DalCompletedForPKFunsStartFunc({ inQrCode: jVarLocalQrCode });
            console.log("222222222 --------: ", jVarLoalFromDalCompletedForPKFunsStartFunc);

            if (jVarLoalFromDalCompletedForPKFunsStartFunc.KTF === false) {
                
                console.log("jVarLoalFromDalForPKFunsStartFunc : ", jVarLoalFromDalCompletedForPKFunsStartFunc.KReason);
                return;
            };
        };

        console.log("jVarLoalFromDalBillingForPKFunsStartFunc --------: ", jVarLoalFromDalBillingForPKFunsStartFunc);

        // await FindBookingToDOMBodyFromPKAndQrCode({
        //     inBookingPK: jVarLocalBookingPK,
        //     inQrCode: jVarLocalQrCode
        // });

        // jVarLocalCurrentTarget.value = "";

        // console.log("1111111111 : ", jVarLocalCurrentTarget.value, jVarLoalFromDalBillingStartFunc);
    };
};


export { AddlistenersFunc }
