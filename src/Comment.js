import {useState} from "react";
function Comment(){
    let [author,setAuthor] = useState("");
    let [title,setTitle] = useState("");
    let [body,setBody] = useState("");

    function addComment(event){
        event.preventDefault();
        let formTag=event.target;
        let author=formTag.author.value;
        let title=formTag.title.value;
        let body=formTag.body.value;
        setAuthor(author);
        setTitle(title);
        setBody(body);
    }
    return (
        <div>
            <form onSubmit={addComment}>
                <div>Author Name: {author}</div><br/>
                <div>Comment Title : {title}</div><br/>
                <div>Comment Body : {body}</div><br/>
                <br/>
                <input type="text" name="author" placeholder="Enter a Author Name" />
                <br/>
                <input type="text" name="title" placeholder="Enter a Comment Titile" />
                <br/>
                <input type="text" name="body" placeholder="Enter a Commnet Body" />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Comment;