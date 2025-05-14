import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }

    setPasswordError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-0 rounded-xl p-6 bg-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-legal-navy">
              Criar conta
            </CardTitle>
            <CardDescription>
              Registre-se para começar a monitorar seus processos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <p className="text-sm text-red-500">{passwordError}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-900 text-white hover:bg-opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrar"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-legal-navy font-medium hover:underline"
              >
                Entrar
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
