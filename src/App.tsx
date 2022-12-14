import { useEffect } from 'react';
import './App.scss';
import Container from './components/common/Container/Container';
import ErrorPopups from './components/common/ErrorPopup/ErrorPopups';
import Header from './components/Header/Header';
import Controls from './components/Main/Controls/Controls';
import DeletePopup from './components/Main/DeletePopup/DeletePopup';
import Main from './components/Main/Main';
import TaskInputContainer from './components/Main/TaskInput/TaskInputContainer';
import Tasks from './components/Main/Tasks/Tasks';
import { useAppSelector } from './hooks/hooks';

const App = () => {
  const { isDeletePopupOpen } = useAppSelector((state) => state.popup);
  const theme = useAppSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    // eslint-disable-next-line
  }, []);

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
          {/* {isErrorPopupOpen ? <ErrorPopups /> : <></>} */}
          <ErrorPopups />
        </Container>
      </Main>
    </>
  );
};

export default App;
