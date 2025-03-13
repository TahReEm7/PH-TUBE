function loadVideos(searchText = "") {
    
    fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
    )
      .then((response) => response.json())
      .then((data) => {
        displayVideo(data.videos);
      });
  }      
     

let inputText = document.getElementById('search-input');
inputText.addEventListener('keyup', function (event) {
    let searchValue = event.target.value.toLowerCase();
   loadVideos(searchValue)
});


const showLoader =()=>{
    document.getElementById("Loader").classList.remove("hidden");
    document.getElementById("video-container").classList.add("hidden");
}

const hideLoader =()=>{
    document.getElementById("Loader").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");
}

