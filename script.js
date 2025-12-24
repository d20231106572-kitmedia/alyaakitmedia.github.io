function encrypt() {
  let text = document.getElementById("plain").value.toUpperCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + 3) % 26) + 65);
    } else {
      result += text[i];
    }
  }
  document.getElementById("cipher").innerText = result;
}

function checkQuiz() {
  let score = 0;
  if (document.getElementById("q1").checked) score++;
  if (document.getElementById("q2").checked) score++;
  if (document.getElementById("q3").checked) score++;

  document.getElementById("result").innerHTML =
    "Markah anda: <b>" + score + "/3</b> 🎉";
}
