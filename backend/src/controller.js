const service = require('./service')
const generator = require('./utils/generator')


async function list (req, res, next) {
    res.json({ message: 'Name Generator App' });
}

function generate (req, res, next) {
    res.json({test: "testing the response"})
}

// async function generate (req, res, next){
//     console.log("before service query")
//     const adjectives = await service.listAdjectives()
//     const adjArr = adjectives.map(adjective => {
//        return Object.values(adjective)
//     }).flat()

//     const nouns = await service.listNouns()
//     const nounsArr = nouns.map(noun => {
//         return Object.values(noun)
//     }).flat()

//     const data = adjArr[Math.floor(Math.random() * adjArr.length)] + " " + nounsArr[Math.floor(Math.random() * nounsArr.length)];

//     res.json({ data })
// }

module.exports = {
    list,
    generate
}