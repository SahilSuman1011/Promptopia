import Feed from '../components/Feed';
import Link from 'next/link';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

// Add security headers
export const headers = {
  'Content-Security-Policy': "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  'X-Frame-Options': 'DENY',
};

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">  
      <h1 className="head_text text-center">
        Discover & Share 
        <br className="max-md:hidden"/>
        <span className="orange_gradient"> AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
      </p>

      {/* Create Prompt button: visible only on mobile devices */}
      <div className="sm:hidden mt-4">
        <Link 
          href="/create-prompt" 
          className="px-4 py-2 bg-primary-orange text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          Create Prompt
        </Link>
      </div>

      <Feed />
      
      <footer className="mt-8 text-center text-sm">
        <Link 
          href="https://www.linkedin.com/in/sahilsuman11/"
          className="hover:text-primary-orange transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Made by <span className="text-primary-orange font-medium">Sahil Suman</span> with 🧡
        </Link>
      </footer>
    </section>
  );
};

export default Home;