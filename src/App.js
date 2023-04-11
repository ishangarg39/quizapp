import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import CreateQuiz from './component/CreateQuiz';
import TakeQuiz from './component/TakeQuiz';
import Ques from './component/Ques';
import AttempQuiz from './component/AttempQuiz';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Result from './component/Result';

function App() {
  return (
    <div className="App">
     <Router>
          <NavBar />
          
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/CreateQuiz" element={<CreateQuiz />}></Route>
            <Route exact path="/TakeQuiz" element={<TakeQuiz />}></Route>
            <Route exact path="/CreateQuiz/Ques" element={<Ques />}></Route>
            <Route exact path="/TakeQuiz/DataCards/AttempQuiz" element={<AttempQuiz />}></Route>
            <Route exact path="/Result" element={<Result />}></Route>

          </Routes>
        </Router>
    </div>
  );
}

export default App;
