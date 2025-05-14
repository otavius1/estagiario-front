import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const Payment = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-legal-lightGray">
            <header className="bg-legal-navy text-white py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                                <span className="text-legal-navy font-bold text-lg">JP</span>
                            </div>
                            <span className="font-semibold text-white text-xl">JurisPro</span>
                        </Link>

                        <Link to="/dashboard">
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-white border-white hover:bg-white hover:text-legal-navy"
                                disabled
                            >
                                Voltar para o Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4 flex-grow">
                <div className="max-w-2xl mx-auto">
                    {isSuccess ? (
                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-green-600" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-legal-navy">
                                    Pagamento confirmado!
                                </CardTitle>
                                <CardDescription>
                                    Sua assinatura foi ativada com sucesso.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="mb-6">
                                    Você já pode começar a adicionar e monitorar seus processos.
                                </p>
                                <Link to="/dashboard">
                                    <Button className="bg-legal-navy text-white hover:bg-opacity-90" disabled>
                                        Voltar para o Dashboard
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-legal-navy mb-2">
                                    Assinatura
                                </h1>
                                <p className="text-muted-foreground">
                                    Complete o pagamento para ativar seu plano.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Resumo do plano</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Plano Básico</span>
                                            <span className="font-semibold">R$ 50,00</span>
                                        </div>
                                        <div className="pt-4 border-t">
                                            <div className="flex justify-between font-semibold">
                                                <span>Total</span>
                                                <span>R$ 50,00</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-2">
                                                Cobrança mensal
                                            </p>
                                        </div>

                                        <div className="bg-legal-lightGray p-4 rounded-lg mt-4">
                                            <h4 className="font-semibold mb-2">
                                                O que está incluído:
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex items-center">
                                                    <Check className="w-4 h-4 text-green-600 mr-2" />
                                                    <span>Acompanhamento de 5 processos</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="w-4 h-4 text-green-600 mr-2" />
                                                    <span>Notificações por e-mail</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="w-4 h-4 text-green-600 mr-2" />
                                                    <span>Painel de controle completo</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="w-4 h-4 text-green-600 mr-2" />
                                                    <span>Suporte por e-mail</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Informações de pagamento</CardTitle>
                                        <CardDescription>
                                            Seus dados de pagamento estão seguros e criptografados
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4 text-center text-red-800 text-bold">
                                            <p>Os métodos de pagamento ainda não estão disponíveis. Por favor, entre em contato pelo WhatsApp para realizar o pagamento.</p>
                                        </div>

                                        <div className="text-center mb-6">
                                            <a
                                                href="https://wa.me/5561996570151"
                                                className="text-white bg-slate-900 py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Chamar no WhatsApp
                                            </a>
                                        </div>

                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}
                </div>
            </main>

            <footer className="bg-white py-6 border-t">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} JurisPro. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Payment;
