import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './components/containers/Layout';
import rootPath, { routes } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path={rootPath} element={<Layout />}>
        {
          routes.map(x =>
            <>
              {x.component && <Route path={x.path} element={x.component} />}
              {x.nested && x.nested.map(x => <Route path={x.path} element={x.component} />)}
            </>
          )
        }
        {/* <Route path={rootPath} element={<HomePage />} /> */}
        {/* <Route path={`${rootPath}/lab5table`} element={<Lab5Table />} /> */}
      </Route>
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
}

export default App;
