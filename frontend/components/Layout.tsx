import { Navbar } from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto pt-24 pt pl-8 pr-8 pb-8 md:pt-24 md:pl-10 md:pr-10 md:pb-10 lg:pt-28 lg:pl-12 lg:pr-12 lg:pb-12">
        {children}
      </main>
    </>
  );
};

export default Layout;
