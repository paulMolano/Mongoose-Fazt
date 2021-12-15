require('../connection');

const Product = require('../models/Product');

async function main(){
    const products = await Product.find({name: "keyborad"})
    return products
}

main()
.then(products=>console.log(products))
.catch(err=>console.log(err.message))
