module.exports = {
    branches: ["master", "next", "main", { name: 'beta', prerelease: true }],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/npm",
            {
                "npmPublish": false,
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": [
                    "docs/CHANGELOG.md",
                    "package.json",
                    "package-lock.json"
                ],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ]
    ],
    dryRun: false,
    ci: false
}