
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme


let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) { //le passord commence par just et finit par password 
    let tmp1 = password.slice(4).slice(0, -8)                         // le password est slice ente Just et Password
    tmp1 = tmp1.split('').reverse().join('')                          // on inverse la string
    if (Number.isNaN(Number(tmp1))) {                                 // on verifie que tmp1ntest pas un nombre ,meme dans un string
      tmp1 += String.fromCharCode(35)                                 // on ajoute le caractere # a la fin
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {                  // on verifie que tmp1 === 'elpmisA#'
        console.log('OK')                                             // Bingo !!!
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)