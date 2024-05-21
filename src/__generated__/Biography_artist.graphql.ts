/**
 * @generated SignedSource<<377ddf2647c1a635c878ed9fef3e522a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Biography_artist$data = {
  readonly biographyBlurb: {
    readonly text: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "Biography_artist";
};
export type Biography_artist$key = {
  readonly " $data"?: Biography_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"Biography_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Biography_artist",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "HTML"
        },
        {
          "kind": "Literal",
          "name": "partnerBio",
          "value": false
        }
      ],
      "concreteType": "ArtistBlurb",
      "kind": "LinkedField",
      "name": "biographyBlurb",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": "biographyBlurb(format:\"HTML\",partnerBio:false)"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "3540434f4c30cfd4bf5dbc880d27cabd";

export default node;
