const { spawnSync } = require('child_process');
const fs = require('fs');

const rssData = fs.readFileSync(`${__dirname}/public/rss.xml`, { encoding: 'utf-8' });
fs.writeFileSync(`${__dirname}/public/rss`, rssData);


function getRepo() {
	const remotes = spawnSync("git", ["remote", "-v"])
		.stdout.toString()
		.split("\n")
		.map(l => l.trim())
		.filter(l => /origin/.test(l) && /push/.test(l));
	if (!remotes.length)
		throw new Error("couldn't find any Git remotes named 'origin'");
	return remotes[0].split(/\s+/)[1];
}
function getHead() {
	return spawnSync("git", ["rev-parse", "HEAD"]).stdout.toString().trim();
}
function getVersion() {
	return spawnSync("./version.sh").stdout.toString().trim();
}
const GIT_REPO = getRepo();
const GIT_HEAD = getHead();
const VERSION = getVersion();


fs.writeFileSync(`${__dirname}/public/version.html`, `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Orchid</title>
</head>
<body>
<pre>
Git Repository: ${GIT_REPO}
Deployed Hash: ${GIT_HEAD}
Version: ${VERSION}
</pre>
</body>
</html>`);
