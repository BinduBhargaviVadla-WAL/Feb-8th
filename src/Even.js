import {useState} from "react";
function Even(){
    let [num,setNumber] = useState("");
    function isEven(event){
        event.preventDefault();
        let formTag=event.target;
        let inputTag=parseInt(formTag.number.value);
        if(inputTag % 2 == 0){
            setNumber(inputTag + " is Even");
        }
        else{
            console.log("odd");
        }
    }
    return (
        <div>
            <form onSubmit={isEven}>
                <h1>{num}</h1>
                <input type="text" name="number" placeholder="Enter a Number" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Even;