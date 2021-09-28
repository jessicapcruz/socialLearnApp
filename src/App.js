import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Routes from './routes';
import store from './redux/store';
import MenuBar from './components/Menu/MenuBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MenuBar/>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
