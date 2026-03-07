import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Logo } from "../shared/logo";
import { ModeToggle } from "../shared/mode-toggle";

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-primary/5">
        <div className="flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold">CineScope</h2>
          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
