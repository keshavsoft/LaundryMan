import { StartFunc } from "../Original";

let StartFunc = async ({ inBookingPK }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
    let LocalFromStartFunc = await StartFunc();

    if (LocalFromStartFunc.KTF === false) {
        LocalReturnObject.KReason = LocalFromStartFunc.KReason;
        return await LocalReturnObject;
    };

    if (inBookingPK in LocalReturnObject.JsonData) {
        LocalReturnObject.KTF = true;
    };

    return await LocalReturnObject;
};

export { StartFunc }
