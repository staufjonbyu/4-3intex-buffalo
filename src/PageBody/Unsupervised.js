import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

function Unsupervised() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <>
      {authStatus !== "authenticated" ? (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <table className="table table-striped table-hover table-bordered table-active">
                <thead>
                  <tr>
                    <td>Cluster</td>
                    <td>Total</td>
                    <td>Wrapping</td>
                    <td>Sex</td>
                    <td>Depth</td>
                    <td>Head Direction</td>
                    <td>Hair Color</td>
                    <td>Thickness</td>
                    <td>Material</td>
                    <td>Component</td>
                    <td>Ply</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>291</td>
                    <td>W (100%)</td>
                    <td>0.56-1.9</td>
                    <td>W (95%), E (5%)</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                    <td>
                      F (30%), M (25%), F-M (12%), VF (10%), Fine (5%), Medium
                      (5%), Other (10%)
                    </td>
                    <td>Linen (75%), Wool (25%)</td>
                    <td>
                      Main Body (34%), Clavi (15%), Decorative Threads (13%),
                      Ribbon 2 (13%), Ribbon 3 (13%), Purple Weft Threads (10%),
                      Other (5%)
                    </td>
                    <td>S (98%), D (2%)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>65</td>
                    <td>W (53%),B (40%), S (7%)</td>
                    <td>F (68%), M (32%)</td>
                    <td>0.7-2.312</td>
                    <td>E</td>
                    <td>B (75%), R (25%)</td>
                    <td>2.5 (100%)</td>
                    <td>Linen(50%), Wool (50%)</td>
                    <td>Inserted Red Wool Weft Threads (50%), Fringe (50%)</td>
                    <td>U (100%)</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>103</td>
                    <td>B (100%)</td>
                    <td>U (100%)</td>
                    <td>.4</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                    <td>Medium (75%), Fine (50%)</td>
                    <td>Wool (75%), Linen (25%)</td>
                    <td>
                      Main (50%) Band (25%), 1 piece (13%), 4 pieces (12%)
                    </td>
                    <td>S (100%)</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>141</td>
                    <td>W (91%), B (5%) S (3%)</td>
                    <td>M (66%) F (33%)</td>
                    <td>0.7-1</td>
                    <td>U (100%)</td>
                    <td>B (51%), R (43%), K (6%)</td>
                    <td>Varied (100%)</td>
                    <td>
                      Linen (49%), Wool (30%), Linen - very loosely spU (100%)n
                      (3%), BU (100%)rlap (3%), Vegetable fiber (3%), Linen -
                      red (3%)
                    </td>{" "}
                    <td>Ribbon 1 (100%)</td>
                    <td>1 (98%) 2 (2%)</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>21</td>
                    <td>W (100%)</td>
                    <td>U (100%)</td>
                    <td>1.12-1.27</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                    <td>M (33.33),F-M (22%), F (22%), VF (22%)</td>
                    <td>Linen (89%) Wool (11%)</td>
                    <td>
                      Colored Band (25%), Both (25%), Fragment 2 (25%),
                      Fragment1 (25%)
                    </td>
                    <td>S (100%)</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>125</td>
                    <td>W (90%), B (5%), H (5%)</td>
                    <td>M (100%)</td>
                    <td>0.9-1.9</td>
                    <td>W (100%)</td>
                    <td>B (100%)</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                    <td>U (100%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p></p>
          </div>
        </div>
      ) : (
        <div>
          <p>...</p>
        </div>
      )}
    </>
  );
}

export default Unsupervised;
