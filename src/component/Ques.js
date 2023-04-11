import React, { useEffect, useState } from 'react'
import { db } from '../backend/FirebaseConfig'
import { doc, collection, document, setDoc, addDoc, getDoc } from 'firebase/firestore'
import { useLocation,useNavigate } from 'react-router-dom';

export default function Ques() {
  // var count = 1
  var max = 1
  var flag=1;
  const [Prompt, setPrompt] = useState("");
  const [CorrectAns, setCorrectAns] = useState("");
  const [Wrong1, setWrong1] = useState("");
  const [Wrong2, setWrong2] = useState("");
  const [Wrong3, setWrong3] = useState("");
  const [count, setcount] = useState(0);

  const a = useLocation();
  var userCollectionRef;
  const DataEntry = async () => {
    if (Prompt && CorrectAns && Wrong1 && Wrong2 && Wrong3) {
console.log("i"+a.state.Q)
      userCollectionRef = doc(db, `${a.state.Q}`, `Ques${count}`);
      var QName = await getDoc(userCollectionRef);
      await setDoc(userCollectionRef, {
        Prompt: Prompt, CorrectAns: CorrectAns, Wrong1: Wrong1, Wrong2: Wrong2, Wrong3: Wrong3

      });
      setPrompt(""); setCorrectAns(""); setWrong1(""); setWrong2(""); setWrong3("")
      console.log("val")
      if(flag===0)navigate("/TakeQuiz", { replace:true});

    }
    else {      
      console.log("eyt")

       alert("Enter all values") 
      }
    console.log(`Ques${count}`)
  }

  const handleNext = () => {
    setcount(count + 1);
    max = count
    DataEntry();
  }
  const navigate = useNavigate();

  const createQuiz = () => {
    flag=0;
    setcount (count+ 1);

    DataEntry();


  }
  const handlePrev = () => {
    count -= 1;
    DataEntry();
  }
  return (
    <div>
      <h1>Question-{count+1}</h1>
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Prompt</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={Prompt} aria-describedby="basic-addon1"
            onChange={(event) => { setPrompt(event.target.value) }} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Correct Option</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={CorrectAns} aria-describedby="basic-addon1"
            onChange={(event) => { setCorrectAns(event.target.value) }} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Wrong Option 1</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={Wrong1} aria-describedby="basic-addon1"
            onChange={(event) => { setWrong1(event.target.value) }} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">wrong Option 2</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={Wrong2} aria-describedby="basic-addon1"
            onChange={(event) => { setWrong2(event.target.value) }} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Wrong Option 3</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={Wrong3} aria-describedby="basic-addon1"
            onChange={(event) => { setWrong3(event.target.value) }} />
        </div>

        {/* <button disabled={count === 1} type="button" className="btn btn-dark mx-3" onClick={handlePrev}>&larr;Previous</button>   */}
              <button type="button" className="btn btn-dark mx-3" onClick={createQuiz}>Create Quiz</button>

        <button type="button" className="btn btn-dark mx-3" onClick={handleNext}>Add Ques</button>
      </div>

    </div>
  )
}
