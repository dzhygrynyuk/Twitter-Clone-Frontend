import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('http://localhost:5000/tweets').then(({ data }) => data);
    },
}