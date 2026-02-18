interface CodeError {
  code: string;
  http_code: number;
  title: string;
  description: string;
  solution: string;
}

const errorCodes: CodeError[] = [
  {
    "code": "E_FPT_ROUTINES_401_001",
    "http_code": 401,
    "title": "Usuario no autorizado",
    "description": "El usuario trata de realizar una operación sin autenticarse, debe ingresar la api-key",
    "solution": "Agregar la api-key en los headers el valor es usuario seguido de su key. Ej. Usuario01sk_00000123-AAA"
  },
  {
    "code": "E_FPT_ROUTINES_401_002",
    "http_code": 401,
    "title": "api-key invalida",
    "description": "Se envio una apikey no valida.",
    "solution": "Verificar que la api-key que se envia tiene el formato adecuado, usuario seguido de su key. Sin espacios, guiones o algún otro caracter entre uno y otro."
  },
  {
    "code": "E_FPT_ROUTINES_401_003",
    "http_code": 401,
    "title": "Credenciales no validas",
    "description": "Se enviaron credenciales que no fueron correctas.",
    "solution": "Verifica que el usuario o la key sea correcta. Si estas seguro de que son correctas, comunicate con el soporte de SITELSEG."
  },
  {
    "code": "E_FPT_ROUTINES_401_004",
    "http_code": 401,
    "title": "Credenciales no activas",
    "description": "El usuario fue desactivado.",
    "solution": "El usuario no esta activo, si crees que es un error comunicate con soporte de SITELSEG."
  },
  {
    "code": "E_FPT_ROUTINES_401_005",
    "http_code": 401,
    "title": "Acción no permitida",
    "description": "El usuario no tiene permisos para solicitar este recurso.",
    "solution": "Si crees que es un error comunicate con soporte de SITELSEG."
  },
  {
    "code": "E_FPT_ROUTINES_401_006",
    "http_code": 401,
    "title": "Credenciales expiradas",
    "description": "Las credenciales expiraron",
    "solution": "Si crees que es un error comunicate con soporte de SITELSEG."
  },
  {
    "code": "E_FPT_ROUTINES_400_006",
    "http_code": 400,
    "title": "Nivel no valido",
    "description": "El valor de nivel ingresado no corresponde a lo permitido.",
    "solution": "Los valores permitidos son: 1 2 3 4"
  },
  {
    "code": "E_FPT_ROUTINES_400_007",
    "http_code": 400,
    "title": "Día no valido",
    "description": "El valor de día ingresado no corresponde a lo permitido.",
    "solution": "Los valores permitidos son: 1 2 3 4"
  },
  {
    "code": "E_FPT_ROUTINES_400_008",
    "http_code": 400,
    "title": "Tipo de rutina no es valido",
    "description": "El valor de día ingresado no corresponde a lo permitido.",
    "solution": "Los valores permitidos son: adaptation muscle_gain health fat_burning"
  },
  {
    "code": "E_FPT_ROUTINES_400_009",
    "http_code": 400,
    "title": "Formato de fecha inicio invalida",
    "description": "El formato de fecha no es correcto.",
    "solution": "Identifica la fecha y el formato establecido es: yyyy-MM-dd HH:mm:ss"
  },
  {
    "code": "E_FPT_ROUTINES_400_010",
    "http_code": 400,
    "title": "Formato de fecha final invalida",
    "description": "El formato de fecha no corresponde.",
    "solution": "Identifica la fecha y el formato establecido es: yyyy-MM-dd HH:mm:ss"
  },
  {
    "code": "E_FPT_ROUTINES_400_011",
    "http_code": 400,
    "title": "Club no valido",
    "description": "El club_id no corresponde a ninguno.",
    "solution": "Identifica que el id del club a consultar sea correcto. Revisa el listado de los clubs para validar que sea correcto."
  },
  {
    "code": "E_FPT_ROUTINES_400_012",
    "http_code": 400,
    "title": "Ejercicio no valido",
    "description": "El exercise_id no corresponde a ninguno.",
    "solution": "Identifica que el id del ejercicio a consultar sea correcto. Revisa el listado de los ejercicios para validar que sea correcto."
  },
  {
    "code": "E_FPT_ROUTINES_400_013",
    "http_code": 400,
    "title": "emoji no valido",
    "description": "El emoji no es valido",
    "solution": "Identifica que el emoji sea correcto: happy neutral sad"
  },
  {
    "code": "E_FPT_ROUTINES_500_001",
    "http_code": 500,
    "title": "Rol incorrecto",
    "description": "El usuario accedio con un rol incorrecto para la accion.",
    "solution": "Comunicarse con el soporte de SITELSEG para su atención."
  },
  {
    "code": "E_FPT_ROUTINES_500_002",
    "http_code": 500,
    "title": "Vista no permitida para log",
    "description": "Se intento insertar un log de una vista no permitida o no permitida.",
    "solution": "Este es un error en la inserción del log. Es un error esperado. El proceso no se interrumpe."
  },
  {
    "code": "E_FPT_ROUTINES_500_003",
    "http_code": 500,
    "title": "No se pudo hacer la inserción del log.",
    "description": "Se intento insertar un log entra en modo contingencia para su rastreo",
    "solution": "No hay necesidad de realizar acción, el modo contingencia solo aplica para ese resgistro y se almacena en cadena para realizar su inserción manual."
  }
];

export { errorCodes };
export type { CodeError };
