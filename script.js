


// input variables
let image = document.querySelector(".image");
let flowerName = document.querySelector(".flower-name");
let color = document.querySelector(".color");
let flowerLink = document.querySelector(".flower-link");

// button variable
let add = document.querySelector(".add");



let disImage = document.querySelector(".display-image");
let disName= document.querySelector(".display-name");
let disColor= document.querySelector(".display-color");
let disLink= document.querySelector(".display-link");
console.log(disImage);









let flower1 ={

 flower_image:"rosePic.webp",
 flower_name: "Rose",
 flower_color:"Red",
 flower_link: "https://www.amazon.com/s?k=rose&crid=E7LS9M885ZW6&sprefix=%2Caps%2C599&ref=nb_sb_noss_2",

};


let flower2 ={

 
  flower_image:"Easter-lily.webp",
 flower_name: "Lily",
 flower_color: "White",
 flower_link: "https://www.amazon.com/Hananona-Artificial-Flowers-Centerpiece-Decoration/dp/B0CQKB3PMH/ref=sr_1_7?crid=2UZHNHT3R6ODJ&dib=eyJ2IjoiMSJ9.jo4U7obeic918AwnzByaiR6FZ2Sp8qvwrqOkKjETuVYIXnYaKyL0bZkDofSo6XQ7MRwuvC8fKAlVnsc1Yt4cKhQtODhyYn-7s5ZJPnvt0oR1rb3XuhZRYpf0v4uo27XdtU8OiZdhx93HjJcJJ-tGoXvFdV5rPwpIvVlvCEuzLfIO83YA5bbpvK994HcJysGFPJPGCmEczIOHJucq6DN9BowbghfgotOhm1JBK41DTaux7Dx_Ns2aOUBfpE3AwieWjFxl2hfWvYKYC_CbEeHteuBu5vcz3q3eU0aPwWgZk0g.9RM-fxO73MprfbcEr5vu9-J6AHeq6HfAJGz9z2h3Vis&dib_tag=se&keywords=lily+flower&qid=1708658154&sprefix=lily+f%2Caps%2C555&sr=8-7",

};


let flower3 ={

 flower_image:"lavender.jpg",
 flower_name: "Lavender",
 flower_color: "Purple",
 flower_link: "https://www.amazon.com/Uieke-Dried-Lavender-Flowers-Decoration-Arrangements-Fragrance/dp/B08TLSD5NC/ref=sr_1_6?crid=3L2INABDYPMWZ&dib=eyJ2IjoiMSJ9.KzeuyE3R00BLPbPpkbmCJkLQR3n9MfiXfb6HyKKq7ao0hRUyHq14F3RT_Lek4ZHtLqkZuQ3Xdo8aMP-iEEt2mCrvDb5ogWljHz_mCZnkMNiAMJWK2_Vb3C6BeA8vuzY7qbYF1iRk6N-TDHEHwQlM7zKhTvyMyAZfaEyECIPY6JOfRiOrgzQgYVC9-PX8SzY40NaH2e0HsXS_GfNHOiF2gQipjMfOKIMmcCN8WLZI71HBhXZ980xbPMYlqa4vpQXNhr8aVpwA_msUAPU3VvV4iHul1OoyEal3IG0eqmWOc2w.rzMaJOLtp1M_QFrulrLl4trEvqNXVUwx6guVslibcBc&dib_tag=se&keywords=lavender&qid=1708658217&sprefix=lavender%2Caps%2C536&sr=8-6",

};



let collection=[flower1, flower2, flower3];












function addFlowerInfo() {


let imageValue= image.value;
  console.log(imageValue);

let nameValue= flowerName.value;

let colorValue= color.value;

let linkValue= songLink.value;


 let newFlower = {
  flower_image: imageValue,
  flower_name: nameValue,
  color_artist: colorValue,
  song_link: linkValue,



 };

  collection.push(newFlower);
console.log(collection);  
}






function emptyDisplay() {
  disImage.innerHTML = "";
  disName.innerHTML = "";
  disColor.innerHTML = "";
  disLink.innerHTML = "";
}




function displayFlowerInfo() {


// collection.forEach(function(item){
// disImage.insertAdjacentHTML('beforeend', `<p>  <img src=${item.flower_image}></p>`);
// disName.insertAdjacentHTML('beforeend', `<p>${item.flower_name}</p>`);
// disColor.insertAdjacentHTML('beforeend', `<p>${item.flower_color}</p>`);
// disLink.insertAdjacentHTML('beforeend', `<p><a href=${item.flower_link} target="_blank"> Click Here</a> </p>`);
// });

  
let display=document.querySelector(".display");

  collection.forEach(function(item) {

    display.insertAdjacentHTML('beforeend', `<div class="container">

    <img src=${item.flower_image}>
    <div class="side">
    <h4>${item.flower_name}</h4>
    <h4>${item.flower_color}</h4>
    <a href=${item.song_link}target="_blank"> Click Here</a> 
    </div>
    </div>`)
  });
  

}









// add and display songs
add.onclick = function() {
   emptyDisplay();
  addFlowerInfo();
  displayFlowerInfo();
};

// display stored songs
displayFlowerInfo();


