import isValidCommitMessage from "../isValidCommitMesage";

test("should be able to correctly validate the commit message", () => {
    expect(isValidCommitMessage("chore(nice-one): doing this right")).toBe(true);
    expect(isValidCommitMessage("fix: menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("something: should not work")).toBe(false);
    expect(isValidCommitMessage("fixes something")).toBe(false);
    expect(isValidCommitMessage("🚧 fix: menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("fix(menus): menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("🚧 fix(menus): menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("🚧 fixing something")).toBe(false);
    expect(isValidCommitMessage("🚧 something: should not work")).toBe(false);
    expect(isValidCommitMessage("chorz: 123")).toBe(false);
    expect(isValidCommitMessage("perf: some performance improvement")).toBe(true);
    expect(isValidCommitMessage("perf(api): some performance improvement")).toBe(true);
});
