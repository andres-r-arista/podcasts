import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

  });

  test("filters the podcasts when typing in the filter bar", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector('[data-testid="filter-bar"]')
    await page.type('input[data-testid="filter-bar-input"]', 'podcast');
    await page.waitForTimeout(2000);
    await page.$('[data-testid="podcast-card"]');
    await page.type('input[data-testid="filter-bar-input"]', 'doesnotexist');
    await page.waitForTimeout(2000);
  });

  test("navigates correctly throughout the app", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector('[data-testid="podcast-card-box"]');
    await page.click('[data-testid="podcast-card-box"]');
    await page.waitForSelector('[data-testid="episodes-list-title"]');
    await page.waitForTimeout(2000);
    await page.click('[data-testid="episodes-list-title"]');
    await page.waitForTimeout(2000);
    await page.waitForSelector('[data-testid="podcast-sidebar-image"]');
    await page.click('[data-testid="podcast-sidebar-image"]');
    await page.waitForTimeout(2000);
    await page.waitForSelector('[data-testid="episodes-list-title"]');
    await page.click('[data-testid="episodes-list-title"]');
    await page.waitForTimeout(2000);
    await page.waitForSelector('[data-testid="podcast-sidebar-box"]');
    await page.click('[data-testid="podcast-sidebar-box"]');
    await page.waitForTimeout(2000);
    await page.waitForSelector('[data-testid="title"]');
    await page.click('[data-testid="title"]');
    await page.waitForTimeout(2000);
  });

  afterAll(() => browser.close());
});