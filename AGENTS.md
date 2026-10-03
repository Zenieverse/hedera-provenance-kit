# AGENTS.md

- Preserve the privacy boundary: sensitive health and private data stay off-chain.
- Use deterministic canonicalization before hashing.
- SHA-256 digests must be reproducible.
- Never fabricate Hedera transaction IDs, topic IDs, sequence numbers, timestamps, or explorer URLs.
- Keep Hedera credentials server-side; never commit secrets or `.env` files.
- Distinguish mock mode from real Testnet/Mainnet mode.
- Prefer HCS for chronological provenance and Mirror Node for independent verification.
- Preserve existing application behavior when integrating this kit.
