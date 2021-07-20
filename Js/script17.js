const str = "tEst"; 

//console.log(str.toUpperCase());
console.log(str.toLowerCase()); 


// поиск с индекса каких то значений 
const Fruit = "My lovely Fruits"; 
console.log(Fruit.indexOf("l")); 

const dna = "TGAAAGGTGSTTGGGAGGGTSTTGSGGTSSTSGSTTSSTGGGTGGTGAST"; 
console.log(dna.slice(6,40)); 
console.log(dna.substr(6,12)); // Skolko nado viriztat znacheniy 
console.log(dna.getElemtByTagName("TGA")); 


// Математические методы 

const num = 12.50; 
console.log (Math.round(num)); 

const px = "12.60px";
console.log(parseInt(px)); // method prevraschaya chislo v druguiu sredu scheslenia 
// stroka obrezaetsya s tochki "." i provraschaet ee v chislo
console.log(parseFloat(px)); // vozvraschaet chislo s plavueschei tochkoy "." toest drobnuiu 