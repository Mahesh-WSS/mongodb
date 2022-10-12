const dbConnect = require('./mongodb');

// const updateData = async ()=> {
//     const data = await dbConnect();
//     const result = await data.updateOne(
//         {name: 'max 1'},
//         {$set: {name: 'max pro 5'}}
//     )
//     console.warn(result);
// }

const updateData = async ()=> {
    const data = await dbConnect();
    const result = await data.updateMany(
        {name: 'note 5'},
        {$set: {name: 'note 6', price: 300}}
    )
    console.warn(result);
}

updateData();