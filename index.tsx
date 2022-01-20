import React, { useEffect, useState } from 'react';

import ReactDom from 'react-dom';

type NodeTestResults = { node: string; npm: string };

const NodeTest = ({
  results,
}: {
  results: NodeTestResults | { error: string };
}) => (
  <>
    {'error' in results ? (
      <li>
        <p>❌ Got an error while trying to get results of Node.js test.</p>
        <code style={{ color: 'red' }}>{results.error}</code>
      </li>
    ) : (
      <>
        <li>
          {results.node
            ? `✅ You have Node.js version: ${results.node}`
            : '❌ Cannot retrieve Node.js version. There could be problem with running node.js scripts on your machine'}
        </li>
        <li>
          {results.npm
            ? `✅ You have npm version: ${results.npm}`
            : '❌ Cannot retrieve npm version. There could be problem with running node.js scripts on your machine'}
        </li>
      </>
    )}
  </>
);

const Check = () => {
  const [testResults, setTestResults] = useState<
    NodeTestResults | { error: string } | null
  >(null);

  useEffect(() => {
    try {
      // this file has to exist, since Parcel statically analyze the code in search for dynamic modules
      import('./data/node-test-result.json')
        .then((results) => setTestResults(results))
        .catch((error) => setTestResults({ error }));
    } catch {}
  }, []);

  return (
    <>
      <ul>
        <li>
          ✅ You have access to npm registries, can install packages and run
          basic Parcel &amp; React example (you see this, so it works 😉)
        </li>
        {testResults ? (
          <NodeTest results={testResults} />
        ) : (
          <li>Node.js setup test still running...</li>
        )}
      </ul>
    </>
  );
};

ReactDom.render(<Check />, document.getElementById('root'));
