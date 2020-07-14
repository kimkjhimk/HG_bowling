import React from 'react';
import RoleType from '../types/RoleType';

interface FrameHeaderProps {
  rolls?: RoleType[];
}

const FrameHeader = ({ rolls }: FrameHeaderProps) => {
  if (rolls && rolls.length > 0) {
    return <>{rolls.map((roll) => roll.letter).join(' ')}</>;
  }
  return null;
};

export default FrameHeader;
