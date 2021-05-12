let products = [{
    id: '1',
    price: 100,
    name:'jugo de naranja'
    
},
{
    id: '2',
    price: 200,
    name:'refresco'
    
},
{
    id: '3',
    price: 150,
    name:'bocadillo de chocolate'
    
},
{
    id: '4',
    price: 250,
    name:'galletas'
}]

const moneyExchange = (id, price) =>{
    console.log('hola')
    let allProducts = products.map(product => {
       // return {productId: product.id, productPrice: product.price, productName: product.name}  
        if (id == product.id){
            let substract = price - product.price;
            console.log(substract, product.name)
        }
       
    })

   
}


moneyExchange(1,300)




