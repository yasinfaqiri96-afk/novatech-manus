import { forwardRef, type ImgHTMLAttributes } from "react";
import { responsiveImageAttributes } from "@/lib/responsive-images";

type Src = string | { src: string };
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: Src;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
};

const Image = forwardRef<HTMLImageElement, Props>(function Image(
  {
    src,
    fill,
    priority,
    quality: _quality,
    placeholder: _placeholder,
    blurDataURL: _blurDataURL,
    unoptimized: _unoptimized,
    loader: _loader,
    style,
    loading,
    sizes,
    ...rest
  },
  ref,
) {
  const source = typeof src === "string" ? src : src.src;
  const responsiveAttributes = responsiveImageAttributes(source, sizes);
  const imageStyle = fill
    ? { position: "absolute" as const, inset: 0, width: "100%", height: "100%", ...style }
    : style;

  return (
    <img
      ref={ref}
      src={source}
      style={imageStyle}
      loading={priority ? "eager" : loading ?? "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      {...responsiveAttributes}
      {...rest}
    />
  );
});

export default Image;
