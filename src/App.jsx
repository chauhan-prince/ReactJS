import Header from "./Header"
import { ToDo } from "./TODO";
import Login,{Profile,Setting, Userkey} from "./UserComponent"
import { createElement } from "react";

const Fruit=(name)=>{
  alert(name);
}

function Apple(){
  const uname = "Prince Kumar";
  const userobj={
    name:"prince",
    email:"abc@test.com",
    age:20
  }
  const userArray = ["sam", "prince","joly","bruce"];
//   // alert(sum())
//   let x = 20;
//   let y = 30;

const Fruit=(name)=>{
  alert(name);
}

   return(
//     <div>
//       <Header />
//       <h2>Hello world</h2>
//       <Login />
//       <Profile />
//       <Setting />
//       <Fruit></Fruit>
//       <Color />
//       <h3>{Userkey}</h3>
//       <h2>Code step by step</h2>
//       <h2>My name is {userName}</h2>
//       <h2>{10+20+30}</h2>
//       <h2>{x+y}</h2> 
//       <button onClick={() => alert("Hello")}> Click</button>

//     </div>
    <div>
      {/* <h1>Jsx with curly Braces</h1>
      <h1>{uname}</h1>
      <h1>{name?name:"User not found"}</h1>
      <h1>{Fruit()}</h1>
      <h2>{sum(10,100)}</h2>
      <h2>{userobj.email}</h2>
      <h2>{userArray[1]}</h2> */}
      <button onClick={()=>Fruit("Apple")}>Apple</button>
    </div>

   )


}
function sum(a,b){
  return a+b;
}
// function Fruit(){
//   return(
//     <h2>Apple</h2>
//   )
// }

// function Color(){
//   return(
//     <h1>Red Color</h1>
//   )
// }

// function sum(){
//   return 10+10
// }
export default Apple