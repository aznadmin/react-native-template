/**
 * @generated SignedSource<<bec7a2e86bedf871f44b021518544105>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistHeader_artist$data = {
  readonly birthday: string | null | undefined;
  readonly coverArtwork: {
    readonly image: {
      readonly blurhash: string | null | undefined;
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly nationality: string | null | undefined;
  readonly slug: string;
  readonly verifiedRepresentatives: ReadonlyArray<{
    readonly partner: {
      readonly href: string | null | undefined;
      readonly internalID: string;
      readonly name: string | null | undefined;
      readonly profile: {
        readonly icon: {
          readonly url: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    };
  }>;
  readonly " $fragmentType": "ArtistHeader_artist";
};
export type ArtistHeader_artist$key = {
  readonly " $data"?: ArtistHeader_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistHeader_artist">;
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
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistHeader_artist",
  "selections": [
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
      "name": "birthday",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "coverArtwork",
      "plural": false,
      "selections": [
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
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "blurhash",
              "storageKey": null
            },
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
    },
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nationality",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "VerifiedRepresentative",
      "kind": "LinkedField",
      "name": "verifiedRepresentatives",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Partner",
          "kind": "LinkedField",
          "name": "partner",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
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
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "version",
                          "value": "square140"
                        }
                      ],
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": "url(version:\"square140\")"
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
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
})();

(node as any).hash = "7db2ff3261c7c7cd3c65e036f50f3a48";

export default node;
