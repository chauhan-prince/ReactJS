// import Header from "./Header"
// import { ToDo } from "./TODO";
// import Login,{Profile,Setting, Userkey} from "./UserComponent"
// import { createElement } from "react";

// const Fruit=(name)=>{
//   alert(name);
// }

// function Apple(){
//   const uname = "Prince Kumar";
//   const userobj={
//     name:"prince",
//     email:"abc@test.com",
//     age:20
//   }
//   const userArray = ["sam", "prince","joly","bruce"];
// //   // alert(sum())
// //   let x = 20;
// //   let y = 30;

// const Fruit=(name)=>{
//   alert(name);
// }

//    return(
// //     <div>
// //       <Header />
// //       <h2>Hello world</h2>
// //       <Login />
// //       <Profile />
// //       <Setting />
// //       <Fruit></Fruit>
// //       <Color />
// //       <h3>{Userkey}</h3>
// //       <h2>Code step by step</h2>
// //       <h2>My name is {userName}</h2>
// //       <h2>{10+20+30}</h2>
// //       <h2>{x+y}</h2> 
// //       <button onClick={() => alert("Hello")}> Click</button>

// //     </div>
//     <div>
//       {/* <h1>Jsx with curly Braces</h1>
//       <h1>{uname}</h1>
//       <h1>{name?name:"User not found"}</h1>
//       <h1>{Fruit()}</h1>
//       <h2>{sum(10,100)}</h2>
//       <h2>{userobj.email}</h2>
//       <h2>{userArray[1]}</h2> */}
//       <button onClick={()=>Fruit("Apple")}>Apple</button>
//     </div>

//    )


// }
// function sum(a,b){
//   return a+b;
// }
// // function Fruit(){
// //   return(
// //     <h2>Apple</h2>
// //   )
// // }

// // function Color(){
// //   return(
// //     <h1>Red Color</h1>
// //   )
// // }

// // function sum(){
// //   return 10+10
// // }
// export default Apple


// Using State for Reactjs

// import { useState } from "react";
// import Counter from "./Counter";

// function App(){
//    // const fruit = "Apple";
//    // const handleFruit=()=>{          // Not work without state
//    //   fruit="Banana"; 
//    // }
//   const [fruit,setfruit]=useState("Apple");
//   const handleFruit=()=>{
//     setfruit("Banana");
//   }
//   return(
//     <div>
//       <h1>State in React js</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//       <Counter />
//     </div>
//   )
// }

// export default App;




// // Toggle Show And hide
// import { useState } from "react";
// import User from "./User";



// function App(){
//   const [display, setDisplay]=useState(false);
//   return(
//       <>
//       <h1>Toggle in React js</h1>

//       {/* {
//         display ? <h1>Prince Kumar</h1>:<h1>No user name </h1>
//       } */}

//       {
//         display ? <User/>:<h1>No user name </h1>
//       } 

//       <button onClick={()=>setDisplay(!display)}>Toggle ReactJS</button>

//       </>
//   )
// }

// export default App;


// Multiple Condition in ReactJs
// import { useState } from "react";

// function App(){
//   const [count,setCount]=useState(0);

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>counter</button>
//       {
//         count==0?<h1>Condition 0</h1>
//         : count==1?<h1>Condtition 1</h1>
//         : count==2?<h1>Condition 2</h1>
//         : count==3?<h1>Condition 3</h1>
//         : count==4?<h1>Condition 4</h1>
//         : count==5?<h1>Condition 5</h1>
//         : <h1>Other condition</h1>
//       }
//     </div>
   
//   )
// }

// export default App;

// Props in ReactJS
import { useState } from "react";
import User from "./User";

function App(){
  // let userName="prince Kumar";
  // let Age=20;
  // let Email="abc@gmail.com"
   let userObject1 = {
      name:"Prince Kumar",
      age:20,
      email:"abc@gmail.com"
   }
      let userObject2 = {
      name:"Ram ",
      age:18,
      email:"xyz@gmail.com"
   }
  return(
    <div>
      <h1>Props in ReactJS</h1>
       {/* <User name="prince Kumar" age={20} email="abc@gmail.com" /> */}
       {/* <User name={userName} age={Age} email={Email} /> */}
       <User user={userObject1}/>
       <User user={userObject2}/>
    </div>
  )
}
export default App; 
