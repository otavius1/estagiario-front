import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">JP</span>
          </div>
          <span className="font-semibold text-slate-900 text-xl hidden sm:block">
            JurisPro
          </span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-slate-900 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-slate-900 font-medium"
          >
            Como Funciona
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-slate-900 font-medium"
          >
            Preços
          </a>
          <Link to="/login">
            <Button
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Entrar
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-slate-900 text-white hover:bg-slate-800">
              Registrar
            </Button>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-slate-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-slate-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-slate-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white w-full"
                  >
                    Entrar
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-slate-900 text-white hover:bg-slate-800 w-full">
                    Registrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
