import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [processes, setProcesses] = useState([
    {
      id: "1",
      number: "0123456-78.2023.8.26.0100",
      court: "TJSP",
      instance: "1ª Instância",
      status: "active",
    },
    {
      id: "2",
      number: "0987654-32.2023.8.26.0100",
      court: "TJSP",
      instance: "2ª Instância",
      status: "active",
    },
  ]);

  const [newProcess, setNewProcess] = useState({
    number: "",
    court: "",
    instance: "",
  });

  const handleAddProcess = (e) => {
    e.preventDefault();
    if (!newProcess.number || !newProcess.court || !newProcess.instance) {
      toast("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos",
      });
      return;
    }
    if (processes.length >= 5) {
      toast("Limite atingido", {
        description: "Seu plano permite acompanhar até 5 processos",
      });
      return;
    }
    setProcesses([
      ...processes,
      {
        id: Date.now().toString(),
        number: newProcess.number,
        court: newProcess.court,
        instance: newProcess.instance,
        status: "active",
      },
    ]);
    setNewProcess({ number: "", court: "", instance: "" });
    toast("Processo adicionado", {
      description: "O processo foi adicionado com sucesso",
    });
  };

  const handleRemoveProcess = (id) => {
    setProcesses(processes.filter((process) => process.id !== id));
    toast("Processo removido", {
      description: "O processo foi removido com sucesso",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">JP</span>
            </div>
            <span className="font-semibold text-white text-xl">JurisPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Olá, Caíque</span>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-slate-900"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle>Total de processos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">
                  {processes.length}
                </div>
                <p className="text-sm text-gray-500">de 5 disponíveis</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle>Status da assinatura</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-green-600">Ativo</div>
                <p className="text-sm text-gray-500">
                  Próxima cobrança em 30 dias
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">3</div>
                <p className="text-sm text-gray-500">nos últimos 7 dias</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="processes">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="processes" className="bg-white">Meus Processos</TabsTrigger>
              <TabsTrigger value="add" className="bg-white">Adicionar Processo</TabsTrigger>
            </TabsList>

            <TabsContent value="processes">
              <Card className="bg-white shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>Processos Cadastrados</CardTitle>
                  <CardDescription>
                    Você está acompanhando {processes.length} de 5 processos
                    disponíveis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {processes.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">
                        Você ainda não tem processos cadastrados.
                      </p>
                      <Button
                        onClick={() =>
                          document.querySelector('[data-value="add"]')?.click()
                        }
                        className="mt-4 bg-slate-900 text-white hover:bg-slate-800"
                      >
                        Adicionar processo
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {processes.map((process) => (
                        <Card key={process.id} className="bg-white shadow-lg rounded-xl">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-slate-900">
                                  {process.number}
                                </h4>
                                <div className="text-sm text-gray-500 mt-1">
                                  <span className="mr-4">
                                    Tribunal: {process.court}
                                  </span>
                                  <span>Instância: {process.instance}</span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleRemoveProcess(process.id)}
                              >
                                Remover
                              </Button>
                            </div>
                            <div className="flex items-center mt-3">
                              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              <span className="text-sm text-green-600">
                                Monitoramento ativo
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add">
              <Card className="bg-white shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>Adicionar Novo Processo</CardTitle>
                  <CardDescription>
                    {processes.length >= 5
                      ? "Você atingiu o limite de 5 processos do seu plano."
                      : "Preencha as informações do processo que deseja monitorar."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddProcess} className="space-y-4">
                    <div>
                      <Label htmlFor="number">Número do Processo</Label>
                      <Input
                        id="number"
                        value={newProcess.number}
                        disabled={processes.length >= 5}
                        onChange={(e) =>
                          setNewProcess({ ...newProcess, number: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="court">Tribunal</Label>
                      <Select
                        disabled={processes.length >= 5}
                        onValueChange={(value) =>
                          setNewProcess({ ...newProcess, court: value })
                        }
                        value={newProcess.court}
                        className="bg-white rounded"
                      >
                        <SelectTrigger id="court">
                          <SelectValue placeholder="Selecione o tribunal" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded">
                          <SelectItem value="TJSP">TJSP</SelectItem>
                          <SelectItem value="TJRJ">TJRJ</SelectItem>
                          <SelectItem value="TJMG">TJMG</SelectItem>
                          <SelectItem value="TRF1">TRF1</SelectItem>
                          <SelectItem value="TRF2">TRF2</SelectItem>
                          <SelectItem value="TRF3">TRF3</SelectItem>
                          <SelectItem value="STF">STF</SelectItem>
                          <SelectItem value="STJ">STJ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="instance">Instância</Label>
                      <Select
                        disabled={processes.length >= 5}
                        onValueChange={(value) =>
                          setNewProcess({ ...newProcess, instance: value })
                        }
                        value={newProcess.instance}
                        className="bg-white rounded"
                      >
                        <SelectTrigger id="instance">
                          <SelectValue placeholder="Selecione a instância" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded">
                          <SelectItem value="1ª Instância">1ª Instância</SelectItem>
                          <SelectItem value="2ª Instância">2ª Instância</SelectItem>
                          <SelectItem value="Superior">Superior</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="bg-slate-900 text-white hover:bg-slate-800 w-full"
                      disabled={processes.length >= 5}
                    >
                      {processes.length >= 5 ? "Limite atingido" : "Adicionar processo"}
                    </Button>

                    {processes.length >= 5 && (
                      <p className="text-sm text-center text-gray-500">
                        Para adicionar mais processos, entre em contato conosco para um plano personalizado.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-white shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle>Assinatura</CardTitle>
              <CardDescription>Detalhes do seu plano atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Plano Básico</h4>
                  <p className="text-sm text-gray-500">R$ 50,00 por mês</p>
                  <p className="text-sm text-gray-500">5 processos incluídos</p>
                </div>
                <Link to="/payment">
                  <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-600">
                    Gerenciar assinatura
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
