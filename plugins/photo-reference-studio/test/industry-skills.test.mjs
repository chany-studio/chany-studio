import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const industrySkills = [
  "chany-professional-services",
  "chany-education-marketing",
  "chany-healthcare-marketing",
  "chany-corporate-employer",
  "chany-food-dining",
  "chany-hospitality-travel",
  "chany-space-real-estate",
  "chany-live-culture-events",
  "chany-digital-product-marketing",
  "chany-automotive-marketing",
  "chany-consumer-tech-marketing",
];

const requiredIndustryDirectionFields = [
  "primary_skill",
  "mode_or_subtype",
  "jurisdiction",
  "last_policy_check",
  "objective_and_kpi",
  "audience_and_decision_unit",
  "journey_stage",
  "desired_action",
  "message_job",
  "proof_objects",
  "claim_ledger",
  "visual_narrative",
  "must_capture",
  "directing_rules",
  "channel_deliverables",
  "reference_route",
  "required_disclosures",
  "prohibited_or_high_risk",
  "human_review_gate",
  "unresolved_decisions",
];

const requiredClaimLedgerFields = [
  "claim",
  "expression_mode",
  "placements",
  "evidence",
  "evidence_scope",
  "limitation",
  "required_qualification",
  "disclosure_location_and_proximity",
  "review_owner",
  "expiry_or_recheck",
  "status",
];

const requiredEvidenceScopeFields = [
  "method",
  "population_or_subject",
  "conditions",
  "period",
];

function fromPluginRoot(relativePath) {
  return join(pluginRoot, relativePath);
}

async function readPluginFile(relativePath) {
  return readFile(fromPluginRoot(relativePath), "utf8");
}

function frontmatterName(markdown, relativePath) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assert.ok(frontmatter, `${relativePath} must start with YAML frontmatter`);

  const name = frontmatter[1].match(/^name:\s*(.+?)\s*$/m);
  assert.ok(name, `${relativePath} frontmatter must contain name`);
  return name[1].replace(/^(["'])(.*)\1$/, "$2");
}

for (const skillName of industrySkills) {
  test(`${skillName} exposes the complete industry-skill contract`, async () => {
    const skillPath = `skills/${skillName}/SKILL.md`;
    const playbookPath = `skills/${skillName}/references/domain-playbook.md`;
    const openaiPath = `skills/${skillName}/agents/openai.yaml`;
    const [skill, playbook, openai] = await Promise.all([
      readPluginFile(skillPath),
      readPluginFile(playbookPath),
      readPluginFile(openaiPath),
    ]);

    assert.ok(playbook.trim(), `${playbookPath} must not be empty`);
    assert.equal(frontmatterName(skill, skillPath), skillName);
    assert.match(
      skill,
      /references\/domain-playbook\.md/i,
      `${skillPath} must link to its domain playbook`,
    );
    assert.match(
      skill,
      /industry direction packet/i,
      `${skillPath} must define the industry direction packet`,
    );
    assert.match(
      skill,
      /chany-campaign-video/i,
      `${skillPath} must route concept-led campaign video`,
    );
    assert.match(
      skill,
      /^industry_direction:\s*$/m,
      `${skillPath} must expose the canonical industry_direction root`,
    );
    for (const field of requiredIndustryDirectionFields) {
      assert.match(
        skill,
        new RegExp(`^\\s+${field}:`, "m"),
        `${skillPath} must expose canonical industry_direction.${field}`,
      );
    }

    const claimLedger = skill.match(/^  claim_ledger:\s*\n([\s\S]*?)^  visual_narrative:/m)?.[1] ?? "";
    assert.ok(claimLedger, `${skillPath} must expose a claim_ledger entry`);
    for (const field of requiredClaimLedgerFields) {
      assert.match(
        claimLedger,
        new RegExp(`^\\s+(?:-\\s+)?${field}:`, "m"),
        `${skillPath} must expose claim_ledger.${field}`,
      );
    }
    const evidenceScope = claimLedger.match(/^\s+evidence_scope:\s*\n([\s\S]*?)^\s+limitation:/m)?.[1] ?? "";
    for (const field of requiredEvidenceScopeFields) {
      assert.match(
        evidenceScope,
        new RegExp(`^\\s+${field}:`, "m"),
        `${skillPath} must expose claim_ledger.evidence_scope.${field}`,
      );
    }

    const defaultPrompt = openai.match(/^\s*default_prompt:\s*(.+?)\s*$/m);
    assert.ok(defaultPrompt, `${openaiPath} must declare default_prompt`);
    assert.match(
      defaultPrompt[1],
      new RegExp(`\\$${skillName}(?![a-z0-9-])`, "i"),
      `${openaiPath} default_prompt must invoke exact $${skillName}`,
    );
    assert.match(
      openai,
      /^\s*allow_implicit_invocation:\s*true\s*$/m,
      `${openaiPath} must allow implicit invocation`,
    );
  });
}

test("the central industry taxonomy enforces the two-level query contract", async () => {
  const taxonomy = JSON.parse(
    await readPluginFile("skills/chany-reference-board/references/industry-taxonomy.json"),
  );

  assert.equal(taxonomy.schemaVersion, 1);
  assert.equal(taxonomy.queryPolicy?.maxTaxonomyDepth, 2);
  assert.equal(taxonomy.queryPolicy?.maxSemanticQueries, 2);
  assert.ok(Array.isArray(taxonomy.domains), "taxonomy.domains must be an array");

  const requestedMappings = taxonomy.domains
    .map((domain) => domain.industrySkill)
    .filter((skillName) => industrySkills.includes(skillName));
  assert.deepEqual(
    requestedMappings.toSorted(),
    industrySkills.toSorted(),
    "taxonomy must map each of the 11 industry skills exactly once",
  );

  const invalidIndustryMappings = taxonomy.domains
    .filter((domain) => domain.industrySkill !== null && !industrySkills.includes(domain.industrySkill))
    .map((domain) => `${domain.id}:${domain.industrySkill}`);
  assert.deepEqual(
    invalidIndustryMappings,
    [],
    "non-null industrySkill values must refer only to canonical industry overlays",
  );
  const fashion = taxonomy.domains.find((domain) => domain.id === "fashion");
  assert.equal(fashion?.industrySkill, null);
  assert.equal(fashion?.productionSkill, "chany-model-fashion");

  for (const domain of taxonomy.domains) {
    assert.ok(
      Array.isArray(domain.branches) && domain.branches.length > 0,
      `taxonomy domain ${domain.id} must contain branches`,
    );

    for (const [branchIndex, branch] of domain.branches.entries()) {
      const branchLabel = `${domain.id}.branches[${branchIndex}]`;
      assert.equal(typeof branch.l1, "string", `${branchLabel}.l1 must be a string`);
      assert.ok(branch.l1.trim(), `${branchLabel}.l1 must not be empty`);
      assert.equal(typeof branch.medium, "string", `${branchLabel}.medium must be a string`);
      assert.ok(branch.medium.trim(), `${branchLabel}.medium must not be empty`);
      assert.ok(
        Array.isArray(branch.l2Examples) && branch.l2Examples.length > 0,
        `${branchLabel}.l2Examples must be a non-empty array`,
      );
      for (const [exampleIndex, example] of branch.l2Examples.entries()) {
        assert.equal(
          typeof example,
          "string",
          `${branchLabel}.l2Examples[${exampleIndex}] must be a string`,
        );
        assert.ok(
          example.trim(),
          `${branchLabel}.l2Examples[${exampleIndex}] must not be empty`,
        );
      }
    }
  }
});

test("industry skill reference routes use only their central taxonomy labels", async () => {
  const taxonomy = JSON.parse(
    await readPluginFile("skills/chany-reference-board/references/industry-taxonomy.json"),
  );

  for (const domain of taxonomy.domains.filter((item) => industrySkills.includes(item.industrySkill))) {
    const skillPath = `skills/${domain.industrySkill}/SKILL.md`;
    const playbookPath = `skills/${domain.industrySkill}/references/domain-playbook.md`;
    const combined = [
      await readPluginFile(skillPath),
      await readPluginFile(playbookPath),
    ].join("\n");

    for (const branch of domain.branches) {
      assert.ok(combined.includes(branch.l1), `${skillPath} must use central L1 ${branch.l1}`);
      for (const l2 of branch.l2Examples) {
        assert.ok(combined.includes(l2), `${skillPath} must use central L2 ${l2}`);
      }
    }
  }
});

test("healthcare permits draft production but hard-blocks publication without named review", async () => {
  const healthcare = await readPluginFile("skills/chany-healthcare-marketing/SKILL.md");

  assert.match(healthcare, /draft production/i);
  assert.match(healthcare, /publication/i);
  assert.match(healthcare, /named.+human reviewer|named.+qualified reviewer/i);
  assert.doesNotMatch(
    healthcare,
    /return only the packet[^\n]*named/i,
    "missing reviewer must not stop draft creative production",
  );
});

test("routing lists every industry skill", async () => {
  const routing = await readPluginFile("skills/chany-studio/references/routing.md");

  for (const skillName of industrySkills) {
    assert.ok(routing.includes(skillName), `routing.md must include ${skillName}`);
  }
});

test("production handoffs consume the canonical safety-critical industry fields", async () => {
  const consumers = [
    "skills/chany-marketing-brief/references/brief-schema.md",
    "skills/chany-campaign-visual/references/visual-production.md",
    "skills/chany-detail-page/references/detail-page-system.md",
    "skills/chany-ad-creative/references/ad-formats.md",
    "skills/chany-ugc-ads/references/ugc-production.md",
  ];
  const fields = [
    "message_job",
    "proof_objects",
    "must_capture",
    "directing_rules",
    "required_disclosures",
    "prohibited_or_high_risk",
    "human_review_gate",
  ];

  for (const consumer of consumers) {
    const content = await readPluginFile(consumer);
    for (const field of fields) {
      assert.ok(content.includes(field), `${consumer} must consume ${field}`);
    }
  }
});

test("reference search policy requires L1 first, at most one L2, and no third query", async () => {
  const searchPolicy = await readPluginFile(
    "skills/chany-reference-board/references/search-policy.md",
  );

  assert.match(searchPolicy, /run the branch's exact `l1` query first/i);
  assert.match(searchPolicy, /run at most one exact `l2Examples` value/i);
  assert.match(
    searchPolicy,
    /exactly one L1 broad category and zero or one direct L2 subtype/i,
  );
  assert.match(
    searchPolicy,
    /Do not retry with a narrower phrase/i,
    "search-policy.md must prohibit a third semantic query",
  );
});

test("reference discovery is Pinterest-only and completes only with six visible finalists", async () => {
  const [skill, policy, contract, ui, taxonomyText] = await Promise.all([
    readPluginFile("skills/chany-reference-board/SKILL.md"),
    readPluginFile("skills/chany-reference-board/references/search-policy.md"),
    readPluginFile("skills/chany-reference-board/references/reference-search-mcp-contract.md"),
    readPluginFile("skills/chany-reference-board/agents/openai.yaml"),
    readPluginFile("skills/chany-reference-board/references/industry-taxonomy.json"),
  ]);
  const taxonomy = JSON.parse(taxonomyText);

  assert.deepEqual(taxonomy.providers, ["Pinterest"]);
  assert.equal(taxonomy.queryPolicy.maxTaxonomyDepth, 2);
  assert.equal(taxonomy.queryPolicy.maxSemanticQueries, 2);
  const generalProduct = taxonomy.domains.find((domain) => domain.id === "general-product");
  const cosmetics = generalProduct.branches.find(
    (branch) => branch.l1 === "Cosmetic Photography",
  );
  const products = generalProduct.branches.find(
    (branch) => branch.l1 === "Product Photography",
  );
  assert.ok(cosmetics.l2Examples.includes("Lipstick Photography"));
  assert.ok(cosmetics.l2Examples.includes("Serum Photography"));
  assert.ok(!products.l2Examples.includes("Cosmetic Photography"));
  const queryPairTable = policy
    .split("| Input | Broad query | Direct-subtype query |", 2)[1]
    .split("Additional valid pairs", 1)[0];
  const documentedPairs = [...queryPairTable.matchAll(/^\|\s*[^|]+\|\s*([^|]+)\|\s*([^|]+)\|$/gm)]
    .map((match) => [match[1].trim(), match[2].trim()])
    .filter(([l1]) => !l1.startsWith("---"));
  const taxonomyPairs = new Set(
    taxonomy.domains.flatMap((domain) =>
      domain.branches.flatMap((branch) =>
        branch.l2Examples.map((l2) => `${branch.l1} -> ${l2}`),
      ),
    ),
  );
  for (const [l1, l2] of documentedPairs) {
    assert.ok(taxonomyPairs.has(`${l1} -> ${l2}`), `${l1} -> ${l2} must exist in taxonomy`);
  }
  assert.doesNotMatch([skill, policy, contract, ui].join("\n"), /Behance/i);
  assert.match(policy, /maximum of two search calls/i);
  assert.match(policy, /Select exactly six distinct Pinterest candidates/i);
  assert.match(skill, /Six successful visible results are required/i);
  assert.match(contract, /each candidate is submitted at most once/i);
  assert.match(contract, /Do not[^.]*ask the user to choose[^.]*begin paid production/i);
});

test("the Chany project skill detects Moai context but gates same-request execution by host capability", async () => {
  const [projectSkill, moaiChain] = await Promise.all([
    readPluginFile("skills/chany-project/SKILL.md"),
    readPluginFile("skills/chany-project/references/moai-chain.md"),
  ]);

  assert.match(projectSkill, /references\/moai-chain\.md/i);
  assert.match(projectSkill, /`\/project` Moai-owned/i);
  assert.match(projectSkill, /`\/project-studio` Chany-owned/i);
  assert.match(projectSkill, /Never edit `\.moai\/\*\*`/i);

  assert.match(moaiChain, /`\/project` belongs to Moai/i);
  assert.match(moaiChain, /`\/project-studio` belongs to Chany's Studio/i);
  assert.match(moaiChain, /`\.moai\/\*\*` files are upstream, read-only context/i);
  assert.match(moaiChain, /conditional on both plugins being installed and visible/i);
  assert.match(moaiChain, /manual two-step flow is the portable fallback across runtimes/i);
  assert.match(moaiChain, /installed directory, documentation mention, or skill name alone is insufficient/i);
  assert.match(projectSkill, /\*\*setup\*\* is the default\. Detect and reuse valid Moai records/i);
  assert.match(projectSkill, /in-process callable mechanism/i);

  const claude = moaiChain.match(/^- Claude Cowork:.*$/m)?.[0] ?? "";
  const chatgpt = moaiChain.match(/^- ChatGPT Work:.*$/m)?.[0] ?? "";
  const codex = moaiChain.match(/^- Codex:.*$/m)?.[0] ?? "";
  assert.match(claude, /`\/project <description>`.*`\/project-studio <advertising scope>`/i);
  assert.match(chatgpt, /Moai skill.*`project <description>`.*`@chany-project`/i);
  assert.match(codex, /`\$moai project <description>`.*`\$chany-project`/i);
});
