import ReactDOM from "react-dom/client";
import "/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Headers = () => {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://as1.ftcdn.net/jpg/15/12/33/44/1000_F_1512334426_djAe3jmlZqO97gSwoZVBz9blZnkf3lr6.jpg"
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const restrauntList = [
            {
                "type": "restaurant",
                "info": {
                    "resId": 21674494,
                    "name": "Raahi Neo Kitchen and Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/21674494\/053c74aa0770611a1a74bbb4ace0e14e_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/21674494\/053c74aa0770611a1a74bbb4ace0e14e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/21674494\/e2339577b6bf05b8049b3a6967fbf24a_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "53",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.9",
                                "reviewCount": "53",
                                "reviewTextSmall": "53 Reviews",
                                "subtext": "53 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.9",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,800 for two"
                    },
                    "cfo": {
                        "text": "\u20b9750 for one"
                    },
                    "locality": {
                        "name": "Church Street, Bangalore",
                        "address": "3rd Floor, No 15, Madras Bank Road, Karnataka, Church Street, Bangalore",
                        "localityUrl": "bangalore\/church-street-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,800 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 15,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "15% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/raahi-neo-kitchen-and-bar-church-street-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "871 m",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9143381\",\"bzone\":\"0\",\"campaign_id\":\"18119319\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21674494\",\"isNewAd\":\"109\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":418,\\\"boosted_rank\\\":10,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.013194\\\",\\\"cost_for_two_ctr\\\":\\\"0.037037\\\",\\\"distance\\\":\\\"0.4786859452724457\\\",\\\"organic_ctr\\\":\\\"0.006091\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"30396\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.2839801123522955\\\",\\\"cost_for_two_ctr\\\":\\\"0.3967796537538567\\\",\\\"cost_per_unit\\\":\\\"0.3454998126016828\\\",\\\"distance\\\":\\\"0.9792544826994062\\\",\\\"organic_ctr\\\":\\\"0\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.4772730843559005\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3865487498567376}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21674494\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20626791,
                    "name": "Over Coffee Cafe & Wine Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20626791\/7bafabdfd670d85e5bd4e8e96a2b3972_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20626791\/7bafabdfd670d85e5bd4e8e96a2b3972_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20626791\/b3a439745e343db7222a006cae494cee_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,302",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.6",
                                "reviewCount": "1,279",
                                "reviewTextSmall": "1,279 Reviews",
                                "subtext": "1,279 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.6",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.9",
                                "reviewCount": "23",
                                "reviewTextSmall": "23 Reviews",
                                "subtext": "23 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.9",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9400 for one"
                    },
                    "locality": {
                        "name": "Lavelle Road, Bangalore",
                        "address": "41, Ground Floor, Cristu Complex, Ashok Nagar, Lavelle Road, Bangalore",
                        "localityUrl": "bangalore\/lavelle-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 9am",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/coffee\/",
                            "name": "Coffee"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/over-coffee-cafe-wine-bar-lavelle-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "672 m",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9013134\",\"bzone\":\"0\",\"campaign_id\":\"17988952\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20626791\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":17,\\\"boosted_rank\\\":11,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.027487\\\",\\\"cost_for_two_ctr\\\":\\\"0.034044\\\",\\\"distance\\\":\\\"0.36975589394569397\\\",\\\"organic_ctr\\\":\\\"0.017795\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"499\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5916144723531565\\\",\\\"cost_for_two_ctr\\\":\\\"0.3647154610901611\\\",\\\"cost_per_unit\\\":\\\"0.352868566506986\\\",\\\"distance\\\":\\\"0.9934395055957066\\\",\\\"organic_ctr\\\":\\\"0.08880997366963357\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.007541596618850849\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3792686003668131}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20626791\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19890381,
                    "name": "Secret Story",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/19890381\/d74ad221176972dfa5f8499f6a7d57ba_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/19890381\/d74ad221176972dfa5f8499f6a7d57ba_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "5,802",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.9",
                                "reviewCount": "5,777",
                                "reviewTextSmall": "5,777 Reviews",
                                "subtext": "5,777 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.9",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "25",
                                "reviewTextSmall": "25 Reviews",
                                "subtext": "25 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Indiranagar, Bangalore",
                        "address": "968, 3rd & 4th Floor, HAL 2nd Stage, 12th Main Road, Indiranagar, Bangalore",
                        "localityUrl": "bangalore\/indiranagar-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTlcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/vietnamese\/",
                            "name": "Vietnamese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/secret-story-indiranagar-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.9 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8479063\",\"bzone\":\"0\",\"campaign_id\":\"17454470\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19890381\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":93,\\\"boosted_rank\\\":12,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.037209\\\",\\\"cost_for_two_ctr\\\":\\\"0.053151\\\",\\\"distance\\\":\\\"4.469471454620361\\\",\\\"organic_ctr\\\":\\\"0.019419\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"7849\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.8008652418157164\\\",\\\"cost_for_two_ctr\\\":\\\"0.569409924580048\\\",\\\"cost_per_unit\\\":\\\"0.5509850499056191\\\",\\\"distance\\\":\\\"0.4595688391618318\\\",\\\"organic_ctr\\\":\\\"0.10113288867642484\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.12302229484500447\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.37385500018102713}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19890381\",\"element_type\":\"listing\",\"rank\":12,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 50877,
                    "name": "Scottish Pub",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/3b37f202c719d96d5411c52f05533d61_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "1,115",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,110",
                                "reviewTextSmall": "1,110 Reviews",
                                "subtext": "1,110 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.5",
                                "reviewCount": "5",
                                "reviewTextSmall": "5 Reviews",
                                "subtext": "5 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.5",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9500 for one"
                    },
                    "locality": {
                        "name": "St. Marks Road, Bangalore",
                        "address": "17\/21, Vasavi Complex, St. Marks Road, Bangalore",
                        "localityUrl": "bangalore\/st-marks-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pasta\/",
                            "name": "Pasta"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,200 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/scottish-pub-st-marks-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "713 m",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8695494\",\"bzone\":\"0\",\"campaign_id\":\"17670937\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"50877\",\"isNewAd\":\"34\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":311,\\\"boosted_rank\\\":13,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.023184\\\",\\\"cost_for_two_ctr\\\":\\\"0.032405\\\",\\\"distance\\\":\\\"0.3193763494491577\\\",\\\"organic_ctr\\\":\\\"0.008567\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"2194\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.4989991605862982\\\",\\\"cost_for_two_ctr\\\":\\\"0.3471567535138842\\\",\\\"cost_per_unit\\\":\\\"0.3358741185931136\\\",\\\"distance\\\":\\\"1\\\",\\\"organic_ctr\\\":\\\"0.01878789258424579\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.03417285967916791\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.371885984431809}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"50877\",\"element_type\":\"listing\",\"rank\":13,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21520226,
                    "name": "Rox",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/8bbc6e759c4fb0504bdfe224203af055_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/8bbc6e759c4fb0504bdfe224203af055_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/ddf8f150c70a4ee7b351adb22fe8900d_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "534",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.2",
                                "reviewCount": "534",
                                "reviewTextSmall": "534 Reviews",
                                "subtext": "534 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.2",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9400 for one"
                    },
                    "locality": {
                        "name": "New BEL Road, Bangalore",
                        "address": "24, Jaladarsini Layout, Mathikere, New BEL Road, Bangalore",
                        "localityUrl": "bangalore\/new-bel-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 11am",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,000 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/rox-new-bel-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "7.3 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8734987\",\"bzone\":\"0\",\"campaign_id\":\"17710438\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21520226\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":203,\\\"boosted_rank\\\":14,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.044424\\\",\\\"cost_for_two_ctr\\\":\\\"0.067015\\\",\\\"distance\\\":\\\"7.41801118850708\\\",\\\"organic_ctr\\\":\\\"0.01433\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"2976\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.956156776651385\\\",\\\"cost_for_two_ctr\\\":\\\"0.7179358073363045\\\",\\\"cost_per_unit\\\":\\\"0.6947379638030732\\\",\\\"distance\\\":\\\"0.0756058911377462\\\",\\\"organic_ctr\\\":\\\"0.06251754725428153\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.04645937750404575\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.37060940545276994}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21520226\",\"element_type\":\"listing\",\"rank\":14,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 55768,
                    "name": "Citrus - The Leela Palace",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/d962767510039cc9af518462d899cb30_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/d962767510039cc9af518462d899cb30_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/17cd9f1e1b8805f1b762e25544e6a124_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,628",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "1,486",
                                "reviewTextSmall": "1,486 Reviews",
                                "subtext": "1,486 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.1",
                                "reviewCount": "142",
                                "reviewTextSmall": "142 Reviews",
                                "subtext": "142 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b94,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,900 for one"
                    },
                    "locality": {
                        "name": "Old Airport Road, Bangalore",
                        "address": "The Leela Palace, 23, Old Airport Road, Bangalore",
                        "localityUrl": "bangalore\/old-airport-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b94,700 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/citrus-the-leela-palace-airport-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "6.1 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8046308\",\"bzone\":\"0\",\"campaign_id\":\"17019061\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"55768\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":216,\\\"boosted_rank\\\":15,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.030899\\\",\\\"cost_for_two_ctr\\\":\\\"0.057597\\\",\\\"distance\\\":\\\"5.682347297668457\\\",\\\"organic_ctr\\\":\\\"0.009444\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"2653\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.6650524095477928\\\",\\\"cost_for_two_ctr\\\":\\\"0.6170401954062393\\\",\\\"cost_per_unit\\\":\\\"0.6169917344540758\\\",\\\"distance\\\":\\\"0.3016264587584762\\\",\\\"organic_ctr\\\":\\\"0.02544257020798713\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.04138451144594404\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.36883812121061843}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"55768\",\"element_type\":\"listing\",\"rank\":15,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21306638,
                    "name": "The Palms Brew & Kitchen",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/21306638\/0e93743deeb4ea5420cf4a6575869c4c_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/21306638\/0e93743deeb4ea5420cf4a6575869c4c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/21306638\/5bfe69d3020d15e71ab8c3d294ec4d47_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "7,201",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "7,174",
                                "reviewTextSmall": "7,174 Reviews",
                                "subtext": "7,174 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "27",
                                "reviewTextSmall": "27 Reviews",
                                "subtext": "27 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,600 for two"
                    },
                    "cfo": {
                        "text": "\u20b9650 for one"
                    },
                    "locality": {
                        "name": "JP Nagar, Bangalore",
                        "address": "4\/A2, Puttenhalli, Kothanur Main Road, JP Nagar, Bangalore",
                        "localityUrl": "bangalore\/jp-nagar-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,600 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/the-palms-brew-kitchen-jp-nagar-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "8.5 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9320806\",\"bzone\":\"0\",\"campaign_id\":\"18296989\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21306638\",\"isNewAd\":\"34\",\"ad_position\":\"16\",\"slider_position\":\"16\",\"slider_sequence\":\"16\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":18,\\\"boosted_rank\\\":16,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.051242\\\",\\\"cost_for_two_ctr\\\":\\\"0.097644\\\",\\\"distance\\\":\\\"8.583600997924805\\\",\\\"organic_ctr\\\":\\\"0.021513\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"947\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7490096911405727\\\",\\\"cost_for_two_ctr\\\":\\\"0.9516124316580415\\\",\\\"cost_per_unit\\\":\\\"0.9516070355741736\\\",\\\"distance\\\":\\\"0.1456132356465336\\\",\\\"organic_ctr\\\":\\\"0.11143267307075554\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.014580420129778308\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5049280539796764}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21306638\",\"element_type\":\"listing\",\"rank\":16,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21136495,
                    "name": "Magic Mocktails Cafe",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "8",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.9",
                                "reviewCount": "8",
                                "reviewTextSmall": "8 Reviews",
                                "subtext": "8 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.9",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9100 for one"
                    },
                    "locality": {
                        "name": "Chanapatna, Bangalore",
                        "address": "GST Office Building, Chanapatna, Bangalore",
                        "localityUrl": "bangalore\/chanapatna-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                            "name": "Street Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                            "name": "Shake"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/magic-mocktails-cafe-2-chanapatna-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "55.6 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21136495\",\"element_type\":\"listing\",\"rank\":17}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21651762,
                    "name": "Skyro",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/21651762\/886373a19e909f533dfb951ef0801191_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/21651762\/886373a19e909f533dfb951ef0801191_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "473",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "473",
                                "reviewTextSmall": "473 Reviews",
                                "subtext": "473 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Nagarbhavi, Bangalore",
                        "address": "58, Udayagiri Elegance, Apoorva Layout 2nd Stage, Yeshwantpur, Hobli, near 80 Feet Main Road, 13th Block, 2 Stage, Nagarbhavi, Bangalore",
                        "localityUrl": "bangalore\/nagarbhavi-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sea-food\/",
                            "name": "Seafood"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/skyro-nagarbhavi-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "9.5 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9184813\",\"bzone\":\"0\",\"campaign_id\":\"18160865\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21651762\",\"isNewAd\":\"34\",\"ad_position\":\"18\",\"slider_position\":\"18\",\"slider_sequence\":\"18\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":224,\\\"boosted_rank\\\":18,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.052553\\\",\\\"cost_for_two_ctr\\\":\\\"0.102609\\\",\\\"distance\\\":\\\"9.928640365600586\\\",\\\"organic_ctr\\\":\\\"0.009812\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"963\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7681727157119261\\\",\\\"cost_for_two_ctr\\\":\\\"1\\\",\\\"cost_per_unit\\\":\\\"1\\\",\\\"distance\\\":\\\"0\\\",\\\"organic_ctr\\\":\\\"0.02208341605705646\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.014831806683740003\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21651762\",\"element_type\":\"listing\",\"rank\":18,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21543723,
                    "name": "Kaavu",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/21543723\/8acf754723b0a88beb50bdc1ce2b7b48_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/21543723\/8acf754723b0a88beb50bdc1ce2b7b48_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/21543723\/cacd9b578be2e25a25334f42cb26e269_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "5,065",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.2",
                                "reviewCount": "4,902",
                                "reviewTextSmall": "4,902 Reviews",
                                "subtext": "4,902 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.2",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.1",
                                "reviewCount": "163",
                                "reviewTextSmall": "163 Reviews",
                                "subtext": "163 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Whitefield, Bangalore",
                        "address": "Siddapura, Karnataka, Whitefield, Bangalore",
                        "localityUrl": "bangalore\/whitefield-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 9:30am",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bakery\/",
                            "name": "Bakery"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/kaavu-whitefield-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "15 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21543723\",\"element_type\":\"listing\",\"rank\":19}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20973911,
                    "name": "Mykos Craft Kitchen & Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20973911\/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20973911\/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "6,431",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "6,428",
                                "reviewTextSmall": "6,428 Reviews",
                                "subtext": "6,428 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "3",
                                "reviewTextSmall": "3 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Bannerghatta Road, Bangalore",
                        "address": "4th Floor, SRK Towers, Bannerghatta Road, Bangalore",
                        "localityUrl": "bangalore\/bannerghatta-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mediterranean\/",
                            "name": "Mediterranean"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTcyXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-american\/",
                            "name": "South American"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sushi\/",
                            "name": "Sushi"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/mykos-craft-kitchen-bar-bannerghatta-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "8.3 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9253980\",\"bzone\":\"0\",\"campaign_id\":\"18230141\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20973911\",\"isNewAd\":\"34\",\"ad_position\":\"20\",\"slider_position\":\"20\",\"slider_sequence\":\"20\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":117,\\\"boosted_rank\\\":20,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.038449\\\",\\\"cost_for_two_ctr\\\":\\\"0.072268\\\",\\\"distance\\\":\\\"8.276159286499023\\\",\\\"organic_ctr\\\":\\\"0.020597\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"7013\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5620130676918129\\\",\\\"cost_for_two_ctr\\\":\\\"0.7043046906216803\\\",\\\"cost_per_unit\\\":\\\"0.7042717152781472\\\",\\\"distance\\\":\\\"0.1788967093122702\\\",\\\"organic_ctr\\\":\\\"0.10443806411215811\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.10988734740050592\\\"},\\\"search_id\\\":\\\"f14c3be9-8014-498b-a8f1-63b85002f348\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.3879267414047214}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20973911\",\"element_type\":\"listing\",\"rank\":20,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18889939,
                    "name": "46 Ounces Brewgarden",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18889939\/d1ea883c94dd1f0034a72ac80e2e3281_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18889939\/d1ea883c94dd1f0034a72ac80e2e3281_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18889939\/b999bfa9eca513064be9e260509c19c0_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "4,902",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.2",
                                "reviewCount": "4,208",
                                "reviewTextSmall": "4,208 Reviews",
                                "subtext": "4,208 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.2",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "694",
                                "reviewTextSmall": "694 Reviews",
                                "subtext": "694 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,900 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Electronic City, Bangalore",
                        "address": "43, Phase 1, Hosur Road, Electronic City, Bangalore",
                        "localityUrl": "bangalore\/electronic-city-restaurants"
                    },
                    "timing": {
                        "text": "Opens in 16 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,900 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/46-ounces-brewgarden-electronic-city-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "15.2 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"f14c3be9-8014-498b-a8f1-63b85002f348\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18889939\",\"element_type\":\"listing\",\"rank\":21}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            }
        ]

const RestaurantCard = ({info,distance}) => {
  return (
    <div className="card-container">
      <img src={info?.image.url} alt="restraunt" className="restraunt-logo" />
      <h2>{info?.name}</h2>
      <h3>{info?.cuisine[0].name}</h3>
      <h3>{distance}</h3>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="mainbody-container">
        {restrauntList.map((restaurant)=> {
            return <RestaurantCard key={restaurant.info.resId} {...restaurant}/>
        })}
      
      
    </div>
  );
};

const Footer = () => {
    return <h1> Footer</h1>
}

const AppLayout = () => {
  return (
    <>
      <Headers />
      <MainBody />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
