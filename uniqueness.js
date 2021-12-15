require('./connection');

const User = require('./models/User');

async function createUsers(){
    const user = new User({
        username: 'losmolanetespeques',
        password: '123456'
    })

    await user.save();

    return user
}

createUsers()
    .then(user => console.log('User added correctly'))
    .catch(err => console.log(err.message))