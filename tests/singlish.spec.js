const { test, expect } = require('@playwright/test');

test('Convert simple Singlish sentence to Sinhala', async ({ page }) => {
  await page.goto('https://www.swi8fttranslator.com/');

  // Input textbox (has accessible name in snapshot)
  const input = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await input.fill('mama gedhara yanavaa');

  // Output is a plain text element under the Sinhala panel (NOT a textbox)
  const sinhalaPanel = page.locator('div', { hasText: 'Sinhala' }).first();
  const output = sinhalaPanel.locator('text=මම').first(); // wait condition (fast + reliable)

  await expect(output).toBeVisible({ timeout: 20000 });

  // Optional: assert the full output text if you want
  await expect(sinhalaPanel).toContainText('මම ගෙදර යනවා', { timeout: 20000 });
}); 