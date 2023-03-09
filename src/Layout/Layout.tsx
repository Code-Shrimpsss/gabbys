import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LazyMotion features={domAnimation} >
        <m.main initial='initial' animate='enter' exit='exit' >
          {children}
        </m.main>
      </LazyMotion>
    </>
  );
};

export default Layout;
