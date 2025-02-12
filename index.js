const express =require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname,'public')));

app.get('/profile',(req,res)=>{
    res.render('index');
})
app.get('/', (req,res,next)=>{
    res.send('hello world');
    
})



app.listen(3000);