/**
 * @generated SignedSource<<b8597ddca410e9da10afdb654bba0868>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OnboardingSearchResults_viewer$data = {
  readonly matchConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "Artist";
        readonly internalID: string;
        readonly isFollowed: boolean | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"ArtistListItemNew_artist">;
      } | {
        readonly __typename: "Profile";
        readonly internalID: string;
        readonly isFollowed: boolean | null | undefined;
        readonly owner: {
          readonly __typename: "Partner";
          readonly " $fragmentSpreads": FragmentRefs<"OnboardingPartnerListItem_partner">;
        } | {
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          readonly __typename: "%other";
        };
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "OnboardingSearchResults_viewer";
};
export type OnboardingSearchResults_viewer$key = {
  readonly " $data"?: OnboardingSearchResults_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"OnboardingSearchResults_viewer">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "matchConnection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "entities"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "term"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./OnboardingSearchResults_viewerRefetch.graphql')
    }
  },
  "name": "OnboardingSearchResults_viewer",
  "selections": [
    {
      "alias": "matchConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "entities",
          "variableName": "entities"
        },
        {
          "kind": "Literal",
          "name": "mode",
          "value": "AUTOSUGGEST"
        },
        {
          "kind": "Variable",
          "name": "term",
          "variableName": "term"
        }
      ],
      "concreteType": "MatchConnection",
      "kind": "LinkedField",
      "name": "__OnboardingSearchResults_viewer_matchConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MatchEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v2/*: any*/),
                    (v3/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ArtistListItemNew_artist"
                    }
                  ],
                  "type": "Artist",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v2/*: any*/),
                    (v3/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "owner",
                      "plural": false,
                      "selections": [
                        (v1/*: any*/),
                        {
                          "kind": "InlineFragment",
                          "selections": [
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "OnboardingPartnerListItem_partner"
                            }
                          ],
                          "type": "Partner",
                          "abstractKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "type": "Profile",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
})();

(node as any).hash = "9a50695ba932ebe7833f6eec10e02eee";

export default node;
