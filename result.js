
//get information from search in main page and display it in reult page
window.addEventListener('load',()=>{

const params = (new URL(document.location)).searchParams
const userSearchSelectionup = localStorage.getItem('SELECTION')
const userSearchValueup = localStorage.getItem('SEARCH')
if (userSearchValueup!="" && userSearchSelectionup !=""){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearchValueup}+${userSearchSelectionup}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    console.log(url)
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let bookdata = data
         
            
            let item = bookdata.items
            
            let startDiv = item.map(function(item){
               
                // let q = document.getElementsByClassName("recentimg")
                
                let volumeInfo = item.volumeInfo
               console.log()
                return  ` <div class="row1">
                <div class="row1image"><img src="${volumeInfo.imageLinks.thumbnail}" alt="book cover"></div>
                <div class="title">${volumeInfo.title}</div>
             </div>
             <div class="row2">
                 <div class="author">Author(s): ${volumeInfo.authors}</div>
                 <div class="publishdate">Publication Date: ${volumeInfo.publishedDate}</div>
                 <div class="averagerating">Rating: ${volumeInfo.averageRating}</div>
                 <div class="publisher">Publisher: ${volumeInfo.publisher}</div>
                 <div class="pagecount">Number of Pages: ${volumeInfo.pageCount}</div>
                 <div class="previewLink">Preview on Google: <a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>
                 <div  class="description">Description: ${volumeInfo.description}</div>
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

})


//handle search for previous page
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
               console.log()
                return  ` <div class="row1">
                <div class="row1image"><img src="${volumeInfo.imageLinks.thumbnail}" alt="book cover"></div>
                <div class="title">${volumeInfo.title}</div>
             </div>
             <div class="row2">
                 <div class="author">Author(s): ${volumeInfo.authors}</div>
                 <div class="publishdate">Publication Date: ${volumeInfo.publishedDate}</div>
                 <div class="averagerating">Rating: ${volumeInfo.averageRating}</div>
                 <div class="publisher">Publisher: ${volumeInfo.publisher}</div>
                 <div class="pagecount">Number of Pages: ${volumeInfo.pageCount}</div>
                 <div class="previewLink">Preview on Google: <a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>
                 <div  class="description">Description: ${volumeInfo.description}</div>
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



    
