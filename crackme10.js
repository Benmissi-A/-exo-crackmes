// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

let password = '    Vazejhiai  '
const crackme10 = (password) => {
  if (
    password
    .trim()                                                           //on enleve les espaces avant et apres 
    .toLowerCase()                                                    //on passe tout en minuscule
    .split('')                                                        //on place la chaine dans un tableau
    .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem))  //on cree un tableau ['a', 'e', 'i', 'o', 'u', 'y'] des caracteres contenus dans le password
    .map((elem) => elem.charCodeAt())                                 //on cree un nouveau tableau contenant le charcode elem
    .reduce((a, b) => {
      return a + b
    }, 0) %                                                            
    2 !==                                                              // on additionne les charcodes de tout le tableau 
    0                                                                  // si le nombre est impaire le nombre de voyelles aussi, le password est ok
    ) {
      console.log('OK')
    } else {
      console.log('BAD')
    }
  }

  

// mes tests  
/*   crackme10(password)
  console.log(password.trim().toLowerCase().split('') )
  console.log(password.trim().toLowerCase().split('').filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)) )
  console.log(password.trim().toLowerCase().split('').filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)).map((elem) => elem.charCodeAt())  )
  
  console.log(password.trim().toLowerCase().split('').filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)).map((elem) => elem.charCodeAt()).reduce((a, b) => {
      return a + b
    }, 0) 
    
    )  
  
  
  console.log(password.trim().toLowerCase().split('').filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)).map((elem) => elem.charCodeAt()).reduce((a, b) => {
      return a + b
    }, 0) %
    2
    )   */