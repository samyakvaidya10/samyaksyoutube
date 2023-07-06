
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
