import {ButtonHTMLAttributes, FC, ReactNode} from "react";

import {classNames} from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	children: ReactNode;
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	 const {
		 className,
		 children,
		 theme,
		 ...otherOptions
	 } = props;
	
	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherOptions}
		>
			{children}
		</button>
	);
};
