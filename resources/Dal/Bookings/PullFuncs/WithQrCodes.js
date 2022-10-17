import { StartFunc as OriginalStartFunc } from "./Original";

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalFromOriginal = await OriginalStartFunc();

    if (LocalFromOriginal.KTF === false) {
        LocalReturnObject.KReason = LocalFromOriginal.KReason;
        return await LocalReturnObject;
    };

    let LocalOriginalData = LocalFromOriginal.JsonData;

    Object.entries(LocalOriginalData).forEach(
        ([key, value]) => {
            let LoopInsidePcsArray = Object.values(value.GarmentDetails).map(LoopItem => LoopItem.Pcs);
            value.GarmentPcsTotal = LoopInsidePcsArray.reduce((a, b) => a + b, 0);
        }
    );
    
    LocalReturnObject.JsonData = LocalOriginalData;
    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { StartFunc }