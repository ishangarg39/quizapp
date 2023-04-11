import React, { useEffect, useState } from 'react'
import { db } from '../backend/FirebaseConfig';
import { doc, collection, setDoc, addDoc, getDocs, query, where, getDoc, getCountFromServer } from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom';


export default function AttempQuiz() {
  // var count = 1
  const location = useLocation();

  const q = query(collection(db, `${location.state.Q}`));

  const [P, setP] = useState("");
  const [C, setC] = useState("");
  const [W1, setW1] = useState("");
  const [W2, setW2] = useState("");
  const [W3, setW3] = useState("");
  const [Data, setData] = useState([]);
  const [Loaded, setLoaded] = useState(false);
const [counter,setCounter]=useState(location.state.T*60);
const [QueryCount,setQueryCount]=useState(0);
const [Count,setCount]=useState(1);
const [cans,setcans]=useState(0);
const [Check1,setCheck1]=useState(false);
const [Check2,setCheck2]=useState(false);
const [Check3,setCheck3]=useState(false);
const [Check4,setCheck4]=useState(false);

  // var cans=0;
  const tempData = [];var snapshot;
  const getData = async () => {

    const a = await getDocs(q);

    setData(a);
    snapshot= await getCountFromServer(q);
      setQueryCount(snapshot.data().count);
    console.log('count: ', QueryCount);
    a.forEach((doc) => {

      tempData.push({
        ...doc.data(), //spread operator
        key: doc.id, // `id` given to us by Firebase
      });

       console.log(doc.id, " => ", doc.data().Prompt);
    });

    setData(tempData)
    setLoaded(true)
    console.log(tempData[Count].Prompt)
    setP(tempData[0].Prompt)
    setC(tempData[0].CorrectAns)
    setW1(tempData[0].Wrong1)
    setW2(tempData[0].Wrong2)
    setW3(tempData[0].Wrong3)

  }
  // console.log('count:11 ', QueryCount);

const  handleNext=() => {
   if(QueryCount>Count){setCount(Count+1)
    setCheck1(false)
    setCheck2(false)
    setCheck3(false)
    setCheck4(false)

  console.log("count21 "+Count)}
    else{ calculate()}
   console.log (  QueryCount)
handelData()

  }

  const handelData=()=>{
    setP(Data[Count].Prompt)
    setC(Data[Count].CorrectAns)
    setW1(Data[Count].Wrong1)
    setW2(Data[Count].Wrong2)
    setW3(Data[Count].Wrong3)
    setCheck1(false)
    setCheck2(false)
    setCheck3(false)
    setCheck4(false)
        console.log(P+"fds"+Count)

  }
const navigate=useNavigate()

  const calculate=()=>{
  navigate("/Result", {replace:true, state: { Q: `${cans} out of ${QueryCount}` } })
  }

  useEffect(() => {
    if(Loaded===false){
      setLoaded(true)
      console.log("api")
    getData();}
    if(Loaded===true){
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter===0){
      calculate()
    }
  }
  },);
 const getData1=()=>
 {
  console.log("fsdaasfdfdsaf")
 }
  return (
    <div>
      <div className='container mx-3'>

      <h2 className="my-3 ">Timer-{counter} Seconds</h2>
            <h1 className="my-3 mx-3 float-center " >Prompt-{P}</h1>

      </div>
      <div className="container  " >
                        <div className="row">
                        <div className="form-check">
  <input className="form-check-input float-none" checked={Check1}  onClick={()=>{setcans(cans+1) ;setCheck1(true)}} style={{float:"center"}}type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
{C
}  </label>
</div>
                        </div>

                        <div className="row">
                        <div className="form-check">
  <input className="form-check-input float-none" checked={Check2}  onClick={()=>{setCheck2(true)}} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
{W1}  </label>
</div>
                        </div>

                        <div className="row">
                        <div className="form-check">
  <input className="form-check-input float-none" checked={Check3}  onClick={()=>{setCheck3(true)}} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
{W2}  </label>
</div>
                        </div>

                        <div className="row">
                        <div className="form-check">
  <input className="form-check-input float-none" checked={Check4}  onClick={()=>{setCheck4(true)}} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
{W3}  </label>
</div>
      </div>
                    </div>
      <button type="button" className="btn btn-primary" onClick={handleNext}>Next </button>
    </div>
  )
}
