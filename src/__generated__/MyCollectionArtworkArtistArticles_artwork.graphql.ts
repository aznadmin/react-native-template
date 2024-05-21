/**
 * @generated SignedSource<<ca64171e3a63e9587fd0cd3b417318b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArtistArticles_artwork$data = {
  readonly artist: {
    readonly articlesConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly author: {
            readonly name: string | null | undefined;
          } | null | undefined;
          readonly href: string | null | undefined;
          readonly internalID: string;
          readonly publishedAt: string | null | undefined;
          readonly slug: string | null | undefined;
          readonly thumbnailImage: {
            readonly url: string | null | undefined;
          } | null | undefined;
          readonly thumbnailTitle: string | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly name: string | null | undefined;
    readonly slug: string;
  } | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "MyCollectionArtworkArtistArticles_artwork";
};
export type MyCollectionArtworkArtistArticles_artwork$key = {
  readonly " $data"?: MyCollectionArtworkArtistArticles_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistArticles_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkArtistArticles_artwork",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
        (v0/*: any*/),
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 3
            },
            {
              "kind": "Literal",
              "name": "sort",
              "value": "PUBLISHED_AT_DESC"
            }
          ],
          "concreteType": "ArticleConnection",
          "kind": "LinkedField",
          "name": "articlesConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ArticleEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Article",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v0/*: any*/),
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
                      "name": "thumbnailTitle",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Author",
                      "kind": "LinkedField",
                      "name": "author",
                      "plural": false,
                      "selections": [
                        (v2/*: any*/)
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "format",
                          "value": "MMM Do, YYYY"
                        }
                      ],
                      "kind": "ScalarField",
                      "name": "publishedAt",
                      "storageKey": "publishedAt(format:\"MMM Do, YYYY\")"
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Image",
                      "kind": "LinkedField",
                      "name": "thumbnailImage",
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
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "articlesConnection(first:3,sort:\"PUBLISHED_AT_DESC\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "602f3c23edbce8fc343b54636ff87616";

export default node;
