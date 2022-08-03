import './App.scss';
import Container from './components/common/Container/Container';
import FlexRotator from './components/common/FlexRotator/FlexRotator';
import Header from './components/Header/Header';
import Controls from './components/Main/Controls/Controls';
import Main from './components/Main/Main';
import TaskInput from './components/Main/TaskInput/TaskInput';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <FlexRotator direction="column">
            <TaskInput />
            <Controls />
          </FlexRotator>
        </Container>
      </Main>
    </div>
  );
};

export default App;
