let productArr = [
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-marglobe-organic-vegetable-seeds-16969383641228_600x600.jpg?v=1634205137',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Tomato - Organic Seeds',
strikedPrice:200,
Price:85,
category:'ORGANIC VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cauliflower-snowball-16-desi-vegetable-seeds-16968696627340_600x600.jpg?v=1634203465',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Cauliflower Snowball',
strikedPrice:50,
Price:20,
category:'VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-spinach-organic-vegetable-seeds-16969343697036_600x600.jpg?v=1634204867',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Spinach - Organic Seeds',
strikedPrice:200,
Price:75,
category:'ORGANIC VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cabbage-special-pride-desi-vegetable-seeds-16968672411788_600x600.jpg?v=1634203286',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Cabbage',
strikedPrice:55,
Price:27,
category:'VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-methi-kasturi-desi-vegetable-seeds-16969026175116_600x600.jpg?v=1634204330',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Methi Kasturi',
strikedPrice:50,
Price:25,
category:'VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-krishna-tulsi-tulsi-black-0-5-kg-seeds-112929_600x600.png?v=1679750449',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Tulsi Seeds (Black)',
strikedPrice:150,
Price:75,
category:'HERBAL SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-radish-red-round-desi-vegetable-seeds-16969238020236_600x600.jpg?v=1634204738',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Radish Red Round Seeds',
strikedPrice:55,
Price:27,
category:'VEGETABLE SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
{image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
name:'Peas Seeds',
strikedPrice:50,
Price:25,
category:'SEEDS'},
]
localStorage.setItem('productData',JSON.stringify(productArr))
displayProducts(productArr)
function displayProducts(productArr){
    document.querySelector('#allProducts').innerHTML = ''
    productArr.forEach(function(el){
        let oneProduct = document.createElement('div')
        oneProduct.setAttribute('class','product')
        let data = document.createElement('div')
        data.setAttribute('class','data')
        data.addEventListener('click',function(){
            showProduct(el)
        })
        let image = document.createElement('img')
        image.setAttribute('src',el.image)
        let stars = document.createElement('img')
        stars.setAttribute('src',el.rating)
        stars.setAttribute('id','rating')
        let name = document.createElement('p')
        name.innerText = el.name
        let strikedPrice = document.createElement('p')
        strikedPrice.style.color = '#50504b'
        strikedPrice.innerText ='RS: '+ el.strikedPrice + '.00'
        let price = document.createElement('p')
        price.innerText ='RS: ' + el.Price + '.00'
        let cost = document.createElement('div')
        let cartbtn = document.createElement('button')
        cartbtn.setAttribute('class','cart')
        cartbtn.innerText = 'ADD TO CART'
        cartbtn.addEventListener('click',function(){
            addToCart(el)
        })
        cost.append(strikedPrice,price)
        data.append(image,stars,name,cost)
        oneProduct.append(data,cartbtn)
        document.querySelector('#allProducts').append(oneProduct)
    })
}

document.querySelector('#filter').addEventListener('change',handleFilter)

function handleFilter(){
    let selected = document.querySelector('#filter').value;
    let filterArr = productArr.filter(function(el){
        return el.category ==selected
    })
    if(selected==''){
        displayProducts(productArr)
    }else{
        displayProducts(filterArr)
    }
}
document.querySelector('#sort').addEventListener('change',handleSort)
function handleSort(){
    let selected = document.querySelector('#sort').value
    console.log(selected);
    if(selected == 'ASCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return 1;
            if(x < y) return -1
            return 0;
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == ''){
        displayProducts(productArr)
    }
    if(selected == 'DESCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return -1;
            if(x < y) return 1
            return 0;
        })
        displayProducts(productArr)
    }
    if(selected == 'LOW - HIGH'){
        productArr.sort(function(a,b){
            if(a.Price>b.Price) return 1;
            if(a.Price<b.Price) return -1
            return 0
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == 'HIGH - LOW'){
        productArr.sort(function(a,b){
         
            if(a.Price>b.Price) return -1;
            if(a.Price<b.Price) return 1
            return 0
        })
        displayProducts(productArr)
    }
    
}
let cartArr =JSON.parse(localStorage.getItem('cartEle'))|| []

function addToCart(el){
    cartArr.push(el)
    localStorage.setItem('cartEle',JSON.stringify(cartArr))
    location.reload()
}
let proDescription ;
function showProduct(el){
proDescription = el
localStorage.setItem('descriptionOfOneProduct',JSON.stringify(proDescription))
window.location.href = 'description.html'
}