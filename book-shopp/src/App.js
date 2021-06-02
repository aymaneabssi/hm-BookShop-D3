import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBookList from './components/FilterBookList';

function App() {
  return (
    <div>
      <WarningSign text='This is coming from props' />
      <MyBadge text='prop Badge' color='success' />
      <div className='mb-5'>
        <FilterBookList />
      </div>
    </div>
  );
}

export default App;
