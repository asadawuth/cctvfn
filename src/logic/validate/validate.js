import Joi from "joi";

export const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required().messages({
    "string.empty": "loginForm.emailOrMobile.empty",
    "any.required": "loginForm.emailOrMobile.required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "loginForm.password.empty",
    "any.required": "loginForm.password.required",
  }),
});

export const foundEmailInDatabaseSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "VevifyEmailForm.email.empty",
    "string.email": "VevifyEmailForm.email.email",
  }),
});

export const verifyOtpSchema = Joi.object({
  otp: Joi.string()
    .length(4)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "VerifyOtpForm.empty",
      "string.pattern.base": "VerifyOtpForm.base",
    }),
});

export const resetPasswordSchema = Joi.object({
  newPassword: Joi.string()
    .required()
    .trim()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .messages({
      "string.empty": "ResetPasswordForm.newPassword.empty",
      "string.pattern.base": "ResetPasswordForm.newPassword.base",
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .trim()
    .required()
    .messages({
      "string.empty": "ResetPasswordForm.confirmNewPassword.empty",
      "any.only": "ResetPasswordForm.confirmNewPassword.only",
    }),
});

export const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().trim().required().messages({
    "string.empty": "validateChangePassword.oldpassword.empty",
  }),
  newPassword: Joi.string()
    .required()
    .trim()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .messages({
      "string.empty": "validateChangePassword.newpassword.empty",
      "string.pattern.base": "validateChangePassword.newpassword.base",
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .trim()
    .required()
    .messages({
      "string.empty": "validateChangePassword.confirmnewpassword.empty",
      "any.only": "validateChangePassword.confirmnewpassword.only",
    }),
});

export const changeEmailSchema = Joi.object({
  oldEmail: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "validateChangeEmail.email.empty",
      "any.required": "validateChangeEmail.email.required",
      "string.email": "validateChangeEmail.email.email",
    }),
  newEmail: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "validateChangeEmail.newemail.empty",
      "any.required": "validateChangeEmail.newemail.required",
      "string.email": "validateChangeEmail.newemail.newemail",
    }),
  confirmNewEmail: Joi.string()
    .trim()
    .required()
    .valid(Joi.ref("newEmail")) // Ensure confirmNewEmail matches newEmail
    .messages({
      "any.only": "validateChangeEmail.comfirmnewpassword.only",
      "string.empty": "validateChangeEmail.comfirmnewpassword.empty",
      "any.required": "validateChangeEmail.comfirmnewpassword.required",
    }),
});

export const registerIdEmployee = Joi.object({
  gender: Joi.string().valid("นาย", "นาง", "นางสาว").required().messages({
    "string.empty": "validate.gender.required",
    "any.required": "validate.gender.required",
  }),
  firstName: Joi.string().trim().required().messages({
    "string.empty": "validate.firstname.empty",
    "any.required": "validate.firstname.empty",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "validate.lastname.empty",
    "any.required": "validate.lastname.empty",
  }),
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "validate.email.empty",
      "any.required": "validate.email.empty",
      "string.email": "validate.email.invalid",
    }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "validate.phone.empty",
      "any.required": "validate.phone.empty",
      "string.pattern.base": "validate.phone.invalid",
    }),
  status: Joi.string()
    .valid("ผู้ดูแลระบบ", "ผู้ดำเนินการศูนย์บัญชาการ", "เจ้าหน้าที่ซ่อมบำรุง")
    .required()
    .messages({
      "string.empty": "validate.status.empty",
      "any.required": "validate.status.empty",
    }),
  password: Joi.string()
    .min(8)
    .max(12)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "validate.password.empty",
      "string.min": "validate.password.min",
      "string.max": "validate.password.max",
      "string.pattern.base": "validate.password.pattern",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .messages({
      "any.only": "validate.confirmPassword.mismatch",
      "string.empty": "validate.confirmPassword.empty",
    }),
});

/*
export const editsDataIdEmployee = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองชื่อจริง",
    "any.required": "กรุณากรองชื่อจริง",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองนามสกุล",
    "any.required": "กรุณากรองนามสกุล",
  }),
  license_plate: Joi.string().trim().max(60).min(1).required().messages({
    "string.empty": "กรุณาระบุทะเบียนรถ",
    "any.required": "กรุณาระบุทะเบียนรถ",
  }),
  type: Joi.string()
    .trim()
    // .valid("รถราชการ", "รถเจ้าหน้าที่", "รถภายนอก")
    .required()
    .messages({
      "string.empty": "กรุณาระบุประเภทรถ", // ระบุได้แค่ รถราชการ รถเจ้าหน้าที่ รถภายนอก
      "any.required": "กรุณาระบุประเภทรถ",
      // "any.only": "ประเภทของรถต้องเป็น รถราชการ, รถเจ้าหน้าที่ หรือ รถภายนอก",
    }),
  province: Joi.string().trim().min(1).max(100).required().messages({
    "string.empty": "กรุณาระบุจังหวัดของทะเบียนรถ",
    "any.required": "กรุณาระบุจังหวัดของทะเบียนรถ",
  }),
});
*/

export const changeDataYourProfile = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "changeDataYourProfile.firstname.empty",
    "any.required": "changeDataYourProfile.firstname.required",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "changeDataYourProfile.lastname.empty",
    "any.required": "changeDataYourProfile.lastname.required",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "changeDataYourProfile.phone.empty",
      "string.pattern.base": "changeDataYourProfile.phone.base",
    }),
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "changeDataYourProfile.email.empty",
      "any.required": "changeDataYourProfile.email.required",
      "string.email": "changeDataYourProfile.email.email",
    }),
});
