import express from 'express';

const app = express();
const PORT = 3001;

app.get('/healthcheck', (req, res) => {
    res.status(200).send({'status': 'OK'});
});

app.listen(PORT, () =>{
    console.log(`Server running at: http://localhost:${PORT}`);
})