/**
 * @generated SignedSource<<4f907a9f59432ffa90450cfbe28ac5da>>
 * @relayHash e35a44a776f2bda3a876d493b3d6b801
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e35a44a776f2bda3a876d493b3d6b801

import { ConcreteRequest, Query } from 'relay-runtime';
export type MyCollectionArtworkFormArtworkQuery$variables = {
  artworkID: string;
};
export type MyCollectionArtworkFormArtworkQuery$data = {
  readonly artwork: {
    readonly attributionClass: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly category: string | null | undefined;
    readonly date: string | null | undefined;
    readonly depth: string | null | undefined;
    readonly editionNumber: string | null | undefined;
    readonly editionSize: string | null | undefined;
    readonly height: string | null | undefined;
    readonly images: ReadonlyArray<{
      readonly height: number | null | undefined;
      readonly imageURL: string | null | undefined;
      readonly isDefault: boolean | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined> | null | undefined;
    readonly isEdition: boolean | null | undefined;
    readonly medium: string | null | undefined;
    readonly metric: string | null | undefined;
    readonly title: string | null | undefined;
    readonly width: string | null | undefined;
  } | null | undefined;
};
export type MyCollectionArtworkFormArtworkQuery = {
  response: MyCollectionArtworkFormArtworkQuery$data;
  variables: MyCollectionArtworkFormArtworkQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionSize",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionNumber",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "images",
  "plural": true,
  "selections": [
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageURL",
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEdition",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v15 = {
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
    "name": "MyCollectionArtworkFormArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyCollectionArtworkFormArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v8/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "e35a44a776f2bda3a876d493b3d6b801",
    "metadata": {},
    "name": "MyCollectionArtworkFormArtworkQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "239b391a8e94883b150f43d91c9e8ea5";

export default node;
