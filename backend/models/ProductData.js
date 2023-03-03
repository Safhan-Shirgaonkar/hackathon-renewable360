const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductDataSchema = new Schema({

  type_of_source:{
    type:String,
    required:true
  },

  service_location:{
    type:String,
    required:true
  },

  subsidy_scheme:{
    type:String,
    required:true
  },

  subsidy_percentage:{
    type:Number,
    required:true
  }
  
});

// Create the user model using the UserSchema schema
ProductDataModel = mongoose.model('product_data', ProductDataSchema);

// Export the model so it can be used in other parts of the application
module.exports = ProductDataModel;