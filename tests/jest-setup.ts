//jest运行在node,由于 Node.js 环境并没有 localStorage,所以mock掉
//1、jest.config配置： setupFiles: ['./tests/jest-setup.ts'],
//2、testEnvironment: "jsdom", //全局会自动拥有完整的浏览器标准 API。

// Object.defineProperty(global, 'localStorage', {
//     value: {
//       store: {} as Record<string, string>,
//       setItem(key: string, value: string) {
//         this.store[key] = value;
//       },
//       getItem(key: string, value: string) {
//         return this.store[key];
//       },
//       removeItem(key: string) {
//         delete this.store[key];
//       },
//       clear() {
//         this.store = {}
//       }
//     }
//   })

/**
 * mock 打印
 */
// jest.spyOn(console, 'log').mockReturnValue();
// jest.spyOn(console, 'info').mockReturnValue();
// jest.spyOn(console, 'warn').mockReturnValue();
// jest.spyOn(console, 'error').mockReturnValue();
