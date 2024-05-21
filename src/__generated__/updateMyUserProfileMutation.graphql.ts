/**
 * @generated SignedSource<<07c20c9130d46e17ea0c5f464ad52412>>
 * @relayHash cbf1aedf5e30b95b393529753aee30ee
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID cbf1aedf5e30b95b393529753aee30ee

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CurrencyPreference = "EUR" | "GBP" | "USD" | "%future added value";
export type LengthUnitPreference = "CM" | "IN" | "%future added value";
export type UpdateMyProfileInput = {
  artworksPerYear?: string | null | undefined;
  bio?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  collectorLevel?: number | null | undefined;
  completedOnboarding?: boolean | null | undefined;
  currencyPreference?: CurrencyPreference | null | undefined;
  email?: string | null | undefined;
  emailFrequency?: string | null | undefined;
  gender?: string | null | undefined;
  iconUrl?: string | null | undefined;
  industry?: string | null | undefined;
  isCollector?: boolean | null | undefined;
  lengthUnitPreference?: LengthUnitPreference | null | undefined;
  location?: EditableLocation | null | undefined;
  name?: string | null | undefined;
  notes?: string | null | undefined;
  otherRelevantPositions?: string | null | undefined;
  password?: string | null | undefined;
  phone?: string | null | undefined;
  phoneCountryCode?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  priceRangeMax?: number | null | undefined;
  priceRangeMin?: number | null | undefined;
  privacy?: string | null | undefined;
  profession?: string | null | undefined;
  receiveLotOpeningSoonNotification?: boolean | null | undefined;
  receiveNewSalesNotification?: boolean | null | undefined;
  receiveNewWorksNotification?: boolean | null | undefined;
  receiveOrderNotification?: boolean | null | undefined;
  receiveOutbidNotification?: boolean | null | undefined;
  receivePartnerOfferNotification?: boolean | null | undefined;
  receivePartnerShowNotification?: boolean | null | undefined;
  receivePromotionNotification?: boolean | null | undefined;
  receivePurchaseNotification?: boolean | null | undefined;
  receiveSaleOpeningClosingNotification?: boolean | null | undefined;
  receiveViewingRoomNotification?: boolean | null | undefined;
  shareFollows?: boolean | null | undefined;
};
export type EditableLocation = {
  address?: string | null | undefined;
  address2?: string | null | undefined;
  city?: string | null | undefined;
  coordinates?: ReadonlyArray<number> | null | undefined;
  country?: string | null | undefined;
  countryCode?: string | null | undefined;
  postalCode?: string | null | undefined;
  state?: string | null | undefined;
  stateCode?: string | null | undefined;
  summary?: string | null | undefined;
};
export type updateMyUserProfileMutation$variables = {
  input: UpdateMyProfileInput;
};
export type updateMyUserProfileMutation$data = {
  readonly updateMyUserProfile: {
    readonly me: {
      readonly bio: string | null | undefined;
      readonly currencyPreference: CurrencyPreference;
      readonly email: string | null | undefined;
      readonly icon: {
        readonly imageURL: string | null | undefined;
        readonly internalID: string | null | undefined;
      } | null | undefined;
      readonly lengthUnitPreference: LengthUnitPreference;
      readonly location: {
        readonly city: string | null | undefined;
        readonly country: string | null | undefined;
        readonly display: string | null | undefined;
        readonly state: string | null | undefined;
      } | null | undefined;
      readonly name: string | null | undefined;
      readonly otherRelevantPositions: string | null | undefined;
      readonly phone: string | null | undefined;
      readonly priceRange: string | null | undefined;
      readonly priceRangeMax: number | null | undefined;
      readonly priceRangeMin: number | null | undefined;
      readonly profession: string | null | undefined;
      readonly receiveLotOpeningSoonNotification: boolean | null | undefined;
      readonly receiveNewSalesNotification: boolean | null | undefined;
      readonly receiveNewWorksNotification: boolean | null | undefined;
      readonly receiveOutbidNotification: boolean | null | undefined;
      readonly receivePromotionNotification: boolean | null | undefined;
      readonly receivePurchaseNotification: boolean | null | undefined;
      readonly receiveSaleOpeningClosingNotification: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type updateMyUserProfileMutation = {
  response: updateMyUserProfileMutation$data;
  variables: updateMyUserProfileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profession",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "otherRelevantPositions",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "icon",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageURL",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "country",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lengthUnitPreference",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currencyPreference",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiveLotOpeningSoonNotification",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiveNewSalesNotification",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiveNewWorksNotification",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiveOutbidNotification",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receivePromotionNotification",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receivePurchaseNotification",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiveSaleOpeningClosingNotification",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRangeMin",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRangeMax",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRange",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "updateMyUserProfileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Me",
            "kind": "LinkedField",
            "name": "me",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MyLocation",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateMyUserProfileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Me",
            "kind": "LinkedField",
            "name": "me",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MyLocation",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v25/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "cbf1aedf5e30b95b393529753aee30ee",
    "metadata": {},
    "name": "updateMyUserProfileMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "865b351e86717179e35f82f520632e76";

export default node;
