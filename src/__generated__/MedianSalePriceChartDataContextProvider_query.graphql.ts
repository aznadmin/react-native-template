/**
 * @generated SignedSource<<ee9d51b04421f549efdaf11d66ba2cda>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MedianSalePriceChartDataContextProvider_query$data = {
  readonly analyticsArtistSparklines: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly sparkles: any | null | undefined;
        readonly year: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly analyticsCalendarYearPriceInsights: ReadonlyArray<{
    readonly calendarYearMarketPriceInsights: ReadonlyArray<{
      readonly lotsSold: any | null | undefined;
      readonly medianSalePrice: any | null | undefined;
      readonly year: string;
    }> | null | undefined;
    readonly medium: string;
  }> | null | undefined;
  readonly priceInsights: {
    readonly nodes: ReadonlyArray<{
      readonly lotsSoldLast36Months: number | null | undefined;
      readonly lotsSoldLast96Months: number | null | undefined;
      readonly medianSalePriceLast36Months: any | null | undefined;
      readonly medianSalePriceLast96Months: any | null | undefined;
      readonly medium: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MedianSalePriceChartDataContextProvider_query";
};
export type MedianSalePriceChartDataContextProvider_query$key = {
  readonly " $data"?: MedianSalePriceChartDataContextProvider_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"MedianSalePriceChartDataContextProvider_query">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "artistId",
  "variableName": "artistId"
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
};
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./MedianSalePriceChartDataContextProviderRefetchQuery.graphql')
    }
  },
  "name": "MedianSalePriceChartDataContextProvider_query",
  "selections": [
    {
      "alias": null,
      "args": [
        (v0/*: any*/),
        {
          "kind": "Variable",
          "name": "endYear",
          "variableName": "endYear"
        },
        {
          "kind": "Variable",
          "name": "startYear",
          "variableName": "startYear"
        }
      ],
      "concreteType": "CalendarYearPriceInsights",
      "kind": "LinkedField",
      "name": "analyticsCalendarYearPriceInsights",
      "plural": true,
      "selections": [
        (v1/*: any*/),
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
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lotsSold",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        (v0/*: any*/)
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
            (v1/*: any*/),
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
            }
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
                (v2/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "9150ecb33c21cdf05e286d718cd728ac";

export default node;
