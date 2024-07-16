const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("wait connecting to the database")

    mongoose.connect("mongodb+srv://rootnew:tarugo@breakingnews.caohnvd.mongodb.net/?retryWrites=true&w=majority&appName=BreakingNews",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log
    (error))

};




module.exports = connectDatabase