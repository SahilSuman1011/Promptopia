import "../styles/globals.css";
import Nav from "../components/Nav";
import Provider from "../components/Provider";
import Link from "next/link";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: [
      { url: '/assets/icons/favicon.ico' },
    ],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          
          <main className="app">
            <Nav />
            {children}
          </main>

          {/* Create Prompt button: visible only on mobile devices */}
          <div className="fixed bottom-4 right-4 sm:hidden">
            <Link 
              href="/create-prompt" 
              className="px-4 py-2 bg-primary-orange text-white rounded-full shadow-lg"
            >
              Create Prompt
            </Link>
          </div>
          
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;