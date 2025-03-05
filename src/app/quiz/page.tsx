"use client";

import { useState } from "react";
import { questions } from "../data/questions";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: optionId });
  };

  return (
    <div className="flex h-screen p-4 bg-gray-100">
      {/* Área das Questões */}
      <div className="w-3/4 flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src={questions[currentQuestion].image}
          alt="Questão"
          className="w-1/2 rounded-md shadow"
        />
        <h2 className="text-xl font-semibold mt-4">{questions[currentQuestion].text}</h2>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option) => (
            <label
              key={option.id}
              className="flex items-center border p-2 rounded-lg cursor-pointer bg-white hover:bg-gray-100 shadow-md transition"
            >
              <input
                type="radio"
                name="question"
                className="mr-2"
                checked={answers[questions[currentQuestion].id] === option.id}
                onChange={() => handleAnswer(option.id)}
              />
              <span className="font-semibold mr-2">{option.id.toUpperCase()}.</span>
              <img src={option.image} alt={option.text} className="w-16 h-16 rounded-md" />
              <span className="ml-2">{option.text}</span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
          >
            Voltar
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={currentQuestion === questions.length - 1}
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
          >
            Próximo
          </button>
        </div>
      </div>

      {/* Mini Mapa - Sumário */}
      <div className="w-1/4 flex flex-col items-center p-4">
        <h3 className="mb-2 text-lg font-bold">Progresso</h3>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition ${
                index === currentQuestion
                  ? "bg-blue-500"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
