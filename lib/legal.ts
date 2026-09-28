/** Información jurídica que ELEVA debe confirmar antes de publicar. */
export const legalPlaceholders = {
  controller: "[RAZÓN SOCIAL O NOMBRE DEL RESPONSABLE POR CONFIRMAR]",
  contactEmail: "[CORREO DE CONTACTO POR CONFIRMAR]",
  effectiveDate: "[FECHA DE VIGENCIA POR CONFIRMAR]",
  jurisdiction: "[JURISDICCIÓN Y DOMICILIO CONTRACTUAL POR CONFIRMAR]",
} as const;

export const legalPlaceholderNote =
  "Los campos entre corchetes requieren confirmación antes de publicar estos documentos como versión definitiva.";
