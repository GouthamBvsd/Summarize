import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="Sumz_logo" className='w-28 object-contain' />
        <button type='button'
        onClick={() => window.open('https://github.com/GouthamBvsd')}
        className='black_btn'
        >Github</button>
      </nav>
      <h1 className="head_text">Summarize Articles with <br className='max-md:hidden'/>
      <span className='orange_gradient'> OpenAI GPT-4
      </span>
      </h1>
      <h2 className="desc">
      Introducing our AI Article Summarizer: Your Shortcut to Concise Insights. Say goodbye to information overload and hello to efficient, time-saving reading with our AI Article Summarizer, Summize. 
      </h2>
    </header>
  )
}

export default Hero