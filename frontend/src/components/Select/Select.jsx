/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react";
import style from "./select.module.scss";

export default memo(({ options = [], ...rest }) => (
  <select {...rest} className={style.select}>
    {options.map(({ id, title }) => (
      <option key={id} value={id}>
        {title}
      </option>
    ))}
  </select>
));