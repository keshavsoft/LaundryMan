let DeleteHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/Delete/Html/Hbs/Delete.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};
let DeleteWithAlertHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/Delete/Html/Hbs/DeleteWithAlert.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { DeleteHtmlFunc, DeleteWithAlertHtmlFunc };