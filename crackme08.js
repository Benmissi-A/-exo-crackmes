// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
// le progamme decoupe la chaine de caracteres dans un tableau , recupere les index du 3eme en partant de la fin a l'avant dernier puis reforme la liste 

let password = '***42*'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  console.log(tmp1)
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)