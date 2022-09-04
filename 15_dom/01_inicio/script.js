console.log("ID")
let blog = document.getElementById('blog-title');
blog.innerHTML = "Meu teste usando ID"
console.log(blog)

console.log("classe")
let blog2 = document.getElementsByClassName('blog_classe')
blog2.innerHTML = "Meu teste usando Classe"
console.log(blog2)

console.log("tagname")
let blog3 = document.getElementsByTagName('h2')
blog3.innerHTML = "Meu teste usando H2"
console.log(blog3)

console.log("querySelector class")
let blog4 = document.querySelector(".blog-classe")
console.log(blog4)

console.log("querySelector id")
let blog4_1 = document.querySelector("#blog-title")
console.log(blog4_1)

console.log("querySelectorAll")
let blog5 = document.querySelectorAll("p")
console.log(blog5)

blog5.forEach( p => console.log(p))

// adicionando texto

blog.textContent = "Usando textContent"
blog4_1.innerText = "Usando innerText"
blog4_1.innerHTML = "Usando innerHTML <strong> Teste</strong>"



