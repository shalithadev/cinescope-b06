// Example 02 (Flex 1)
export default function FlexOnePage() {
  return (
    <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
      <div className="flex-1 p-6 bg-green-200 text-center">Div 01</div>
      <div className="flex-3 p-6 bg-red-200 text-center">Div 02</div>
      <div className="flex-2 p-6 bg-blue-200 text-center">Div 03</div>
      <div className="flex-4 p-6 bg-orange-200 text-center">Div 04</div>
      <div className="flex-2 p-6 bg-purple-200 text-center">Div 05</div>
    </div>
  );
}
