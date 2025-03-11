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
           <footer>
                 <Link href="https://www.github.com/SahilSuman1011/Promptopia"> Made by Sahil Suman with 🧡</Link>
                </footer>
          <main className="app">
            <Nav />
            {children}
          </main>
          
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;