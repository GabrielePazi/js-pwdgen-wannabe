  const firstName = prompt("Inserire il proprio nome")
  const lastName = prompt("Inserire il proprio cognome")
  const favColor = prompt("Inserire il proprio colore preferito")
  const age = parseInt(prompt("Inserisci la tua età"))

  document.getElementById("firstName").innerHTML = firstName
  document.getElementById("lastName").innerHTML = lastName
  document.getElementById("favColor").innerHTML = favColor
  document.getElementById("birthYear").innerHTML = 2023 - age

  document.getElementById("myPassword").innerHTML = firstName + lastName + favColor + (age + 21)