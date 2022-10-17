import { StartFunc as DalBooking } from "../../../../Dal/Bookings/PullFuncs/WithCompleted";

let ShowAll = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await DalBooking();
    let LocalSNo = 1;

    LocalReturnObject.KReason = LocalDataFromJson.KReason;
    
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

export { ShowAll };