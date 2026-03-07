export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-amber-300">
      <div className="flex-1 bg-green-300 p-6">Sidebar nav</div>
      <div className="flex-5 flex flex-col bg-orange-300">
        <div className="flex-1 bg-violet-400 p-6">Main nav</div>
        <div className="flex-11 bg-pink-300 p-6">{children}</div>
      </div>
    </div>
  );
}
