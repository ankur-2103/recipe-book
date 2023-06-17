import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Bookmark, CloseOne, ShareOne } from "@icon-park/react"

const recipe = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 11,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 3,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 92.11,
    "extendedIngredients": [
        {
            "id": 18334,
            "aisle": "Refrigerated",
            "image": "pie-crust.jpg",
            "consistency": "SOLID",
            "name": "unbaked pie crust",
            "nameClean": "refrigerated pie crust",
            "original": "1 (9 inch) unbaked pie crust",
            "originalName": "(9 inch) unbaked pie crust",
            "amount": 1.0,
            "unit": "9-inch",
            "meta": [
                "()"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "9-inch",
                    "unitLong": "9-inch"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "9-inch",
                    "unitLong": "9-inch"
                }
            }
        },
        {
            "id": 1001009,
            "aisle": "Cheese",
            "image": "shredded-cheddar.jpg",
            "consistency": "SOLID",
            "name": "cheddar cheese",
            "nameClean": "shredded cheddar cheese",
            "original": "1 cup shredded cheddar cheese",
            "originalName": "shredded cheddar cheese",
            "amount": 1.0,
            "unit": "cup",
            "meta": [
                "shredded"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1001025,
            "aisle": "Cheese",
            "image": "shredded-cheese-white.jpg",
            "consistency": "SOLID",
            "name": "monterrey jack cheese",
            "nameClean": "monterey jack cheese",
            "original": "1 cup shredded Monterrey Jack cheese",
            "originalName": "shredded Monterrey Jack cheese",
            "amount": 1.0,
            "unit": "cup",
            "meta": [
                "shredded"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "1 tablespoon flour",
            "originalName": "flour",
            "amount": 1.0,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 10802,
            "aisle": "Meat",
            "image": "ham-whole.jpg",
            "consistency": "SOLID",
            "name": "ham",
            "nameClean": "cooked ham",
            "original": "1/2 cup cooked ham, diced",
            "originalName": "cooked ham, diced",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "diced",
                "cooked"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "4 eggs",
            "originalName": "eggs",
            "amount": 4.0,
            "unit": "",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1049,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "fluid-cream.jpg",
            "consistency": "SOLID",
            "name": "half and half",
            "nameClean": "half and half",
            "original": "1 cup half and half",
            "originalName": "half and half",
            "amount": 1.0,
            "unit": "cup",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 11291,
            "aisle": "Produce",
            "image": "spring-onions.jpg",
            "consistency": "SOLID",
            "name": "green onions",
            "nameClean": "spring onions",
            "original": "2 green onions, chopped",
            "originalName": "green onions, chopped",
            "amount": 2.0,
            "unit": "",
            "meta": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1/4 teaspoon salt",
            "originalName": "salt",
            "amount": 0.25,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002024,
            "aisle": "Spices and Seasonings",
            "image": "dry-mustard.jpg",
            "consistency": "SOLID",
            "name": "ground mustard",
            "nameClean": "mustard powder",
            "original": "1/4 teaspoon ground dry mustard",
            "originalName": "ground dry mustard",
            "amount": 0.25,
            "unit": "teaspoon",
            "meta": [
                "dry"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "pepper",
            "nameClean": "black pepper",
            "original": "Dash of pepper",
            "originalName": "pepper",
            "amount": 1.0,
            "unit": "Dash",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Dash",
                    "unitLong": "Dash"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Dash",
                    "unitLong": "Dash"
                }
            }
        }
    ],
    "id": 650650,
    "title": "Make Ahead Quiche",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/SLFFTBGD/make-ahead-quiche",
    "image": "https://spoonacular.com/recipeImages/650650-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 310.9,
                "unit": "kcal",
                "percentOfDailyNeeds": 15.54
            },
            {
                "name": "Fat",
                "amount": 21.75,
                "unit": "g",
                "percentOfDailyNeeds": 33.46
            },
            {
                "name": "Saturated Fat",
                "amount": 10.39,
                "unit": "g",
                "percentOfDailyNeeds": 64.93
            },
            {
                "name": "Carbohydrates",
                "amount": 15.02,
                "unit": "g",
                "percentOfDailyNeeds": 5.01
            },
            {
                "name": "Net Carbohydrates",
                "amount": 14.28,
                "unit": "g",
                "percentOfDailyNeeds": 5.19
            },
            {
                "name": "Sugar",
                "amount": 1.52,
                "unit": "g",
                "percentOfDailyNeeds": 1.69
            },
            {
                "name": "Cholesterol",
                "amount": 124.28,
                "unit": "mg",
                "percentOfDailyNeeds": 41.43
            },
            {
                "name": "Sodium",
                "amount": 483.82,
                "unit": "mg",
                "percentOfDailyNeeds": 21.04
            },
            {
                "name": "Protein",
                "amount": 13.51,
                "unit": "g",
                "percentOfDailyNeeds": 27.02
            },
            {
                "name": "Calcium",
                "amount": 257.66,
                "unit": "mg",
                "percentOfDailyNeeds": 25.77
            },
            {
                "name": "Selenium",
                "amount": 17.06,
                "unit": "µg",
                "percentOfDailyNeeds": 24.37
            },
            {
                "name": "Phosphorus",
                "amount": 240.99,
                "unit": "mg",
                "percentOfDailyNeeds": 24.1
            },
            {
                "name": "Vitamin B2",
                "amount": 0.34,
                "unit": "mg",
                "percentOfDailyNeeds": 20.18
            },
            {
                "name": "Zinc",
                "amount": 1.64,
                "unit": "mg",
                "percentOfDailyNeeds": 10.91
            },
            {
                "name": "Vitamin B12",
                "amount": 0.62,
                "unit": "µg",
                "percentOfDailyNeeds": 10.33
            },
            {
                "name": "Vitamin A",
                "amount": 506.29,
                "unit": "IU",
                "percentOfDailyNeeds": 10.13
            },
            {
                "name": "Folate",
                "amount": 38.21,
                "unit": "µg",
                "percentOfDailyNeeds": 9.55
            },
            {
                "name": "Vitamin B1",
                "amount": 0.14,
                "unit": "mg",
                "percentOfDailyNeeds": 9.32
            },
            {
                "name": "Vitamin K",
                "amount": 9.21,
                "unit": "µg",
                "percentOfDailyNeeds": 8.77
            },
            {
                "name": "Iron",
                "amount": 1.33,
                "unit": "mg",
                "percentOfDailyNeeds": 7.39
            },
            {
                "name": "Manganese",
                "amount": 0.14,
                "unit": "mg",
                "percentOfDailyNeeds": 6.89
            },
            {
                "name": "Vitamin B5",
                "amount": 0.68,
                "unit": "mg",
                "percentOfDailyNeeds": 6.83
            },
            {
                "name": "Vitamin B3",
                "amount": 1.07,
                "unit": "mg",
                "percentOfDailyNeeds": 5.35
            },
            {
                "name": "Vitamin B6",
                "amount": 0.11,
                "unit": "mg",
                "percentOfDailyNeeds": 5.33
            },
            {
                "name": "Magnesium",
                "amount": 19.59,
                "unit": "mg",
                "percentOfDailyNeeds": 4.9
            },
            {
                "name": "Potassium",
                "amount": 146.63,
                "unit": "mg",
                "percentOfDailyNeeds": 4.19
            },
            {
                "name": "Vitamin D",
                "amount": 0.61,
                "unit": "µg",
                "percentOfDailyNeeds": 4.06
            },
            {
                "name": "Vitamin E",
                "amount": 0.58,
                "unit": "mg",
                "percentOfDailyNeeds": 3.9
            },
            {
                "name": "Vitamin C",
                "amount": 2.49,
                "unit": "mg",
                "percentOfDailyNeeds": 3.01
            },
            {
                "name": "Fiber",
                "amount": 0.74,
                "unit": "g",
                "percentOfDailyNeeds": 2.96
            },
            {
                "name": "Copper",
                "amount": 0.06,
                "unit": "mg",
                "percentOfDailyNeeds": 2.95
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 24.13,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 0.68,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 9.182173913043478,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Petunidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Delphinidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Malvidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Pelargonidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Peonidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Catechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epigallocatechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epicatechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epicatechin 3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Hesperetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Naringenin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Apigenin",
                "amount": 0.0,
                "unit": "mg"
            },
            {
                "name": "Luteolin",
                "amount": 0.0,
                "unit": "mg"
            },
            {
                "name": "Isorhamnetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Kaempferol",
                "amount": 0.04,
                "unit": "mg"
            },
            {
                "name": "Myricetin",
                "amount": 0.0,
                "unit": "mg"
            },
            {
                "name": "Quercetin",
                "amount": 0.32,
                "unit": "mg"
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "amount": 0.0,
                "unit": ""
            }
        ],
        "ingredients": [
            {
                "id": 18334,
                "name": "unbaked pie crust",
                "amount": 0.13,
                "unit": "9-inch",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 11.5,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 3.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.68,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 114.25,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 1.54,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.25,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 12.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 6.52,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.79,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 17.5,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 1.83,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.63,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.42,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 24.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 18.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 11.53,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 2.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 4.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Magnesium",
                        "amount": 3.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Sodium",
                        "amount": 102.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 1001009,
                "name": "cheddar cheese",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 14.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 2.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.52,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 57.63,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Fluoride",
                        "amount": 4.93,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 3.29,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 141.53,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 4.8,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 2.97,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.34,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 4.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 10.88,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 64.69,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.15,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 2.71,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 99.86,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 3.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 92.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 1001025,
                "name": "monterrey jack cheese",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 12.57,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.24,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 2.18,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 52.69,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 3.46,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 108.62,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 4.28,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 2.54,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.35,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 2.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 11.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 62.72,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 2.7,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 105.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 3.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 84.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 20081,
                "name": "flour",
                "amount": 0.13,
                "unit": "tablespoon",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 1.44,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 3.41,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.72,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 1.72,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.32,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 1.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.69,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.21,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 10802,
                "name": "ham",
                "amount": 0.06,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 5.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 10.52,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 1.33,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.54,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Folate",
                        "amount": 0.21,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.4,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 19.85,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 20.62,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.1,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.12,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 1.48,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Sodium",
                        "amount": 81.57,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 1.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    }
                ]
            },
            {
                "id": 1123,
                "name": "eggs",
                "amount": 0.5,
                "unit": "",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 81.84,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.81,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 64.68,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 31.46,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 2.77,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 118.8,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 2.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.42,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 10.34,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.07,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.08,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 6.75,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 30.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 43.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.2,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.69,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.34,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.6
                    },
                    {
                        "name": "Calcium",
                        "amount": 12.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 2.64,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 31.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.44,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.23,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 1049,
                "name": "half and half",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 10.59,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 5.66,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 39.63,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.91,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.95,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 107.08,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.3,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 3.48,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.91,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.39,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 1.25,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.97,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 39.93,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 28.74,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.06,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 1.3,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 2.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 32.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 3.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 18.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.27,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 11291,
                "name": "green onions",
                "amount": 0.25,
                "unit": "",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 0.96,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 29.91,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 1.92,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 6.21,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.08,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 8.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 1.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.14,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 2.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.6,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.48,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 2047,
                "name": "salt",
                "amount": 0.03,
                "unit": "teaspoon",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 0.0,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 72.67,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 1002024,
                "name": "ground mustard",
                "amount": 0.03,
                "unit": "teaspoon",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 0.32,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.02,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.1,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.13,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.46,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.52,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.6
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.23,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            },
            {
                "id": 1002030,
                "name": "pepper",
                "amount": 0.13,
                "unit": "Dash",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.43
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Choline",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.35
                    },
                    {
                        "name": "Iron",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.39
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.91
                    },
                    {
                        "name": "Calories",
                        "amount": 0.03,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 15.54
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.07,
                        "unit": "IU",
                        "percentOfDailyNeeds": 10.13
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.01
                    },
                    {
                        "name": "Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 33.46
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.55
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 5.33
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 2.96
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.69
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 24.37
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.19
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.1
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 10.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.19
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.18
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 64.93
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0.0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.32
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.83
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.6
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.9
                    },
                    {
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 2.95
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.04
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 6.89
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 4.06
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.01
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.9
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 17.44,
            "percentFat": 63.17,
            "percentCarbs": 19.39
        },
        "weightPerServing": {
            "amount": 117,
            "unit": "g"
        }
    },
    "summary": "Make Ahead Quiche might be a good recipe to expand your main course recipe box. One portion of this dish contains approximately <b>14g of protein</b>, <b>22g of fat</b>, and a total of <b>311 calories</b>. This recipe serves 8 and costs 92 cents per serving. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a <b>very budget friendly</b> recipe for fans of Mediterranean food. This recipe is liked by 2 foodies and cooks. This recipe from Foodista requires eggs, ham, salt, and pepper. With a spoonacular <b>score of 26%</b>, this dish is not so tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/make-ahead-quiche-1372315\">Make Ahead Quiche</a>, <a href=\"https://spoonacular.com/recipes/make-ahead-tomato-croissant-quiche-183484\">Make-Ahead Tomato-Croissant Quiche</a>, and <a href=\"https://spoonacular.com/recipes/crustless-quiche-to-make-ahead-and-freeze-1226503\">Crustless Quiche to Make Ahead and Freeze</a>.",
    "cuisines": [
        "Mediterranean",
        "French",
        "European"
    ],
    "dishTypes": [
        "lunch",
        "main course",
        "morning meal",
        "brunch",
        "main dish",
        "breakfast",
        "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "sparkling wine",
            "champagne",
            "bordeaux",
            "white burgundy"
        ],
        "pairingText": "Quiche can be paired with Sparkling Wine, Champagne, and Bordeaux. Even if you aren't making mimosas, sparkling wine is great with eggs for two reasons. One, if you're eating eggs early in the day, sparkling wine has less alcohol. Secondly, it cleanses the palate, which is important since yolk is known to coat the palate. You could try Viva Diva Moscato Colada. Reviewers quite like it with a 4.9 out of 5 star rating and a price of about 11 dollars per bottle.",
        "productMatches": [
            {
                "id": 465263,
                "title": "Viva Diva Moscato Colada",
                "description": "Sweet Moscato wine infused with natural coconut & pineapple flavor. Light orange in color. Fruity, typical of coconut & pineapple with light hints of Moscato. Excellent as an aperitif or mixing with cocktails.",
                "price": "$10.989999771118164",
                "imageUrl": "https://spoonacular.com/productImages/465263-312x231.jpg",
                "averageRating": 0.9800000190734863,
                "ratingCount": 6.0,
                "score": 0.927368440126118,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fviva-diva-moscato-colada%2F138557"
            }
        ]
    },
    "instructions": "In a medium bowl, toss the flour with the grated cheese.  Evenly spread the cheese over the bottom of the pie crust.  Top the cheese with the diced ham.  In a medium bowl, whisk together eggs, half and half, salt, pepper and dry mustard.  Stir in the green onions.  Pour the egg mixture over the ham and cheese.\nCover the unbaked quiche with plastic wrap, then with foil, sealing the edges well.  Place the prepared quiche in the freezer.  When ready to bake, preheat the oven to 400 degrees.  Do not thaw the quiche! Remove the foil and plastic wrap.  Place the foil around the edges of the crust to prevent burning.  Place the frozen quiche in the oven and bake for about 1 hour, or until the filling is set and the crust is golden brown.\nTo cook the quiche immediately (without freezing first), preheat the oven to 350 degrees and bake for 45 minutes to 1 hour.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "In a medium bowl, toss the flour with the grated cheese.  Evenly spread the cheese over the bottom of the pie crust.  Top the cheese with the diced ham.  In a medium bowl, whisk together eggs, half and half, salt, pepper and dry mustard.  Stir in the green onions.",
                    "ingredients": [
                        {
                            "id": 1049,
                            "name": "half and half",
                            "localizedName": "half and half",
                            "image": "fluid-cream.jpg"
                        },
                        {
                            "id": 11291,
                            "name": "green onions",
                            "localizedName": "green onions",
                            "image": "spring-onions.jpg"
                        },
                        {
                            "id": 1002024,
                            "name": "mustard powder",
                            "localizedName": "mustard powder",
                            "image": "dry-mustard.jpg"
                        },
                        {
                            "id": 99186,
                            "name": "diced ham",
                            "localizedName": "diced ham",
                            "image": "diced-ham.jpg"
                        },
                        {
                            "id": 18334,
                            "name": "pie crust",
                            "localizedName": "pie crust",
                            "image": "pie-crust.jpg"
                        },
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 1002030,
                            "name": "pepper",
                            "localizedName": "pepper",
                            "image": "pepper.jpg"
                        },
                        {
                            "id": 0,
                            "name": "spread",
                            "localizedName": "spread",
                            "image": ""
                        },
                        {
                            "id": 20081,
                            "name": "all purpose flour",
                            "localizedName": "all purpose flour",
                            "image": "flour.png"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        },
                        {
                            "id": 2047,
                            "name": "salt",
                            "localizedName": "salt",
                            "image": "salt.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "whisk.png"
                        },
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Pour the egg mixture over the ham and cheese.",
                    "ingredients": [
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        },
                        {
                            "id": 10151,
                            "name": "ham",
                            "localizedName": "ham",
                            "image": "ham-whole.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Cover the unbaked quiche with plastic wrap, then with foil, sealing the edges well.",
                    "ingredients": [
                        {
                            "id": 10018364,
                            "name": "wrap",
                            "localizedName": "wrap",
                            "image": "flour-tortilla.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404730,
                            "name": "plastic wrap",
                            "localizedName": "plastic wrap",
                            "image": "plastic-wrap.jpg"
                        },
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ]
                },
                {
                    "number": 4,
                    "step": "Place the prepared quiche in the freezer.  When ready to bake, preheat the oven to 400 degrees.  Do not thaw the quiche!",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ]
                },
                {
                    "number": 5,
                    "step": "Remove the foil and plastic wrap.",
                    "ingredients": [
                        {
                            "id": 10018364,
                            "name": "wrap",
                            "localizedName": "wrap",
                            "image": "flour-tortilla.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404730,
                            "name": "plastic wrap",
                            "localizedName": "plastic wrap",
                            "image": "plastic-wrap.jpg"
                        },
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ]
                },
                {
                    "number": 6,
                    "step": "Place the foil around the edges of the crust to prevent burning.",
                    "ingredients": [
                        {
                            "id": 0,
                            "name": "crust",
                            "localizedName": "crust",
                            "image": ""
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ]
                },
                {
                    "number": 7,
                    "step": "Place the frozen quiche in the oven and bake for about 1 hour, or until the filling is set and the crust is golden brown.",
                    "ingredients": [
                        {
                            "id": 0,
                            "name": "crust",
                            "localizedName": "crust",
                            "image": ""
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ],
                    "length": {
                        "number": 60,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 8,
                    "step": "To cook the quiche immediately (without freezing first), preheat the oven to 350 degrees and bake for 45 minutes to 1 hour.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ],
                    "length": {
                        "number": 105,
                        "unit": "minutes"
                    }
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/make-ahead-quiche-650650"
}

const Recipe = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col mx-auto max-w-7xl">
                <div className="relative flex flex-col m-2 p-6 md:p-0 md:my-12">
                    <span className="text-3xl font-bold my-5">{recipe.title}</span>
                    <hr/>
                    <p className="my-5" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                    <img src="https://spoonacular.com/recipeImages/650650-636x393.jpg" alt='' className="md:h-sm md:mx-20 md:object-cover" />
                    <span className=" flex absolute right-1 gap-4">
                        <ShareOne size={20} />
                        <Bookmark size={20} />   
                    </span>
                </div>
                <div className="flex flex-col md:flex-row md:divide-x-2 gap-10">
                    <div className="flex flex-col flex-1 mx-8">
                        <div className="flex divide-x-2 gap-2 ">
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">PREP TIME<span className="text-black font-medium justify-center">{recipe.cookingMinutes && recipe.cookingMinutes > 0 ? recipe.cookingMinutes+" min" : <CloseOne/>}</span></span>
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">SERVINGS<span className="text-black font-medium justify-center">{recipe.servings && recipe.servings > 0 ? recipe.servings : <CloseOne/>}</span></span>
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">HEALTH SCORE<span className="text-black font-medium justify-center">{recipe.healthScore && recipe.healthScore > 0 ? recipe.healthScore+"/100" : <CloseOne/>}</span></span>
                        </div>
                        <div className="flex flex-col my-4">
                            <span className="font-medium text-3xl">Ingredients</span>
                            <ol className="px-6 list-decimal my-2 space-y-4">
                                {recipe.extendedIngredients && recipe.extendedIngredients.map((data) => (
                                    <li key={data.id} className="fl ex flex-col tracking-wider">
                                        <span className="font-semibold">{data.nameClean}</span>
                                        <span className="flex gap-4">
                                            {data.amount && <span>Amount: {data.amount}</span>}
                                            {data.unit && <span>Unit: {data.unit}</span>}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-3xl my-4">Instructions</span>
                            <div className="flex flex-col">
                                {recipe.analyzedInstructions && recipe.analyzedInstructions[0].steps.map((data) => (
                                    <div key={data.number} className="flex gap-2 py-2">
                                        <span className="bg-[#FF642F] text-white rounded-full h-8 w-8 flex items-center justify-center p-4 font-medium">{data.number}</span>
                                        <span className="text-lg">{data.step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#E8E8E8] mx-5 rounded-lg">
                            <span className="font-medium text-3xl my-4 p-8">Nutritions Facts</span>
                            <div className="flex flex-col divide-x-2">
                                {recipe.nutrition.nutrients && recipe.nutrition.nutrients.map((data, key) => (
                                    <span className="flex py-2 px-2 justify-between" key={key}>{data.name}<span className="font-medium">{data.amount} {data.unit}</span></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-auto max-w-7xl">
                <span className="font-medium text-3xl my-4">Similar recipes</span>
                <div className="grid md:grid-cols-3 lg:grid-cols-4">

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Recipe