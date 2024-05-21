/**
 * @generated SignedSource<<05a02b1d09f5b6040f58b9085f39b264>>
 * @relayHash 9027ac3d69b4aa2e01d92187adf06df3
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9027ac3d69b4aa2e01d92187adf06df3

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkActionsTestQuery$variables = Record<PropertyKey, never>;
export type ArtworkActionsTestQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkActions_artwork">;
  } | null | undefined;
};
export type ArtworkActionsTestQuery$rawResponse = {
  readonly artwork: {
    readonly artistNames: string | null | undefined;
    readonly customArtworkLists: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
    readonly date: string | null | undefined;
    readonly heightCm: number | null | undefined;
    readonly id: string;
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly isHangable: boolean | null | undefined;
    readonly isSaved: boolean | null | undefined;
    readonly preview: {
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly sale: {
      readonly id: string;
      readonly isAuction: boolean | null | undefined;
      readonly isClosed: boolean | null | undefined;
    } | null | undefined;
    readonly slug: string;
    readonly title: string | null | undefined;
    readonly widthCm: number | null | undefined;
  } | null | undefined;
};
export type ArtworkActionsTestQuery = {
  rawResponse: ArtworkActionsTestQuery$rawResponse;
  response: ArtworkActionsTestQuery$data;
  variables: ArtworkActionsTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork"
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
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkActionsTestQuery",
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
            "name": "ArtworkActions_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkActionsTestQuery",
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
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAuction",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isClosed",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/),
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
            "name": "isSaved",
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "artistNames",
            "storageKey": null
          },
          {
            "alias": "preview",
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "square"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"square\")"
              }
            ],
            "storageKey": null
          },
          {
            "alias": "customArtworkLists",
            "args": [
              {
                "kind": "Literal",
                "name": "default",
                "value": false
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 0
              },
              {
                "kind": "Literal",
                "name": "saves",
                "value": true
              }
            ],
            "concreteType": "CollectionsConnection",
            "kind": "LinkedField",
            "name": "collectionsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isHangable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "widthCm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heightCm",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ]
  },
  "params": {
    "id": "9027ac3d69b4aa2e01d92187adf06df3",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artistNames": (v2/*: any*/),
        "artwork.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "artwork.customArtworkLists.totalCount": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "artwork.date": (v2/*: any*/),
        "artwork.heightCm": (v3/*: any*/),
        "artwork.id": (v4/*: any*/),
        "artwork.image": (v5/*: any*/),
        "artwork.image.url": (v2/*: any*/),
        "artwork.internalID": (v4/*: any*/),
        "artwork.isHangable": (v6/*: any*/),
        "artwork.isSaved": (v6/*: any*/),
        "artwork.preview": (v5/*: any*/),
        "artwork.preview.url": (v2/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.id": (v4/*: any*/),
        "artwork.sale.isAuction": (v6/*: any*/),
        "artwork.sale.isClosed": (v6/*: any*/),
        "artwork.slug": (v4/*: any*/),
        "artwork.title": (v2/*: any*/),
        "artwork.widthCm": (v3/*: any*/)
      }
    },
    "name": "ArtworkActionsTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e780e090c88d7904819c6e34ad90eea7";

export default node;
