/**
 * @generated SignedSource<<710773c6398423731bb4c3c974bcbc9a>>
 * @relayHash d5bd1e958a3a6448cbb3dd245b0f3d10
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d5bd1e958a3a6448cbb3dd245b0f3d10

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSlideShowTestQuery$variables = Record<PropertyKey, never>;
export type ArticleSlideShowTestQuery$data = {
  readonly article: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShow_article">;
  } | null | undefined;
};
export type ArticleSlideShowTestQuery = {
  response: ArticleSlideShowTestQuery$data;
  variables: ArticleSlideShowTestQuery$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
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
      "name": "width",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "aspectRatio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": [
            "main",
            "normalized",
            "larger",
            "large"
          ]
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": "url(version:[\"main\",\"normalized\",\"larger\",\"large\"])"
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
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
    (v8/*: any*/),
    (v4/*: any*/),
    (v9/*: any*/)
  ],
  "storageKey": "artists(shallow:true)"
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v4/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "caption",
  "storageKey": null
},
v13 = [
  (v9/*: any*/)
],
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "ArticleUnpublishedArtworkArtist",
  "kind": "LinkedField",
  "name": "artist",
  "plural": false,
  "selections": (v13/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "ArticleUnpublishedArtworkPartner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v13/*: any*/),
  "storageKey": null
},
v16 = [
  (v8/*: any*/)
],
v17 = {
  "kind": "InlineFragment",
  "selections": (v16/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v18 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleSlideShowTestQuery",
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
            "name": "ArticleSlideShow_article"
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
    "name": "ArticleSlideShowTestQuery",
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "sections",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "figures",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isArticleSectionImageCollectionFigure"
                      },
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v12/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "ArticleUnpublishedArtwork",
                        "abstractKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionImageCollection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "figures",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "type": "Artwork",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              (v12/*: any*/)
                            ],
                            "type": "ArticleImageSection",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v14/*: any*/),
                              (v15/*: any*/)
                            ],
                            "type": "ArticleUnpublishedArtwork",
                            "abstractKey": null
                          }
                        ],
                        "type": "ArticleSectionImageCollectionFigure",
                        "abstractKey": "__isArticleSectionImageCollectionFigure"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v16/*: any*/),
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v16/*: any*/),
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionImageSet",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": "article(id:\"article-id\")"
      }
    ]
  },
  "params": {
    "id": "d5bd1e958a3a6448cbb3dd245b0f3d10",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "article": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "article.id": (v18/*: any*/),
        "article.sections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSections"
        },
        "article.sections.__typename": (v19/*: any*/),
        "article.sections.figures": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSectionImageCollectionFigure"
        },
        "article.sections.figures.__isArticleSectionImageCollectionFigure": (v19/*: any*/),
        "article.sections.figures.__isNode": (v19/*: any*/),
        "article.sections.figures.__typename": (v19/*: any*/),
        "article.sections.figures.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleUnpublishedArtworkArtist"
        },
        "article.sections.figures.artist.name": (v20/*: any*/),
        "article.sections.figures.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "article.sections.figures.artists.href": (v20/*: any*/),
        "article.sections.figures.artists.id": (v18/*: any*/),
        "article.sections.figures.artists.name": (v20/*: any*/),
        "article.sections.figures.caption": (v20/*: any*/),
        "article.sections.figures.date": (v20/*: any*/),
        "article.sections.figures.href": (v20/*: any*/),
        "article.sections.figures.id": (v18/*: any*/),
        "article.sections.figures.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "article.sections.figures.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "article.sections.figures.image.height": (v21/*: any*/),
        "article.sections.figures.image.url": (v20/*: any*/),
        "article.sections.figures.image.width": (v21/*: any*/),
        "article.sections.figures.internalID": (v18/*: any*/),
        "article.sections.figures.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "article.sections.figures.partner.href": (v20/*: any*/),
        "article.sections.figures.partner.id": (v18/*: any*/),
        "article.sections.figures.partner.name": (v20/*: any*/),
        "article.sections.figures.saleMessage": (v20/*: any*/),
        "article.sections.figures.title": (v20/*: any*/),
        "article.sections.title": (v20/*: any*/)
      }
    },
    "name": "ArticleSlideShowTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a445e57efbbe381cfce3d865f45f81b7";

export default node;
