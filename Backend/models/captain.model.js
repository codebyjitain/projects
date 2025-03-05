const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const  captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3,'first name atleast 3 characters long'],
        },
        lastname:{
            type: String,
            minlength: [3,'first name atleast 3 characters long'],
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:  {
        type:String,
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minlength: [3,'color name atleast 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlength: [3,'plate name atleast 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            min: [1,'capacity must be greater than 0'],
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true,
        },
    },
    location:{
        lat:{
            type:Number,
            
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function name(password ) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;