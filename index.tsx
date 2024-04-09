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
    let tries = 0;
    const interval = setInterval(async () => {
      try {
        const results = await import('./data/node-test-result.json');
        tries++;

        if (Object.keys(results).length > 0) {
          setResults(results);
        } else if (tries >= 50) {
          setResults({
            error: 'Exceeded number of attempts. Please check your environment',
          });
        }
      } catch (error) {
        setResults({ error: error as string });
      }
    }, 100);

    const clear = () => clearInterval(interval);
    const setResults = (results: typeof testResults) => {
      setTestResults(results);
      clear();
    };

    return clear;
  }, []);

  return (
    <>
      <ul>
        <li>
          ✅ You have access to npm registries, can install packages and run
          basic Vite &amp; React example (if see this it works 😉)
        </li>
        {testResults ? (
          <NodeTest results={testResults} />
        ) : (
          <li> Node.js setup test is still 🏃 running...</li>
        )}
      </ul>
    </>
  );
};

ReactDom.render(<Check />, document.getElementById('root'));
