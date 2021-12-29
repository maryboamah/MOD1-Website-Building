





const url = `https://www.googleapis.com/books/v1/volumes?q=new&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    fetch(url)
    .then((res)=>res.json())
    .then(async(data)=>{
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
     

    for(let i = 0; i<startDiv.length; i++){
        timeInterval+= 300
         startDiv[i]
      
        let display = document.getElementById("recent1").innerHTML = startDiv[i]

         new Promise.all(resolve => setInterval(() => resolve(display), timeInterval));
        
        // setInterval(display, timeInterval)
}


   
        //  document.getElementById("recent1").innerHTML= display()



      

    })
   
    .catch((error)=>{
        console.log(error)
    })

    

