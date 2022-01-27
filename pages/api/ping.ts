import { apiHandler } from '../../common/api/handler';

export default apiHandler({
  handler: {
    DEFAULT: async () => {
      return 'pong';
    },
  },
});