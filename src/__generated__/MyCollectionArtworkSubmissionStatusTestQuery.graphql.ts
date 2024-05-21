/**
 * @generated SignedSource<<b43556ea4e594c5a1d1c334836adc094>>
 * @relayHash 45ea4e5c43f5a1fc1c1ba3768be3153b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 45ea4e5c43f5a1fc1c1ba3768be3153b

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkSubmissionStatusTestQuery$variables = Record<PropertyKey, never>;
export type MyCollectionArtworkSubmissionStatusTestQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkSubmissionStatus_submissionState">;
  } | null | undefined;
};
export type MyCollectionArtworkSubmissionStatusTestQuery = {
  response: MyCollectionArtworkSubmissionStatusTestQuery$data;
  variables: MyCollectionArtworkSubmissionStatusTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artwork-id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkSubmissionStatusTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkSubmissionStatus_submissionState"
          }
        ],
        "storageKey": "artwork(id:\"artwork-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionArtworkSubmissionStatusTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkConsignmentSubmission",
            "kind": "LinkedField",
            "name": "consignmentSubmission",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "state",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "stateLabel",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"artwork-id\")"
      }
    ]
  },
  "params": {
    "id": "45ea4e5c43f5a1fc1c1ba3768be3153b",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.consignmentSubmission": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConsignmentSubmission"
        },
        "artwork.consignmentSubmission.state": {
          "enumValues": [
            "APPROVED",
            "CLOSED",
            "DRAFT",
            "HOLD",
            "PUBLISHED",
            "REJECTED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "ArtworkConsignmentSubmissionState"
        },
        "artwork.consignmentSubmission.stateLabel": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "artwork.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "MyCollectionArtworkSubmissionStatusTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "35d82302585cc61e68bbdcccb6fa63e8";

export default node;
