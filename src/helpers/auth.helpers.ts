type Criteria = {
  label: string,
  isValid: boolean
}[];


const validatePassword = (value: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(value);
};

const checkPasswordCriteria = (value: string) => {
  const criteria: Criteria = [
    {
      label: 'Minimum 8 characters',
      isValid: value.length >= 8,
    },
    {
      label: 'At least one uppercase letter',
      isValid: /[A-Z]/.test(value),
    },
    {
      label: 'At least one lowercase letter',
      isValid: /[a-z]/.test(value),
    },
    {
      label: 'At least one numeric digit',
      isValid: /\d/.test(value),
    },
    {
      label: 'At least one special character',
      isValid: /[@$!%*?&]/.test(value),
    },
  ];
  return criteria;
};

export { validatePassword, checkPasswordCriteria }