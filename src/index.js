import ReactDOM from 'react-dom/client';
// import { Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App/></BrowserRouter>);
