const express = require('express');
const app = express();

app.get('/' , (req,res) => {
    res.send('kya bolte bantai!');
})
app.get('/about' , (req,res) => {
    res.send('About us!');
})
app.get('/contact' , (req,res) => {
    res.send('Contact Us!');
})
app.get('/login' , (req,res) => {
    res.send('login karlo friends!');
})




app.listen(3000 , () => {
    console.log("listning at 3000");
});