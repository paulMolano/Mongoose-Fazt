require('../connection');

const Product = require('../models/Product');

const createProducts = async () => {
    const laptophp = new Product({
        name: 'laptop hp',
        description: 'hp pavilion 15',
        price: 600
    })

    const laptoplenovo = new Product({
        name: 'laptop lenovo',
        description: 'lenovo x5',
        price: 1200
    })

    await laptophp.save();
    await laptoplenovo.save();
    
    return true
}

createProducts()
.then(res=>console.log(res))
.catch(err=>console.log(err.message))
