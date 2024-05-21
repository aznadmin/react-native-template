/**
 * @generated SignedSource<<1cc2aa2380ae5a832ec31a31da100cd9>>
 * @relayHash 03b131684a1d34a30ed421f4be56a893
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 03b131684a1d34a30ed421f4be56a893

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MedianSalePriceChartDataContextProviderRefetchQuery$variables = {
  artistID: string;
  artistId: string;
  endYear?: string | null | undefined;
  startYear?: string | null | undefined;
};
export type MedianSalePriceChartDataContextProviderRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MedianSalePriceChartDataContextProvider_query">;
};
export type MedianSalePriceChartDataContextProviderRefetchQuery = {
  response: MedianSalePriceChartDataContextProviderRefetchQuery$data;
  variables: MedianSalePriceChartDataContextProviderRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "endYear"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "startYear"
  }
],
v1 = {
  "kind": "Variable",
  "name": "artistId",
  "variableName": "artistId"
},
v2 = {
  "kind": "Variable",
  "name": "endYear",
  "variableName": "endYear"
},
v3 = {
  "kind": "Variable",
  "name": "startYear",
  "variableName": "startYear"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MedianSalePriceChartDataContextProviderRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "artistID",
            "variableName": "artistID"
          },
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "MedianSalePriceChartDataContextProvider_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MedianSalePriceChartDataContextProviderRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "concreteType": "CalendarYearPriceInsights",
        "kind": "LinkedField",
        "name": "analyticsCalendarYearPriceInsights",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CalendarYearMarketPriceInsights",
            "kind": "LinkedField",
            "name": "calendarYearMarketPriceInsights",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePrice",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSold",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          (v1/*: any*/)
        ],
        "concreteType": "PriceInsightConnection",
        "kind": "LinkedField",
        "name": "priceInsights",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketPriceInsights",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSoldLast36Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSoldLast96Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePriceLast36Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePriceLast96Months",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "artistId",
            "variableName": "artistID"
          },
          {
            "kind": "Literal",
            "name": "last",
            "value": 9
          }
        ],
        "concreteType": "AnalyticsArtistSparklineConnection",
        "kind": "LinkedField",
        "name": "analyticsArtistSparklines",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AnalyticsArtistSparklineEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AnalyticsArtistSparkline",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sparkles",
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "03b131684a1d34a30ed421f4be56a893",
    "metadata": {},
    "name": "MedianSalePriceChartDataContextProviderRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "9150ecb33c21cdf05e286d718cd728ac";

export default node;
