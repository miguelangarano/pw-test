import { expect, test } from "@playwright/test";

test.describe("Tests Group", () => {
  test(
    "basic test @tagA @newTag",
    {
      annotation: [
        {
          type: "owner",
          description: "miguelangarano",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
        {
          type: "owner",
          description: "luislukas2222",
        },
      ],
    },
    async ({ page }) => {
      await page.goto("https://todomvc.com/examples/react/dist/");

      // Use locators to represent a selector and re-use them
      const inputBox = page.locator("input.new-todo");
      const todoList = page.locator(".todo-list");

      await inputBox.fill("Learn Playwright");
      await inputBox.press("Enter");
      await expect(todoList).toHaveText("Learn Playwright");
      expect(true).toBe(false);
    }
  );

  // test(
  //   "basic test with annotation @tagA",
  //   {
  //     annotation: {
  //       type: "owner",
  //       description: "angelonisrael",
  //     },
  //   },
  //   async ({ page }) => {
  //     test
  //       .info()
  //       .annotations.push({ type: "customAnnotation", description: "tagA" });

  //     await page.goto("https://todomvc.com/examples/react/dist/");

  //     // Use locators to represent a selector and re-use them
  //     const inputBox = page.locator("input.new-todo");
  //     const todoList = page.locator(".todo-list");

  //     await inputBox.fill("Learn Playwright");
  //     await inputBox.press("Enter");
  //     await expect(todoList).toHaveText("Learn Playwright");
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 1",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 2",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 3",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 4",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 5",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 6",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 7",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 8",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 9",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 10",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 11",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 12",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 13",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 14",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 15",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 16",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 17",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 18",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 19",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 20",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 21",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 22",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 23",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 24",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 25",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 26",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 27",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 28",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );

  // test(
  //   "basic failure test 29",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );
  // test(
  //   "basic failure test 30",
  //   {
  //     annotation: [
  //       {
  //         type: "owner",
  //         description: "miguelangarano",
  //       },
  //       {
  //         type: "owner",
  //         description: "luislukas2222",
  //       },
  //     ],
  //   },
  //   async () => {
  //     expect(true).toBe(false);
  //   }
  // );
});
