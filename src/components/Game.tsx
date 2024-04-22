import { useState } from "react";

interface Question {
	question: string; // när är julafton?
	answers : string[]; // ["24 dec", "8 maj", "3 jul"]
	correct : number; // 0
}


type GameProps = {
	showResult : () => void;
	answeredCorrectly : () => void;
}




const Game =(props: GameProps) => {

	const questions : Question [] = getQuestions();

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [selectedAnswer, setSelectedAnswer ] = useState <number | null> (null);



	const question = questions[currentQuestion];

	const options = question.answers.map((answer, index) => (
		<p key={index}>
			<label>
				<input type="radio" name="anwsers" onClick={() => setSelectedAnswer(index)} />
				{ answer }

			</label>

		</p>

	));


	const handleDecided = () => {
		// kolla om rätt svar
		if(selectedAnswer == question.correct) {
			props.answeredCorrectly();
		}

		//byt fråga
		if (currentQuestion < questions.length - 1){
		   setCurrentQuestion (currentQuestion +1);
		} else {
		// gå vidare till result
		props.showResult();
		}


	}

	return (

		<section>
			<h3>{ question.question }</h3>
			{ options }
			<button onClick={handleDecided}> Submit answer </button>



		</section>

	)
}

const getQuestions = () : Question[] => {
	return [
		{
			question : "When is Christmas Eve?",
			answers : ["May 23", "Dec 24", "May 3"],
			correct : 1
		},

		{
			question : "How many days are there in a year?",
			answers : ["365", "369", "361"],
			correct : 0
		},

		{
			question : "Which is a summer month?",
			answers : ["March", "December", "May"],
			correct : 2
		},

		{
			question : "How many spots does a ladybug have?",
			answers : ["23", "4", "7"],
			correct : 2
		}
	]


}


export default Game;