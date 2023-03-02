import mongoose from 'mongoose';
const { Schema } = mongoose;


const OrderSchema = new Schema({
    email: {type: String,required: true}, 
    Products: [{
        ProductId: {type: String},
        quantity: {type: Number, default:1}
    }],
    address: {type:String,required:true},
    amount: { type: Number, required:true },
    status: { type: String, default: 'Pending',required: true }
    
  });
  export default  mongoose.model('Order', OrderSchema);