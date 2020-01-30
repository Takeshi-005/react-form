import React, { useReducer }from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'
import { formReducer, initialState, State, FormName } from './reducer';
import Input from './components/input';

const App: React.FC<{className?:string}> = props => {
  const [state, dispatch] = useReducer(formReducer, {
    values:initialState
  });
  const { register, handleSubmit, errors, clearError, watch, setValue }
    = useForm<State>();
  return <>
    <div className={props.className}>
      useReducerを使用したフォーム
      <div className="form">
        名前：
        <Input
          name="name"
          value={state.values.name}
          dispatch={dispatch}
        />
        </div>
      <div className="form">
        ふりがな：
        <Input
          name="kana"
          value={state.values.kana}
          dispatch={dispatch}
        />
        </div>
      <div className="form">
        電話番号：
        <Input
          name="tel"
          value={state.values.tel}
          dispatch={dispatch}
        />
        </div>
      <div className="form">
        メールアドレス：
        <Input
          name="email"
          value={state.values.email}
          dispatch={dispatch}
        />
        </div>
      <div className="form">
        住所：
        <Input
          name="address"
          value={state.values.address}
          dispatch={dispatch}
        />
        </div>
        <div>
          値：
          {
            Object.keys(state.values)
            .map((key) => <li key={key}>{key}: {state.values[key as keyof FormName]}</li>)
          }
        </div>
    </div>
    <div className={props.className}>
      react-hook-formを使用
      <div className="form">
        名前：
        <Input
          name="name"
          refs={register()}
        />
        </div>
      <div className="form">
        ふりがな：
        <Input
          name="kana"
          refs={register()}
        />
        </div>
      <div className="form">
        電話番号：
        <Input
          name="tel"
          refs={register()}
        />
        </div>
      <div className="form">
        メールアドレス：
        <Input
          name="email"
          refs={register()}
        />
        </div>
      <div className="form">
        住所：
        <Input
          name="address"
          refs={register()}
        />
        </div>
        <div>
          値：
          {
            Object.keys(initialState)
            .map((key) => <li key={key}>{key}: {watch(key)}</li>)
          }
        </div>
    </div>
  </>
}

export default styled(App)`
  width: 800px;
  margin: 0 auto;
  > .form {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

`
