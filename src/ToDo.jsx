export function ToDo(){
    return(
        <div>
            <h2>Katherine Johnson todos</h2>

            <img src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
            class="photo" 
            />
            <ul>
                <li>Invent new Traffic lights</li>
                <li>Rehease  a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={() => alert("function called")}>click</button>
        </div>
    )
}