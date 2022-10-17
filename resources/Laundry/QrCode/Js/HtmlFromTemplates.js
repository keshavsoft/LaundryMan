let QrcodeHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/QrCode/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export{QrcodeHeaderHtmlFunc};