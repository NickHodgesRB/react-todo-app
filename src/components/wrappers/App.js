import React, {Component} from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';
import { Provider, ErrorBoundary } from '@rollbar/react'; // <-- Provider imports 'rollbar' for us

const rollbarConfig = {
  accessToken: "6979fe095a41411d934f02ebace6d7a3",
  captureUncaught: true,
  ignoreDuplicateErrors: false,

  environment: "production",
  // server: {
  //   root: "http://localhost",
  //   branch: "master"
  //   },
    code_version: "0.13.7",
    person: {
      id: 117,
      email: "chief@unsc.gov",
      username: "john-halo"
    }
  };

class App extends Component {
    render() {
        return (
          <Provider config={rollbarConfig}> 
            <ErrorBoundary>
              <StateProvider>
                  <KeyStrokeHandler>
                      <TodoList/>
                  </KeyStrokeHandler>
              </StateProvider>
            </ErrorBoundary>
          </Provider>  
        );
    }
}



export default App;
