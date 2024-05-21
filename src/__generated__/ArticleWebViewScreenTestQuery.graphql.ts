/**
 * @generated SignedSource<<144994f124bb62101ba4e0556fecf375>>
 * @relayHash 1cfd49ac955b310881cba5de68ac11be
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 1cfd49ac955b310881cba5de68ac11be

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleWebViewScreenTestQuery$variables = Record<PropertyKey, never>;
export type ArticleWebViewScreenTestQuery$data = {
  readonly article: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleWebViewScreen_article">;
  } | null | undefined;
};
export type ArticleWebViewScreenTestQuery = {
  response: ArticleWebViewScreenTestQuery$data;
  variables: ArticleWebViewScreenTestQuery$variables;
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
    "name": "ArticleWebViewScreenTestQuery",
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
            "name": "ArticleWebViewScreen_article"
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
    "name": "ArticleWebViewScreenTestQuery",
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
            "name": "href",
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
    "id": "1cfd49ac955b310881cba5de68ac11be",
    "metadata": {},
    "name": "ArticleWebViewScreenTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "51f5ef33ec08a159e9e4391e393cf888";

export default node;
