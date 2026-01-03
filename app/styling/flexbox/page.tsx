// Example 01 (Flex Box)
export default function FlexBoxPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-purple-300 min-h-screen p-6 gap-6">
      <div className="h-20 w-30 p-6 bg-green-200 rounded text-center">
        Div 01
      </div>
      <div className="h-20 w-30 p-6 bg-red-200 rounded text-center">Div 02</div>
      <div className="h-20 w-30 p-6 bg-orange-200 rounded text-center">
        Div 03
      </div>
      <div className="h-20 w-30 p-6 bg-yellow-200 rounded text-center">
        Div 04
      </div>
    </div>
  );
}
