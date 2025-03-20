export default {
  async index(ctx, _next) {
    ctx.body = { data: { message: 'Hello World' } };
  },
};
