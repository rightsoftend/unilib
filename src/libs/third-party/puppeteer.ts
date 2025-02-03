import puppeteer, { Page } from 'puppeteer';

export type TViewPort = { width: number; height: number; }

export const getScreenshot = async (page: Page, viewport: TViewPort, path: string) => {
  await page.setViewport(viewport);
  await page.screenshot({ path });
}