let DashBoardHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/DashBoard/Html/Hbs/DashBoard.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

let QrCodeModalPopUp = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/DashBoard/Html/Hbs/QrCodeModalPopUp.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
}

export { DashBoardHtmlFunc, QrCodeModalPopUp }            