// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром 
// произвольную строку(в строке будут только слова и пробелы) и возвращает самое 
// длинное слово в этой строке.




// function findLongestWord (string = "") {
//     const words = string.split(' ');
//     let theBigestLength = 0;
//     let theBigestWord = '';

//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > theBigestLength) {
//             theBigestLength = words[i].length;
//             theBigestWord = words[i];
//         }
//     }

//     return theBigestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

// console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'



// РЕШЕНО РАБОТАЕТ