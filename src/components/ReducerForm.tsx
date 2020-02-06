import React from 'react'
import Input from './input';
import { formReducer, initialState, FormName } from '../reducer';


const ReducerForm:React.FC = () => {
  console.log("ReducetrForm render");

  const [state, dispatch] = React.useReducer(formReducer, {
    values:initialState
  });
  return<>
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
  </>
}

export default ReducerForm;