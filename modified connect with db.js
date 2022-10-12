const dbConnect = require('./mongodb')

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((result) => {
//         console.warn(result);
//     })
// })

// dbConnect().then((resp)=>{
//     return resp.find().toArray()
// }).then((result) => {
//     console.warn(result);
// })

const main = async ()=> {
    let resp = await dbConnect();
    let result = await resp.find().toArray();
    console.warn(result);
}

main();