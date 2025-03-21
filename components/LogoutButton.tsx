"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = () => {
    window.location.href = "/logout";
  };

  return (
    <Button size="sm" onClick={handleLogout}>
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}
