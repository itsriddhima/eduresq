\"use client\";
import { useState } from "react";

export default function Learning() {
  const questions = [
    {
      question: "What should you do first during an earthquake?",
      options: ["Run outside", "Drop, Cover, Hold", "Call a friend", "Stand near windows"],
      answer: 1,
    },
    {
      question: "Which is the safest place during a flood?",
      options: ["Basement", "Rooftop", "Near river", "Underground metro"],
      answer: 1,
    },
    {
      question: "In case of fire, what should you avoid?",
      options: ["Using elevators", "Calling emergency services", "Covering nose with cloth", "Evacuating safely"],
      answer: 0,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Learning Modules</h1>
      {!showScore ? (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl mb-4">{questions[currentQ].question}</h2>
          <div className="space-y-2">
            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl mb-4">Your Score: {score} / {questions.length}</h2>
          <button
            onClick={() => { setScore(0); setCurrentQ(0); setShowScore(false); }}
            className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}