//import { StartFunc as DalQrCodesAsObject } from "../../../../Dal/Bookings/PullFuncs/QrCodesAsObject";
import { StartFunc as DalQrCodesAndCompleted } from "../../../../Dal/Bookings/PullFuncs/QrCodesAndCompleted";

let ShowAll = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await DalQrCodesAndCompleted();
    let LocalSNo = 1;

    LocalReturnObject.KReason = LocalDataFromJson.KReason;

    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            LocalReturnObject.JsonData[key] = {
                SNo: LocalSNo,
                OrderNo: key,
                CustomerName: value.CustomerName,
                Mobile: value.Mobile,
                QrCodesTotal: value.QrCodesTotal,
                QrCodesCompleted: value.QrCodesCompleted,
                QrCodesInProcess: value.QrCodesInProcess
            };

            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { ShowAll };