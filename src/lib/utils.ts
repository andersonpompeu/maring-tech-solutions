import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retorna a preposição correta para nomes de bairro em português.
 * "Zona" é feminino → "na Zona 01"
 * Demais são masculinos → "no Jardim Alvorada"
 */
export function noBairro(bairro: string): string {
  if (bairro.startsWith('Zona')) return `na ${bairro}`;
  return `no ${bairro}`;
}
