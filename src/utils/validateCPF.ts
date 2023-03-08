export const validateCPF = function validateCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove any non-numeric characters from the input
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Check if CPF length is valid and if it has repeated digits
  
    var sum = 0;
    for (var i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
  
    var remainder = sum % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
  
    if (remainder !== parseInt(cpf.charAt(9))) return false;
  
    sum = 0;
    for (i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
  
    remainder = sum % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
  
    if (remainder !== parseInt(cpf.charAt(10))) return false;
  
    return true;
  }