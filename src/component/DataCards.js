import React from 'react'
import { useNavigate } from 'react-router-dom';

const Datacards = (props) => {
  let { title, desc, point, time } = props;
  console.log("Ds")
  const navigate = useNavigate();

  const attempQuiz = () => {
    navigate("/TakeQuiz/DataCards/AttempQuiz", { state: { Q: `Quizes/${title}/Ques`, T:time } })

  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Point System-{point}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Time Limit-{time}</h6>
          <p className="card-text">Description-{desc}</p>
          <button type="button" className="btn btn-primary" onClick={attempQuiz}>Attemp Quiz</button>
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </div>)
}

export default Datacards
