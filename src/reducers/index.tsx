import { combineReducers } from 'redux';
import form, { CreateFormState } from './form';

export interface FormState {
  form: CreateFormState;
}

const Reducer = combineReducers({
  form,
});

export default Reducer;
