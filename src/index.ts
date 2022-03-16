import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function main() {
  const target = core.getInput('target');
  const output = core.getInput('output');
  const hostingPath = core.getInput('hosting-path');
  const disableIndexing = core.getBooleanInput('disable-indexing');
  const transformForStaticHosting = core.getBooleanInput('transform-for-static-hosting');

  await exec.exec('swift', [
    'package',
    ...(output.length ? ['--allow-writing-to-directory', output] : []),
    'generate-documentation',
    ...(target.length ? ['--target', target] : []),
    ...(output.length ? ['--output-path', output] : []),
    ...(hostingPath.length ? ['--hosting-path', hostingPath] : []),
    ...(disableIndexing ? ['--disable-indexing'] : []),
    ...(transformForStaticHosting ? ['--transform-for-static-hosting'] : []),
  ]);
}

(async () => {
  try {
    await main();
  } catch (error: any) {
    core.setFailed(error);
  }
})();
