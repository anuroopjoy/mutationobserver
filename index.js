const callback = (changes, observer) => {
    console.log(changes);
    console.log(observer);
};
const observer = new MutationObserver(callback);

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const elem = document.getElementById('elem');
        observer.observe(elem, {
            childList: true,
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['id'],
            characterData: true,
            characterDataOldValue: true,
            subtree: true
        });
    }
};

function removeObservers() {
    const pendingMutations = observer.takeRecords();
    observer.disconnect();
    if (pendingMutations.length) {
        callback(pendingMutations);
    }
}
