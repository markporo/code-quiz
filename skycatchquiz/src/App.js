import './App.scss';
import LineHeader from './components/LineHeader';
import LineFooter from './components/LineFooter';
import SCFImages from './components/SCFImages'

function App() {
  return (
    <div className='App'>
      <LineHeader />
      <SCFImages />
      <LineFooter />
    </div>
  );
}

export default App;
