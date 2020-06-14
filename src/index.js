import React from 'react'
import ReactDOM from 'react-dom';
// import Form from './components/Form';
// import MouseTracker from './components/MouseTracker';
// import MouseTracker2 from './components/MouseTracker2';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import {Provider} from './react-redux'
import store from './store';

ReactDOM.render(<Provider store={store}>
    <Counter/><Counter2/>
</Provider>,document.getElementById('root'))