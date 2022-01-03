





const url = `https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    let bookdata = data
 
    
    let item = bookdata.items
    
    let displayResult = item.map(function(item){
       console.log(item)
        // let q = document.getElementsByClassName("recentimg")
        let authors =""
        let publishers =""
        let thumbnails =""
        
    
        let volumeInfo =item.volumeInfo 
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
    
       console.log(volumeInfo.publisher)
        return  `<div class = "allrecent"><div class="recentimg">
        <img src="${thumbnails}" alt="bookimage"></div><div class="recentinfo"><div class="head"><p class="allheadings">Title:</p>
        ${volumeInfo.title}</div>
        <div class="head"><p class="allheadings">Author(s):</p>${authors}</div>
        <div class="head"><p class="allheadings">Publisher(s):</p>${publishers}</div>
        <div class="head"><p class="allheadings">Published Date:</p>${volumeInfo.publishedDate}</div>
        <div class="head"><p class="allheadings">Pages:</p>${volumeInfo.pageCount}</div>
        <div class="head"><p class="allheadings">Language:</p>${volumeInfo.language}</div>
        <div class="head"><p class="allheadings">Preview on Google:</p><a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>` + `</div></div>`
        
        
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







