const { Schema, model } = require("mongoose");
const messageSchema = new Schema({

    sender: { type: Schema.Types.ObjectId, ref: 'User' }, //ref: User.sender del Request model??
    receiver: { type: Schema.Types.ObjectId, ref: 'User' }, //ref: User.receiver del Request model??
    requestid: { type: Schema.Types.ObjectId, ref: 'Request' },
    content: String

},
    {
        timestamps: true
    }
);


const RequestMessage = model("RequestMessage", messageSchema);
module.exports = RequestMessage;