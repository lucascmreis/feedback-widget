import {useState} from 'react'
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
 
export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image:{
      source: bugImageUrl,
      alt: 'imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image:{
      source: ideaImageUrl,
      alt: 'imagem de uma lampada',
    }
  },
  OTHER: {
    title: 'Outro',
    image:{
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento',
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType}/>
      ): (
        <h1>hello</h1>
      )}
      <footer className="text-xs text-neutral-400" >
        Made with ♥ by <a href="https://github.com/lucascmreis">Lucas Reis</a>
      </footer>
    </div>
  )
}