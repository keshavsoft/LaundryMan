let CompletedHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Completed/Completed/Html/Hbs/Completed.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

 export {CompletedHtmlFunc};