/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo} from "react";
import style from "./button.module.scss";

export default memo(({ children, ...rest }) => (
  <button {...rest} className={style.button}>
    {children}
  </button>
));