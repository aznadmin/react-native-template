/**
 * @generated SignedSource<<d10587610b1f02701f10aa33b1bb6406>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkGridItem_artwork$data = {
  readonly artist: {
    readonly internalID: string;
    readonly targetSupply: {
      readonly isP1: boolean | null | undefined;
    };
  } | null | undefined;
  readonly artistNames: string | null | undefined;
  readonly date: string | null | undefined;
  readonly image: {
    readonly aspectRatio: number;
    readonly blurhash: string | null | undefined;
    readonly internalID: string | null | undefined;
    readonly versions: ReadonlyArray<string | null | undefined> | null | undefined;
  } | null | undefined;
  readonly images: ReadonlyArray<{
    readonly blurhash: string | null | undefined;
    readonly internalID: string | null | undefined;
    readonly isDefault: boolean | null | undefined;
    readonly url: string | null | undefined;
    readonly versions: ReadonlyArray<string | null | undefined> | null | undefined;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly marketPriceInsights: {
    readonly demandRank: number | null | undefined;
  } | null | undefined;
  readonly medium: string | null | undefined;
  readonly mediumType: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly submissionId: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "MyCollectionArtworkGridItem_artwork";
};
export type MyCollectionArtworkGridItem_artwork$key = {
  readonly " $data"?: MyCollectionArtworkGridItem_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkGridItem_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  {
    "kind": "Variable",
    "name": "includeAll",
    "variableName": "includeAllImages"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "versions",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "includeAllImages"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkGridItem_artwork",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistTargetSupply",
          "kind": "LinkedField",
          "name": "targetSupply",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isP1",
              "storageKey": null
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
      "concreteType": "ArtworkMedium",
      "kind": "LinkedField",
      "name": "mediumType",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDefault",
          "storageKey": null
        },
        (v0/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "aspectRatio",
          "storageKey": null
        },
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistNames",
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
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "submissionId",
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
      "concreteType": "ArtworkPriceInsights",
      "kind": "LinkedField",
      "name": "marketPriceInsights",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "demandRank",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "72e307b1beb19197a69ff57752f70714";

export default node;
