let productArr = [
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-ficus-bonsai-plant_938x938.jpg?v=1635575503',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Bonsai - Plant',
    strikedPrice:1500,
    Price:1220,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-chinese-pepper-bonsai-plant_600x600.jpg?v=1634216045',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Chinese Pepper Bonsai - Plant',
    strikedPrice:2300,
    Price:1590,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-fantastic-ficus-bonsai-for-fabulous-mother-16968853979276_305x305.jpg?v=1634219341',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Fantastic Ficus Bonsai For Fabulous Mother',
    strikedPrice:1000,
    Price:899,
    category:'BONSAI GIFTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-bonsai-vertical-braided-arrangement-plant-16968857092236_600x600.jpg?v=1634219446',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Bonsai Vertical Braided Arrangement - Plant',
    strikedPrice:7730,
    Price:6500,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-jade-bonsai-plant-16968841166988_396x396.jpg?v=1634222537',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Jade Bonsai - Plant',
    strikedPrice:600,
    Price:500,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-friendship-day-wishes-with-incredible-ficus-bonsai-and-mini-easel-16968868397196_396x396.jpg?v=1634221065',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Friendship Day wishes with Ficus Bonsai and Mini Easel',
    strikedPrice:1200,
    Price:999,
    category:'BONSAI GIFTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-buxus-bonsai-plant-16968671395980_396x396.jpg?v=1634215153',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Buxus Bonsai - Plant',
    strikedPrice:6500,
    Price:4199,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-golden-cypress-bonsai-plant_600x600.jpg?v=1634220546',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Golden Cypress Bonsai - Plant',
    strikedPrice:2409,
    Price:1599,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-wish-good-luck-with-ficus-bonsai-and-laughing-buddha-16969427845260_396x396.jpg?v=1634231081',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Wish Good Luck with Ficus BOnsai and Laughing Budda',
    strikedPrice:1110,
    Price:999,
    category:'BONSAI GIFTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-ficus-100-gms-plant_396x396.jpg?v=1634219386',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus 100 gms',
    strikedPrice:800,
    Price:499,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-panda-bonsai-plant-16968859222156_396x396.jpg?v=1634219557',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Panda Bonsai',
    strikedPrice:850,
    Price:599,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-boxwood-bonsai-plant_600x600.jpg?v=1634214932',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Boxwood Bonsai',
    strikedPrice:2100,
    Price:1449,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-microcarpa-bonsai-plant-16968856764556_600x600.jpg?v=1634219514',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Microcarpa Bonsai',
    strikedPrice:5450,
    Price:4250,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-bring-good-luck-to-your-parents-with-buddha-and-ficus-bonsai-832517_396x396.jpg?v=1679749383',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Bring Good Luck to your Parents with Budda and Ficus Bonsai',
    strikedPrice:1400,
    Price:1099,
    category:'BONSAI GIFTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-silver-cypress-bonsai-plant_1_600x600.jpg?v=1634228920',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Silver Cypress Bonsai',
    strikedPrice:1350,
    Price:915,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-ficus-iceland-bonsai-plant_600x600.jpg?v=1634219481',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Iceland Bonsai',
    strikedPrice:450,
    Price:350,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-bonsai-in-ceramic-pot-16968856273036_305x305.jpg?v=1634219439',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Bonsai in Ceramic Pot',
    strikedPrice:795,
    Price:620,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-banyan-tree-plant_396x396.jpg?v=1634214221',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Banyan Tree Bonsai Plant',
    strikedPrice:2500,
    Price:1899,
    category:'BONSAI PLANTS'},
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