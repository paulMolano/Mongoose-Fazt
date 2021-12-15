require('../connection');

const User = require('../models/User');


async function updateUser(){
    const usertoUpdate = await User.updateOne({username: "elmasjarto"}, {name: 'nuevonombre'})
    return true
}

updateUser()
.then(user=>console.log(user))
.catch(err=>console.log(err.message))
