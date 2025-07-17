import type { ITweet } from "../../shared/types/tweet.interface"
import Link from "next/link"
import {PAGES} from '@/config/pages.config'


interface Props {
    tweet: ITweet
}

export function Tweet ({tweet} : Props )  {
    return <div> 
        <p>{tweet.text}</p>
        <Link href={PAGES.PROFILE(tweet.author)}>@{tweet.author}</Link>
    </div>
}