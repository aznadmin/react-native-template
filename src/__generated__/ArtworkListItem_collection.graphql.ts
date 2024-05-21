/**
 * @generated SignedSource<<482cb063dfa5f724b44a81869706d5e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkListItem_collection$data = {
  readonly artworksConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly image: {
          readonly resized: {
            readonly url: string;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly artworksCount: number;
  readonly internalID: string;
  readonly name: string;
  readonly shareableWithPartners: boolean;
  readonly " $fragmentType": "ArtworkListItem_collection";
};
export type ArtworkListItem_collection$key = {
  readonly " $data"?: ArtworkListItem_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkListItem_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "onlyVisible",
          "value": true
        }
      ],
      "kind": "ScalarField",
      "name": "artworksCount",
      "storageKey": "artworksCount(onlyVisible:true)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "shareableWithPartners",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 4
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
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
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "height",
                          "value": 300
                        },
                        {
                          "kind": "Literal",
                          "name": "version",
                          "value": "normalized"
                        },
                        {
                          "kind": "Literal",
                          "name": "width",
                          "value": 300
                        }
                      ],
                      "concreteType": "ResizedImageUrl",
                      "kind": "LinkedField",
                      "name": "resized",
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
                      "storageKey": "resized(height:300,version:\"normalized\",width:300)"
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
      "storageKey": "artworksConnection(first:4)"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "d9e0b08b0419c893aa77cf0449e64093";

export default node;
