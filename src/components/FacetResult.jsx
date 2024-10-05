import React from 'react';

const FacetResult = ({score, description, HIGH_SCORE_THRESHOLD, LOW_SCORE_THRESHOLD }) => {
  return (
    <li>
      <h3>{description.name} (スコア: {score.toFixed(2)})</h3>
      {score >= HIGH_SCORE_THRESHOLD && (
        <p>スコアが高い場合の具体例: {description.highScoreExample}</p>
      )}
      {score < LOW_SCORE_THRESHOLD && (
        <p>スコアが低い場合の具体例: {description.lowScoreExample}</p>
      )}
    </li>
  );
};

export default FacetResult;
