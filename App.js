import ReactDOM from "react-dom/client"
import "/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Headers = () => {
    return(
        <div className = "container">
            <img className="logo" src ="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" />
            <input type = "text" placeholder="Search Bar" className = "search-box"/>
            <img className="user-icon" src ="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" />
        </div>
    )
}

root.render(<Headers />)



