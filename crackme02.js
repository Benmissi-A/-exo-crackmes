// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

// le password est une chainde de characteres d'une longueur de 1
let password = 'p'

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)