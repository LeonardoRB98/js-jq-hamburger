// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra
//   dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo zip in allegato.
// Ricordate di scrivere solo il codice JavaScript con jQuery e
// non modificare HTML e CSS.

var hamburgerMenu = $('.header-right a > i');

var escapeIcon = $('.close > i');

console.log(hamburgerMenu);
console.log(escapeIcon);

hamburgerMenu.click(
  function() {
    $('.hamburger-menu').fadeIn('fast');
  }
)

escapeIcon.click(
  function() {
    $('.hamburger-menu').fadeOut('fast');
  }
)
