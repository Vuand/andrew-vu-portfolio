# Security Proof — Cybersecurity Credibility

> This file backs the `/security` page. Every claim must link to a project, artifact, or coursework.
> Split into "What I can prove" vs "What I know."

---

## Security Claims We Can Make (with evidence)

### Provable (linked to shipped projects)

| Claim | Evidence Source |
|---|---|
| Secure API design (allow-listed execution) | Home Assistant capstone |
| Input validation + sanitization | Home Assistant, WPI, SponsorHub |
| HMAC-signed artifacts (tamper evidence) | SponsorHub |
| Replay protection + deduplication | SponsorHub |
| Append-only audit ledger | SponsorHub |
| Idempotent payment processing | SponsorHub (Stripe Connect) |
| Role-based access control | SponsorHub (Clerk RBAC) |
| Secrets management (env vars, no hardcoding) | Home Assistant, SponsorHub |
| PII hashing in event payloads | SponsorHub |
| State machine enforcement (funding gate) | SponsorHub |
| PCI-compliant payment integration | WPI (PayPal/Stripe), GUMC (PayPal) |
| Server hardening | WPI (Bluehost cPanel) |
| Zero-downtime migration | GUMC |
| LLM output validation (prompt injection defense) | Home Assistant capstone |
| ADA accessibility compliance | WPI, GUMC |

### Coursework-Backed (no shipped artifact yet)

| Claim | Course |
|---|---|
| Network security fundamentals | Network Security (OSU) |
| Digital forensics | Digital Forensics (OSU) |
| Cryptography principles | Cryptography (OSU) |
| Security governance & policy | Security Governance (OSU) |
| Offensive/defensive techniques | Defense Against the Dark Arts (OSU) |
| Packet analysis (Wireshark) | Network Security (OSU) |
| IAM concepts | Security coursework (OSU) |

---

## Artifacts Checklist

### Must-Have for `/security` page
- [ ] **Threat model: Home Assistant** — LLM → safe execution pipeline
- [ ] **Threat model: SponsorHub** — payout correctness, fraud controls, replay prevention
- [ ] **Secure API design checklist** — patterns used across projects
- [ ] **Security patterns summary** — visual/infographic of patterns applied

### Nice-to-Have
- [ ] IR mini-playbook (incident response template)
- [ ] SCA/SAST tool usage evidence [TODO: does Andrew use any?]
- [ ] CTF participation [TODO: has Andrew done any CTFs?]
- [ ] Bug bounty participation [TODO: any?]
- [ ] Security blog posts / writeups [TODO: any?]

---

## Threat Model Placeholders

### A) LLM → Home Assistant Safe Execution

**Assets**: Home devices, user commands, API keys, network access
**Threat actors**: Malicious users, prompt injection, compromised LLM output
**Attack surface**:
- Prompt injection → unauthorized service calls
- Entity spoofing → control wrong devices
- API key leakage → unauthorized HA access
- Malformed JSON → execution errors or unexpected behavior
- Rate abuse → DoS on LLM or HA

**Mitigations implemented**:
- Allow-listed services (explicit whitelist)
- Entity ID validation against known devices
- JSON Schema validation on LLM output
- API keys in env vars only
- Input sanitization before prompt construction
- Error isolation per command
- Rate limiting

**Residual risks**: [TODO: document any accepted risks]

### B) SponsorHub Payout Correctness & Fraud Controls

**Assets**: Campaign funds (escrow), conversion data, payout calculations, creator/brand PII
**Threat actors**: Fraudulent creators, click fraud bots, compromised brands, insider threats
**Attack surface**:
- Fake conversions → inflated payouts
- Replay attacks → duplicate payouts
- Budget overrun → overspending client funds
- Tampered attribution → incorrect creator credit
- Direct ledger mutation → altered payout history
- Unauthorized role access → data exfiltration or manipulation

**Mitigations implemented**:
- HMAC-signed attribution artifacts
- Composite key deduplication + time window
- Append-only ledger (no UPDATE/DELETE)
- Idempotent Stripe payouts
- Clerk RBAC (brand/creator/admin boundaries)
- PII hashing in event payloads
- Funding gate (state machine)
- Budget cap at rollup layer
- Fraud/risk scoring pipeline

**Residual risks**: [TODO: document accepted risks, e.g., sophisticated bot fraud]

---

## Security Patterns Used (across all projects)

| Pattern | Where Used |
|---|---|
| AuthN/AuthZ (RBAC) | SponsorHub (Clerk) |
| Input validation | All projects |
| Least privilege | Home Assistant (allow-listing) |
| Secrets management | Home Assistant, SponsorHub |
| Audit logging / append-only ledger | SponsorHub |
| Tamper-evident artifacts (HMAC) | SponsorHub |
| Replay protection | SponsorHub |
| Idempotency | SponsorHub (Stripe) |
| Rate limiting | Home Assistant |
| Error isolation | Home Assistant |
| PCI-compliant payments | WPI, GUMC, SponsorHub |
| Server hardening | WPI |
| ADA accessibility | WPI, GUMC |

---

## "What I Know" vs "What I Can Prove"

### Can Prove (shipped code or artifacts exist)
Everything in the "Provable" table above.

### Know (coursework + study, no shipped artifact)
- Network traffic analysis (Wireshark)
- Digital forensics methodology
- Cryptographic primitives and protocols
- Security governance frameworks
- Offensive security techniques (DADA course)
- IAM architecture concepts

### Gap Areas (honest assessment)
- [ ] No public CTF results [TODO: has Andrew done CTFs?]
- [ ] No public bug bounty submissions
- [ ] No published security writeups yet
- [ ] No SCA/SAST tooling evidence in projects [TODO: confirm]
- [ ] No SOC/IR real-world experience
