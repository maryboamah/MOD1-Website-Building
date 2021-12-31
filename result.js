



function searchForBooks(){
    let userselection = document.querySelector("#userselect")
let userSearchSelection = userselection.value
let userSearch = document.querySelector("#booksearchers")
let userSearchValue =userSearch.value
if (userSearchValue!="" && userSearchSelection !=""){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearchValue}+${userSearchSelection}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    console.log(url)
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let bookdata = data
         
            
            let item = bookdata.items
            
            let startDiv = item.map(function(item){
               
                // let q = document.getElementsByClassName("recentimg")
                
                let volumeInfo = item.volumeInfo
               
                return  ` <div class="row1">
                <div class="row1image"><img src="${volumeInfo.imageLinks.thumbnail}" alt="book cover"></div>
                <div class="title">${volumeInfo.title}</div>
             </div>
             <div class="row2">
                 <div class="author">Author(s): ${volumeInfo.authors}</div>
                 <div class="publishdate">Publication Date: Date Published</div>
                 <div class="averagerating">Rating: rating</div>
                 <div class="cost">Cost: Retail Price</div>
                 <div class="publisher">Publisher: Publisher</div>
                 <div class="pagecount">Number of Pages: Number</div>
                 <div class="previewLink">Preview on Google:   </div>
                 <div  class="description">Description: description</div>
             </div>`
                
                
            });
           
            document.getElementById("bookresult").innerHTML = startDiv
         
    
    
    
       
             //  document.getElementById("recent1").innerHTML= display()
    
    
    
          
    
        })
        .catch((error)=>{
            console.log(error)
        })
}else{
    alert("Please eneter a search category/word")
}
    

    
}



    
