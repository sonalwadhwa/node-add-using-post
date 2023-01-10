const exp=require('express');
const app=exp();
const path=require('path');
app.use(exp.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.get('/cars',(req,res)=>{
    res.render('cars',{cars});
});
app.get('/new/cars',(req,res)=>{
    res.render('new');
});
const cars=[
    {
        "model":"mustang",
        "hp":5000
    },
    {
        "model":"lambo",
        "hp":8000
        
    }
]
app.post('/cars',(req,res)=>
{
    const car1={
        ...req.body
    }
    console.log(req.body);
cars.push(car1);
res.redirect('/cars');
});
app.listen(3001,(req,res)=>
{
    console.log("connected");
});