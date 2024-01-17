(function() {
    init()
})();


function init() {
    initDisableTargetOnEmpty();
}

function initDisableTargetOnEmpty() {
    const anchors = document.querySelectorAll('.disable-target-on-empty');

    function disableTargetIfEmpty(inputElem, targetElems) {
        const value = (inputElem.value + "").trim();
        targetElems.forEach(function(targetElem) {
            targetElem.classList.toggle('disabled', value === "")
        })
    }

    anchors.forEach(function(inputElem) {
        const target = inputElem.getAttribute('data-target')
        if (!target) return;
        const targetElems = document.querySelectorAll(target);
        if (targetElems.length == 0) return;

        disableTargetIfEmpty(inputElem, targetElems);

        function inputHandler() {
            disableTargetIfEmpty(inputElem, targetElems);
        }

        inputElem.addEventListener('change', inputHandler);
        inputElem.addEventListener('paste', inputHandler);
        inputElem.addEventListener('input', inputHandler);
    })
}