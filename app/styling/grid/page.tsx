// Example 03 (Grid)
export default function GridPage() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-amber-200 p-6">
      {/* Cards Container */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="w-full h-40 bg-red-200 text-center">Div 01</div>
        <div className="w-full h-40 bg-green-200 text-center">Div 02</div>
        <div className="w-full h-40 bg-purple-200 text-center">Div 03</div>
        <div className="w-full h-40 bg-orange-200 text-center">Div 04</div>
        <div className="w-full h-40 bg-pink-200 text-center">Div 05</div>
        <div className="w-full h-40 bg-cyan-200 text-center">Div 06</div>
        <div className="w-full h-40 bg-blue-200 text-center">Div 07</div>
        <div className="w-full h-40 bg-sky-200 text-center">Div 08</div>
      </div>
    </div>
  );
}
