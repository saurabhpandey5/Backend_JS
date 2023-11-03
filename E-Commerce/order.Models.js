import mongoose from "mongoose"

const orderItemSchema=new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true
        }

    }
)

const orderSchema=new mongoose.Schema(
    {
        price:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        address:{
            type:String,
            required:true,
        },
        orderItems:{
            type:[orderItemSchema]
        },
        status:{
            type:String,
            enum:["PENDING","CANCEL","DELIVERED"],
            default:"PENDING",
        }

    },
    {timeStamps:true}
)

export const Order=mongoose.model("Order",orderSchema)