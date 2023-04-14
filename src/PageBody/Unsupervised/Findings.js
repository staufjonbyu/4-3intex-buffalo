import React from "react";

function Findings(props) {
  return (
    <>
      <div>
        <h2>Cluster Analysis Explained</h2>
        <ul className="p-3">
          <li className="p-2">
            We see that as the burials got deeper that{" "}
            <strong>Linen Textiles</strong> was used more often that{" "}
            <strong>Wool Textiles</strong>. In the depth of 0-0.5 Wool is used
            about 75% of the time and Linen about 25%. In depth of 0.5-2, it
            flips. Linen is 75% and Wool is 25%.
          </li>
          <li className="p-2">
            In further analysis, we also see that <strong>Females</strong> that
            were found in burials were the ones found with more colorful and
            decorative materials. In the clusters with mostly females, like 1
            and 2, we see materials like <strong>Purple Weft Threads</strong>,{" "}
            <strong>Decorative Thread</strong>, and <strong>Ribbons</strong>.
          </li>
          <li className="p-3">
            As we looked further into the specific of{" "}
            <strong>Head Direction</strong>, we noticed that the most common
            direction was West. But with Cluster 2, the main head direction we
            see is <strong>East</strong>. This cluster we have{" "}
            <strong>Brown and Red Hair Colors</strong>, had a varied depth, and
            had a majority of <strong>Females</strong>. This could possibly mean
            that women with colored hair might have had the majority of{" "}
            <strong>East Head Direction</strong>.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Findings;
