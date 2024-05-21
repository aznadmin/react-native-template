/**
 * @generated SignedSource<<739e9c7f876b21bf43e155e9e4387a31>>
 * @relayHash 8f551ea145dbf7654809ce974418bf61
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 8f551ea145dbf7654809ce974418bf61

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleShareButtonTestQuery$variables = Record<PropertyKey, never>;
export type ArticleShareButtonTestQuery$data = {
  readonly article: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleShareButton_article">;
  } | null | undefined;
};
export type ArticleShareButtonTestQuery = {
  response: ArticleShareButtonTestQuery$data;
  variables: ArticleShareButtonTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleShareButtonTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArticleShareButton_article"
          }
        ],
        "storageKey": "article(id:\"foo\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleShareButtonTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
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
            "name": "href",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "article(id:\"foo\")"
      }
    ]
  },
  "params": {
    "id": "8f551ea145dbf7654809ce974418bf61",
    "metadata": {},
    "name": "ArticleShareButtonTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b273d21261c14f23e41c3be0142430a9";

export default node;
