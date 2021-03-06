import CPF from 'gerador-validador-cpf';

export const validateCPF = cpf => ({
  error: !(CPF.validate(cpf)),
  data: cpf,
});

export const validateName = (name) => {
  const regex = /^[a-zA-Z ]{2,30}$/;
  return { data: name, error: regex.test(name) };
};

export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return { data: email, error: regex.test(email) };
};

export const validatePhone = (phone) => {
  const regex = /^\([1-9]{2}\)[2-9][0-9]{7,8}$/;
  return { data: phone, error: regex.test(phone) };
};

export default {
  default: data => ({ data, error: true }),
  email: data => validateEmail(data),
  name: data => validateName(data),
  cpf: data => validateCPF(data),
  phone: data => validatePhone(data)
};
