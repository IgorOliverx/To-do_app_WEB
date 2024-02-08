const mongoose = require('mongoose');

module.exports = async()=>{
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology:true
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
            );
            console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log("Não foi possível conectar", error);
        
    }
}