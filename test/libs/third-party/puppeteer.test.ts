import puppeteer from 'puppeteer';
import {
  getScreenshot,
} from '../../../src/libs/third-party/puppeteer';
import path from 'node:path';
import { existsSync, mkdirSync, rmSync } from 'node:fs';

const testData = {
  viewport: {
    width: 1280,
    height: 720,
  },
  tempDir: './test/temp/',
  screenShortFileName: 'screenshot.png',
  url: 'https://example.com',
}

describe('puppeteer library', () => {
  test('is get screenshort', async () => {
    const pathToScreenShot = path.join(process.cwd(), testData.tempDir, testData.screenShortFileName);
    const tempDir = path.join(process.cwd(), testData.tempDir);
    if (!existsSync(tempDir)) {
      mkdirSync(tempDir);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(testData.url);
    await getScreenshot(page, testData.viewport, pathToScreenShot);
    await browser.close();
    expect(existsSync(pathToScreenShot)).toBe(true);
    rmSync(pathToScreenShot);
  });
});
