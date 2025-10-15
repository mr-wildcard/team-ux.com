import { XMLParser } from "fast-xml-parser";

const { PREVIEW_URL } = process.env;

const rootSitemapURL = `${PREVIEW_URL}/sitemap-index.xml`;

console.info(`✅ Using preview URL: ${rootSitemapURL}`);

function getSnapshotName(websiteURL) {
  const url = new URL(websiteURL);

  return url.pathname === "/" ? "homepage" : url.pathname.replaceAll("/", "");
}

async function getWebsiteURLs() {
  const xmlParser = new XMLParser();

  const request = await fetch(rootSitemapURL);
  const response = await request.text();

  const rootSitemap = xmlParser.parse(response);

  const sitemapURLs = [];

  if (Array.isArray(rootSitemap.sitemapindex.sitemap)) {
    for (const { loc } of rootSitemap.sitemapindex.sitemap) {
      sitemapURLs.push(loc);
    }
  } else {
    sitemapURLs.push(rootSitemap.sitemapindex.sitemap.loc);
  }

  const websiteURLs = await Promise.all(
    sitemapURLs.map(async (sitemapURL) => {
      const request = await fetch(sitemapURL);
      const response = await request.text();

      const sitemapXML = xmlParser.parse(response);

      return sitemapXML.urlset.url.map(({ loc }) => loc);
    }),
  );

  return websiteURLs.flat();
}

export default async function getPercySnapshotsConfig() {
  try {
    const websiteURLs = await getWebsiteURLs();

    websiteURLs.push(`${PREVIEW_URL}/not-found-page`);

    const basicSnapshotConfig = {
      enableJavaScript: true,
      async execute() {
        document
          .querySelectorAll("summary")
          .forEach((summary) => summary.click());

        await new Promise((resolve) => {
          window.addEventListener(
            "scrollend",
            function () {
              resolve();
            },
            {
              once: true,
            },
          );

          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        });
      },
    };

    const snapshots = websiteURLs.map((websiteURL) => {
      return {
        ...basicSnapshotConfig,
        name: getSnapshotName(websiteURL),
        url: websiteURL,
        widths: [1512, 640],
      };
    });

    const mobileMenuElement = "header#header";
    const mobileMenuOpener = "#menu-opener";

    const mobileMenuSnapshots = websiteURLs.map((websiteURL) => {
      return {
        ...basicSnapshotConfig,
        name: `${getSnapshotName(websiteURL)} - mobile menu opened`,
        url: websiteURL,
        widths: [640],
        scope: mobileMenuElement,
        execute: `
          document.querySelector("${mobileMenuOpener}").click();
        `,
      };
    });

    return [...snapshots, ...mobileMenuSnapshots];
  } catch (error) {
    console.error(error);
  }
}

await getPercySnapshotsConfig();
