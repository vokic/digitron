document.querySelector("button").onclick = function() {
  function operacija(b1, b2) {
    if (opcija == 0) {
      let d = b1 + b2;
      return d;
    } else if (opcija == 1) {
      let d = b1 - b2;
      return d;
    } else if (opcija == 2) {
      let d = b1 * b2;
      return d;
    } else if (opcija == 3) {
      let d = b1 / b2;
      return d;
    }
  }

  let b1 = Number(document.querySelector("#i1").value); //bira brojnu vrednost iz polja sa #i1
  let b2 = Number(document.querySelector("#i2").value); //bira brojnu vrednost iz polja sa #i2
  let opcija = document.getElementById("selekcija").selectedIndex; // bira koji je indeks iz padajuceg menija selektovan i u zavisnosti od toga bira racunsku operaciju
  let k = operacija(b1, b2).toFixed(2); // daje rezultat dva broja zaokruzanih na 2 decimale
  document.body.append("Rezultat je " + k); // ispisuje rezultat na stranu
};
