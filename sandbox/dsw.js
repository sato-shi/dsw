const PWASettings = {
    "dswVersion": 2.2,
    "applyImmediately": true,
    "appShell": [
        "/dsw.js",
        "/helmet.png",
        "/index.html?homescreen=1"
    ],
    "notification": {
        "auto": false,
        "server": "GCM",
        "productId": "483627048705",
        "notifierId": "AIzaSyCeU5rn3PrMV7Gjq60LypWCF-MHGk3wXFU"
    },
    "enforceSSL": false,
    "requestTimeLimit": 6000,
    "keepUnusedCaches": false,
    "dswRules": {
        "byPassable": {
            "match": { "path": "/bypass/" },
            "apply": {
                "bypass": "request"
            }
        },
        "ignorable": {
            "match": { "path": "/ignore/" },
            "apply": {
                "bypass": "ignore"
            }
        },
        "easterEgg": {
            "match": { "path": "/easter-egg" },
            "apply": {
                "output": "You found an easter egg!!!"
            }
        },
        "moved-pages": {
            "match": { "path": "/old-site/(.*)" },
            "apply": {
                "redirect": "/redirected.html?$1"
            }
        },
        "imageNotFound": {
            "match": {
                "status": [404, 500],
                "extension": ["jpg", "gif", "png", "jpeg", "webp"]
            },
            "apply": {
                "fetch": "/images/public/404.jpg"
            }
        },
        "redirectOlderPage": {
            "match": {
                "path": "/legacy-images/.*"
            },
            "apply": {
                "fetch": "/images/public/gizmo.jpg"
            }
        },
        "pageNotFound": {
            "match": {
                "status": [404]
            },
            "apply": {
                "fetch": "/404.html"
            }
        },
        "imageNotCached": {
            "match": { "path": "/images/not-cached" },
            "apply": {
                "cache": false
            }
        },
        "images": {
            "match": { "extension": ["jpg", "gif", "png", "jpeg", "webp"] },
            "apply": {
                "cache": {
                    "name": "cachedImages",
                    "version": "1",
                    "expires": "1h"
                }
            }
        },
        "statics": {
            "match": { "extension": ["js", "css"] },
            "apply": {
                "cache": {
                    "name": "static-files",
                    "version": "2"
                }
            }
        },
        "static-html": {
            "match": [
                { "extension": ["html"] },
                { "path": "/$" }
            ],
            "strategy": "fastest",
            "apply": {
                "cache": {
                    "name": "static-html-files",
                    "version": "1"
                }
            }
        },
        
        
     
        
        
        
        "videos": {
            "match": { "path": "/videos/" },
            "strategy": "offline-first",
            "apply": {
                "cache": {
                    "name": "cached-videos",
                    "version": "1"
                }
            }
        },
        "userData": {
            "match": { "path": "/api/user/.*" },
            "options": { "credentials": "same-origin"},
            "strategy": "offline-first",
            "apply": {
                "indexedDB": {
                    "name": "userData",
                    "version": "3",
                    "key": "id",
                    "indexes": [
                        "name",
                        {
                            "name": "twitter",
                            "path": "twitter",
                            "options": {
                                "unique": true
                            }
                        }
                    ]
                }
            }
        },
        "service": {
            "match": { "path": "/api/service/.*" },
            "options": { "credentials": "same-origin"},
            "strategy": "fastest",
            "apply": {
                "indexedDB": {
                    "name": "serviceData",
                    "version": "1",
                    "indexes": ["id"]
                }
            }
        }
    }
}
;
