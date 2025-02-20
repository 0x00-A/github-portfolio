import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "0x00-a", // TODO: Add a custom title
  description = "I'm a passionate software developer who loves building things for the web.", // TODO: Add a custom description
  image = "/thumbnail.png", // TODO: Add a custom image
  icons = "/avatar.svg", // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@chrislonzo",
    },
    icons,
    metadataBase: new URL("https://www.chrislonzo.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
