const dbConnect = require('./mongodb');

// const insert = async ()=>{
//     const data = await dbConnect();
//     const result = await data.insertOne({
//         name: 'note 5',
//         brand: 'vivo',
//         price: 320,
//         category: 'mobile' 
//     })
//     if (result.acknowledged) {
//         console.log("data inserted successfully");
//     }
// }

const insert = async ()=>{
    const data = await dbConnect();
    const result = await data.insertMany([
        {
            name: 'max 1',
            brand: 'micromax',
            price: 220,
            category: 'mobile' 
        },
        {
            name: 'max 2',
            brand: 'micromax',
            price: 320,
            category: 'mobile'
        },
        {
            name: 'max 3',
            brand: 'micromax',
            price: 420,
            category: 'mobile'
        }
    ])
    if (result.acknowledged) {
        console.log("data inserted successfully");
    }
}

insert();