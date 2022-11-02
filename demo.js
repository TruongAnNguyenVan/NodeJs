const express = require("express");
const app = express();
const PORT = process.env.PORT||5000;

var ls = [
  {
    id: 1,
    name: "Nguyễn Hoàng Nam",
    age: 18
  },
  {
    id: 2,
    name: "Thái Sơn",
    age:18
  }
];

app.listen(PORT,function (){
  console.log("Sever is running.....");
});

app.get("/demo",function (req,res){
  res.send("Hello World!");
});

app.get("/get-data",function (req,res){
  res.send(ls);
});

app.get("/detail",function (req,res){
  var paramId = req.query.id;
  var data;
  for (let i = 0; i < ls.length; i++) {
    if(ls[i].id==paramId){
      data = ls[i];
      break;
    }
  }
  res.send(data);
});

app.get("/edit",function (req,res){
  var paramId = req.query.id;
  var paramName = req.query.name;
  var paramAge = req.query.age;
  for (let i = 0; i < ls.length; i++) {
    if(ls[i].id==paramId){
      ls[i].name = paramName;
      ls[i].age = paramAge;
      break;
    }
  }
  res.send("done");
});

const configDB = {
  host: "139.180.186.20",
  port: 3306,
  database: "T2207E",
  password: "T2207E123",
  multipleStatements: true
};

const mysql = require




