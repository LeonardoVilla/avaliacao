"use client";

import { useState } from "react";

export default function Admin() {
  const [questionText, setQuestionText] = useState("");
  const [questionImage, setQuestionImage] = useState<File | null>(null);
  const [options, setOptions] = useState([
    { text: "", image: null as File | null },
    { text: "", image: null as File | null },
    { text: "", image: null as File | null },
    { text: "", image: null as File | null },
  ]);

  const optionLetters = ["A", "B", "C", "D"];

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const handleImageChange = (index: number, file: File | null, isQuestionImage: boolean = false) => {
    if (isQuestionImage) {
      setQuestionImage(file);
    } else {
      const newOptions = [...options];
      newOptions[index].image = file;
      setOptions(newOptions);
    }
  };

  const handleSave = () => {
    const newQuestion = {
      text: questionText,
      image: questionImage ? questionImage.name : null,
      options: options.map((option) => ({
        text: option.text,
        image: option.image ? option.image.name : null,
      })),
    };

    const existingQuestions = JSON.parse(localStorage.getItem("questions") || "[]");
    localStorage.setItem("questions", JSON.stringify([...existingQuestions, newQuestion]));

    setQuestionText("");
    setQuestionImage(null);
    setOptions([
      { text: "", image: null },
      { text: "", image: null },
      { text: "", image: null },
      { text: "", image: null },
    ]);

    alert("Questão cadastrada com sucesso!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Cadastro de Questões</h1>

        {/* Enunciado */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Enunciado:</label>
          <input
            type="text"
            placeholder="Digite o enunciado da questão"
            className="w-full mt-1 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>

        {/* Imagem da questão */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Imagem do Enunciado:</label>
          <input
            type="file"
            className="w-full mt-1 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleImageChange(0, e.target.files ? e.target.files[0] : null, true)}
          />
        </div>

        {/* Alternativas */}
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Alternativas</h2>
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-3 my-2 p-3 border rounded-lg bg-gray-50">
            <span className="text-lg font-bold text-gray-700">{optionLetters[index]}.</span>
            <input
              type="text"
              placeholder={`Texto opção ${optionLetters[index]}`}
              className="w-2/5 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <input
              type="file"
              className="w-2/5 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleImageChange(index, e.target.files ? e.target.files[0] : null)}
            />
          </div>
        ))}

        {/* Botão de Salvar */}
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-blue-500 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Salvar Questão
        </button>
      </div>
    </div>
  );
}