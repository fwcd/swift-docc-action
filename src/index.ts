import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function main() {
  const target = core.getInput('target');
  const output = core.getInput('output');
  const hostingBasePath = core.getInput('hosting-base-path');
  const disableIndexing = core.getInput('disable-indexing');
  const transformForStaticHosting = core.getInput('transform-for-static-hosting');

  await exec.exec('swift', [
    'package',
    ...(output.length ? ['--allow-writing-to-directory', output] : []),
    'generate-documentation',
    ...(target.length ? ['--target', target] : []),
    ...(output.length ? ['--output-path', output] : []),
    ...(hostingBasePath.length ? ['--hosting-base-path', hostingBasePath] : []),
    ...(disableIndexing === 'true' ? ['--disable-indexing'] : []),
    ...(transformForStaticHosting === 'true' ? ['--transform-for-static-hosting'] : []),
  ]);
}

(async () => {
  try {
    await main();
  } catch (error: any) {
    core.setFailed(error);
  }
})();
