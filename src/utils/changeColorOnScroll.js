import $ from 'jquery';

export function changeColorOnScroll( item, colorsArray ) {

  const windowHeight = $( window ).height();
  const documentHeight = $( document ).height();
  const footerHeight = $( '.footer' ).height();
  const scrollTop = $( window ).scrollTop();

  for ( let i = 0; i < colorsArray.length; i++ ) {
    const calcSection = (windowHeight / 2) * (i + 1) + (windowHeight / 2 * i); // Change color when halfway down each section

    if (scrollTop > windowHeight / 2 &&
        scrollTop < (documentHeight - windowHeight - footerHeight + 1) ) { // But transparent in top and when hitting the footer
      if ( scrollTop > calcSection ) {
        item.css({ 'background-color': colorsArray[i] });
      }
    } else {
      item.css({ 'background-color': '#111' });
    }
  }

}
