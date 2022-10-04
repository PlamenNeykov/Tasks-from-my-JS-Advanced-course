function extractText() {
    const textInArr = Array.from(document.querySelectorAll('li'));
    const toPrint = textInArr.map(e => e.textContent).join('\n');

    document.getElementById('result').value = toPrint;


}