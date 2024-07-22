import axios from "axios";
import useSWR from "swr";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const fetcher = (...arg) =>
  axios.get(...arg, { withCredentials: false }).then((res) => res);

export default function useShortUrl(url) {
  const { data, error, isLoading } = useSWR(
    `https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${url}/&service[name]=shrlc`,
    fetcher
  );

  return { user: data, isLoading, isError: error };
}
