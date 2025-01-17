const sideBarOptiopns = document.querySelectorAll('.side_option_label')
const contentPages = document.querySelectorAll('.content_page')
const gameSearchBar = document.getElementById('gameSerachInput');
const gameSearchIcon = document.getElementById('gameSerachIcon');
let gameBanner = document.getElementById('game_banner')
let gameName = document.getElementById('game_name')
let gameDlcCount = document.getElementById('game_dlc_count')
let gameReleaseDate = document.getElementById('game_release_date')
let gamePlayerCount = document.getElementById('game_player_count')
let gameDeveloper = document.getElementById('game_developer')
let gamePublisher = document.getElementById('game_publisher')
let gamePrice = document.getElementById('game_price')
// console.log(gameName)
gameSearchBar.addEventListener('keyup',keyValidator)
gameSearchIcon.addEventListener('click',getGameAppId)
const url ="https://store.steampowered.com/api/appdetails?appids="
// console.log(contentPages[0].id)

function optionDetector(event)
{
  pageName = event.target.parentElement.dataset.type;
  console.log(pageName)
  for(let i = 0 ; i < contentPages.length ; i++)
    {
      if(pageName==contentPages[i].id)
        contentPages[i].style.display ='flex';
      else
        contentPages[i].style.display ='none';
    }

  
}

function setOptionListListener(list)
{
  for(let i = 0 ; i < list.length ; i++)
  {
    list[i].addEventListener('click' , optionDetector);
  }
  let x = document.createElement('li')
  x.parentElement
}

setOptionListListener(sideBarOptiopns);



function keyValidator(event){
  if (event.key == 'Enter' )
    getGameAppId(event)
}
let gameAppId
function getGameAppId(event){
  console.log(gameSearchBar.value)
  gameAppId = gameSearchBar.value;
  // 1091500&cc=ar";
  let finalURL = url+gameAppId+'&ar'
  // console.log(finalURL)
  gameInfoFetch(finalURL)
}

function gameInfoFetch(URL){

const response = fetch(URL); 
// یک تابع برای ارسال درخواست
fetchData()
async function fetchData() {
    try {
        // ارسال درخواست به سمت سرور
        const response = await fetch(URL);
        
        // بررسی وضعیت پاسخ
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // پارس کردن داده‌ها به صورت JSON
        let data = await response.json();
        
        // ذخیره داده‌ها در یک متغی
        // console.log(data[gameAppId].data.price_overview.final);
        gameBanner.setAttribute('src',data[gameAppId].data.header_image);
        // APIKEY = "C0C2746E5859F6EAD7B27E79C6D9BC76"
        // gameBanner.setAttribute('src',"https://api.steampowered.com/IPlayerService/GetAvatarFrame/v1/?key=" + APIKEY + "&steamid=" + gameAppId);
        gameName.innerHTML = data[gameAppId].data.name;
        gameDlcCount.innerHTML = data[gameAppId].data.dlc.length;
        gameReleaseDate.innerHTML = data[gameAppId].data.release_date.date;
        // gamePlayerCount.innerHTML = data[gameAppId].data
        gamePlayerCount.innerHTML = "Error!!!"
        gameDeveloper.innerHTML = data[gameAppId].data.developers;
        gamePublisher.innerHTML = data[gameAppId].data.publishers;
        gamePrice.innerHTML = data[gameAppId].data.price_overview.final_formatted;

    } catch (error) {
        alert('There has been a problem with your fetch operation:', error);
    }
}
}

