/**
 * @generated SignedSource<<84fc7a78104d96b8fb43dbe92d4ea490>>
 * @relayHash 7c4c7bc341cc2b70c4af7d996dfef445
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7c4c7bc341cc2b70c4af7d996dfef445

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkMakerTitle_Test_Query$variables = Record<PropertyKey, never>;
export type ArtworkMakerTitle_Test_Query$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkMakerTitle_artwork">;
  } | null | undefined;
};
export type ArtworkMakerTitle_Test_Query = {
  response: ArtworkMakerTitle_Test_Query$data;
  variables: ArtworkMakerTitle_Test_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-artwork"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkMakerTitle_Test_Query",
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
            "name": "ArtworkMakerTitle_artwork"
          }
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkMakerTitle_Test_Query",
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
            "name": "culturalMaker",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
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
                "name": "href",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ]
  },
  "params": {
    "id": "7c4c7bc341cc2b70c4af7d996dfef445",
    "metadata": {},
    "name": "ArtworkMakerTitle_Test_Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b72105622512752776650d24a8b93cff";

export default node;
