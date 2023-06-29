  const firstName = prompt("Inserire il proprio nome")
  const lastName = prompt("Inserire il proprio cognome")
  const favColor = prompt("Inserire il proprio colore preferito")
  const age = parseInt(prompt("Inserisci la tua età"))

  document.getElementById("firstName").innerHTML = capitalizeFirstLetter(firstName)
  document.getElementById("lastName").innerHTML = capitalizeFirstLetter(lastName)
  document.getElementById("favColor").innerHTML = capitalizeFirstLetter(favColor)
  document.getElementById("birthYear").innerHTML = 2023 - age

  document.getElementById("myPassword").innerHTML = firstName + lastName + favColor + (age + 21)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}