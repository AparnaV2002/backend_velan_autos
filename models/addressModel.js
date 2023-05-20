import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
 {
   name: {
     type: String,
     required: true,
     trim: true,
   },
   email: {
     type: String,
     required: true,
     unique: true,
   },
   city: {
     type: String,
     required: true,
   },
   phone: {
     type: String,
     required: true,
   },
   address: {
     type: String,
     required: true,
   },
   door:{
     type:String,
     required:true,
   },
},
{ timestamps: true }
);

export default mongoose.model("address", addressSchema);
