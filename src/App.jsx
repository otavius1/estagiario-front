import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routesApp";

const App = () => (
    <TooltipProvider>
      <Toaster richColors />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </TooltipProvider>
);

export default App;
