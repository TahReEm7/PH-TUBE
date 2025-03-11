const categoryURL = "https://openapi.programming-hero.com/api/phero-tube/categories"; 
const videoURL = "https://openapi.programming-hero.com/api/phero-tube/videos"; 

function fetchCategoryURL() {
    fetch(categoryURL)
    .then(res => res.json())
    .then(data => categoryItems(data.categories) )}
       
 
const categoryItems = (items) => {
    let categoryContainer = document.getElementById('category'); 

    for (let item of items) {
        let listItem = document.createElement('div');
        listItem.innerHTML = ` <button class="btn bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white">${item.category}</button>`; 
        categoryContainer.appendChild(listItem);
    }
};



function fetchVideoURL() {
    fetch(videoURL)
    .then(res => res.json())
    .then(data => displayVideo(data.videos) )}
       


    const displayVideo = (video) => {
        let videoContainer = document.getElementById('video-container');
        for (const vdo of video) {
           let videoItem = document.createElement('div');
           videoItem.innerHTML = `
           <div class="">
            <img class="h-[200px] w-full rounded -lg" src="${vdo.thumbnail}" alt="">
            <div class="flex items-center space-x-6">
                <div class="avatar pl-2">
                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                      <img src="${vdo.authors[0].profile_picture}}" />
                    </div>
                  </div>
                <div class="flex flex-col gap-2 py-3">
                    <h3 class="text-xl font-bold">${vdo.title}</h3>
                    <div class="text-sm text-[#17171770] flex gap-2 items-center"><span>${vdo.authors[0].profile_name}</span> <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=1535&format=png&color=000000" alt=""></div>
                    <p class="text-sm text-[#17171770]">${vdo.others.views} Views</p>
                </div>
            </div>
           </div>
           `;
              videoContainer.appendChild(videoItem);
        }
    };

fetchCategoryURL();
fetchVideoURL();
categoryItems();
displayVideo();


