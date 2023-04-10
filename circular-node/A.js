const { utilB } = require('./B')

const nameObject = {
    name: 'whatever'
}

const utilA = () => {
    console.log('inside A')
    console.log(`name is '${nameObject.name}' in A`)
    utilB()
}

module.exports = {
    utilA,
    nameObject
}
