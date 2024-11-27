const sideBarOptiopns = document.querySelectorAll('.side_option_label')
const contentPages = document.querySelectorAll('.content_page')
console.log(contentPages[0].id)

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