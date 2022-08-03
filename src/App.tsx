import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Controls from './components/Main/Controls/Controls';
import Main from './components/Main/Main';
import TaskInput from './components/Main/TaskInput/TaskInput';
import Tasks from './components/Main/Tasks/Tasks';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <TaskInput />
          <Controls />
          <Tasks />
        </Container>
      </Main>
    </div>
  );
};

export default App;
