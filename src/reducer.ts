export type FormName = {
  name: string;
  kana: string;
  tel: string;
  email: string;
  address: string;
  year?: string;
}

export const initialState:FormName = {
  name: "",
  kana: "",
  tel: "",
  email: "",
  address: ""
}

export type Action =
| {
  type: "change",
  name: keyof FormName,
  value: string
}
| {
  type: "clear"
}

export type  Name = keyof FormName;

export type State = {
  values: FormName
}

export const formReducer = (state:State, action: Action) => {
  switch (action.type) {
    case "change": {
      const newValues = {...state.values}
      newValues[action.name] = action.value;
      return {
        ...state,
        values: newValues
      }
    }
    case "clear": {
      return {
        values: initialState
      }
    }
    default:
      return {
        ...state
      }
  }
}
