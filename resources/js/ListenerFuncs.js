
let AddlistenersFunc = () => {
    let jVarLocalMainHeaderSearchId = document.getElementById("MainHeaderSearchId");

    jVarLocalMainHeaderSearchId.addEventListener('keypress', LocaljFHeaderSearchInputKeyPress);

    // jVarLocalTableButtons.forEach(function (element) {
    //     // element refers to the DOM node
    //     element.addEventListener('click', LocalTableButtonFunc);
    // });

};


let LocaljFHeaderSearchInputKeyPress = (event) => {
    if (event.key === 'Enter') { // key code of the keybord key
        event.preventDefault();
        let jVarLocalCurrentTarget = event.currentTarget;

        console.log("1111111111 : ", jVarLocalCurrentTarget.value);
    };
};


export { AddlistenersFunc }
