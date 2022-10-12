const dbConnect = require('./mongodb');

// const deleteData = async ()=> {
//     const data = await dbConnect();
//     const result = await data.deleteOne({name: 'max pro 5'});
//     // console.warn(result);
//     if (result.acknowledged) {
//         console.warn('Record Deleted successfully')
//     }
// }

const deleteData = async ()=> {
    const data = await dbConnect();
    const result = await data.deleteMany({name: 'max 2'});
    // console.warn(result);
    if (result.deletedCount) {
        if (result.acknowledged) {
            console.warn('Record Deleted successfully')
        }
    } else {
        console.warn('No such record')
    }
}

deleteData();