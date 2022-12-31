function setImage(number){
 hangmanImage.removeAttribute("class");
  hangmanImage.setAttribute("class",`image${number} mx-auto`);
}

const hangmanImage = document.querySelector('#hangman_img');

let image_num = 0;

hangmanImage.addEventListener('click',()=>{
  image_num++;
  if(image_num <= 6){
    setImage(image_num);
  }else{
    setImage(0);
    image_num=0;
}
})

