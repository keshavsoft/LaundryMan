let InsertHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/Insert/Html/Templates/Insert.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { InsertHtmlFunc }