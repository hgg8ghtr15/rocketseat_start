
const booksByCategory = [

    {
        category: 'Riqueza',
        book: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harve Eker'
            },
            {
                title: 'O homen mais rico da Babilonia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },

    {
        category: 'Inteligencia Emocional',
        book: [
            {
                title: 'Os segredos da mente milionária',
                author: 'Tekem'
            },
            {
                title: 'O homen mais rico da Babilonia',
                author: 'Forza'
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Marcos José'
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Marcos José'
            }
        ]
    }

]



function quantidade(Listabooks) {
    console.log("-----------------------")
    for (let categoria of Listabooks) {
        console.log(`Total de categoria ${categoria.category}`)
        console.log(`Total de Livos na categoria ${categoria.book.length}`)
    }
}

quantidade(booksByCategory)

function quantidadeAuthor(Listabooks) {
    console.log("-----------------------")
    let authors = []

    for (let categoria of Listabooks) {
        for (let author of categoria.book) {
            if (authors.indexOf(author.author) == -1) {
                authors.push(author.author)
            } else {
                console.log("Encontrou")
            }
        }
    }
    console.log(`Quantidade de Autores é ${authors.length}`)

}

quantidadeAuthor(booksByCategory)

function pesquisar_author(Listabooks, autor) {
    console.log("-----------------------")
    let books = []

    for (let categoria of Listabooks) {
        for (let author of categoria.book) {
            if (author.author === autor) {
                books.push(author.title)
            }
        }
    }

    if (books != []) {
        console.log("Foram encontrados os seguintes titulos!")
        for (let title of books) {
            console.log(title)
        }
    }

}

pesquisar_author(booksByCategory, "Tekem")