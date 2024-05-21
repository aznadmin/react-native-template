/**
 * @generated SignedSource<<302a9409f8537b938be71fb894f6ac7c>>
 * @relayHash 43e43bf32fc53d9c025ddd435db22481
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 43e43bf32fc53d9c025ddd435db22481

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionArtworkCaptionTestQuery$variables = Record<PropertyKey, never>;
export type ArticleSectionArtworkCaptionTestQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionArtworkCaption_artwork">;
  } | null | undefined;
};
export type ArticleSectionArtworkCaptionTestQuery = {
  response: ArticleSectionArtworkCaptionTestQuery$data;
  variables: ArticleSectionArtworkCaptionTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleSectionArtworkCaptionTestQuery",
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
            "name": "ArticleSectionArtworkCaption_artwork"
          }
        ],
        "storageKey": "artwork(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleSectionArtworkCaptionTestQuery",
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
          (v1/*: any*/),
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
            "name": "saleMessage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "shallow",
                "value": true
              }
            ],
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v1/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": "artists(shallow:true)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "id": "43e43bf32fc53d9c025ddd435db22481",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "artwork.artists.href": (v4/*: any*/),
        "artwork.artists.id": (v5/*: any*/),
        "artwork.artists.name": (v4/*: any*/),
        "artwork.date": (v4/*: any*/),
        "artwork.href": (v4/*: any*/),
        "artwork.id": (v5/*: any*/),
        "artwork.internalID": (v5/*: any*/),
        "artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.partner.href": (v4/*: any*/),
        "artwork.partner.id": (v5/*: any*/),
        "artwork.partner.name": (v4/*: any*/),
        "artwork.saleMessage": (v4/*: any*/),
        "artwork.title": (v4/*: any*/)
      }
    },
    "name": "ArticleSectionArtworkCaptionTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "fe0a906a87860ffbb7ad0e441b59cd2b";

export default node;
