function search() {
    // let searchIcon = document.querySelector(searchIconSelector);
    let searchInput = document.querySelector(searchInputSelector);
    let searchButton = document.querySelector(searchButtonSelector);

    let searchStr = "SEARCHSTRFORREPLACE";

    let inputCharDelay = 200;

    let selectDelay = 500 + Math.random() * 1000;
    let inputDelay = selectDelay + Math.random() * 1000;
    let searchDelay =
        inputDelay + searchStr.length * inputCharDelay + Math.random() * 1000;

    function simulateTyping(inputField, text) {
        inputField.focus(); // Ensure the input field is focused

        for (let i = 0; i < text.length; i++) {
            const key = text[i];
            const eventDown = new KeyboardEvent("keydown", { key });
            const eventPress = new KeyboardEvent("keypress", { key });
            const eventUp = new KeyboardEvent("keyup", { key });

            setTimeout(() => {
                inputField.value += key;
                inputField.dispatchEvent(eventDown);
                inputField.dispatchEvent(eventPress);
                inputField.dispatchEvent(eventUp);

                if (i === text.length - 1) {
                    const eventInput = new Event("input", { bubbles: true });
                    inputField.dispatchEvent(eventInput);
                }
            }, i * inputCharDelay); // Delay each character by 0.5s (500ms)
        }
    }

    setTimeout(() => {
        simulateTyping(searchInput, searchStr);
    }, inputDelay);

    setTimeout(() => {
        searchButton.click();
    }, searchDelay);

    return "success";
}

search();
