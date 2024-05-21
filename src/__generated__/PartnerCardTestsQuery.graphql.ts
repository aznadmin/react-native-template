/**
 * @generated SignedSource<<43bc663b13e653708743e11c643542dc>>
 * @relayHash 3c33c564239854d4a4c5f8be81b89e47
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3c33c564239854d4a4c5f8be81b89e47

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerCardTestsQuery$variables = Record<PropertyKey, never>;
export type PartnerCardTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerCard_artwork">;
  } | null | undefined;
};
export type PartnerCardTestsQuery$rawResponse = {
  readonly artwork: {
    readonly artist: {
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly artistNames: string | null | undefined;
    readonly attributionClass: {
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly category: string | null | undefined;
    readonly certificateOfAuthenticity: {
      readonly details: string | null | undefined;
    } | null | undefined;
    readonly conditionDescription: {
      readonly details: string | null | undefined;
    } | null | undefined;
    readonly date: string | null | undefined;
    readonly dimensions: {
      readonly cm: string | null | undefined;
      readonly in: string | null | undefined;
    } | null | undefined;
    readonly editionOf: string | null | undefined;
    readonly framed: {
      readonly details: string | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly image: {
      readonly height: number | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined;
    readonly inquiryQuestions: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
      readonly question: string;
    } | null | undefined> | null | undefined;
    readonly internalID: string;
    readonly isPriceHidden: boolean | null | undefined;
    readonly manufacturer: string | null | undefined;
    readonly medium: string | null | undefined;
    readonly partner: {
      readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly href: string | null | undefined;
      readonly id: string;
      readonly initials: string | null | undefined;
      readonly isDefaultProfilePublic: boolean | null | undefined;
      readonly name: string | null | undefined;
      readonly profile: {
        readonly icon: {
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly id: string;
        readonly internalID: string;
      } | null | undefined;
      readonly slug: string;
      readonly type: string | null | undefined;
    } | null | undefined;
    readonly publisher: string | null | undefined;
    readonly sale: {
      readonly id: string;
      readonly isBenefit: boolean | null | undefined;
      readonly isGalleryAuction: boolean | null | undefined;
    } | null | undefined;
    readonly saleMessage: string | null | undefined;
    readonly signatureInfo: {
      readonly details: string | null | undefined;
    } | null | undefined;
    readonly slug: string;
    readonly title: string | null | undefined;
  } | null | undefined;
};
export type PartnerCardTestsQuery = {
  rawResponse: PartnerCardTestsQuery$rawResponse;
  response: PartnerCardTestsQuery$data;
  variables: PartnerCardTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artworkID"
  }
],
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
  "name": "internalID",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "details",
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkInfoRow"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PartnerCard_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
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
                "args": null,
                "kind": "ScalarField",
                "name": "url",
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
                "name": "height",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceHidden",
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
            "concreteType": "dimensions",
            "kind": "LinkedField",
            "name": "dimensions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "in",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cm",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionOf",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "signatureInfo",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saleMessage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "manufacturer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "publisher",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "conditionDescription",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "certificateOfAuthenticity",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "framed",
            "plural": false,
            "selections": (v3/*: any*/),
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
            "concreteType": "InquiryQuestion",
            "kind": "LinkedField",
            "name": "inquiryQuestions",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "question",
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isBenefit",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isGalleryAuction",
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cities",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isDefaultProfilePublic",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v4/*: any*/),
              (v1/*: any*/),
              (v5/*: any*/),
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
                "kind": "ScalarField",
                "name": "initials",
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
                  (v5/*: any*/),
                  (v2/*: any*/),
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
          },
          (v5/*: any*/)
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ]
  },
  "params": {
    "id": "3c33c564239854d4a4c5f8be81b89e47",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artwork.artist.id": (v7/*: any*/),
        "artwork.artist.name": (v8/*: any*/),
        "artwork.artistNames": (v8/*: any*/),
        "artwork.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artwork.attributionClass.id": (v7/*: any*/),
        "artwork.attributionClass.name": (v8/*: any*/),
        "artwork.category": (v8/*: any*/),
        "artwork.certificateOfAuthenticity": (v9/*: any*/),
        "artwork.certificateOfAuthenticity.details": (v8/*: any*/),
        "artwork.conditionDescription": (v9/*: any*/),
        "artwork.conditionDescription.details": (v8/*: any*/),
        "artwork.date": (v8/*: any*/),
        "artwork.dimensions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "dimensions"
        },
        "artwork.dimensions.cm": (v8/*: any*/),
        "artwork.dimensions.in": (v8/*: any*/),
        "artwork.editionOf": (v8/*: any*/),
        "artwork.framed": (v9/*: any*/),
        "artwork.framed.details": (v8/*: any*/),
        "artwork.id": (v7/*: any*/),
        "artwork.image": (v10/*: any*/),
        "artwork.image.height": (v11/*: any*/),
        "artwork.image.url": (v8/*: any*/),
        "artwork.image.width": (v11/*: any*/),
        "artwork.inquiryQuestions": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "InquiryQuestion"
        },
        "artwork.inquiryQuestions.id": (v7/*: any*/),
        "artwork.inquiryQuestions.internalID": (v7/*: any*/),
        "artwork.inquiryQuestions.question": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "artwork.internalID": (v7/*: any*/),
        "artwork.isPriceHidden": (v12/*: any*/),
        "artwork.manufacturer": (v8/*: any*/),
        "artwork.medium": (v8/*: any*/),
        "artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.partner.cities": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "artwork.partner.href": (v8/*: any*/),
        "artwork.partner.id": (v7/*: any*/),
        "artwork.partner.initials": (v8/*: any*/),
        "artwork.partner.isDefaultProfilePublic": (v12/*: any*/),
        "artwork.partner.name": (v8/*: any*/),
        "artwork.partner.profile": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Profile"
        },
        "artwork.partner.profile.icon": (v10/*: any*/),
        "artwork.partner.profile.icon.url": (v8/*: any*/),
        "artwork.partner.profile.id": (v7/*: any*/),
        "artwork.partner.profile.internalID": (v7/*: any*/),
        "artwork.partner.slug": (v7/*: any*/),
        "artwork.partner.type": (v8/*: any*/),
        "artwork.publisher": (v8/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.id": (v7/*: any*/),
        "artwork.sale.isBenefit": (v12/*: any*/),
        "artwork.sale.isGalleryAuction": (v12/*: any*/),
        "artwork.saleMessage": (v8/*: any*/),
        "artwork.signatureInfo": (v9/*: any*/),
        "artwork.signatureInfo.details": (v8/*: any*/),
        "artwork.slug": (v7/*: any*/),
        "artwork.title": (v8/*: any*/)
      }
    },
    "name": "PartnerCardTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "ebdf711555c7e8cac39b0a982451ec5f";

export default node;
