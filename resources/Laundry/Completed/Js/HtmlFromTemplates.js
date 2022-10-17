let CompletedHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Completed/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export{CompletedHeaderHtmlFunc};