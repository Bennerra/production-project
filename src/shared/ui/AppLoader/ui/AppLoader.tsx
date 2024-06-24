import {classNames} from "shared/lib/classNames/classNames";

import cls from "./AppLoader.module.scss";

export const AppLoader = () => {
	return (
		<span className={classNames(cls.AppLoader)}></span>
	);
};
