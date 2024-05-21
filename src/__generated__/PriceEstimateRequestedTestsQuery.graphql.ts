/**
 * @generated SignedSource<<bbf04f82e7bad2da7b0568fd158043ac>>
 * @relayHash d30c3ded6f95df6f7bb116c7c0bc22fd
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d30c3ded6f95df6f7bb116c7c0bc22fd

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PriceEstimateRequestedTestsQuery$variables = Record<PropertyKey, never>;
export type PriceEstimateRequestedTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_artwork">;
  } | null | undefined;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_me">;
  } | null | undefined;
};
export type PriceEstimateRequestedTestsQuery = {
  response: PriceEstimateRequestedTestsQuery$data;
  variables: PriceEstimateRequestedTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PriceEstimateRequestedTestsQuery",
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
            "name": "RequestForPriceEstimateBanner_artwork"
          }
        ],
        "storageKey": "artwork(id:\"foo\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RequestForPriceEstimateBanner_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PriceEstimateRequestedTestsQuery",
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
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasPriceEstimateRequest",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceEstimateRequestable",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"foo\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "d30c3ded6f95df6f7bb116c7c0bc22fd",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.hasPriceEstimateRequest": (v2/*: any*/),
        "artwork.id": (v3/*: any*/),
        "artwork.internalID": (v3/*: any*/),
        "artwork.isPriceEstimateRequestable": (v2/*: any*/),
        "artwork.slug": (v3/*: any*/),
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.email": (v4/*: any*/),
        "me.id": (v3/*: any*/),
        "me.name": (v4/*: any*/),
        "me.phone": (v4/*: any*/)
      }
    },
    "name": "PriceEstimateRequestedTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "5f30f69d53da2660a65bc3c57e6330ce";

export default node;
