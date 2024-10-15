// Imports
import express from 'express';
import bodyParser from 'body-parser';
import monsterRoutes from './routes/monsterRoutes.mjs'

// Initialize
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.get('/', (req, res)=>{
    res.send(`Home Route`)
})

app.use('/monsters', monsterRoutes)

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening at port: ${PORT}`);
});
