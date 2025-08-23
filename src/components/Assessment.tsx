import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RefreshCw, Trophy } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface AssessmentProps {
  topic: string;
  questions: Question[];
  onFinish: (score: number, total: number) => void;
}

export const Assessment = ({ topic, questions, onFinish }: AssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer before proceeding.");
      return;
    }

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const score = calculateScore();
      onFinish(score, questions.length);
      setShowResults(true);
      toast.success("Assessment completed!");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
      setShowExplanation(false);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
    toast.info("Assessment reset!");
  };

  const calculateScore = () => {
    let correct = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  const getGrade = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    return "D";
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <Card className="p-8 text-center bg-gradient-card">
        <div className="mb-6">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${getScoreColor(score, questions.length)}`} />
          <h2 className="text-3xl font-bold mb-2">Assessment Complete!</h2>
          <p className="text-muted-foreground">Here are your results for {topic}</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="text-center">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(score, questions.length)}`}>
              {score}/{questions.length}
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              {percentage.toFixed(1)}% • Grade: {getGrade(score, questions.length)}
            </p>
            <Progress value={percentage} className="w-full max-w-md mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Card className="p-4">
              <div className="text-2xl font-bold text-success">{score}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-destructive">{questions.length - score}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-primary">{questions.length}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Review Your Answers</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {questions.map((q, index) => (
              <Card key={q.id} className="p-4 text-left">
                <div className="flex items-start gap-3">
                  {userAnswers[index] === q.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{q.question}</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Your answer: <span className={userAnswers[index] === q.correctAnswer ? "text-success" : "text-destructive"}>{q.options[userAnswers[index]]}</span></p>
                      <p>Correct answer: <span className="text-success">{q.options[q.correctAnswer]}</span></p>
                      <p className="mt-2 italic">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Button onClick={resetAssessment} className="mt-8" variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="p-8 bg-gradient-card">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <div className="text-sm text-muted-foreground">
            {topic} Assessment
          </div>
        </div>
        <Progress value={progress} className="w-full mb-4" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="w-full text-left justify-start h-auto p-4"
              onClick={() => handleAnswer(index)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  selectedAnswer === index 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : "border-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </Button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-6">
            <Button
              variant="ghost"
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-sm"
            >
              {showExplanation ? "Hide" : "Show"} Explanation
            </Button>
            
            {showExplanation && (
              <Card className="mt-3 p-4 bg-muted/50">
                <p className="text-sm">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </Card>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="min-w-24"
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </Card>
  );
};