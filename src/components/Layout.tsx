/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal">
        <Header />
        <div>{children}</div>
      </body>
    </>
  );
};

export default Layout;
