require('../connection');

const User = require('../models/User');

async function deleteUser(){
    const user = await User.deleteOne({username: "elmasjarto"});
    //const users = await User.deleteMany({username: "elmasjarto"});
    return true
}

deleteUser()
.then(res=>console.log(res))
.catch(err=>console.log(err.message))
