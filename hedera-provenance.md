# Provenance protocol

The kit intentionally stores proofs rather than payloads. An application canonicalizes a non-sensitive artifact, calculates SHA-256, and publishes a compact HCS message containing the digest and provenance metadata. A verifier retrieves the message through a Hedera Mirror Node and compares the digest with a locally recomputed value.

## Privacy boundary

Do not publish PHI, PII, patient records, confidential research documents, credentials, API keys, or private keys.

## Real vs mock mode

Production integrations should expose an explicit configuration such as `HEDERA_MODE=real` and keep credentials on the server. Mock mode must never claim to have created a real Hedera transaction.
