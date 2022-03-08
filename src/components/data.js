import react from "react";
import React, {useState, useEffect} from react;

const Data = () => {
    const[item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/todoapp/tododata.php")
        .then(res=> res.json())
        .then(
            (result)=>{
                console.log(result);
                setItem(result);
            }
        )
    }, [])
    return (
        <div>
            {
                item.map(item => (
                    <div key={item.todo_id}>
                        <div><input type="checkbox" /></div>
                        <div>
                            <p>
                                {item.todo_desc} <br />
                                {item.todo_date} <br />
                                {item.where_desc}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
                )
        }

        export default Data;
