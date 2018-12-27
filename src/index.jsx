import { BrowserRouter } from 'react-router-dom';
import { render }        from 'react-dom';

import          './styles/index.scss';
import App from './components/App';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);