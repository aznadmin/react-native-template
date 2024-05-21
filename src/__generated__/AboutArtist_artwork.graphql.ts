/**
 * @generated SignedSource<<81cd752f0c5c38f4c073dfb3edfbe539>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AboutArtist_artwork$data = {
  readonly artist: {
    readonly partnerBiographyBlurb: {
      readonly text: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly artists: ReadonlyArray<{
    readonly biographyBlurb: {
      readonly text: string | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistListItem_artist">;
  } | null | undefined> | null | undefined;
  readonly displayArtistBio: boolean | null | undefined;
  readonly isUnlisted: boolean;
  readonly " $fragmentType": "AboutArtist_artwork";
};
export type AboutArtist_artwork$key = {
  readonly " $data"?: AboutArtist_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"AboutArtist_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AboutArtist_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayArtistBio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistBlurb",
          "kind": "LinkedField",
          "name": "biographyBlurb",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistListItem_artist"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "partnerBiographyBlurb",
          "kind": "LinkedField",
          "name": "partnerBiographyBlurb",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isUnlisted",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "ae17a3ab769b0f9f4bfcad6a9ba0c701";

export default node;
