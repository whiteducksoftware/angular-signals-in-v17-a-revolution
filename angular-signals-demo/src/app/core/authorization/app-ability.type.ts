import { MongoAbility } from '@casl/ability';
import { Actions } from './actions.constant';
import { Subjects } from './subjects.constant';

export type AppAbility = MongoAbility<[Actions, Subjects]>;
