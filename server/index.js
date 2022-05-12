
const express = require('express');
const cors = require('cors');
const app = express();
const { json } = require('express');
app.use(cors())

var server = app.listen(process.env.PORT || 1000 , function () {
  console.log('Server is running..');
  });

//===========================================================================================================================================================================================================================================================>

app.get('/getshape/:Type', function (req, res) {

  console.log(req.params.Type);

  var shapes = [
  {Type:'Circle',x:70 ,y: 70,radius: 50,fill: 'lightblue',stroke: 'black',strokeWidth: 4,StageWidth:200,StageHeight:200},
  {Type:'Rectangle',x:70,y:70,width:100,height:50,fill:'#FF8C00',stroke: 'black',strokeWidth: 4,StageWidth:200,StageHeight:200},
  {Type:'Triangle',x:120,y:200,sides: 3, radius: 100,scaleY: 1.2,fill:'#7CFC00',strokeWidth: 4,StageWidth:300,StageHeight:300}
]

  var result = shapes.find(ob => ob.Type === req.params.Type);

  console.log(result);
  res.send(result)

})      
//===========================================================================================================================================================================================================================================================>
