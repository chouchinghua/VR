var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "司令台",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.12403687194068,
        "pitch": 0.056204081497565284,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -0.020799377524715723,
          "pitch": 0.28760652999940817,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1323275154760086,
          "pitch": 0.054011754256899636,
          "title": "司令台",
          "text": "大型活動的主持地方<div>典禮組練習的地方</div>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "操場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.10507594476292681,
        "pitch": -0.025291893900327267,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.3351566527155505,
          "pitch": 0.09009108420280754,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 2.00601967600743,
          "pitch": 0.030753785676159495,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 2.450574958487328,
          "pitch": 0.012551863673593289,
          "rotation": 0.7853981633974483,
          "target": "3-"
        },
        {
          "yaw": 2.968323125497087,
          "pitch": 0.053130942861834285,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.32660836442919994,
          "pitch": 0.3972294515498156,
          "title": "操場",
          "text": "跑步 足球 袋棍球 飛盤"
        }
      ]
    },
    {
      "id": "2-",
      "name": "排球場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.005342844648957623,
        "pitch": 0.12393028011159046,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -0.8727521910459863,
          "pitch": -0.021160924772694045,
          "rotation": 0.7853981633974483,
          "target": "3-"
        },
        {
          "yaw": 1.226727157755164,
          "pitch": 0.05615949492572092,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1418942650574362,
          "pitch": 0.14069810772677016,
          "title": "排球場",
          "text": "班際排球比賽 排球社練習"
        }
      ]
    },
    {
      "id": "3-",
      "name": "籃球場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.06589508400386634,
        "pitch": 0.027821083290358928,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.7925078585440648,
          "pitch": 0.0539598298538948,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 2.960987896215494,
          "pitch": 0.14566030433594257,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 2.4544945472472577,
          "pitch": 0.005367139881103711,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.18688585483522502,
          "pitch": 0.28630628743884934,
          "title": "籃球場",
          "text": "班際籃球比賽"
        }
      ]
    },
    {
      "id": "4-",
      "name": "網球場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.5565487410643293,
        "pitch": 0.16439634765403,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.19009382107623018,
          "pitch": 0.05853492105540248,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -1.3632515180477505,
          "pitch": 0.12016738207281108,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5194280944009844,
          "pitch": 0.575249398199217,
          "title": "網球場",
          "text": "老師們休閒娛樂"
        }
      ]
    }
  ],
  "name": "操場",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
