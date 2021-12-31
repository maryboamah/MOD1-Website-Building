





const url = `https://www.googleapis.com/books/v1/volumes?q=new&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let bookdata = data
     
        
        let item = bookdata.items
        
        let startDiv = item.map(function(item){
           
            // let q = document.getElementsByClassName("recentimg")
            
            let volumeInfo = item.volumeInfo
           
            return  `<div class = "allrecent"><div class="recentimg">`+
            `<img src="${volumeInfo.imageLinks.thumbnail}" alt="bookimage"></div>` + `<div class="recentinfo">`+ `<div class="recentinfoTitle">
            ${item.volumeInfo.title}</div><div class="recentinfoAuthor">${volumeInfo.authors.toString()} here</div>
            <div class="recentinfoPublisher">${volumeInfo.publisher}</div>
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

    

