/**
 * @generated SignedSource<<94bf5fec25e18e8bbf6da04aa112a153>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightBottomSheet_query$data = {
  readonly analyticsArtistSparklines: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly eventDigest: string | null | undefined;
        readonly sparkles: any | null | undefined;
        readonly year: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "CareerHighlightBottomSheet_query";
};
export type CareerHighlightBottomSheet_query$key = {
  readonly " $data"?: CareerHighlightBottomSheet_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBottomSheet_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "artistID"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./CareerHighlighsBottomSheetRefetchQuery.graphql')
    }
  },
  "name": "CareerHighlightBottomSheet_query",
  "selections": [
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
                  "name": "eventDigest",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "sparkles",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "year",
                  "storageKey": null
                }
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

(node as any).hash = "30714571705b6588026c10afa483ca62";

export default node;
