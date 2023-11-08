import React from "react";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Heading } from "../../typography/Heading";
import { LoginPageWrapper } from "./LoginPageWrapper";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Heading type="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput type="tel" placeholder="Номер телефона" />
        <AppInput type="password" placeholder="Пароль" />
        <AppButton type="button" buttonLabel="Войти" isPrimary />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </LoginPageWrapper>
  );
};
