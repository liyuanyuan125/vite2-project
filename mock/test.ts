import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/get",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "vben",
          id: query.id,
          age: query.age,
        },
      };
    },
  },
] as MockMethod[];
