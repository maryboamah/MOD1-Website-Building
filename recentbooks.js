





const url = `https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let bookdata = data
     
        
        let item = bookdata.items
        
        let startDiv = item.map(function(item){
           console.log(item)
            // let q = document.getElementsByClassName("recentimg")
            let authors =""
        let publishers =""
        let thumbnails =""
        let publishedDate =""
        let pageCount =""
        let lang = ""
        let rating=""
        
        let volumeInfo =item.volumeInfo 

        if(volumeInfo.language == undefined){
            lang= "Not Available"

        }else{
           lang = volumeInfo.language
        }
        if(volumeInfo.authors == undefined){
            authors = "No Author Available"

        }else{
            authors = volumeInfo.authors
        }
        if(volumeInfo.imageLinks == undefined){
            thumbnails = ""

        }else{
          thumbnails= volumeInfo.imageLinks.thumbnail
        }

        if(volumeInfo.publisher == undefined){
            publishers = "No publisher Available"

        }else{
           publishers = volumeInfo.publisher
        }
        if(volumeInfo.publishedDate == undefined){
            publishedDate = "Not Available"

        }else{
           publishedDate = volumeInfo.publishedDate
        }
        if(volumeInfo.pageCount == undefined){
            pageCount = "Not Available"

        }else{
           pageCount = volumeInfo.pageCount
        }
        if(volumeInfo.averageRating == undefined){
            rating= "Not Available"

        }else{
           lang = volumeInfo.averageRating
        }
        
           console.log(volumeInfo.publisher)
            return  `<div class = "allrecent"><div class="recentimg">
            <img src="${thumbnails}" alt="bookimage"></div><div class="recentinfo"><div class="head"><p class="allheadings">Title:</p>
            ${volumeInfo.title}</div>
            <div class="head"><p class="allheadings">Author(s):</p>${authors}</div>
            <div class="head"><p class="allheadings">Publisher(s):</p>${publishers}</div>
            <div class="head"><p class="allheadings">Published Date:</p>${publishedDate}</div>
            <div class="head"><p class="allheadings">Pages:</p>${pageCount}</div>
            <div class="head"><p class="allheadings">Language:</p>${lang}</div>
            <div class="head"><p class="allheadings">Preview on Google:</p><a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>` + `</div></div>`
            
            
        });
        let timeInterval = 700
     
// function displayBook(){
    
    for(let i = 0; i<startDiv.length; i++){
        timeInterval+= 3000
         startDiv[i]
      
        let display = document.getElementById("recent1").innerHTML = startDiv[i]
        
        
        //promise to display the books in a time frame. Did not add a situation for rejecting because its failure will be from the 
        //async call in the then which will throw an error in the catch so it wont get to the set time out stack

         new Promise(resolve => setTimeout(() => resolve(display), timeInterval))
         .then(function() {
            document.getElementById("recent1").innerHTML = startDiv[i]
            console.log("Wrapped setTimeout after 2000ms");
        });
        
        console.log( new Promise(resolve => setInterval(() => resolve(display), timeInterval)))
        // let result = await promise
}

// }
//     displayBook()


   
        //  document.getElementById("recent1").innerHTML= display()



      

    })
    .catch((error)=>{
        console.log(error)
    })


    

    
function handleSubmit(){
    let userselection = document.querySelector("#userselectmain")
   const userSearchSelectionmain = userselection.value
    let userSearch = document.querySelector("#booksearchersmain")
    const userSearchValuemain =userSearch.value
    localStorage.setItem("SELECTION", userSearchSelectionmain)
    localStorage.setItem("SEARCH", userSearchValuemain)
}



//fetching free ebooks
const url2 = `https://www.googleapis.com/books/v1/volumes?q=+inauthor&filter=free-ebooks&maxResults=20&orderBy=newest&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
fetch(url2)
.then((res)=>res.json())
.then((data)=>{
    let bookdata = data
 
    
    let item = bookdata.items
    
    let displayResult = item.map(function(item){
       console.log(item)
        // let q = document.getElementsByClassName("recentimg")

        //need to write a function for these
        let authors =""
        let publishers =""
        let thumbnails =""
        let publishedDate =""
        let pageCount =""
        let lang = ""
        
        let volumeInfo =item.volumeInfo 

        if(volumeInfo.language == undefined){
            lang= "Not Available"

        }else{
           lang = volumeInfo.language
        }
        if(volumeInfo.authors == undefined){
            authors = "No Author Available"

        }else{
            authors = volumeInfo.authors
        }
        if(volumeInfo.imageLinks == undefined){
            thumbnails = ""

        }else{
          thumbnails= volumeInfo.imageLinks.thumbnail
        }

        if(volumeInfo.publisher == undefined){
            publishers = "No publisher Available"

        }else{
           publishers = volumeInfo.publisher
        }
        if(volumeInfo.publishedDate == undefined){
            publishedDate = "Not Available"

        }else{
           publishedDate = volumeInfo.publishedDate
        }
        if(volumeInfo.pageCount == undefined){
            pageCount = "Not Available"

        }else{
           pageCount = volumeInfo.pageCount
        }
    
       console.log(volumeInfo.publisher)
        return  `<div class = "allrecent2"><div class="recentinfo2"><div class="head2"><p class="allheadings2">Title:</p>
        ${volumeInfo.title}</div>
        <div class="head2"><p class="allheadings2">Author(s):</p>${authors}</div>
        <div class="head2"><p class="allheadings2">Publisher(s):</p>${publishers}</div>
        <div class="head2"><p class="allheadings2">Published Date:</p>${publishedDate}</div>
        <div class="head2"><p class="allheadings2">Pages:</p>${pageCount}</div>
        <div class="head2"><p class="allheadings2">Language:</p>${lang}</div>
        <div class="head2"><p class="allheadings2">Preview on Google:</p><a href="${volumeInfo.previewLink}">Google Books</a> </div>` + `</div></div>`
        
        
    });
    let timeInterval = 700
 
// function displayBook(){

for(let i = 0; i<displayResult.length; i++){
    timeInterval+= 3000
     displayResult[i]
  
    let display = document.getElementById("freebooks").innerHTML = displayResult[i]
    
    
    //promise to display the books in a time frame. Did not add a situation for rejecting because its failure will be from the 
    //async call in the then which will throw an error in the catch so it wont get to the set time out stack

     new Promise(resolve => setTimeout(() => resolve(display), timeInterval))
     .then(function() {
        document.getElementById("freebooks").innerHTML = displayResult[i]
        // console.log("Wrapped setTimeout after 2000ms");
    });
    
    console.log( new Promise(resolve => setInterval(() => resolve(display), timeInterval)))
    // let result = await promise
}





  

})
.catch((error)=>{
    console.log(error)
})
