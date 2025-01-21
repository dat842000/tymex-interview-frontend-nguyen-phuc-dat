import React from 'react';

import ImgIcon from './ImgIcon';
import { IAuthor } from '../types/author';

type SelfProps = {
  author: IAuthor;
};

const Avatar = ({ author }: SelfProps) => {
  return (
    <div>
      <ImgIcon src={author.avatar} />
    </div>
  );
};
export default Avatar;
