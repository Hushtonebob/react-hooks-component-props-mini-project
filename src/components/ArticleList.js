import react from "react"
import Article from "./Article"
import blogData from "../data/blog"
 
const postsArr = blogData.posts

function ArticleList(props){
    return (
<main>    
    {postsArr.map((props)=>{return(<Article key={props.id} title={props.title}preview={props.preview} />)})}
</main>
    )
}

export default ArticleList