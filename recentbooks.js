





const url = `https://www.googleapis.com/books/v1/volumes?q=new&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let dogpic = data
     
        console.log(dogpic)
        let item = dogpic.items
        console.log(item[0].volumeInfo.title)
        console.log(item[0].volumeInfo.authors.toString())
        console.log(item[0].volumeInfo.imageLinks.smallThumbnail)
        console.log(item[0].volumeInfo.previewLink)//embededone
        let go= item[0].volumeInfo.authors.toString()
        // imageDiv.innerHTML = item[0].volumeInfo.authors.toString()

        // document.getElementById("test").innerHTML =`<img src =${item[0].volumeInfo.imageLinks.smallThumbnail} alt="book image"> <h1> ${item[0].volumeInfo.title} </h1> <h2>${item[0].volumeInfo.authors.toString()}</h2>`
        let startDiv = `<div class="recent">` 
        item.map(function(item){
           
            // let q = document.getElementsByClassName("recentimg")
            console.log(item.volumeInfo.imageLinks.smallThumbnail)
            let thumb = item.volumeInfo.imageLinks.thumbnail
            console.log(thumb)
            return startDiv += `<div class="recentimg"><img src="${thumb}" alt="bookimage"></div>` + `<div class="recentinfo">`+ `<div class="recentinfoTitle">${item.volumeInfo.title}</div>
            <div class="recentinfoAuthor">${item.volumeInfo.authors.toString()} here</div>
            <div class="recentinfoPublisher">${item.volumeInfo.publisher}</div>
            <div class="recentinfoPubDate">${item.volumeInfo.publishedDate}</div>
            <div class="recentinfoReviews">${item.volumeInfo.pageCount}</div>
            <div class="recentinfolang">${item.volumeInfo.language}</div>
            <div class="recentinfoPreview">${item.volumeInfo.previewLink}</div>` + `</div>`
            
        });

        startDiv +=`</div>`
        document.getElementById("recent1").innerHTML=startDiv



      

    })
    .catch((error)=>{
        console.log(error)
    })

