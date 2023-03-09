type Add = {
  type: 'add';
  id: string;
  value: string;
};

type Remove = {
  type: 'remove';
  id: string;
};

type Multiply = {
  type: 'multiply';
  id: string;
  value: number;
};

type Action = Add | Remove | Multiply;

export type ExtractOneFromAction<T extends Action> = Extract<T, { type: T['type'] }>;

const add: ExtractOneFromAction<Add> = {
  type: 'add',
  id: '1',
  value: '2',
};
