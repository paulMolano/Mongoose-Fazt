require('../connection');

const User = require('../models/User');

async function getUser(){
    const user = await User.findOne({username: "elmasjarto"})
    return user
}

getUser()
.then(user=>console.log(user))
.catch(err=>console.log(err.message))
