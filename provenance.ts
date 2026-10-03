import { createHash } from "node:crypto";

export function canonicalize(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  const obj = value as Record<string, unknown>;
  return `{${Object.keys(obj).sort().map(k => `${JSON.stringify(k)}:${canonicalize(obj[k])}`).join(",`)}}`;
}

export function sha256(value: unknown): string {
  return createHash("sha256").update(canonicalize(value), "utf8").digest("hex");
}

export type ProvenanceRecord = {
  schema: "hedera-provenance/v1";
  artifactHash: string;
  artifactType: string;
  createdAt: string;
};

export function makeRecord(artifact: unknown, artifactType: string, createdAt = new Date().toISOString()): ProvenanceRecord {
  return {schema:"hedera-provenance/v1", artifactHash:sha256(artifact), artifactType, createdAt};
}
