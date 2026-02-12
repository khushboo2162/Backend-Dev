// const express=require('express');
// const app=express();


// app.get('/',(req,res)=> {
//     res.send("Hello World");
// });
// app.get('/userdetail',(req,res)=> {
//     let user={
//         name:"Deepak",
//         age:22,
//         city:"Mathura"
//     }
//     res.json(user);
//     });
// app.listen(3000,()=> {
//     console.log("server is running");
    
// });
// const express = require('express');
// const app = express();
// const users=require('./data.js');
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/home', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });

// app.get('/users', (req, res) => {
//     res.status(200).json(users);
// });

// app.get('/userabove25', (req, res) => {
//     const above25 = users.filter(user => user.age > 25);
//     res.status(200).json(above25);
// });


// app.listen(port, () => {
//     console.log('Server is running on http://localhost:3000');
// });



const express = require('express');
const app = express();
const users = require('./data.js');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/age/above25', (req, res) => {
    const result = users.filter(u => u.age > 25);
    res.json(result);
});


app.get('/users/mr', (req, res) => {
    const result = users.map(u => ({
        ...u,
        name: `Mr. ${u.name}`
    }));
    res.json(result);
});


app.get('/users/gender', (req, res) => {
    const type = req.query.type; // male / female
    let result = users;
    if (type) {
        result = users.filter(u => u.gender === type);
    }
    result = result.map(u => ({
        ...u,
        name: `${u.gender === 'male' ? 'Mr.' : 'Ms.'} ${u.name}`
    }));
    res.json(result);
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});
app.get('/username', (req, res) => {
    let modificationuserData = users.map((ele) => {
        if(ele.gender === "male"){
            return "Mr. " + ele.name;
        }else if(ele.gender === "female"){
            return "Ms. " + ele.name;
        }   
    });
    res.json(modificationuserData);
});
app.get("/user/:id" , (req,res)=>{
    const id=parseInt(req.params.id);
    let user=userData.find((ele)=>ele.id==id);
    res.json(user);
   
})

app.get("/user/page",(req,res)=>{

    const pagesize=req.query.page;
    const limit=req.query.limit;
    res.json(
        {user}
    )
})

let userInfo={
    username:"admin",
    password:"jkrfk"
}
const {username, password}=userInfo;
let arr=[1,2,3,4,5];
 const[a,b,c]=arr;
 


app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
}); 




