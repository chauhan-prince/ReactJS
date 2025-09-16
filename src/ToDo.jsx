export function ToDo(){
    return(
        <div>
            <h2>Prince Kumar todos</h2>

            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicsum.photos%2F&psig=AOvVaw38NUgyOEWDT9uT1JLDabnH&ust=1758100872146000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiuhaL63I8DFQAAAAAdAAAAABAE"
            alt="prince"
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