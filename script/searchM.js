let inputTextM = document.getElementById('mobile');
inputTextM.addEventListener('keyup', function (event) {
    let searchValueM = event.target.value.toLowerCase();
   loadVideos(searchValueM)
   console.log(searchValueM);
});
