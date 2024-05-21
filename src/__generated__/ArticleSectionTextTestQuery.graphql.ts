/**
 * @generated SignedSource<<ad08b817a466cf894ac1c42ecbe534a0>>
 * @relayHash 2746d13d7982f1dc8e97139bd70f4f4e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2746d13d7982f1dc8e97139bd70f4f4e

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionTextTestQuery$variables = Record<PropertyKey, never>;
export type ArticleSectionTextTestQuery$data = {
  readonly article: {
    readonly sections: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionText_section">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionText_article">;
  } | null | undefined;
};
export type ArticleSectionTextTestQuery = {
  response: ArticleSectionTextTestQuery$data;
  variables: ArticleSectionTextTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "article-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v2 = {
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
    "name": "ArticleSectionTextTestQuery",
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
            "name": "ArticleSectionText_article"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "sections",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ArticleSectionText_section"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "article(id:\"article-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleSectionTextTestQuery",
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
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "sections",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionText",
                "abstractKey": null
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
        "storageKey": "article(id:\"article-id\")"
      }
    ]
  },
  "params": {
    "id": "2746d13d7982f1dc8e97139bd70f4f4e",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "article": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "article.id": (v1/*: any*/),
        "article.internalID": (v1/*: any*/),
        "article.sections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSections"
        },
        "article.sections.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "article.sections.body": (v2/*: any*/),
        "article.slug": (v2/*: any*/)
      }
    },
    "name": "ArticleSectionTextTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "48c92ea543165962ebad49c6472131b5";

export default node;
