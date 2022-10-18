function solve() {

  let textToRework = document.getElementById('text').value.split(' ').
    filter(x => x != '');

  let task = document.getElementById('naming-convention').value;

  for (let i = 0; i < textToRework.length; i++) {
    textToRework[i] = textToRework[i].toLowerCase();
  }
  let resultToPrint = '';
  if (task == 'Camel Case') {
    resultToPrint = textToRework[0];
    for (let i = 1; i < textToRework.length; i++) {
      let firstLetter = textToRework[i].charAt(0).toUpperCase();
      let nextChars = textToRework[i].slice(1, textToRework[i].length);
      resultToPrint += firstLetter + nextChars;
    }
    document.getElementById('result').textContent = resultToPrint;
  } else if (task == 'Pascal Case') {
    for (let i = 0; i < textToRework.length; i++) {
      let firstLetter = textToRework[i].charAt(0).toUpperCase();
      let nextChars = textToRework[i].slice(1, textToRework[i].length);
      resultToPrint += firstLetter + nextChars;
    }
    document.getElementById('result').textContent = resultToPrint;
  } else {
    document.getElementById('result').textContent = 'Error!'
  }

}