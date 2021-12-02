const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat.js");

const PizzaSchema = new Schema ({
        pizzaName: {
            type: String
        },
        createdBy: {
            type: String 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        size: {
            type: String,
            default: "Large" 
        },
        toppings: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of comments and replies on retrieval    // ** WHY IS THE COMMENT COUNT DIFFERENT DEPENDING ON LOOKING AT THE /API/COMMENT route vs. /API/PIZZA route??** BUT ALSO DISPLAYING CORRECTLY ON FRONTEND
PizzaSchema.virtual("commentCount").get(function() {
    return this.comments.length;
});



// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;