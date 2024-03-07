const app = require('./app');
const dotenv = require('dotenv')
const result = dotenv.config();
if (result.error) {
    console.error('Error loading .env file:', result.error);
}

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is working on ${port}`);
})