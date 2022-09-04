// Não pode ser feito assim
let person = {
    name: 'Rafael Camarda',
    age: "jovem"
}

function changeName(name){
    person.name = name;
}

// 
let person2 = {
    name: 'Rafael Camarda',
    age: "jovem"
}

const changePersonName = (person,nome) => {
    ({...person, nome})
}



console.log(changePersonName(person2, "Fabio Lucas" ))