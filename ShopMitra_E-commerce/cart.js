const items = JSON.parse(localStorage.getItem('CartItems'))
const mainDiv = document.getElementById('cartDiv')
console.log(items)
let totalprice = 0
function displayData ()

{
    mainDiv.textContent=""
    totalprice = 0;
    items.forEach((item,i) =>
    {
        const div = document.createElement("div")
		div.classList.add("product")
		const image = document.createElement("img")
		image.src = item.thumbnail
        image.alt = item.title
        image.height="100"
        image.width="100"
		const title = document.createElement("h4")
		title.textContent = item.title
		const price = document.createElement("p")
        price.textContent = "Price: $" + item.price
        totalprice=totalprice+item.price
        const btn = document.createElement('button')
        btn.onclick = function (){
            let con = confirm("Are You Sure Remove This Item")
            if (con){
                items.splice(item,1)
                totalprice=totalprice-item.price
                localStorage.setItem('CartItems', JSON.stringify(items))
                displayData()
            }
            totalprice = totalprice
            
        }
        totalprice = totalprice
        
        btn.textContent = "❎"
        const div2 = document.createElement('div')
        const tp = document.createElement('h2')
        tp.textContent = "Totalprice: $"+ totalprice
        div2.appendChild(tp)
        
        div.append(image,title,price,btn)
        mainDiv.appendChild(div,div2)
    })
    if (items.length > 0){
        const div2 = document.createElement('div')
        div2.classList.add("pricesummary")
        const h2 = document.createElement('h2')
        h2.textContent = "Total Price"
        const p = document.createElement('p')
        p.textContent = 'Price: $'+totalprice.toFixed(2)
        div2.append(h2,p)
        mainDiv.appendChild(div2)

    }
    else{
        const div2 = document.createElement('div')
        div2.classList.add("pricesummary")
        const h2 = document.createElement('h2')
        h2.textContent = "You Cart Is Empty.. add some products"
        div2.appendChild(h2)
        mainDiv.appendChild(div2)


    }

}
displayData()