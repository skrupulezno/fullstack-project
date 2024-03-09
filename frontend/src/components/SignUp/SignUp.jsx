import { useForm} from "react-hook-form";
import style from "../style.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validtionSchemas/validtionSchemas";
import Field from "../Field/Field";
import Button from "../Button/Button";

const defaultValues = {
  userName: "",
  password: ""
};

export default function SignUp() {
  const { handleSignUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
  });

  return (
    <form className={style.wrapper} onSubmit={handleSubmit(handleSignUp)}>
      <h2>Создать аккаунт</h2>
      <Field
        name="userName"
        register={register}
        autoComplete="off"
        placeholder="Имя пользователя"
        error={Boolean(errors.userName)}
        helperText={errors.userName?.message}
      />
      <Field
        name="password"
        register={register}
        autoComplete="off"
        placeholder="Пароль"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Button disabled={isSubmitting} type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
}