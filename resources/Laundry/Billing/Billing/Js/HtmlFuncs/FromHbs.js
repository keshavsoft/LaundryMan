let BillingHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Billing/Billing/Html/Hbs/Billing.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};
export{ BillingHtmlFunc };
