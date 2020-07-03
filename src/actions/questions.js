import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js';

// we need to receive the questions from the database, add a question if the user is authorized, 
// and answer a question that is unanswered

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

// action creator, gets dispatched to the store to fetch the questions
export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}

// adds question to store
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

// takes in an object containing the question id, the authed user, and the answer
// updates the store at that question id
export function answerQuestion({ id, authedUser, answer }){
    return {
        type: ANSWER_QUESTION,
        id,
        authedUser,
        answer
    }
}

/*** The following are ASYNCHRONOUS ACTION CREATORS (THUNKS) for handling the API calls ***/

// take in question details from the form
export function handleAddQuestion(optionOne, optionTwo, authedUser){
    return (dispatch) => { // thunk automatically has access to the store's dispatch() and getState() methods

        // check the state to determine who the authorized user is
        const { authedUser } = getState();

        // edit API, then update the Redux store
        dispatch()
    }
}

export function handleAnswerQuestion( selectedAnswer ){

}