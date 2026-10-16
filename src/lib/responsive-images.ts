import manifest from "./responsive-images.generated.json";

type ResponsiveImageEntry = {
  width: number;
  height: number;
  srcSet: string;
};

const responsiveImages = manifest as Record<string, ResponsiveImageEntry>;

/** Return responsive attributes only when the generated asset manifest proves candidates exist. */
export function responsiveImageAttributes(src: string, sizes?: string) {
  const image = responsiveImages[src];
  if (!image?.srcSet) return {};
  return {
    srcSet: image.srcSet,
    ...(sizes ? { sizes } : {}),
  };
}

export function responsiveImageDimensions(src: string) {
  const image = responsiveImages[src];
  return image ? { width: image.width, height: image.height } : undefined;
}
