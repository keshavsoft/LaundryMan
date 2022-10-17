//import { StartFunc as DalQrCodesAsObject } from "../../../../Dal/Bookings/PullFuncs/QrCodesAsObject";
import { StartFunc as DalQrCodesAndCompleted } from "../../../../Dal/Bookings/PullFuncs/QrCodesAndCompleted";

let ShowAll = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await DalQrCodesAndCompleted();
    let LocalSNo = 1;

    LocalReturnObject.KReason = LocalDataFromJson.KReason;
    LocalReturnObject.JsonData = LocalDataFromJson.JsonData;

    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            value.SNo = LocalSNo;

            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { ShowAll };