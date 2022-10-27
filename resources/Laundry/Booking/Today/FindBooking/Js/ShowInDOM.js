import { FindBookingHtmlFunc } from "./HtmlFuns/FromTemplate";

let StartFunc = async ({ inData, inCustomerName }) => {
    let jVarLocalFromHbs = await FindBookingHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

    LocalFuncCustomerDetails({
        inCustomerName: inData.CustomerName,
        inMobile: inData.Mobile
    });
};

let LocalFuncCustomerDetails = ({ inData, inCustomerName, inMobile }) => {
    let jVarLocalOrderNo = document.getElementById("OrderNo");

    jVarLocalOrderNo.value = inData;

    let jVarLocalCustomerName = document.getElementById("CustomerName");
    if (jVarLocalOrderNo !== null) jVarLocalCustomerName.value = inCustomerName;

    let jVarLocalMobile = document.getElementById("Mobile");
    jVarLocalMobile.value = inMobile;

    let jVarLocalGarmentsTotalPcs = document.getElementById("GarmentsTotalPcs");
    jVarLocalGarmentsTotalPcs.value = inData;
};
export { StartFunc };