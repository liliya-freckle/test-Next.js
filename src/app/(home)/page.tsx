import { TWEETS } from '../shared/data/tweets.data';
import {Tweet} from './Tweet'

export default function Home() {
  return (
    <div>
      {TWEETS.map (tweet => (
        <Tweet 
        key = {tweet.author}
        tweet={tweet}/>
      )) }
  </div>
  );
}
