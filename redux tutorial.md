# redux-demo

Demonstrates the creation and functionality of a basic React-Redux application.

## How To Run The Demo

- Navigate in terminal to the directory you want the `redux-demo` repo created in.

- Run: `git clone https://github.com/mpusch88/redux-demo`

- Navigate to the newly created directory: `cd <redux-demo>`

- Run: `npm run start`

- If browser window doesn't open automatically, navigate to <http://localhost:3000> to view.

## How to enable the Redux Devtools Chrome extension

- First, install the Redux DevTools extension from the Chrome Web Store:
  <https://bit.ly/2cH3cjd>

- If creating a new project instead of running the demo, run the following in a terminal
  from the root directory of your project: `npm i --save-dev redux-devtools-extension`

- Finally, the following code must be added to the relevant file (`store.js`) of the
  desired project:

```javascript
...

import { composeWithDevTools } from 'redux-devtools-extension';

...

const composeEnhancers = composeWithDevTools({});

...

return createStore(
  testReducer,
  composeEnhancers(
    applyMiddleware(thunk),
));

...
```

- To open the Redux DevTools either right click the desired page, or access via the Redux
  tab of the Chrome DevTools by pressing `Ctrl-Shift-I`.

## React-Redux App Setup Instructions

- Navigate in terminal to the directory you want your repo created in.

- Run: `npm i -g create-react-app`

- Run: `create-react-app <app_name>`

- Navigate to the newly created directory: `cd <app_name>`

- Install required dependancies by running: `npm i --save redux react-redux redux-thunk`

- Create the following folders inside your project's `src` folder:

      /actions
      /reducers
      /store

- Inside the actions folder, create the file: `testAction.js`

- Add the following to `testAction.js`:

```javascript
export const testAction = () => dispatch => {
  dispatch({
    type: 'TEST_ACTION',
    color: 'Green'
  })
}
```

- Inside the reducers folder, create the file: `testReducer.js`

- Add the following to `testReducer.js`:

```javascript
export default (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        color: action.color
      }

    default:
      return state
  }
}
```

- Inside the store folder, create the file: `testStore.js`

- Add the following to `testStore.js`:

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/testReducer';

export default function configureStore() {
  return createStore(testReducer,applyMiddleware(thunk));
}
```

- To access the store from the rest of the application, the store must be passed to the
  `Provider` component by making the following changes to `index.js`:

```javascript
...

import { Provider } from 'react-redux'
import configureStore from './store/testStore';

...

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

...
```

## React-Redux App Test Instructions

- Create the following folders inside your project's `src` folder:

      /components
      /styles

- Inside the `styles` folder, create the file: `test.css`

- Add the following to `test.css`:

```css
.test-container {
  background: #FFFFFFaa;
  border-color: #000000;
  border: inset;
}
```

- Inside the `components` folder, create the files: `Component1.js, Component2.js`

- Add the following to `Component1.js`:

```javascript
import React from 'react';
import '../styles/test.css'

class Component1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({color: 'Red'})
  }

  render() {
    return (
      <div className='test-container'>
        Container 1!
      </div>
    );
  }
}

export default Component1;
```

- Add the following to `Component2.js`:

```javascript
import React from 'react';
import '../styles/test.css'

class Component2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({color: 'Red'})
  }

  render() {
    return (
      <div className='test-container'>
        Container 2!
      </div>
    );
  }
}

export default Component2;
```

- Connect the Redux store to the desired test component(s)
  (`App.js, Component1.js, Component2.js`) by adding the following to each component:

```javascript
...

import { connect } from 'react-redux';

...

export default connect()(<componentName>);
```

- In order to test the store inside of the desired component(s) (`App.js, Component1.js, Component2.js`), an action must be imported, and the `mapStateToProps` function must be included in each component:

```javascript
...

import {testAction} from './actions/testAction'

...

testAction = () => {
 this.props.testAction();
}

const mapStateToProps = state => ({
  ...state
})

...

export default connect(mapStateToProps)(<componentName>);
```

- To give us something to interact with on the page, modify the following in
  `Component1.js` and `Component2.js`:

```html
<div className='test-container'>
  Container x!
  {JSON.stringify(this.props.color)}
  <button onClick={this.testAction}>Test!</button>
</div>
```

- dev-note: CHECK APP.JS AND INDEX.JS - ADD COMPONENTS TO APP
