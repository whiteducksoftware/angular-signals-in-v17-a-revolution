export type Actions = typeof ACTIONS[keyof typeof ACTIONS];

export const ACTIONS = {
  MANAGE: 'manage',
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;
