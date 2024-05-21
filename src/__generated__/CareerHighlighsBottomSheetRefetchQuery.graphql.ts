/**
 * @generated SignedSource<<66dd33e2bf5087288f3d75d28ef0b718>>
 * @relayHash 9d707c9d76509179862939401642e990
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9d707c9d76509179862939401642e990

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CareerHighlighsBottomSheetRefetchQuery$variables = {
  artistID: string;
};
export type CareerHighlighsBottomSheetRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBottomSheet_query">;
};
export type CareerHighlighsBottomSheetRefetchQuery = {
  response: CareerHighlighsBottomSheetRefetchQuery$data;
  variables: CareerHighlighsBottomSheetRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CareerHighlighsBottomSheetRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "artistID",
            "variableName": "artistID"
          }
        ],
        "kind": "FragmentSpread",
        "name": "CareerHighlightBottomSheet_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CareerHighlighsBottomSheetRefetchQuery",
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
    ]
  },
  "params": {
    "id": "9d707c9d76509179862939401642e990",
    "metadata": {},
    "name": "CareerHighlighsBottomSheetRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "30714571705b6588026c10afa483ca62";

export default node;
