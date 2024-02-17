import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { CardsList } from './shared/CardsList/CardsList';
import { Content } from './shared/Content/Content';
import { Header } from './shared/Header/Header';
import { Layout } from './shared/Layout/Layout';  
//import { PostContextProvider } from './shared/Context/postContext';
//import { PostCommentsContextProvider } from './shared/Context/postCommentsContext';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';
import { saveTokenThunk } from './store/me/actions';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Post } from './shared/Post/Post';
import { PostCommentsBlock } from './shared/PostCommentsBlock/PostCommentsBlock';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  useEffect(() => {
    store.dispatch<any>(saveTokenThunk());
  });
  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
        
              <Layout>
                <Header />
                <Content>

                  <Switch>

                    <Route path="/posts" component={CardsList} />

                    <Route path="/auth" component={() => <Redirect to="/posts" />} />

                    <Route exact path="/" component={() => <Redirect to="/posts" />} />

                    <Route component={() =>
                      <div style={{ textAlign: "center" }}>404 — страница не найдена</div>} />

                  </Switch>

                  <Route path="/posts/post/:id" >
                    <Post />
                  </Route>

                  <Route path="/posts/comment/:id" >
                    <PostCommentsBlock />
                  </Route>

                </Content>
              </Layout>
          
        </BrowserRouter>
      )}
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);
