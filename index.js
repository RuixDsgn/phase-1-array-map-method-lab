const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const splitTutorials = tutorials.map((title) => title.split(" "))
// const capitalizeSplitTutorials = splitTutorials.map((title) => title.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))
// const joinedCapitalizeSplitTutorials = capitalizeSplitTutorials.map((tutorialTitle) => tutorialTitle.join(" "))

const titleCased = () => { 
  const result = tutorials.map((tutorial) => { 
    var capitalizeText = tutorial.split(" ");
    for(let i=0; i<capitalizeText.length; i++){
      capitalizeText[i] = capitalizeText[i].charAt(0).toUpperCase() + capitalizeText[i].slice(1);    
      }
    return capitalizeText.join(" ");
   })    
   return result
  }
  console.log(titleCased());


// const titleCased = () => {
//   const splitTutorials = () => {
//     tutorials.map((title) => {
//       title.split(" ")
//     })
//   }
//   const capitalizeSplitTutorials = () => {
//     splitTutorials.map((title) => {
//       title.map((word) => {
//         word.charAt(0).toUpperCase() + word.slice(1)
//       })
//     }) 
//   }
//   const joinedCapitalizeSplitTutorials = () => {
//     capitalizeSplitTutorials.map((tutorialTitle) => {
//       tutorialTitle.join(" ")
//     })
//     return joinedCapitalizeSplitTutorials
//   }
//   return titleCased
// }

// const splitTutorials = () => {
//   tutorials.map((title) =>  {
//     title.split(" ")
//   })
// }

// const capitalizeSplitTutorials = () => {splitTutorials.map((title) => {
//   title.map((word) => {word.charAt(0).toUpperCase() + word.slice(1)
//   })
// })
// }

// const titleCased = () => {capitalizeSplitTutorials.map((tutorialTitle) => {
//   tutorialTitle.join(" ")
// })
// return titleCased
// }


   

// Create a new array in which every first letter of the word in the array of sentences should be capitalized
  //split each title into its own array with .split() => 'what does the this keyword mean?' will be ['what', 'does', 'the', 'this', 'keyword', 'mean?']
     // const splitTitle = tutorials.split(" ") 
    
       

  // how can we change the first letter of a word to be upper case and return that modified letter along with the rest of the name?
    // use 
  // we know that we can target a specific letter of a word by using .charAt() 
  // we know that we can use .toUpperCase() to make sure that target word, or string for this case if we combine .toUpperCase with .chatAt() 
  //    will be changes to an upper case
  // using .split() splits a string into an array of substring
  // using .join() creates a new string by concatenating all of elements in an array

  

  // use .map to iterate through the newly splitted words
  //  