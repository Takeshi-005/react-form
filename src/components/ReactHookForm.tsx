import React from 'react';
import { useForm } from 'react-hook-form'
import Input from './input';
import { initialState, FormName } from '../reducer';


const ReactHookForm:React.FC = () => {
  console.log("render ReactHookForm");
  const { register, watch } = useForm<FormName>();
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

export default ReactHookForm;