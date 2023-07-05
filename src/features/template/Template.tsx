import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  FloatPostBtn,
  Sidebar,
  Navbar,
  Footer,
  NewPostBox,
} from "../../components";


type TemplateProps = {
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({ children }) => {
  const [loader, setLoader] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    document.title =
      location.pathname === "/" ? "M&T" : location.pathname.slice(1);
  }, []);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 3000);
  }, [location.pathname]);

  return (
    <div>
      <div className="w-full">
        <Navbar />
        <div className="md:flex w-full flex-row relative">
          <Sidebar />
          {!loader && <NewPostBox />}
          <main className="w-full min-h-screen mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
            <Header path={location.pathname} />
            <div className="w-full flex flex-col items-center pb-36 md:pb-4 gap-4">
              {loader ? <div>Loading</div> : children}
            </div>
            <FloatPostBtn />
          </main>
          <div>Follow bar</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
