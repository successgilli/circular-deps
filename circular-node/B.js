const { nameObject } = require('./A')

const utilB = () => {
    console.log('inside B')
    console.log(`name is '${nameObject.name}' in B`)
}

module.exports = {
    utilB,
}
