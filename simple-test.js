const { chromium } = require('playwright');

console.log("🚀 Starting translation test...");

(async () => {
  // 1. Launch the browser
  const browser = await chromium.launch({ 
    headless: false,  // Shows the browser
    slowMo: 100       // Slows down so you can see what's happening
  });

  // 2. Create a new page (like a new tab)
  const page = await browser.newPage();
  
  console.log("🌐 Opening website...");
  
  // 3. Go to the translation website
  await page.goto('https://www.swifttranslator.com/');
  
  console.log("✅ Website loaded");
  
  // 4. Wait for page to load
  await page.waitForTimeout(2000);
  
  // 5. Type a simple test sentence
  console.log("⌨️ Typing: 'mama gedhara yanavaa'");
  await page.fill('#singlishText', 'mama gedhara yanavaa');
  
  // 6. Wait for translation
  await page.waitForTimeout(3000);
  
  // 7. Get the translated text
  const translatedText = await page.textContent('#sinhalaText');
  console.log("📝 Translated text: " + translatedText);
  
  // 8. Take screenshot
  await page.screenshot({ path: 'my-first-test.png' });
  console.log("📸 Screenshot saved as 'my-first-test.png'");
  
  // 9. Close browser
  await browser.close();
  console.log("🎉 Test completed!");
  console.log("📁 Check 'my-first-test.png' to see the result");
})();