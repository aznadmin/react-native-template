/**
 * @generated SignedSource<<22011a4104a445353d096c5d9e0643a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionWhySell_artwork$data = {
  readonly artist: {
    readonly internalID: string;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly artworkLocation: string | null | undefined;
  readonly attributionClass: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly date: string | null | undefined;
  readonly depth: string | null | undefined;
  readonly editionNumber: string | null | undefined;
  readonly editionSize: string | null | undefined;
  readonly height: string | null | undefined;
  readonly images: ReadonlyArray<{
    readonly url: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly medium: string | null | undefined;
  readonly mediumType: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly metric: string | null | undefined;
  readonly provenance: string | null | undefined;
  readonly slug: string;
  readonly submissionId: string | null | undefined;
  readonly title: string | null | undefined;
  readonly width: string | null | undefined;
  readonly " $fragmentType": "MyCollectionWhySell_artwork";
};
export type MyCollectionWhySell_artwork$key = {
  readonly " $data"?: MyCollectionWhySell_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionWhySell_artwork">;
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
},
v2 = [
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionWhySell_artwork",
  "selections": [
    (v0/*: any*/),
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "medium",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkMedium",
      "kind": "LinkedField",
      "name": "mediumType",
      "plural": false,
      "selections": (v2/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AttributionClass",
      "kind": "LinkedField",
      "name": "attributionClass",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "includeAll",
          "value": true
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": "url",
          "args": null,
          "kind": "ScalarField",
          "name": "imageURL",
          "storageKey": null
        }
      ],
      "storageKey": "images(includeAll:true)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "editionNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "editionSize",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "metric",
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
      "name": "width",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "depth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "provenance",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artworkLocation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "submissionId",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "24996266bd75af462332f0ef6c880ce0";

export default node;
