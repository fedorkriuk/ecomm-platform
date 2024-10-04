export default function Home() {
  return (
    <div>
      <h2 className="text-2xl">Mobiles</h2>
      <div className="py-4">
        <div className="w-64">
          <div className="bg-blue-100 p-5 rounded-xl">
            <img src="/products/iphone.png" alt=""></img>
          </div>
          <div className="mt-1">
            <h3 className="font-bold text-lg">Iphone 14</h3>
            <p className="text-sm mt-2 leading-4">Loren ipsum bla bla bla</p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$899</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
