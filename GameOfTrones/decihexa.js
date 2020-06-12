/* Conversie van Decimale naar Hexadecimale getallen en omgekeerd.
   (c) 2001 Ben Boukes.  Mag vrij worden gebruikt mits 'credits' niet
   uit de code verwijderd worden.
*/

var hexchars="0123456789ABCDEF";   // Hexadecimale 'cijfers'

function Hexa2Deci(str) {
/* Hexadecimaal naar Decimaal */
  str = str.toUpperCase();
  var len = str.length-1;
  
  var mychar;
  var decimal = 0;
  
  for (i=0; i<=len; i++) {
    mychar = str.charAt(i);
    decimal += hexchars.indexOf(mychar)*Math.pow(16,len-i);
  }
  return decimal;
}

function Deci2Hexa(str,nullen_weg) {
/* Decimaal naar Hexadecimaal */
  if (str< 0)                        // Niet geschikt voor negatieve getallen
    return "--";
  else if ( Math.floor(str) != str ) // Alleen gehele getallen
    return "..";
  else if (str > Math.pow(16,8)-1 )  // 16^8 == 256^4, ofwel de inhoud van een 32-bits word
    return "**";
    
  var hexa = '';                     // Hierin komt het hexadecimale getal te staan
  var i,k,j = str;                   // hulp-variabelen

  /* 4 bytes = 8 groeten van 4 bits. Elke groep van vier bits bevat 1 hexadecimaal cijfer.
     We tellen vanaf nul, dus gaan we nu vanaf 7 naar 2 (laatste byte gaat apart!)
  */
  for (l = 7; l >= 2; l--) {
    k = Math.pow(16,l);              // Af te splitsen macht van 16
    i = Math.floor(j/k);             // Bepaling van het cijfer
    hexa += hexchars.charAt(i);
    if ( j >= i*k )                  // factor maal af te splitsen macht van 16
      j -= i*k;
  }

  hexa += hexchars.charAt(Math.floor(j/16));    // Laatste 2 cijfers toevoegen
  hexa += hexchars.charAt(j%16);                // (staan in vierde byte)

  /* Zorg ervoor dat het aantal karakters even is.
     Verwijder de voorlopende nullen indien gewenst */
  if ((hexa.length % 2) != 0)
    hexa = '0' + hexa;

  if (nullen_weg != null)                       // Is nullen_weg wel opgegeven?
    if (nullen_weg == true)                     // Zo ja: is het 'true'?
      while (hexa.substring(0,2) == '00')       // Verwijder voorlopende nullen per 2
        hexa = hexa.substring(2,hexa.length);
    
  return hexa;
}