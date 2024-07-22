import useShortUrl from "./fetchApi";
import { useState, useRef } from "react";
import ShortUrl from "./shortUrl";

export default function Form() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(url);
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const { user, error, isLoading } = useShortUrl(data);
  return (
    <>
      <form className="url-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">目的網址連結 （*必填）</label>
          <input onChange={handleChange} ref={inputRef} type="text" />
        </div>
        <div>
          <label htmlFor="">簡單説明 （非必填）</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">客製6個字指定短網址（非必填）</label>
          <input type="text" />
        </div>
        <p>
          【注意事項】 : 如需指定短網址， <br />
          1) 請填寫含大小寫英文字或可與數字混搭最多6個字，
          <br /> 2) 與已經產出短網址不能重複，
          <br />
          3) 若無填寫系統將自動產出6個字大小寫英文字與數字混搭短網址。(例如 :
          ABCDEF、abcdef、AbCdEf、ABC123、abc123、A1b2c3....等)
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          確定
        </button>
      </form>
      <ShortUrl url={user} isLoading={isLoading} />
    </>
  );
}
