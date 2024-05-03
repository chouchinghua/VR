var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "穿堂",
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
        "yaw": 2.4631556546537396,
        "pitch": 0.002529189390031661,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 2.4712790056367187,
          "pitch": 0.5398882526376845,
          "rotation": 3.141592653589793,
          "target": "1-"
        },
        {
          "yaw": -2.951062710387715,
          "pitch": 0.3401880293352413,
          "rotation": 2.356194490192345,
          "target": "2-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8097212152921376,
          "pitch": 0.1960587713579578,
          "title": "穿堂",
          "text": "社團練習、表演的地方<div>也可以打躲避球</div>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "校園中庭",
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
        "yaw": 0.4708327924795306,
        "pitch": 0.1365002100931214,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.1701528798563583,
          "pitch": 0.21930877893369427,
          "rotation": 6.283185307179586,
          "target": "0-"
        },
        {
          "yaw": 0.742683851537274,
          "pitch": 0.18872899042858293,
          "rotation": 0.7853981633974483,
          "target": "2-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4770906946542599,
          "pitch": 0.48409725162095363,
          "title": "校園中庭",
          "text": "舉辦活動 例如校慶園遊會"
        }
      ]
    },
    {
      "id": "2-1-",
      "name": "活動中心1樓 游泳池",
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
        "yaw": 0.11876473645827446,
        "pitch": 0.12934812919305827,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.8175719623018995,
          "pitch": 0.1770082576197538,
          "rotation": 0,
          "target": "3-2-"
        },
        {
          "yaw": 2.25075929274176,
          "pitch": 0.09611558821908872,
          "rotation": 0.7853981633974483,
          "target": "0-"
        },
        {
          "yaw": 2.1054990344270648,
          "pitch": 0.05409765976700598,
          "rotation": 5.497787143782138,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11928105575449877,
          "pitch": 0.3494778592211638,
          "title": "游泳池",
          "text": "盥洗 游泳"
        }
      ]
    },
    {
      "id": "3-2-",
      "name": "活動中心2樓 社團辦公室",
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
        "yaw": 0.24255145352634777,
        "pitch": 0.10738277526142248,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.6689321197205533,
          "pitch": 0.27633599627045413,
          "rotation": 0.7853981633974483,
          "target": "2-1-"
        },
        {
          "yaw": 1.7689560912815194,
          "pitch": 0.053556570865108455,
          "rotation": 0,
          "target": "4-5-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15406418826844082,
          "pitch": 0.32531503345868273,
          "title": "社團辦公室",
          "text": "課後社團練習 製作道具"
        }
      ]
    },
    {
      "id": "4-5-",
      "name": "活動中心5樓 籃球場",
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
        "yaw": 1.39567897175586,
        "pitch": 0.03270974648573599,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -2.1251515551255338,
          "pitch": 0.10771977672126987,
          "rotation": 0,
          "target": "3-2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.274395776069266,
          "pitch": 0.16157354864292017,
          "title": "籃球場",
          "text": "籃球隊練習的地方"
        }
      ]
    }
  ],
  "name": "活動中心",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
