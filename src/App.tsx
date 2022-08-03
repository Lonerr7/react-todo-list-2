import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Controls from './components/Main/Controls/Controls';
import DeletePopup from './components/Main/DeletePopup/DeletePopup';
import Main from './components/Main/Main';
import TaskInput from './components/Main/TaskInput/TaskInput';
import Tasks from './components/Main/Tasks/Tasks';
import { useAppSelector } from './hooks/hooks';

const App = () => {
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpen);

  return (
    <>
      <Header />
      <Main>
        <Container>
          {isPopupOpen ? (
            <DeletePopup />
          ) : (
            <>
              <TaskInput />
              <Controls />
              <Tasks />
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

export default App;
