  const firstName = prompt("Inserire il proprio nome")
  const lastName = prompt("Inserire il proprio cognome")
  const favColor = prompt("Inserire il proprio colore preferito")
  const age = parseInt(prompt("Inserisci la tua età"))

  document.getElementById("myPassword").innerHTML = firstName + lastName + favColor + (age + 21)