import React, { useReducer }from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'
import { formReducer, initialState, FormName } from './reducer';
import Input from './components/input';
import { GlobalStyle } from './globalStyle'


const ReducetrForm:React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
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

const ReactHookForm:React.FC = () => {
    const { register, watch }
    = useForm<FormName>();
  return <>
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
  </>
}

const ReactHookValidForm:React.FC = () => {
  const { register, handleSubmit, errors, clearError, watch, setValue } = useForm<FormName>();
  const ERROR_TEXT = {
    required: "入力してください",
    kana: "ひらがなで入力してください",
    tel: "正しい形式で入力してください"
  }
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })
  return <>
    react-hook-formを使用
    <form onSubmit={onSubmit}>
      <div className="form">
        名前：
        <Input
          name="name"
          refs={register({
            required: ERROR_TEXT.required
          })}
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>
      <div className="form">
        ふりがな：
        <Input
          name="kana"
          refs={register({
            required: ERROR_TEXT.required,
            pattern: {
              value: /^[ぁ-んー　]+$/,
              message: ERROR_TEXT.kana
            }
          })}
        />
        {errors.kana && <p className="error-text">{errors.kana.message}</p>}
        </div>
      <div className="form">
        電話番号：
        <Input
          name="tel"
          refs={register({
            required: ERROR_TEXT.required,
            pattern: {
              value: /\d{9}/,
              message:ERROR_TEXT.tel
            }
          })}
        />
        {errors.tel && <p className="error-text">{errors.tel.message}</p>}
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
        <input type="submit" value="送信する"/>
      </form>
  </>
}


const App: React.FC<{className?:string}> = props => {
  return <>
    <div className={props.className}>
      <ReducetrForm />
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

    .error-text {
      color: #f00;
    }
  }

`
