import {useForm} from "react-hook-form";
import {useAuth} from "./useAuth";

export function useFormValidation(values) {
  const {user} = useAuth();
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm({values, mode: "onChange",});

  const validateSearch = {
    required: 'Нужно ввести ключевое слово',
  }

  const validateName = {
    required: 'Обязательное поле',
    validate: {
      minLength: (value) =>
        value.length >= 2 || `Текст должен быть не короче 2 симв. Длина текста сейчас: ${value.length}`,
      duplicate: (value) => {
        if (user !== null) {
          return value !== user.name || 'Имя должно отличаться';
        }
      },
    },
    pattern: {
      value: /^[a-яёa-z]+(?:[ -][a-яёa-z]+)*$/i,
      message: "Используйте только латиницу, кириллицу и пробел или дефис"
    },
  };

  const validateEmail = {
    required: 'Обязательное поле',
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Некорректная электронная почта"
    },
    validate: {
      duplicate: (value) => {
        if (user !== null) {
          return value !== user.email || 'Email должен отличаться';
        }
      }
    },
  };

  const validatePassword = {
    required: 'Обязательное поле',
    validate: {
      isUpper: (value) => /[A-Z,А-Я]/.test(value) || 'Пароль должен содержать хотя бы одну заглавную букву',
      specialSymbol: (value) => /[!@#$%^&*)(+=.<>{}[\]:;'"|~`_-]/g.test(value) || 'Пароль должен содержать хотя бы 1 специальный символ'
    },
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    validateName,
    validateEmail,
    validatePassword,
    validateSearch,
  };
}
