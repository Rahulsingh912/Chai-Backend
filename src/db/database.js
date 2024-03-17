import mongoose from 'mongoose';
import {DB_NAME} from '../constant.js'



const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,
        {
            useNewUrlParser: true
        }
        );
        console.log(`mongodb connect!! DB HOST ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.error("eror",err);
        process.exit(1);
    }
}

export default connectDB;