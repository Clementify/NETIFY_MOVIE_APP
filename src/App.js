
// Write something

const url = 'https://api.tvmaze.com/shows'
let prevBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('nextBtn')

let movieList = []
const loadMovies = async () =>{
    const response = await fetch(url)
    const data = await response.json();
    movieList = data.reverse()   
}
let currentPage = 1
let itemsPerPage = 8

async function displayPages(){
    await loadMovies()
    
    let startIndex= (currentPage-1) *itemsPerPage;
    let endIndex= startIndex + itemsPerPage;
    
    let itemsToShow = movieList.slice(startIndex,endIndex)
    const content = document.getElementById('content')
    content.innerHTML ="" 
    
    itemsToShow.forEach(movie =>{
        let container = document.createElement('div')
        let imgTag = document.createElement('img')
        let nameTag = document.createElement('h2')
        let likeComm = document.createElement('div')

        imgTag.src = movie.image.medium
        nameTag.textContent = movie.name
        
        
        container.appendChild(imgTag)
        container.appendChild(nameTag)
        // container.appendChild(likeComm)
        content.appendChild(container)
        
        container.classList.add('card')
        
        //about popup
        likeComm.classList.add('popup')
        let closeBtn = document.createElement('button')
        let overlay = document.createElement('div')
        
        overlay.className = 'overlay'
        overlay.appendChild(likeComm)
        
        closeBtn.textContent = 'X'
        closeBtn.classList.add('closePopup')
        
        likeComm.appendChild(closeBtn)
        
        imgTag.addEventListener('click',()=>{
            overlay.style.display ='block'
        })
        closeBtn.addEventListener('click',()=>{
            likeComm.style.display = 'none'

        })
        overlay.addEventListener('click',()=>{
            overlay.style.display ='none'
        })
        container.appendChild(overlay)

    })
    hideBtns()
    
    
}
displayPages()





prevBtn.addEventListener('click',()=>{
    currentPage--
    displayPages()
});
nextBtn.addEventListener('click', () =>{
    currentPage++
    displayPages()
})

function hideBtns (){
    if (currentPage === 1){
        prevBtn.style.display = 'none';
    }else{
        prevBtn.style.display = 'initial'
    };

    let pageLimit =Math.ceil( movieList.length / itemsPerPage);
    if(currentPage === pageLimit){
        nextBtn.style.display = 'none';
    }else{
        nextBtn.style.display = 'initial'
    }
    console.log(pageLimit);
}









// const myContainer = document.getElementById('content')
// const previousBtn = document.getElementById('prevBtn')
// const nextBtn = document.getElementById('nxtBtn')
// const form = document.getElementById('form')
// const search = document.getElementById('search')
// const apiUrl = 'https://api.tvmaze.com/shows'
// const currentPage = 1
// const itemsPerPage = 8
// let movieList = []
// async function showMovies(){
//     const response = await fetch(apiUrl)
//     const data = await response.json();
//     movieList = data
// }

// async function displayMovies(){
//     await showMovies()

//     movieList.forEach(movie =>{
//         let img = document.createElement('img')
    
//         img.src = movie.image.medium

//         myContainer.appendChild(img)

//     })
// }
//   displayMovies()
