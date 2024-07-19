export default function navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className=" font-bold  text-4xl">最近產生的短網址連結（前20）</h1>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            刷新表單
          </button>
        </div>
      </div>
    </>
  );
}
