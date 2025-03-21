export default {
  routes: [
    {
      method: 'GET',
      path: '/demo',
      handler: 'foo.index',
      config: {
        auth: false,
      },
    },
  ],
};
