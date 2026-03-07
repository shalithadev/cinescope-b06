export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>

        {/* User Navigation */}
        <div className="h-10 w-10 rounded-full bg-primary/20"></div>
      </div>
    </header>
  );
}
