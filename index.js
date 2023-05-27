const express = require(`express`);
const mongoose= require(`mongoose`)
const app = express();
const port = 4001



app.use(express.json())
app.use(require(`./routes/categories.route.js`))
app.use(require(`./routes/news.route.js`))
app.use(require('./routes/comments.route.js'))


async function startServerAndBase (){
    try {
        await app.listen(4000);
        await mongoose.connect(`mongodb+srv://abubakar:abk1234@cluster0.qxkuuhm.mongodb.net/News`);
    console.log(`СЕРВЕР ЗАПУЩЕН`);
    }
    catch (error) {
        console.log(error);
    }
}
startServerAndBase()