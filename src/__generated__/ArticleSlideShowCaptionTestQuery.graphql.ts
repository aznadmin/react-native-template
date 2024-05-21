/**
 * @generated SignedSource<<8e6f652a8b7bc4c7dc94dede5e353d3d>>
 * @relayHash 115834ee486ea8c06d53d4a62708e9fd
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 115834ee486ea8c06d53d4a62708e9fd

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSlideShowCaptionTestQuery$variables = Record<PropertyKey, never>;
export type ArticleSlideShowCaptionTestQuery$data = {
  readonly article: {
    readonly sections: ReadonlyArray<{
      readonly __typename: "ArticleSectionImageCollection";
      readonly figures: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowCaption_figure">;
      }>;
    } | {
      readonly __typename: "ArticleSectionImageSet";
      readonly figures: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowCaption_figure">;
      }>;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    }>;
  } | null | undefined;
};
export type ArticleSlideShowCaptionTestQuery = {
  response: ArticleSlideShowCaptionTestQuery$data;
  variables: ArticleSlideShowCaptionTestQuery$variables;
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
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "figures",
    "plural": true,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ArticleSlideShowCaption_figure"
      }
    ],
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
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
        (v6/*: any*/),
        (v3/*: any*/),
        (v7/*: any*/)
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
        (v7/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "caption",
  "storageKey": null
},
v10 = [
  (v7/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "ArticleUnpublishedArtworkArtist",
  "kind": "LinkedField",
  "name": "artist",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "ArticleUnpublishedArtworkPartner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": null
},
v13 = [
  (v6/*: any*/)
],
v14 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v17 = {
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
    "name": "ArticleSlideShowCaptionTestQuery",
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
                "selections": (v2/*: any*/),
                "type": "ArticleSectionImageCollection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v2/*: any*/),
                "type": "ArticleSectionImageSet",
                "abstractKey": null
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
    "name": "ArticleSlideShowCaptionTestQuery",
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
                      (v1/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isArticleSectionImageCollectionFigure"
                      },
                      (v8/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v9/*: any*/),
                          (v6/*: any*/)
                        ],
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v6/*: any*/)
                        ],
                        "type": "ArticleUnpublishedArtwork",
                        "abstractKey": null
                      },
                      (v14/*: any*/)
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
                          (v8/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v9/*: any*/)
                            ],
                            "type": "ArticleImageSection",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "type": "ArticleUnpublishedArtwork",
                            "abstractKey": null
                          }
                        ],
                        "type": "ArticleSectionImageCollectionFigure",
                        "abstractKey": "__isArticleSectionImageCollectionFigure"
                      },
                      (v14/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v13/*: any*/),
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      }
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
          (v6/*: any*/)
        ],
        "storageKey": "article(id:\"article-id\")"
      }
    ]
  },
  "params": {
    "id": "115834ee486ea8c06d53d4a62708e9fd",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "article": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "article.id": (v15/*: any*/),
        "article.sections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSections"
        },
        "article.sections.__typename": (v16/*: any*/),
        "article.sections.figures": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSectionImageCollectionFigure"
        },
        "article.sections.figures.__isArticleSectionImageCollectionFigure": (v16/*: any*/),
        "article.sections.figures.__isNode": (v16/*: any*/),
        "article.sections.figures.__typename": (v16/*: any*/),
        "article.sections.figures.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleUnpublishedArtworkArtist"
        },
        "article.sections.figures.artist.name": (v17/*: any*/),
        "article.sections.figures.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "article.sections.figures.artists.href": (v17/*: any*/),
        "article.sections.figures.artists.id": (v15/*: any*/),
        "article.sections.figures.artists.name": (v17/*: any*/),
        "article.sections.figures.caption": (v17/*: any*/),
        "article.sections.figures.date": (v17/*: any*/),
        "article.sections.figures.href": (v17/*: any*/),
        "article.sections.figures.id": (v15/*: any*/),
        "article.sections.figures.internalID": (v15/*: any*/),
        "article.sections.figures.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "article.sections.figures.partner.href": (v17/*: any*/),
        "article.sections.figures.partner.id": (v15/*: any*/),
        "article.sections.figures.partner.name": (v17/*: any*/),
        "article.sections.figures.saleMessage": (v17/*: any*/),
        "article.sections.figures.title": (v17/*: any*/)
      }
    },
    "name": "ArticleSlideShowCaptionTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "829d54d43860527943558c0056c51cef";

export default node;
