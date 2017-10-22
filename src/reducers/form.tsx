import SAVE_FORM_DATA from '../helper';

export interface CreateFormState {
  questionGroup: QuestionGroup[];
}

interface QuestionGroup {
  anwserAleternativ: AnwserAleternativ[];
}

interface AnwserAleternativ {
  alternativs: string[];
}

const initialState: CreateFormState = {
  questionGroup: [],
};

function form(state: CreateFormState = initialState, action: any) {
  switch (action.type) {
    case SAVE_FORM_DATA:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}

export default form;
