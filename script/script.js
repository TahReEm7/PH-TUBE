const categoryURL = "https://openapi.programming-hero.com/api/phero-tube/categories"; 
const videoURL = "https://openapi.programming-hero.com/api/phero-tube/videos"; 


function fetchCategoryURL() {
    fetch(categoryURL)
    .then(res => res.json())
    .then(data => categoryItems(data.categories) )}
       
    function removeActiveClass() {
        let btns = document.getElementsByClassName('active');
        while (btns.length) {
            btns[0].classList.remove('active');
        }
    }
    let btnAll =document.getElementById('btn-all');
    btnAll.addEventListener('click', function () {
        removeActiveClass();
        btnAll.classList.add('active');
    }) 

    

    const videoDetails = (id) => {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
            .then(res => res.json())
            .then(data => {
               detailsCard(data.video);
            })
        }

        const detailsCard = (video) => {
            let modal = document.getElementById('video_details').showModal();
            let modalContent = document.getElementById('details-content');
              modalContent.innerHTML = `
              <div class="card  image-full w-full">
                 <figure>
                   <img
                     src="${video.thumbnail}"
                     alt="Shoes" />
                 </figure>
                 <div class="card-body">
                   <h2 class="text-[#bcd9e2] text-[40px] font-bold text-center">${video.title}</h2>
                   <p class="font-medium text-white">${video.description}</p>
                   <div class="card-actions justify-end">
                      <div class="modal-action">
                  <form method="dialog"> 
                    <button class="btn bg-[#FF1F3D] text-white">Close</button>
                  </form>
                </div>
                   </div>
                 </div>
            </div>
              `
            
        }

const categoryItems = (items) => {
    let categoryContainer = document.getElementById('category'); 
    
    for (let item of items) {
        let listItem = document.createElement('div');
        listItem.innerHTML = ` <button id="btn-${item.category_id}" onclick="loadCategory(${item.category_id})" class="btn bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white">${item.category}</button>`; 
        categoryContainer.appendChild(listItem);

        let Btn = document.getElementById(`btn-${item.category_id}`);
        Btn.addEventListener('click', function () {
            if (Btn.classList.contains('active')) {
                Btn.classList.remove('active'); 
            } else {
                removeActiveClass(); 
                Btn.classList.add('active'); 
            }
        });
    }
};
function fetchVideoURL() {
    fetch(videoURL)
    .then(res => res.json())
    .then(data => displayVideo(data.videos) )}
       

    function loadCategory(id) {
        let url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
      
    
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                displayVideo(data.category);
            })
           
    }
    

    const displayVideo = (video) => {
        let videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';
        if (video.length === 0) {
           return videoContainer.innerHTML = ` <section id="empty" class="w-11/12 mx-auto my-5 flex flex-col items-center justify-center gap-10 md:p-20 col-span-full">
                <img src="./assets/Icon.png" alt="">
                <h1 class="text-center text-xl md:text-2xl font-bold"> Oops!! Sorry,<br>
                 There is no content here</h1>`}

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
                    <div class="text-sm text-[#17171770] flex gap-2 items-center"><span>${vdo.authors[0].profile_name}</span><span>${vdo.authors[0].verified == true ? `<img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=1535&format=png&color=000000" alt="">`:`` }</span>  </div>
                    <p class="text-sm text-[#17171770]">${vdo.others.views} Views</p>
                </div>
            </div>
                 <button class="btn btn-block" onclick="videoDetails('${vdo.video_id}')">Show Details</button>
           </div>
           `;
         videoContainer.appendChild(videoItem);
        }

       
    };
   

    document.getElementById("home").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        let videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `  <section id="empty" class="w-11/12 mx-auto my-5 flex flex-col items-center justify-center col-span-full">
                <img src="./assets/select.jpg" alt="">
                <h1 class="text-center text-2xl font-bold">No Video Found <br>
                Please Select a category</h1>
        </section>`
      
    });

   
    

    

   

fetchCategoryURL();
// fetchVideoURL();
// categoryItems();
// // displayVideo();
// loadCategory();

{/* <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=1535&format=png&color=000000" alt=""> */}