import { MyContainer } from '~/container';

export const helper = () => {
  const container = new MyContainer('helper');

  container.print();
};

