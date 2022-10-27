import { FindBookingHtmlFunc } from "./HtmlFuns/FromTemplate";

let StartFunc = async ({ inData, inCustomerName }) => {
    let jVarLocalFromHbs = await FindBookingHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

    console.log("inData : ", inCustomerName, inData);
    
    LocalFuncCustomerDetails();
};

let LocalFuncCustomerDetails = ({inData}) => {
    let jVarLocalOrderNo = document.getElementById("OrderNo");
    jVarLocalOrderNo.value = inData;

    let jVarLocalCustomerName = document.getElementById("CustomerName");
    jVarLocalCustomerName.value = inData;

    let jVarLocalMobile = document.getElementById("Mobile");
    jVarLocalMobile.value = inData;

    let jVarLocalGarmentsTotalPcs = document.getElementById("GarmentsTotalPcs");
    jVarLocalGarmentsTotalPcs.value = inData;
};
export { StartFunc };