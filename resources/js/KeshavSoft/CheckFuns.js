import { StartFunc as DalForPKFunsStartFunc } from "../../Dal/Bookings/PullFuncs/CheckFuncs/ForPKFuns";
import { StartFunc as DalQrCodesForPKFunsStartFunc } from "../../Dal/QrCodes/PullFuncs/CheckFuncs/ForPKFuns";

let StartFunc = async ({ inBookingPK, inQrCode }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
    let jVarLocalBookingPK = inBookingPK;
    let jVarLocalQrCode = inQrCode;

    let jVarLoalFromDalForPKFunsStartFunc = await DalForPKFunsStartFunc({ inBookingPK: jVarLocalBookingPK });

    if (jVarLoalFromDalForPKFunsStartFunc.KTF === false) {
        LocalReturnObject.KReason = jVarLoalFromDalForPKFunsStartFunc.KReason;
        return await LocalReturnObject;
    };

    let jVarLocalFromDalQrCodesForPKFunsStartFunc = await DalQrCodesForPKFunsStartFunc({ inQrCode: jVarLocalQrCode });

    if (jVarLocalFromDalQrCodesForPKFunsStartFunc.KTF === false) {
        LocalReturnObject.KReason = jVarLocalFromDalQrCodesForPKFunsStartFunc.KReason;
        return await LocalReturnObject;
    };

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { StartFunc }
