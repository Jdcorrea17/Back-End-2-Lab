let house = require('./db.json')
let houseID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(house)
    },
    deleteHouse: (req, res) => {
        let index = house.findIndex(elem => elem.id === +req.params.id)
        house.splice(index, 1)
        res.status(200).send(house)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            id: houseID,
            address: address,
            price: price,
            imageURL
        }
        house.push(newHouse)
        houseID++
        res.status(200).send(house)
    },
    updateHouse: (req, res) => {
        const {type} = req.body
        let index = house.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus'){
            house[index].price -= 10,000
            res.status(200).send(house)
        } else if(type === 'plus'){
            house[index].price += 10,000
            res.status(200).send(house)
        } else {
            res.status(400).send('price at 0')
        }
    }
}