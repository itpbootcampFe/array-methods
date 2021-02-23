//filter

//sort
const harfler =["a","b","n","l","k","p", 1, 3, 5, 0];
const numbers = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

console.log(harfler.sort());
let sortedNumber= numbers.sort((a,b)=>a-b);

console.log(sortedNumber);
//include

console.log(harfler.includes(1));
//return boolean

//filter
const words = ["dog", 'dig', 'log', 'baaag', 'wag'];
// console.log(words.filter(item=>item.includes("d")));


//some 
//returns boolean 
//- array icinde "dog" esit item vat mi? ()
//- array icinde d harfi ile baslayan kelime var mi?
console.log(words.some(item=>item==="dog"));
console.log(words.some(item=>item[1]==="i"));

//every
console.log(words.every(item=>item.includes("g")));
console.log(words.every(item=>{
  const lastIndex= item.length -1;
  return item[lastIndex]==="g";
}));



//reducer indirgeme

const nums = [3, 4, 5, 6, 7];

// const geridonumfonk = (toplam, suankideger)=>{
//   return(
//     toplam*suankideger
//   )
// }
//nums.reduce(geridonumfonk)
(toplam, suankideger) => toplam*suankideger

console.log(
  nums.reduce((toplam, suankideger) => toplam*suankideger)
)

console.log(`//////`);


const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const MaxValue= grades.reduce((max, curretVal)=>{
//   if (curretVal > max) {
//     return curretVal
//   }
//   return max;
// });

const MaxValue= grades.reduce((max, curretVal)=>Math.max(max,curretVal));

console.log(`MaxValue: `, MaxValue);


// //reducer3

// const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const result= votes.reduce((sonuc, currentValue)=>{
//   ...
//   return sonuc;
// }
// )


// //find

