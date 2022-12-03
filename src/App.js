import logo from './logo.svg';
import Login from './components/Login/Login';
import Books from './components/BookList/Books';
import AddBook from './components/AddBook/AddBook';
import BooksView from './components/BookView/BooksView';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
  
      <Routes>
      <Route path='/' exact element={<Login />}></Route>
      <Route path='/books' element={<Books />}></Route>
      <Route path='/add' element={<AddBook />}></Route>
      <Route path='/view' element={<BooksView />}></Route>
      </Routes>
     
    
    </div>
  );
}

export default App;
