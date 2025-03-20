export default {
  routes: [
    {
      method: 'GET',
      path: '/demo',
      handler: 'demo.index',
      config: {
        auth: false,
      },
    },
  ],
};
