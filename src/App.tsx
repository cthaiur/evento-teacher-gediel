import { EnvelopeSimple, Phone, SealCheck, User } from "@phosphor-icons/react"
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Formulário enviado com sucesso!");
    setFormData({ name: "", email: "", contact: "" });
  };

  return (
    <main className="relative">
      <section className="w-screen min-h-screen flex items-center justify-center bg-fundo bg-cover bg-center bg-black relative">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-6 z-10">

          {/* Formulário */}
          <div className="h-full w-full md:w-1/2 flex m-3 justify-center items-center z-30">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-zinc-300 p-8 rounded-lg shadow-md w-full max-w-md border-2 border-violet-200">

              <h2 className="text-2xl font-medium text-gray-100 mb-6 text-justify">
                Descubra como chegar na <b>fluência no inglês</b> através daquilo que você gosta.
              </h2>

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-violet-500" size={24} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full p-3 border border-violet-500 rounded-md bg-zinc-100/75 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>


              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                  E-mail
                </label>
                <div className="relative">
                  <EnvelopeSimple className="absolute left-3 top-3 text-violet-500" size={24} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full p-3 border border-violet-500 rounded-md bg-zinc-100/75 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-100">
                  Contato
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-violet-500" size={24} />
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full p-3 border border-violet-500 rounded-md bg-zinc-100/75 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 border-2 border-violet-500 text-white py-3 rounded-lg hover:bg-violet-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Imagem posicionada no canto inferior esquerdo */}
          <div className="absolute bottom-0 left-0 lg:w-auto h-full">
            {/* <img 
              src="../public/bandeira.svg" 
              alt="Descrição da imagem" 
              className="w-full h-full z-10 bottom-0"
            /> */}
            <img 
              src="../public/liberdade_bandeira.svg" 
              alt="Descrição da imagem" 
              className="w-full h-full object-cover lg:object-contain opacity-75 lg:opacity-100"
            />
          </div>

        </div>
      </section>

      <section className="bg-black w-full -mt-20 h-32" />

      <section className="text-center bg-black w-full">
        <h1 className="text-white">Essa aula gratuita é para quem:</h1>
        <div>
          <SealCheck size={32} weight="fill" className="text-white" />
          <p className="text-white">
            Quer aprender inglês, mas sente que métodos tradicionais não funcionam para você.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
