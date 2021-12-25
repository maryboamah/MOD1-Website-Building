const button = document.querySelector("button")
const breedInput = document.querySelector("input")
const imageDiv = document.getElementById("img")

button.addEventListener('click', ()=>{
    let breed  =  breedInput.value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${breed}&download=epub&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let dogpic = data
     
        console.log(dogpic.items[0].volumeInfo)
        let item = dogpic.items
        console.log(item[0].volumeInfo.title)
        console.log(item[0].volumeInfo.authors.toString())
        console.log(item[0].volumeInfo.imageLinks.smallThumbnail)
        console.log(item[0].volumeInfo.previewLink)//embededone
        let go= item[0].volumeInfo.authors.toString()
        imageDiv.innerHTML = item[0].volumeInfo.authors.toString()
        
        // const display = dogpic.map(function(book){
        //    return `<div> ${book.aut}</div>`
        // }).split(",")

    })
    .catch((error)=>{
        console.log(error)
    })


})