import React from "react";
import { useForm } from 'react-hook-form'
import Input from './input';
import { initialState, FormName } from '../reducer';
import styled from 'styled-components';
import { STYLE_COLOR } from "../const";

const ReactHookValidForm:React.FC<{className?:string}> = React.memo(props => {
  const { register, handleSubmit, errors, reset, watch, setValue } = useForm<FormName>();
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
    <form onSubmit={onSubmit} className={props.className}>
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
        <input type="reset" value="reset"/>
      </form>
  </>
})

export default styled(ReactHookValidForm)`
  .error-text {
    color: ${STYLE_COLOR.error};
  }
`;