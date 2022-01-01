





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
            return  `<div class = "allrecent"><div class="recentimg">`+
            `<img src="${thumbnails}" alt="bookimage"></div>` + `<div class="recentinfo">`+ `<div class="recentinfoTitle">
            ${volumeInfo.title}</div><div class="recentinfoAuthor">${authors}</div>
            <div class="recentinfoPublisher">${publishers}</div>
            <div class="recentinfoPubDate">${volumeInfo.publishedDate}</div>
            <div class="recentinfoReviews">${volumeInfo.pageCount}</div>
            <div class="recentinfolang">${volumeInfo.language}</div>
            <div class="recentinfoPreview">${volumeInfo.previewLink}</div>` + `</div></div>`
            
            
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

