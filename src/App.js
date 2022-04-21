import Details from './Details';
import './App.css'
function App() {
  const User= [{ company: ' TCS'}, {company:'CTS'}, {company:'Tring apps'}];
  const name="Companies";
  return (
    <div className="App">   
          <h1>React JS</h1>;
          <h3>{name}</h3>;
          <Details print = {User}/> 
    </div>
    );
}

export default App;
