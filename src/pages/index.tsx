import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import {
//   GatsbyIcon,
//   TailwindIcon,
//   StyledComponentsIcon,
//   TypescriptIcon,
//   GithubIcon,
//   TwinIcon
// } from '../components';
import { Link } from 'gatsby';
import Theme from '../components/theme';
import Button from '../components/Button';
// import Button from '../components/Button';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;
//
// const Heading = tw.h1`
//   text-2xl text-gray-500 uppercase mt-5
// `;
//
// const Text = tw.p`
//   text-xl text-gray-700 my-4
// `;
//
// const Logos = styled.div`
//   ${tw`flex items-center justify-around`}
//   svg,
//   img {
//     width: 64px;
//   }
// `;
//
// const Footer = styled.footer`
//   ${tw`flex justify-center`}
//   svg {
//     width: 30px;
//     path {
//       &:hover {
//         fill: palevioletred;
//       }
//     }
//   }
// `;

const Index = () => {
  return (
    <Theme>
      <Wrapper>
        <Main>
          <div className="flex bg-gray-200">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <Link to="/home">
                <Button>코치용</Button>
              </Link>
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <Button>선수용</Button>
            </div>
          </div>
        </Main>
      </Wrapper>
    </Theme>
  );
};

export default Index;
