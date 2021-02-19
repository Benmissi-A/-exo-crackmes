
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

// le pasword est la somme des code ascii du premier caractere jsqu'a atteindre la somme de 1337

let password = '*******************************#'


const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
    //on teste tmp1
    console.log(`tmp1 = ${tmp1}`)
  }
  if (tmp1 === 1337) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)