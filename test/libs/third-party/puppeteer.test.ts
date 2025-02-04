import puppeteer from 'puppeteer';
import {
  getScreenshot,
} from '../../../src/libs/third-party/puppeteer';
import path from 'node:path';
import { existsSync, rmSync } from 'node:fs';

const testData = {
  viewport: {
    width: 1280,
    height: 720,
  },
  screenShortFileName: './test/temp/screenshot.png',
  url: 'https://example.com',
}

describe('puppeteer library', () => {
  test('is get screenshort', async () => {
    const pathToScreenShort = path.join(process.cwd(), testData.screenShortFileName);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(testData.url);
    await getScreenshot(page, testData.viewport, pathToScreenShort);
    await browser.close();
    expect(existsSync(pathToScreenShort)).toBe(true);
    rmSync(pathToScreenShort);
  });
});
