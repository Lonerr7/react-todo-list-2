import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TaskInput from './components/Main/TaskInput/TaskInput';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <TaskInput />
        </Container>
      </Main>
    </div>
  );
};

export default App;
