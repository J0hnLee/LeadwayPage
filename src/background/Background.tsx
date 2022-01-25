import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color}  xl:bg-gray-100`}>{props.children}</div>
);

export { Background };
