import Feed from '../components/Feed';

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
       <Link 
              href="/create-prompt" 
              className="px-4 py-2 bg-primary-orange text-white rounded-full shadow-lg"
            >
              Create Prompt
            </Link>

      <Feed/>
    </section>
  );
};

export default Home;