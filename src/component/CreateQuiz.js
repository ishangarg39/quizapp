import React, { useEffect, useState } from 'react'
import { db } from '../backend/FirebaseConfig'
import { doc, collection, setDoc, addDoc, getDoc } from 'firebase/firestore'
import Ques from './Ques';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useNavigate } from 'react-router-dom/dist';


export default function CeateQuiz(props) {
  var count = 1;
  const [QuizName, setQuizName] = useState("");
  const [TimeLimit, setTimeLimit] = useState("");
  const [Description, setDescription] = useState("");
  const [PointSystem, setPointSystem] = useState("");
  const [De, setDe] = useState(false);
  var userCollectionRef;
  const navigate = useNavigate();
  const quizDetails = async () => {

    if (QuizName && TimeLimit && PointSystem && Description) {
      userCollectionRef = doc(db, "Quizes", `${QuizName}`);
      console.log(`${QuizName}`);
      const u = doc(db, "Quizes", `${QuizName}`)
      var QName = await getDoc(u);
      if (QName.exists()) { alert("Enter different Quiz Name") }
      else {
        await setDoc(userCollectionRef, {
          Quiz_Name: QuizName, Time_limit: TimeLimit, Point_System: PointSystem,
          Description: Description
        });
        count = count + 1
        setDe(true)
        setQuizName(""); setTimeLimit(""); setPointSystem(""); setDescription("");
        console.log(De);
        navigate("/CreateQuiz/Ques", { state: { Q:`Quizes/${QuizName}/Ques`}})

      }
    }
    else {
      alert("Fill all Details")
    }
  }
  return (
    <div>
      <h1>Create Quiz</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Quiz Name</span>
        <input type="text" className="form-control" placeholder="Quiz Name" aria-label="Username" value={QuizName} aria-describedby="basic-addon1"
          onChange={(event) => { setQuizName(event.target.value) }} />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Time Limit</span>
        <input type="number" className="form-control" placeholder="Minutes" aria-label="Username" value={TimeLimit} aria-describedby="basic-addon1" onChange={(event) => { setTimeLimit(event.target.value) }} />
      </div>



      <div className="input-group mb-3">
        <span className="input-group-text">Grading/Points System</span>
        <textarea type="text" className="form-control" aria-label="With textarea" value={PointSystem}
          onChange={(event) => { setPointSystem(event.target.value) }}></textarea>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Description </span>
        <textarea type="text" className="form-control" aria-label="With textarea" value={Description}
          onChange={(event) => { setDescription(event.target.value) }}></textarea>
      </div>

      <button className="btn btn-primary" type="button" onClick={quizDetails} to="/Create_Quiz/Ques">Save Details</button>

      {/* {De === true && <navigate to={{pathname:"/CreateQuiz/Ques" , state:{hi:"1"}}}/>} */}
    </div>



  )
}
