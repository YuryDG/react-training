import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      // Query: {
      //   fields: {
      //     Post: {
      //       read: (existing, { toReference, args }) => {
      //         const postRef = toReference({
      //           __typename: 'Post',
      //           id: args ? args.id : ''
      //         });

      //         console.log({ existing, args, postRef });

      //         return existing ?? postRef;
      //       }
      //     }
      //   }
      // },
      Post: {
        fields: {
          titleAndViews: {
            read: (a, b) => {
              const v = b.variables;
              const title = b.readField('title');
              const views = b.readField('views');
              return `${title} - ${views}`;
            }
          }
        }
      }
    }
  })
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
