import { takeEvery, call, put } from 'redux-saga/effects'
import { TweetsActionsType, setTweets, setTweetsLoadingState } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}