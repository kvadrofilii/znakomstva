export default function PersonPhoto(props) {
	if (props.url) {
		return (
			<div
				className={'person-photo'}
				style={{ backgroundImage: `url(${props.url})` }}
			>
			</div >
		);
	} else {
		return (<div className={'person-photo'} />);
	}
}
