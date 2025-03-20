export default [
  {
    method: 'GET',
    path: '/api/demo',
    handler: 'api::demo.demo.index',
    config: {
      auth: false,
    },
  },
];
