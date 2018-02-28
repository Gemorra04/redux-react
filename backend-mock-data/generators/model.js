const amount = 50;
 const func =next =>create => {
    const path = `model/modelList.json`;
    var faker = require("faker");
     faker.locale = "de";
    const data = (amount)=> {
        let temp = [];
        for (let i = 0; i < amount; i++) {
            temp.push({
                    id: i,
                    title: faker.commerce.productName(),
                    right: faker.random.number({min:1, max:3}),
                    icon: faker.image.avatar(),
                    description: faker.lorem.words(),
                    date: faker.date.past(),
                    owner: faker.internet.userName()
                }
            )
        }
        return temp;
    }
    create({data: {model: data(amount)}, path: path})
    next(create);

}
module.exports = func;
