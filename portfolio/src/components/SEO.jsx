import { useEffect } from "react";

const DEFAULT_TITLE = "Saood Khan | Portfolio";
const DEFAULT_DESCRIPTION =
  "Saood Khan is a software developer building modern, performant, and accessible web experiences.";

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = "/og-image.svg",
}) {
  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://saoodkhan.com";
    const canonicalUrl = `${origin}/`;
    const pageTitle = title.includes("Saood") ? title : `${title} | Saood Khan`;

    const setMeta = (attr, value, type = "name") => {
      const element = document.querySelector(`meta[${type}="${attr}"]`);
      if (element) {
        element.setAttribute("content", value);
        return;
      }

      const meta = document.createElement("meta");
      meta.setAttribute(type, attr);
      meta.setAttribute("content", value);
      document.head.appendChild(meta);
    };

    document.title = pageTitle;
    setMeta("description", description);
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", `${origin}${image}`, "property");
    setMeta("og:site_name", "Saood Khan", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${origin}${image}`);
    setMeta("robots", "index,follow");
    setMeta("theme-color", "#0f172a");

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    const existingSchema = document.getElementById("app-schema");
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Saood Khan",
      jobTitle: "Software Developer",
      url: canonicalUrl,
      email: "saoodk96911@gmail.com",
      sameAs: [
        "https://github.com/ERSaood",
        "https://linkedin.com/in/saood-saood",
      ],
      description,
    };

    if (existingSchema) {
      existingSchema.textContent = JSON.stringify(schemaMarkup);
    } else {
      const script = document.createElement("script");
      script.id = "app-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }
  }, [title, description, image]);

  return null;
}

export default SEO;
