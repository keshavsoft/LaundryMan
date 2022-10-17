let HeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { HeaderHtmlFunc }