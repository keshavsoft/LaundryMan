let QrCodeHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/QrCode/Html/Hbs/QrCode.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

let QrCodeModalPopUp = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/QrCode/Html/Hbs/QrCodeModalPopUp.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
}

export { QrCodeHtmlFunc, QrCodeModalPopUp }            