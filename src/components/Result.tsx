
type ResultProps = {
	score : number;
	restartQuiz : () => void;


}




const Result =(props: ResultProps) => {


	return (
		<section>
			<h2> Score</h2>
			<p> You got {props.score} answers right</p>
			<button onClick={props.restartQuiz}> Restart Game</button>

		</section>


	)
}

export default Result;