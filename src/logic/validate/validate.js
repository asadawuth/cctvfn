import Joi from "joi";

export const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required().messages({
    "string.empty": "กรุณากรอกอีเมลล์หรือเบอร์โทรศัพท์",
    "any.required": "กรุณากรอกอีเมลล์หรือเบอร์โทรศัพท์",
  }),
  password: Joi.string().required().messages({
    "string.empty": "กรุณากรอกรหัสผ่าน",
    "any.required": "กรุณากรอกรหัสผ่าน",
  }),
});

export const foundEmailInDatabaseSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "กรุณาใส่อีเมลล์ของคุณ",
    "string.email": "กรุณาใส่อีเมลล์ของคุณให้ถูกต้อง",
  }),
});

export const verifyOtpSchema = Joi.object({
  otp: Joi.string()
    .length(4)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "กรุณาใส่ Otp 4 ตัวให้ถูกต้อง",
      "string.pattern.base": "กรุณราระบุเลข 0-9 ตาม OTP ในอีเมลล์ของท่าน",
    }),
});

export const resetPasswordSchema = Joi.object({
  newPassword: Joi.string()
    .required()
    .trim()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .messages({
      "string.empty": "กรุณาใส่รหัสผ่านใหม่",
      "string.pattern.base": "ต้องมีตัวอักษรตัวพิมใหญ่, ตัวพิมเล็ก, และตัวเลข",
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรองเพื่อยันยันรหัสผ่านอีกครั้ง",
      "any.only": "กรุณากรองรหัสให้ตรงกับรหัสผ่านใหม่",
    }),
});

export const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().trim().required().messages({
    "string.empty": "กรุณใส่รหัสผ่านเก่า",
  }),
  newPassword: Joi.string()
    .required()
    .trim()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .messages({
      "string.empty": "กรุณาใส่รหัสผ่านใหม่",
      "string.pattern.base": "ต้องมีตัวอักษรตัวพิมใหญ่, ตัวพิมเล็ก, และตัวเลข",
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรองเพื่อยันยันรหัสผ่านอีกครั้ง",
      "any.only": "กรุณากรองรหัสให้ตรงกับรหัสผ่านใหม่",
    }),
});

export const changeEmailSchema = Joi.object({
  oldEmail: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "กรุณากรองอีเมลล์ปัจจุบัน",
      "any.required": "กรุณากรองอีเมลล์ปัจจุบัน",
      "string.email": "กรุณากรองอีเมลล์ปัจจุบันให้ถูกต้อง",
    }),
  newEmail: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "กรุณากรองอีเมลล์ใหม่",
      "any.required": "กรุณากรองอีเมลล์ใหม่",
      "string.email": "กรุณากรองอีเมลล์ใหม่ให้ถูกต้อง",
    }),
  confirmNewEmail: Joi.string()
    .trim()
    .required()
    .valid(Joi.ref("newEmail")) // Ensure confirmNewEmail matches newEmail
    .messages({
      "any.only": "อีเมลล์ไม่ตรงกัน กรุณายืนยันอีกครั้ง",
      "string.empty": "กรุณากรองยืนยันอีเมลล์ใหม่",
      "any.required": "กรุณากรองยืนยันอีเมลล์ใหม่",
    }),
});

export const registerIdEmployee = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองชื่อจริง",
    "any.required": "กรุณากรองชื่อจริง",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองนามสกุล",
    "any.required": "กรุณากรองนามสกุล",
  }),
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "กรุณากรองอีเมลล์",
      "any.required": "กรุณากรองอีเมลล์",
      "string.email": "กรุณากรองอีเมลล์ให้ถูกต้อง",
    }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรองเบอร์โทรศัพท์",
      "string.pattern.base": "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก",
    }),
  status: Joi.string()
    .valid("ผู้ดูแลระบบ", "ผู้ดำเนินการศูนย์บัญชาการ", "เจ้าหน้าที่ซ่อมบำรุง")
    .required()
    .messages({
      "string.empty": "กรุณากรองสถานะ",
    }),
  password: Joi.string()
    .min(8)
    .max(12)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรองรหัสผ่าน",
      "string.min": "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
      "string.max": "รหัสผ่านต้องไม่เกิน 12 ตัวอักษร",
      "string.pattern.base":
        "รหัสผ่านต้องประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก และตัวเลข",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .messages({
      "any.only": "รหัสผ่านไม่ตรงกัน",
      "string.empty": "กรุณากรองยืนยันรหัส",
    }),
});

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

export const changeDataYourProfile = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองชื่อจริง",
    "any.required": "กรุณากรองชื่อจริง",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรองนามสกุล",
    "any.required": "กรุณากรองนามสกุล",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรองเบอร์โทรศัพท์",
      "string.pattern.base": "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก",
    }),
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "กรุณากรองอีเมลล์",
      "any.required": "กรุณากรองอีเมลล์",
      "string.email": "กรุณากรองอีเมลล์ให้ถูกต้อง",
    }),
});

// สร้างไอดีพนักงาน
export const createDataEmployee = Joi.object({
  firstName: Joi.string().trim().max(50).min(1).required().messages({
    "string.empty": "กรุณากรองชื่อจริงๆ",
    "any.required": "กรุณาระบุชื่อจริง",
  }),
  lastName: Joi.string().trim().max(50).min(1).required().messages({
    "string.empty": "กรุณากรองนามสกุล",
    "any.required": "กรุณาระบุนามสกุล",
  }),
  type: Joi.string()
    .trim()
    .valid("ผู้ดูแลระบบ", "เจ้าที่หน้าซ่อมบำรุง", "ผู้ดำเนินการศูนย์บัญชาการ")
    .required()
    .messages({
      "string.empty": "กรุณาระบุประเภทรถ", // ระบุได้แค่ รถราชการ รถเจ้าหน้าที่ รถภายนอก
      "any.required": "กรุณาระบุประเภทรถ",
      "any.only":
        "ประเภทของรถต้องเป็น ผู้ดูแลระบบ, เจ้าที่หน้าซ่อมบำรุง หรือ ผู้ดำเนินการศูนย์บัญชาการ",
    }),
  license_plate: Joi.string().trim().max(60).min(1).required().messages({
    "string.empty": "กรุณาระบุทะเบียนรถ",
    "any.required": "กรุณาระบุทะเบียนรถ",
  }),
  province: Joi.string().trim().min(1).max(100).required().messages({
    "string.empty": "กรุณาระบุจังหวัดของทะเบียนรถ",
    "any.required": "กรุณาระบุจังหวัดของทะเบียนรถ",
  }),
});
