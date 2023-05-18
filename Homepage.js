import { onValue,ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import Showimage from "./Showimage";
import '../styling/homepage.css';

const Homepage = () => {

    const [todos, setTodos] = useState([]);
    const [status,setStatus] = useState(false);
    const [visitstatus,visitsetStatus] = useState(false);
    const [babystatus,babysetStatus] = useState(false);

    useEffect(() => {
        onValue(ref(db), snapshot => {
            setTodos([]);
            const data = snapshot.val();
            if(data != null){
                Object.values(data).map(todo => {
                    setTodos(oldArray => [...oldArray,todo]);
                    console.log(todo);
                    return todo;
                });
            }
        });
    }, []);

    return(
        <>
            {/* <h4>Homepage</h4> */}
            {
                todos.map(todo => (
                    <>
                        <div className="homepg">
                            <button onClick={() => 
                                setStatus(!status)} className="btnimage">
                                {status?"Hide Intruder Image":"Show Indruder Image"}
                            </button>
                            <button onClick={() => 
                                visitsetStatus(!visitstatus)} className="btnimageInt">
                                {visitstatus?"Hide Visitors Data":"Show Visitors Data"}
                            </button>
                            <button onClick={() => 
                                babysetStatus(!babystatus)} className="btnimageBaby">
                                {babystatus?"Hide Baby Health":"Show Baby Health"}
                            </button>
                        </div>
                                {
                                    status?<>
                                        <div className="container">
                                            <div className="contentclass">
                                                <Showimage/>
                                            </div>
                                        </div>
                                    </>:null
                                }
                                {
                                    babystatus?
                                    <>
                                        <div className="mcontainer">
                                            <div className="mcontentclass">
                                                <h3 className="mhead">Baby's Monitored Data</h3>
                                                <h4>Heart Beat - {todo.heartbeatspermin}/min</h4>
                                                <h4>Average Heart Beat Rate - {todo.avgbeat}/min</h4>                                           
                                                <h4>Humidity - {todo.humidity}</h4>
                                                <h4>Temperature - {todo.temperature} °C</h4>
                                            </div>
                                        </div>
                                    </>:null
                                }
                                {
                                    visitstatus?
                                    <>
                                    
                                        <div className="tcontainer">
                                            <div className="tcontentclass">
                                                <h3 className="thead">List of visitors </h3>
                                                <div className="table-container">
                                                    <table>
                                                        <thead>
                                                            <th>No.</th>
                                                            <th>Name</th>
                                                        </thead>
                                                        <tbody>
                                                            {todo.CSVData.Name.map((row,index) => {
                                                                return(
                                                                    <tr>
                                                                        <td>{index+1}</td>
                                                                        <td>{row}</td>
                                                                    </tr>
                                                                )
                                                                
                                                            })}
                                                            
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <thead>
                                                            <th>Time (In 24hrs Format)</th>
                                                        </thead>
                                                        <tbody>
                                                            {todo.CSVData.TimeZone.map((row,index) => {
                                                                return(
                                                                    <tr>
                                                                        <td>{row}</td>
                                                                    </tr>
                                                                )
                                                                
                                                            })}
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* <h4>Visit timings :- {todo.CSVData.TimeZone}</h4> */}
                                            </div>
                                        </div>
                                    </>:null
                                }
                    </>
                ))
            }
            
        </>
    );
};
export default Homepage;