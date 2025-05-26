import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';
import Todo from './myComponents/TodoItem';

function App() {

  let todos = [
    {
      SNo : 1,
      title : "Go to market",
      desc : "You need to go to the market to get this job done."
    },
    {
      SNo : 1,
      title : "Go to mall",
      desc : "You need to go to the mall to get this job done."
    },
    {
      SNo : 1,
      title : "Go to ghat",
      desc : "You need to go to the ghat to get this job done."
    }
  ]

  return (
    <>
      <Header title="My Todo's List" searchBar = {false} />
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
