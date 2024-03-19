import { Task } from '../types/task';
import { Status } from '../types/status';

export const tasks: Task[] = [
  {
    id: 0,
    title: 'Купить продукты',
    status: Status.Common,
  },
  {
    id: 1,
    title: 'Сделать домашку',
    status: Status.Important,
  },
  {
    id: 2,
    title: 'Покормить кота',
    status: Status.Completed,
  },
];
