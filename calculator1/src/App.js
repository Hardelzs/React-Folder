
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='play'>
        <div className='main'></div>
        <div className='main1'></div>
        <div className='main2'></div>
        <div className='main3'></div>
        <div className='main4'></div>
        <div className='main5'></div>
      </div>

      <div className='mart'>
        <fieldset>
          <form>
            <div>
              <label>Firstname*</label>
              <input className="" placeholder="Name"/>  
            </div>
            <div>
              <label>Last Name*</label>
              <input className="" placeholder="Name"/>  
            </div>
            <div>
              <label>Enter Email*</label>
              <input className="" placeholder="Name"/>  
            </div>
            <div>
              <label>Contact*</label>
              <input className="" placeholder="Name"/>  
            </div>
          </form>
        </fieldset>
      </div>

    </div>
  );
}

export default App;
