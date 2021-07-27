const { Schema, model } = require("mongoose");
const jobSchema = new Schema({
    jobType: String,
    //////////////////////////////////descomentar mas adelante
    // file: {
    //     name: String,
    //     size: Number/* seguir añadiedo */
    // },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    // receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: ['rechazada', 'pendiente de aprobación', 'En proceso', 'En espera', 'Terminado', 'En envio']//TODO
    },
    description: String,
    //messages: [{ type: Schema.Types.ObjectId, ref: 'RequestMessage' }],
    deliveryAdress: {} //objeto con calle pais cp etc


},
    {
        timestamps: true
    }
);
const Job = model("Job", jobSchema);
module.exports = Job;