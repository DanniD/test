import { takeEvery } from 'redux-saga/effects';
import SAVE_FORM_DATA from '../helper';

function getFormData(action: any) {}

function* saga() {
  yield takeEvery(SAVE_FORM_DATA, getFormData);
}

export default saga;
