import React, { useEffect, useState } from 'react'
import { doc, collection, setDoc, addDoc, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom/dist';
import { db } from '../backend/FirebaseConfig'
import Datacards from './DataCards';

export default function TakeQuiz() {
  const [Data, setData] = useState([])
  const [Loaded, setLoaded] = useState(false);
  var c=0;

  const q = query(collection(db, "Quizes"));
  const tempData = [];
  const getData = async () => {
    console.log("q")
    const a = await getDocs(q);
    // if(a.exists())console.log("gui");  setData(doc.data());
    setData(a);

    a.forEach((doc) => {
      console.log("dsma")
      tempData.push({
        ...doc.data(), //spread operator
        key: doc.id, // `id` given to us by Firebase
      });
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().Description);
    });
    setData(tempData)
    console.log(tempData)
  }
  useEffect(() => {
    
  if(Loaded===false){
    console.log(c+"s")

    setLoaded(true)
console.log(Loaded+"sad")
     getData();}
  

  },[Data]);
  return (


    <div>
      <h1>Take Quiz</h1>
      <div className="container my-3 " >
        <div className="row">
          {Loaded && Data.map((document,index) => {
console.log("asdfds")
            return (
              <div className="col-md-4 mb-4" key={index}>
                <Datacards title={document.Quiz_Name}
                  desc={document.Description}
                  point={document.Point_System}
                  time={document.Time_limit}
                />
              </div>)
          })}
        </div>
      </div>
      {/* <button type="button" className="btn btn-dark mx-3" onClick={dos}>Add Ques</button> */}


    </div>
  )
}
