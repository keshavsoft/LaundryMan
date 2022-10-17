import _ from "../js/lodash";

let BookingsInsertFunc = async ({ inDataToSave, inPK }) => {
    // console.log("aaaaaaaaa : ", inDataToSave, inPK);
    let LocalReturnObject = { KTF: false, KResult: "" };

    try {
        let LocalJsonFileName = "Bookings.json";

        let LocalCustomersData = await Neutralino.filesystem.readFile(`./KData/JSON/2017/${LocalJsonFileName}`);
        let LocalCustomersDataAsJson = JSON.parse(LocalCustomersData);

        if ((inPK in LocalCustomersDataAsJson) === false) {
            LocalCustomersDataAsJson[inPK] = inDataToSave;

            let LocalFromWriteFile = await Neutralino.filesystem.writeFile(`./KData/JSON/2017/${LocalJsonFileName}`, JSON.stringify(LocalCustomersDataAsJson));

            if (LocalFromWriteFile.success) {
                LocalReturnObject.KTF = true;
            };

        };

    } catch (error) {
        console.log("error InsertFunc : ", error);
    };

    return await LocalReturnObject;
};

export { BookingsInsertFunc };