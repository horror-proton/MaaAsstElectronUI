const schema = {
  type: 'object',
  properties: {
    enable: { type: 'boolean' },
    proxy: { type: 'string' },
  },
  required: ['enable'],
  additionalProperties: false,
};

export default schema;

export type Type = {
  enable: boolean;
  proxy?: string;
};