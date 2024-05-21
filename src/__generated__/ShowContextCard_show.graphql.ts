/**
 * @generated SignedSource<<fb5e767452e66e4a8c87d8c8a060a933>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowContextCard_show$data = {
  readonly fair: {
    readonly exhibitionPeriod: string | null | undefined;
    readonly image: {
      readonly imageUrl: string | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly name: string | null | undefined;
    readonly profile: {
      readonly icon: {
        readonly imageUrl: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined;
  readonly internalID: string;
  readonly isFairBooth: boolean | null | undefined;
  readonly partner: {
    readonly artworksConnection?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly image: {
            readonly url: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly cities?: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly internalID?: string;
    readonly name?: string | null | undefined;
    readonly profile?: {
      readonly slug: string;
    } | null | undefined;
    readonly slug?: string;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "ShowContextCard_show";
};
export type ShowContextCard_show$key = {
  readonly " $data"?: ShowContextCard_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowContextCard_show">;
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
  "name": "ShowContextCard_show",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFairBooth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Fair",
      "kind": "LinkedField",
      "name": "fair",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "format",
              "value": "SHORT"
            }
          ],
          "kind": "ScalarField",
          "name": "exhibitionPeriod",
          "storageKey": "exhibitionPeriod(format:\"SHORT\")"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "profile",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "icon",
              "plural": false,
              "selections": [
                {
                  "alias": "imageUrl",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "untouched-png"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": "url(version:\"untouched-png\")"
                }
              ],
              "storageKey": null
            }
          ],
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
              "alias": "imageUrl",
              "args": [
                {
                  "kind": "Literal",
                  "name": "version",
                  "value": "large_rectangle"
                }
              ],
              "kind": "ScalarField",
              "name": "url",
              "storageKey": "url(version:\"large_rectangle\")"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Profile",
              "kind": "LinkedField",
              "name": "profile",
              "plural": false,
              "selections": [
                (v1/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cities",
              "storageKey": null
            },
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
                  "value": "MERCHANDISABILITY_DESC"
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
                                  "name": "version",
                                  "value": "larger"
                                }
                              ],
                              "kind": "ScalarField",
                              "name": "url",
                              "storageKey": "url(version:\"larger\")"
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
              "storageKey": "artworksConnection(first:3,sort:\"MERCHANDISABILITY_DESC\")"
            }
          ],
          "type": "Partner",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};
})();

(node as any).hash = "052dd60a0e3f6fdc5de6569f512bd1b7";

export default node;
