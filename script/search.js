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

let inputTextM = document.getElementById('mobile');
inputText.addEventListener('keyup', function (event) {
    let searchValueM = event.target.value.toLowerCase();
   loadVideos(searchValueM)
});