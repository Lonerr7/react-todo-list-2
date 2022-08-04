import './App.scss';
import Container from './components/common/Container/Container';
import ErrorPopup from './components/common/ErrorPopup/ErrorPopup';
import Header from './components/Header/Header';
import Controls from './components/Main/Controls/Controls';
import DeletePopup from './components/Main/DeletePopup/DeletePopup';
import Main from './components/Main/Main';
import TaskInputContainer from './components/Main/TaskInput/TaskInputContainer';
import Tasks from './components/Main/Tasks/Tasks';
import { useAppSelector } from './hooks/hooks';

const App = () => {
  const { isDeletePopupOpen, isErrorPopupOpen } = useAppSelector(
    (state) => state.popup
  );

  return (
    <>
      <Header />
      <Main>
        <Container>
          {isDeletePopupOpen ? (
            <DeletePopup />
          ) : (
            <>
              <TaskInputContainer />
              <Controls />
              <Tasks />
            </>
          )}
          {isErrorPopupOpen ? <ErrorPopup /> : <></>}
        </Container>
      </Main>
    </>
  );
};

export default App;
