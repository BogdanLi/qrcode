import { ThemeToggle } from "./ThemeToggle";
import { Card } from "./ui/card";

export default function Header() {
  return (
    <Card className="px-4">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">QR Code</h1>

        <ThemeToggle />
      </header>
    </Card>
  );
}
