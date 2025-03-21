export default {
  async index(ctx, _next) {
    ctx.body = { data: { message: 'Hello World' } };
    console.log('Being a demo does not show diff changes');
  },
};
