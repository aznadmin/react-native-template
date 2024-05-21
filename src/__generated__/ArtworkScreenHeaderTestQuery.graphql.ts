/**
 * @generated SignedSource<<e1236c1abdd5e80130e3cef7cee5186c>>
 * @relayHash d9124e383b8df9b6be01f6dfc913e976
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d9124e383b8df9b6be01f6dfc913e976

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkScreenHeaderTestQuery$variables = Record<PropertyKey, never>;
export type ArtworkScreenHeaderTestQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkScreenHeader_artwork">;
  } | null | undefined;
};
export type ArtworkScreenHeaderTestQuery$rawResponse = {
  readonly artwork: {
    readonly artists: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
    } | null | undefined> | null | undefined;
    readonly artistsArray: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly attributionClass: {
      readonly id: string;
      readonly internalID: string;
    } | null | undefined;
    readonly id: string;
    readonly internalID: string;
    readonly isEligibleToCreateAlert: boolean;
    readonly isForSale: boolean | null | undefined;
    readonly isInAuction: boolean | null | undefined;
    readonly mediumType: {
      readonly filterGene: {
        readonly id: string;
        readonly name: string | null | undefined;
        readonly slug: string;
      } | null | undefined;
    } | null | undefined;
    readonly sale: {
      readonly id: string;
      readonly isClosed: boolean | null | undefined;
      readonly startAt: string | null | undefined;
    } | null | undefined;
    readonly saleArtwork: {
      readonly endAt: string | null | undefined;
      readonly endedAt: string | null | undefined;
      readonly extendedBiddingEndAt: string | null | undefined;
      readonly id: string;
    } | null | undefined;
    readonly slug: string;
    readonly title: string | null | undefined;
  } | null | undefined;
};
export type ArtworkScreenHeaderTestQuery = {
  rawResponse: ArtworkScreenHeaderTestQuery$rawResponse;
  response: ArtworkScreenHeaderTestQuery$data;
  variables: ArtworkScreenHeaderTestQuery$variables;
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
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
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
    "name": "ArtworkScreenHeaderTestQuery",
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
            "name": "ArtworkScreenHeader_artwork"
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
    "name": "ArtworkScreenHeaderTestQuery",
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
            "name": "isEligibleToCreateAlert",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isInAuction",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": "artistsArray",
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkMedium",
            "kind": "LinkedField",
            "name": "mediumType",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Gene",
                "kind": "LinkedField",
                "name": "filterGene",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isForSale",
            "storageKey": null
          },
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
                "name": "isClosed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startAt",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "kind": "LinkedField",
            "name": "saleArtwork",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "extendedBiddingEndAt",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ]
  },
  "params": {
    "id": "d9124e383b8df9b6be01f6dfc913e976",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artists": (v6/*: any*/),
        "artwork.artists.id": (v7/*: any*/),
        "artwork.artists.internalID": (v7/*: any*/),
        "artwork.artistsArray": (v6/*: any*/),
        "artwork.artistsArray.id": (v7/*: any*/),
        "artwork.artistsArray.internalID": (v7/*: any*/),
        "artwork.artistsArray.name": (v8/*: any*/),
        "artwork.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artwork.attributionClass.id": (v7/*: any*/),
        "artwork.attributionClass.internalID": (v7/*: any*/),
        "artwork.id": (v7/*: any*/),
        "artwork.internalID": (v7/*: any*/),
        "artwork.isEligibleToCreateAlert": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artwork.isForSale": (v9/*: any*/),
        "artwork.isInAuction": (v9/*: any*/),
        "artwork.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "artwork.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "artwork.mediumType.filterGene.id": (v7/*: any*/),
        "artwork.mediumType.filterGene.name": (v8/*: any*/),
        "artwork.mediumType.filterGene.slug": (v7/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.id": (v7/*: any*/),
        "artwork.sale.isClosed": (v9/*: any*/),
        "artwork.sale.startAt": (v8/*: any*/),
        "artwork.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.saleArtwork.endAt": (v8/*: any*/),
        "artwork.saleArtwork.endedAt": (v8/*: any*/),
        "artwork.saleArtwork.extendedBiddingEndAt": (v8/*: any*/),
        "artwork.saleArtwork.id": (v7/*: any*/),
        "artwork.slug": (v7/*: any*/),
        "artwork.title": (v8/*: any*/)
      }
    },
    "name": "ArtworkScreenHeaderTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1be7244487eab0ade6c63271b5c03bb2";

export default node;
