import react from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//writing the javascript code below
let hour=new Date(2023,12,2,20);
hour=hour.getHours();
let greet;
const cssStyle={};
if(hour >=1 && hour<=11){
  greet="Good Morning";
  cssStyle.color="green";
}else if(hour>=12 && hour<=19){
  greet="Good Afternoon";
  cssStyle.color="orange";
}else{
  greet="Good Night";
  cssStyle.color="blue";
}


ReactDOM.render(
  <>
  <div>
      <h1>Hello Sir ! <span style={cssStyle}> {greet} </span>. </h1>
  </div>
  </>,
  document.getElementById("root")
);
