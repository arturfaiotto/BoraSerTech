/*Considere dois arrays:

const x = [3,4,7,1,5];
const y = [4,3,1];

Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. 
É possível que os arrays tenham tamanhos diferentes, certo? 
Por isso, o array resultante deverá ter o tamanho do menor dos arrays.*/

const arr1 = [3,4,7,1,5];
const arr2 = [4,3,1];

for(i = 0; i <= 3; i++) {
var multi = arr2.map(x => x * arr1[1])
}

console.log(multi)