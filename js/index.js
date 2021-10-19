// Iteraton 1

const hacker1 = 'Felipe'
console.log(`1.2 => The driver's name is ${hacker1}.`)

const hacker2 = 'Pedro'
console.log(`1.4 => The navigator's name is ${hacker2}.`)

// Iteraton 2

const hacker1NameLength = hacker1.split('').length
const hacker2NameLength = hacker2.split('').length

if (hacker1NameLength > hacker2NameLength) {
  console.log(`2.1 => The driver has the longest name, it has ${hacker1NameLength} characters`)
} else if (hacker2NameLength > hacker1NameLength) {
  console.log(`2.1 => It seems that the navigator has the longest name, it has ${hacker2NameLength} characters.`)
} else {
  console.log(`2.1 => Wow, you both have equally long names, ${hacker1NameLength} characters!`)
}

// Iteraton 3

const hacker1ToUpperArray = hacker1.split('').map(letter => {
  return letter.toUpperCase()
})

const hacker1UppercaseJoined = hacker1ToUpperArray.join(' ')

console.log(`3.1 => ${hacker1UppercaseJoined}`)

const hacker2Reversed = hacker2.split('').reverse().join('')

console.log(`3.2 => ${hacker2Reversed}`)

const whoGoesFirst = hacker1UppercaseJoined.localeCompare(hacker2Reversed)

switch (whoGoesFirst) {
  case -1:
    console.log(`3.3 => The driver's name goes first.`)
    break
  case 1:
    console.log(`3.3 => Yo, the navigator goes first definitely.`)
    break
  default:
    console.log(`3.3 => What?! You both have the same name?`)
}


// Bonus 1

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae odio malesuada, congue metus vel, sodales elit. Pellentesque libero turpis, sagittis id nunc id, elementum rhoncus mauris. Vivamus lacinia dictum risus, eu convallis leo tristique et. Quisque ut nibh auctor, lacinia erat sed, vehicula ex. Aliquam in gravida sapien. Nulla non metus eu metus fermentum faucibus viverra tristique turpis. Nulla ullamcorper nulla vel urna vehicula vestibulum. Cras suscipit vel augue quis iaculis. Vivamus facilisis, arcu et porta tempus, augue nisi lacinia lectus, ut pulvinar sem orci ultricies sem. Aliquam tristique hendrerit condimentum. Nullam ultricies lacinia velit nec varius. Maecenas tortor mi, consectetur non ante ac, mollis aliquet nisi.

Cras rhoncus lacinia egestas. Aliquam sit amet ante consequat, consectetur velit nec, placerat nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In luctus tortor vitae malesuada aliquet. Nam quis scelerisque risus. Etiam in elit tincidunt, hendrerit urna semper, iaculis purus. Donec egestas faucibus justo. Vivamus semper nulla risus, a porta odio eleifend eget. Phasellus consequat ligula quis augue volutpat bibendum. Etiam sed tristique ligula, at scelerisque augue. Proin eu sagittis arcu, sit amet porttitor turpis. Sed tempor risus magna, eget fermentum est ultricies a. Donec odio neque, volutpat sed dui vitae, dignissim laoreet nibh. Nullam pretium sodales nibh.

Phasellus sit amet ex venenatis lectus porttitor aliquam efficitur sit amet est. Praesent at dui ipsum. Donec eu diam tincidunt, pretium risus vel, feugiat tortor. Phasellus varius nisi in euismod lobortis. Proin sed turpis a lectus ultricies luctus. Donec sit amet mauris semper, lacinia neque nec, tempor neque. Phasellus tristique placerat metus id pharetra. Maecenas fermentum luctus purus sed sollicitudin. Nulla non nunc ut odio convallis semper. Proin sodales, diam vel sollicitudin molestie, quam velit tempus erat, a dictum velit ipsum non sapien. Vivamus dignissim ipsum est, eu consectetur dui dignissim sit amet. Proin blandit vel sapien quis tempus. Sed nec ipsum massa. Ut malesuada neque nunc, eu viverra nulla faucibus vitae. Vestibulum egestas, sapien vitae venenatis suscipit, libero orci porttitor nibh, et gravida elit quam ut sem. Nullam euismod tellus vitae quam pulvinar ultrices.`


const totalWordCount = loremIpsum.match(/\S+/g).length

console.log(`Bonus 1.2 => The text has ${loremIpsum.match(/\S+/g).length} words.`)

const totalEtWord = loremIpsum.match(/ et /gi).length

console.log(`Bonus 1.3 => The word 'et' appears ${totalEtWord} times.`)

// Bonus 2

const phraseToCheck = 'Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.'


phraseToCheck == phraseToCheck.split('').reverse().join('') ? console.log('Bonus 2 => Phrase is a Palindrome') : console.log('Bonus 2 => Phrase is not a Palindrome')















