// function User(){
//     return(
//         <div>
//            <h1>Prince Kumar</h1>
//         </div>
//     )
// }
// export default User;

// let User= User1

function User({user}){
    
    return(
        <div>
            {/* <h1>User Component1</h1>  */}
            <hr/>
            <h2>Name : {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email : {user.email}</h2>

            {/* <h1>User Component2</h1> 
            <h2>Name : {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email : {user.email}</h2> */}
        </div>
    )
}

export default User;