import { Fragment } from 'react';
import './App.css'
import HomeIndex from "./HomeIndex/index.jsx";
import Bg from './components/ui/Bg'

const App = () => {
    return (
        <Fragment>
            <Bg/>
            <HomeIndex></HomeIndex>
        </Fragment>
    );
};

export default App;