import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './globalStyle'

import ReducerForm from './components/ReducerForm';
import ReactHookForm from './components/ReactHookForm';
import ReactHookValidForm from './components/ReactHookValidForm';


const App: React.FC<{className?:string}> = props => {
  return <>
    <div className={props.className}>
      <ReducerForm />
    </div>
    <div className={props.className}>
      <ReactHookForm />
    </div>
    <div className={props.className}>
      <ReactHookValidForm />
    </div>
    <GlobalStyle/>
  </>
}

export default styled(App)`
  max-width: 980px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  & + & {
    margin-top: 16px;
  }
  .form {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

`
