import './App.css';
import Home from './componenets/Home';

function App() {
  return  <div classname ="App"> 
  <Home/> 
  </div>
}

export default App;


/*
function App () { // eslint-disable-next-line
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  
  }, [])

  return (
    <div className="App">
    </div>
  );
}
*/