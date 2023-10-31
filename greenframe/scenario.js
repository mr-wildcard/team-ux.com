async (page) => {
  await page.goto("", { waitUntil: "networkidle" });
  await page.scrollToElement("#projects-teasing");
  await page.waitForNetworkIdle();

  await page.click("#link-to-projects");
  await page.waitForNetworkIdle();

  await page.click(
    "ul.large-projects li:nth-child(1) details.testimonials summary",
  );
  await page.click("ul.large-projects li:nth-child(1) details.gallery summary");
  await page.waitForNetworkIdle();

  await page.click("ul.small-projects");
  await page.waitForNetworkIdle();

  await page.click("header a[href='#contact']");
  await page.click("button[data-text-to-copy='hello@team-ux.com']");
};
