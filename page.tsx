export default function Home() {
  return <main style={{fontFamily:"system-ui",maxWidth:900,margin:"4rem auto",padding:24}}><h1>Hedera Provenance Kit</h1><p>Privacy-preserving artifact integrity with deterministic hashing, Hedera Consensus Service, and Mirror Node verification.</p><ol><li>Canonicalize an artifact</li><li>Compute SHA-256</li><li>Anchor minimal provenance metadata on HCS</li><li>Verify independently through a Mirror Node</li></ol></main>;
}
