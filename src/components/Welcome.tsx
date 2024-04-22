
type WelcomeProps = {
	nextScreen : () => void;
}

const Welcome = (props : WelcomeProps) => {


	return (
		<section>
			<h2> Welcome to this quiz! </h2>
			<p> Do you want to start the game? </p>
			<button onClick={props.nextScreen}> Start game </button>
		</section>
	)
}

export default Welcome;