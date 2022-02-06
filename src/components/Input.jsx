export default function Input(props) {
	return (
		<div className={`input__container ${props.isError} ${props.wrapper}`}>
			{
				(props.type === 'textarea')
					?
					<div className={'input__wrapper'}>
						<textarea
							onChange={props.onChange}
							value={props.value}
							className={`input textarea ${props.isError}`}
							type={props.type}
							placeholder={props.placeholder}
						/>
						<span className={`input__ico-after ${props.isError}`}></span >
					</div>
					:
					<div className={'input__wrapper'}>
						<span className={`input__ico-before ${props.icoBefore}`}></span>
						<input
							onChange={props.onChange}
							value={props.value}
							className={`input ${props.isError}`}
							type={props.type}
							placeholder={props.placeholder}
						/>
						<span className={`input__ico-after ${props.isError}`}></span >
					</div>
			}
			<div className={`input__text-alert input__text-alert_not ${props.isError}`}>
				Поле обязательно для заполнения
			</div>
			<div className={`input__text-alert input__text-alert_invalid ${props.isError}`}>
				{props.textError}
			</div>
		</div>
	);
}
