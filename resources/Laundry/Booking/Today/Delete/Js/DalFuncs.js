import {ShowAllFunc} from "../../../../../Dal/Bookings/Show";
let DeleteShowFunc= async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await ShowAllFunc();
    let LocalSNo = 1;

    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            LocalReturnObject.JsonData[key] = value;
            LocalReturnObject.JsonData[key].SNo = LocalSNo;
            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;

};
export{DeleteShowFunc};