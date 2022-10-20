let GarmentsHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Masters/Garments/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export{GarmentsHeaderHtmlFunc};