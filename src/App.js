import './App.css';

function App() {
  const title="베토벤";
  const img = "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven#/media/File:Beethoven.jpg"
  return (
    <div className="App">
      <h2>{title}</h2>
      <img src= "https://www.bl.uk/britishlibrary/~/media/bl/global/dm%20music%201800%20to%201900/people%20pages/beethoven.jpg?crop=1&cropX=199&cropY=10&cropW=1757&cropH=989&cropcachekey=1199101757989&w=608&h=342&dispW=608&dispH=342&hash=E60BE143CD5A8CBF17206815B42EDAD8"
        alt={title}
      />
    </div>
  );
}

export default App;
