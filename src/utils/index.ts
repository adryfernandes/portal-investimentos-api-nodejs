/**
 * Retira da string qualquer caracter não numérico
 * @param value
 * @returns
 */
export const onlyNumbers = (value: string): string => {
  return value ? value.replace(/\D/g, '') : '';
};
