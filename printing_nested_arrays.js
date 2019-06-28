function printItems(array) {
    array.forEach((item) => {
        if (Array.isArray(item)) {
          // Print out all it's items individually
            printItems(item);
        } else {
            console.log(item);
        }
    });
}

const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array1 = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
printItems(array1);



// function printItems(array) {
//     while (array.length > 0) {
//       const element = array.shift();

//       if (Array.isArray(element)) {
//         element.reverse().forEach((newElement)=> {
//           array.unshift(newElement);
//         });
//       } else {
//         console.log(element);
//       }
//     }
//   }