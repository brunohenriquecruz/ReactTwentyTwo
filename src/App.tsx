import { useState } from "react";
import { Tweet } from "./components/Tweet";

import './App.css';
import { AppRoutes } from "./Routes";

export default function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet(){
    setTweets([...tweets, 'Tweet 5'])
  }

  return(
    <AppRoutes/>
    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text= {tweet} />
    //   })}

    //   <button 
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: '#8257e6',
    //       border: 0,
    //       padding: '6px 12px',
    //       color:  '#FFF',
    //       margin: '12px 0px '
    //     }}
    //   >
    //     Adicionar tweet
    //   </button>
    // </div>
  );
}
