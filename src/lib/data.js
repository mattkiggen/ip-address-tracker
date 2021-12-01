import Joi from 'joi';

export async function getData(url, options = {}) {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

export function validateInput(input) {
  const schema = Joi.alternatives(Joi.string().ip(), Joi.string().domain());
  return schema.validate(input);
}

export function isIpAddress(input) {
  const schema = Joi.string().ip();
  const { error } = schema.validate(input);
  if (error) return false;
  return true;
}

export function isDomain(input) {
  const schema = Joi.string().domain();
  const { error } = schema.validate(input);
  if (error) return false;
  return true;
}
