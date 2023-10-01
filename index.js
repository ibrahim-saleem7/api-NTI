const express = require('express');
const app = express();
app.use(express.json())


let products =
            [
                {id : 1, name : 'Apple' , price : 150},
                {id : 2, name : 'Samsung' , price : 100},
                {id : 1, name : 'Oppo' , price : 90},
                {id : 4, name : 'Lenovo' , price : 130},
                {id : 5, name : 'HP' , price : 110},
            ]





app.get('/products' , (req, res) => {
    if(products.length === 0){
        return res.status(200).json({message :'No products'})
    } 
    return res.status(201).json(products)
})




app.get('/products/:id/:price?' , (req, res) => {
            if (req.params.price){
                let id = req.params.id.trim()
                let price = req.params.price.trim()

                if(id.length <= 0|| price.length <=0 || isNaN(id) || isNaN(price)){
                    return res.status(404).json({message:"Invalid value"})
                }
                else{
                    for (let i = 0 ; i < products.length; i++) {
                        if (products[i].id == id && products[i].price == price){
                            return res.status(201).json(products[i])
                        }
                        else if(i == products.length - 1) {
                            return res.status(404).json({message:"Product not found"})
                        }
                    }
                }
                // return res.send(validateIdPrice(products , req))
            }else if (req.params.id){
                    let id = req.params.id.trim()
                    if( id.length <= 0 ||  isNaN(id)){
                        return res.status(404).json({ message :`Invalid id value`})
                    }
                    else{
                        for (let i = 0; i < products.length; i++){
                            if (products[i].id == id){
                                return res.status(200).json(products[i])
                            }else if(i == products.length - 1){
                                return res.status(404).json({ message :`Sorry, not found product with id <b>${id}</b>`})
                            }
                        }
                    }
                // return res.send( validateID(products , req ))
            }
})






app.post('/products', (req, res) => {

    let body = req.body

    if(Object.keys(body).length > 2){
        return res.status(404).json({message: "Sorry, the value is not a valid product value is too many"})

    }else if(Object.keys(body).length < 2) {
        return res.status(404).json({message: "Sorry, the value is not a valid product value is  very few"})
    }
    else{
        if(body != "" && typeof(body?.name) =='string' && typeof(body?.price) == 'number' ){
            let newProduct = {
                id : products[products.length -1].id+1,
                name : body.name,
                price : body.price
            }
            products.push(newProduct)
            return res.status(201).json(products)
        }
    }
})



app.put('/products/:id', (req, res) => {
    
    // let product = validateID(products ,req)
    let product = products.filter((p)=>{
        return p.id == req.params.id
    })

    if(product.length <= 0) {
        return res.status(404).json({message: "Product not found"})
    }else{

        let body = req.body
        let bodyValue = Object.keys(body)
        product= product[0] 
        
        if(typeof(body.name) != 'string'|| typeof(body.price) != 'number') return res.status(404).json({message : "invalid value for product"})
        
        switch (true){
            case bodyValue.includes("name") && bodyValue.includes("price"):
                product.name = body.name
                product.price = body.price
                break
            case bodyValue.includes("name") :
                product.name = body.name
                break
            case bodyValue.includes("price") :
                product.price = body.price
                break;    
            default : 
                res.status(404).json({ message: "invalid value for product "})
                break;
        }
        return res.status(200).json(products)
    }

})


app.delete('/products/:id' , (req ,res)=>{
    // let product = validateID(products , req)
    let product = products.filter((p)=>{
        return p.id == req.params.id
    })
    
    if( product.length <= 0 ) return res.status(404).json({message: "Product not found"})

    product =product[0]
    products.splice(products.indexOf(product) , 1)
    return res.send(products)
} )








function validateID(products , req , ){
    let id = req.params.id.trim()
    if( id.length <= 0 ||  isNaN(id)){
        // return `Invalid id value`
        return  `Invalid id value`
    }
    else{
        for (let i = 0; i < products.length; i++){
            if (products[i].id == id){
                // return products[i]
                return products[i]
            }else if(i == products.length - 1){
                // return `Sorry, not found product with id <b>${id}</b>`
                return `Sorry, not found product with id <b>${id}</b>`

            }
        }
    }
}

function validateIdPrice(products ,req){
    let id = req.params.id.trim()
    let price = req.params.price.trim()
    if(id.length <= 0|| price.length <=0 || isNaN(id) || isNaN(price)){
        return "Invalid value"
    }
    else{
        for (let i = 0 ; i < products.length; i++) {
            if (products[i].id == id && products[i].price == price){
                return products[i]
            }
            else if(i == products.length - 1) {
                return "Product not found"
            }
        }
    }
}
















app.listen(6060 , (req ,res)=>{
    console.log("server listening on " + 6060)
})