import { Icon } from "@iconify/react";

export default function ShortUrl(url) {
  console.log(url.url);
  if (url.isLoading) {
    console.log("...isLoading");
    return <Icon icon="line-md:loading-loop" width="24" height="24" />;
  }
  return (
    <>
      {url.url && (
        <div>
          ShortUrl :
          <a className="underline" href={url.url.data.data}>
            {url.url.data.data}
          </a>
        </div>
      )}
    </>
  );
}
