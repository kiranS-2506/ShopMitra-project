const rightdiv = document.getElementById("right")
let toggle = document.querySelector(".toggle")
let menu = document.querySelector("nav")
let CartItems=[]


function getdata(){
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        displaydata(data.products)
    })
    .catch((err)=>console.log(err))
}
getdata()
function displaydata(items){
    rightdiv.textContent=""
    items.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('product')
        const image = document.createElement('img')
        image.src = item.thumbnail
        image.alt = item.title
        const title = document.createElement('h4')
        title.textContent = item.title
        const para = document.createElement('p')
        para.textContent = "Price: $"+item.price
        const btn = document.createElement('button')
        btn.id = "addcart"
        btn.textContent = "Add To Cart"
        btn.addEventListener('click',() => addToCart(item));
        div.append(image,title,para,btn)
        rightdiv.appendChild(div)

    })

}


document.getElementById("dropdown-content").addEventListener('click', function(e){
    console.log(e.target.textContent)
    getCategoryData(e.target.textContent)
})
document.getElementById("dropdown-content2").addEventListener('click', function(e){
    console.log(e.target.textContent)
    getCategoryData(e.target.textContent)
})
document.getElementById("dropdown-content3").addEventListener('click', function(e){
    console.log(e.target.textContent)
    getCategoryData(e.target.textContent)
})
document.getElementById("dropdown-content4").addEventListener('click', function(e){
    console.log(e.target.textContent)
    getCategoryData(e.target.textContent)
})
document.getElementById("dropdown-content5").addEventListener('click', function(e){
    console.log(e.target.textContent)
    getCategoryData(e.target.textContent)
})


async function getCategoryData(c){
    try{
        const res = await fetch(`https://dummyjson.com/products/category/${c}`)
        const data = await res.json()
        displaydata(data.products)

    }
    catch{
        console.log(err)
    }
   
}


function addToCart(i){
    CartItems.push(i)
    localStorage.setItem('CartItems', JSON.stringify(CartItems))
    document.getElementById('count').textContent = CartItems.length





}
toggle.addEventListener("mouseover",function(){
    menu.classList.toggle("active")

})
