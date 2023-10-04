export default function Head() {
  function addProductJsonLd() {
    return {
      __html: `{
            "@context": "http://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zeboot:Block Sexual Content",
            "url": "https://zeboot.net/",
            "applicationCategory": "EntertainmentApplication",
            "downloadUrl": "https://textcheckai.page.link/toapp",
            "operatingSystem": "iOS"
          }
      `,
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addProductJsonLd()}
        key="product-jsonld"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
