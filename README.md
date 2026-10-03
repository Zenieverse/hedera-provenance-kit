# Hedera Provenance Kit

A reusable Scaffold-HBAR-style template for privacy-preserving provenance, integrity, and verification of AI, research, and application artifacts.

## Architecture

`Artifact → deterministic canonicalization → SHA-256 → minimal HCS record → Mirror Node verification`

Sensitive data remains off-chain. Only a cryptographic digest and non-sensitive provenance metadata are anchored to Hedera.

## Quick start

```bash
npm install
npm run build
npm run lint
npm test
```

## Scaffold-HBAR template

Intended invocation:

```bash
npm create scaffold-hbar@latest -- --template Zenieverse/hedera-provenance-kit
```

## Testnet proof

Canonical proof from the validated implementation:

- Network: Hedera Testnet
- Topic: `0.0.10818730`
- Sequence: `2`
- SHA-256: `ae7e7030220cf6729fded7eee293059ade5e8d96b7160a1a2d7f3ce2949863d5`
- Transaction: `0.0.6399349@1790909508.462971661`
- Consensus timestamp: `1790909516.734166434`

Hashscan: https://hashscan.io/testnet/transaction/0.0.6399349-1790909508-462971661

Mirror Node: https://testnet.mirrornode.hedera.com/api/v1/topics/0.0.10818730/messages/2

> Proof values are documentation for the validated testnet transaction. Run your own deployment for new proofs.

## Security

Never put PHI, PII, clinical notes, private documents, credentials, API keys, or private keys on Hedera. Sign HCS transactions server-side. Never treat mock-mode output as a real blockchain transaction.

## License

MIT.
