/**
 * @generated SignedSource<<1eff00329ff1a120468f075779896de8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesMeta_artistSeries$data = {
  readonly artists: ReadonlyArray<{
    readonly id: string;
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly isFollowed: boolean | null | undefined;
    readonly name: string | null | undefined;
    readonly slug: string;
  } | null | undefined> | null | undefined;
  readonly description: string | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentType": "ArtistSeriesMeta_artistSeries";
};
export type ArtistSeriesMeta_artistSeries$key = {
  readonly " $data"?: ArtistSeriesMeta_artistSeries$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesMeta_artistSeries">;
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistSeriesMeta_artistSeries",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 1
        }
      ],
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFollowed",
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
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artists(size:1)"
    }
  ],
  "type": "ArtistSeries",
  "abstractKey": null
};
})();

(node as any).hash = "e61b936fe281921625601fbe0f210265";

export default node;
