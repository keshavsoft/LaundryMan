let ShowAllHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/Html/Hbs/ShowAll.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { ShowAllHtmlFunc }