import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Quiz!</h1>
      <p className="text-lg max-w-lg">
        Teste seus conhecimentos respondendo a questões interativas com imagens e alternativas únicas.
        Clique no botão abaixo para começar!
      </p>
      <Link href="/quiz">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
          Iniciar Quiz
        </button>
      </Link>
      <Link href="/admin">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
          Cadastrar Questões
        </button>
      </Link>
    </div>
  );
}
