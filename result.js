
//get information from search in main page and display it in reult page
window.addEventListener('load',()=>{

const params = (new URL(document.location)).searchParams
const userSearchSelectionup = localStorage.getItem('SELECTION')
const userSearchValueup = localStorage.getItem('SEARCH')
if (userSearchValueup!="" && userSearchSelectionup !=""){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearchValueup}+${userSearchSelectionup}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
    document.getElementById("recentHead").innerHTML = `Your Search result for "${userSearchValueup}" in " ${userSearchSelectionup}" . `
    console.log(url)
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let bookdata = data
         
            
            let item = bookdata.items
            
            let searchResultsAll = item.map(function(item){
               
                // let q = document.getElementsByClassName("recentimg")
                
                let volumeInfo = item.volumeInfo
               console.log()
               return  ` <div class="row1">
               <div class="row1image"><img src="${volumeInfo.imageLinks.thumbnail}" alt="book cover" style="width: 200px; height:200px;"></div>
               <div class="title">${volumeInfo.title}</div>
            </div>
            <div class="row2">
                <div class="head"><p class="allheadings">Author(s):</p> <span>${volumeInfo.authors}<span></div>
                <div class="head"><p class="allheadings">Publication Date:</p> ${volumeInfo.publishedDate}</div>
                <div class="head"> <p class="allheadings">Rating:</p> ${volumeInfo.averageRating}</div>
                <div class="head"><p class="allheadings">Publisher:</p> ${volumeInfo.publisher}</div>
                <div class="head"><p class="allheadings">Number of Pages:</p> ${volumeInfo.pageCount}</div>
                <div class="head"><p class="allheadings">Preview on Google:</p> <a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>
                <div  class="head"><p class="allheadings">Description:</p> ${volumeInfo.description}</div>
            </div>`
                
            });
           
            function displayDetails(){

                var row1 = document.querySelectorAll(".row1")
                var row2 = document.querySelectorAll(".row2")

                for(let i =0; i<row1.length; i++){
                    row1[i].addEventListener('mouseover', function(){

                        row2[i].classList.toggle("hidedetails")
                        
                        
                    })

                }
              
                
               
            }
            document.getElementById("bookresult").innerHTML = searchResultsAll
         
            displayDetails()
    
    
       
             //  document.getElementById("recent1").innerHTML= display()
    
    
    
          
    
        })
        .catch((error)=>{
            console.log(error)
        })
}else{
    alert("Please eneter a search category/word")
}

})


//search for books in search page
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
                <div class="row1image"><img src="${volumeInfo.imageLinks.thumbnail}" alt="book cover" style="width: 200px; height:200px;"></div>
                <div class="title">${volumeInfo.title}</div>
             </div>
             <div class="row2">
                 <div class="head"><p class="allheadings">Author(s):</p> <span>${volumeInfo.authors}<span></div>
                 <div class="head"><p class="allheadings">Publication Date:</p> ${volumeInfo.publishedDate}</div>
                 <div class="head"> <p class="allheadings">Rating:</p> ${volumeInfo.averageRating}</div>
                 <div class="head"><p class="allheadings">Publisher:</p> ${volumeInfo.publisher}</div>
                 <div class="head"><p class="allheadings">Number of Pages:</p> ${volumeInfo.pageCount}</div>
                 <div class="head"><p class="allheadings">Preview on Google:</p> <a href="${volumeInfo.previewLink}">${volumeInfo.previewLink}</a> </div>
                 <div  class="head"><p class="allheadings">Description:</p> ${volumeInfo.description}</div>
             </div>`
             
                
            });
            function displayDetails(){

                var row1 = document.querySelectorAll(".row1")
                var row2 = document.querySelectorAll(".row2")

                for(let i =0; i<row1.length; i++){
                    row1[i].addEventListener('mouseover', function(){

                        row2[i].classList.toggle("hidedetails")
                        
                        
                    })

                }
              
                
               
            }
           
           
            document.getElementById("bookresult").innerHTML = startDiv
           
                    
            
       
             //  document.getElementById("recent1").innerHTML= display()
    
    
             displayDetails()
          
    
        })
        .catch((error)=>{
            console.log(error)
        })
}else{
    alert("Please eneter a search category/word")
}
    

    
}

 



   
