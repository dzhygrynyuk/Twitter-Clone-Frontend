import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

// Interfaces

export interface SetTweetsActionInterface extends Action{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action{
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

// Actions

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
});

export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface;