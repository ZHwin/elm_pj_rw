/**
 * @平行绳 飞机频道：https://t.me/tigerorrose
 * 变量：elmck: 必填，账号cookie，短信登录面板项目地址：https://github.com/funaihui/eleWeb
 * cron 1 1 1 1 1
 * 需要手动玩到四级才能跑
 * 2023.9.12 更新：首次发布；
 */

const {
  "newSign": newSign,
  "tryCatchPromise": tryCatchPromise,
  "validateCarmeWithType": validateCarmeWithType,
  "getCookies": getCookies,
  "checkCk": checkCk,
  "getUserInfo": getUserInfo,
  "checkCarmeCount": checkCarmeCount,
  "wait": wait
} = require("./common");
const _0x57fe70 = 19;
const _0x5540ce = require("request");
const _0x4e772d = require("md5");
let _0x359a6b = 1;
const _0x115063 = process["env"]["ELE_CARME"];
let _0x7ccece;
async function _0x392857(_0x431b40) {
  const _0x1be9e = {
    "bizScene": "ELEME_ELMYLY",
    "instance": "INNER"
  };
  let _0x4bbcc7 = await _0x29a4cc("mtop.alsc.playgame.common.real.name.authentication", _0x431b40, _0x1be9e);
  return _0x4bbcc7["authentication"];
}
async function _0x537035(_0x262a40) {
  const _0x3863fd = new Date()["getTime"]();
  const _0x1be2db = {
    "apiName": "taobao.miniapp.eleuserinfo.get",
    "data": '{}',
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x3863fd + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x1f7e50 = await _0x29a4cc("mtop.miniapp.cloud.invoke.top", _0x262a40, _0x1be2db);
  return _0x1f7e50["authentication"];
}
async function _0x28d2a0(_0x9a9a14) {
  const _0xb8ccd6 = new Date()["getTime"]();
  const _0x38525b = {
    "body": "{\"nickname\":\"普通玩家\",\"avatar\":\"998d3ad143b581e8f2a3866c1f8a783cjpeg\",\"inviterId\":\"\",\"inviterType\":0,\"shareTime\":0,\"debug\":null,\"reqIdx\":" + _0x359a6b + ",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/api/role/login",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0xb8ccd6 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x30f92c = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x9a9a14, _0x38525b);
  if (_0x30f92c) {
    return _0x30f92c["data"];
  }
  return null;
}
async function _0x48769b(_0xaa6d55) {
  const _0x106e2e = new Date()["getTime"]();
  _0x359a6b++;
  const _0x5e219d = {
    "body": "{\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/onlineB/api/game/getAllOpenActivityInfo",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x106e2e + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  return await _0x29a4cc("mtop.miniapp.cloud.application.request", _0xaa6d55, _0x5e219d);
}
async function _0x3daa62(_0x223bea, _0x145a52, _0x551b16, _0xa4c869 = 1014, _0x3b4b4f) {
  const _0x3f21e4 = new Date()["getTime"]();
  _0x359a6b++;
  const _0x4f7866 = {
    "body": "{\"orderQueryId\":\"" + _0x145a52 + "\",\"posArray\":" + JSON["stringify"](_0x551b16) + ",\"customerId\":\"" + _0xa4c869 + "\",\"type\":" + _0x3b4b4f + ",\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/api/game/completeOrder",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x3f21e4 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x27829b = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x223bea, _0x4f7866);
  if (_0x27829b) {
    let _0x4c94d9 = _0x27829b["data"];
    if (!_0x4c94d9) {
      console["log"](_0x27829b);
      return null;
    }
    let _0x1b0509 = _0x4c94d9["updatePieceArray"];
    if (_0x1b0509) {
      for (let _0x19130f = 0; _0x19130f < _0x1b0509["length"]; _0x19130f++) {
        let _0x57ab2e = _0x1b0509[_0x19130f];
        for (let _0xf63d08 = 0; _0xf63d08 < _0x3c9869["length"]; _0xf63d08++) {
          let _0x1bcefc = _0x3c9869[_0xf63d08];
          if (_0x57ab2e["pieceId"] === _0x1bcefc["pieceId"]) {
            _0x3c9869[_0xf63d08] = _0x57ab2e;
          }
        }
      }
    }
    let _0x5990dc = _0x4c94d9["ownCropMap"];
    if (_0x5990dc) {
      _0x7ccece = _0x5990dc;
    }
    if (_0x4c94d9["orderArray"]) {
      _0xef4d9f = _0x4c94d9["orderArray"];
    }
  }
  return _0x27829b;
}
async function _0x36b02a(_0x3199e8) {
  const _0x518625 = new Date()["getTime"]();
  _0x359a6b++;
  const _0x1b6338 = {
    "body": "{\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/onlineB/api/task/getTasksList",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x518625 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x48d374 = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x3199e8, _0x1b6338);
  let _0x2a53a7 = _0x48d374["data"];
  if (_0x2a53a7) {
    try {
      let _0x595a2d = _0x2a53a7["taskInfo"]["dailyTasks"];
      if (_0x595a2d) {
        for (const _0x46de03 of Object["keys"](_0x595a2d)) {
          const _0x548210 = _0x595a2d[_0x46de03];
          if (_0x548210["type"] === 3 && !_0x548210["haveGotReward"]) {
            let _0x39b33e = await _0x2acc14(_0x3199e8, _0x46de03);
            if (_0x39b33e["data"]) {
              console["log"]("领取任务奖励完成，当前乐园币", _0x39b33e["data"]["elemCoin"]);
            }
          }
        }
      }
    } catch (_0x38d0fa) {}
  }
}
async function _0x2acc14(_0x2b2900, _0x163de5) {
  const _0x325956 = new Date()["getTime"]();
  _0x359a6b++;
  const _0x171504 = {
    "body": "{\"taskId\":" + _0x163de5 + ",\"taskType\":0,\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/api/task/getTaskAward",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x325956 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  return await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x2b2900, _0x171504);
}
async function _0x27f656(_0x3b5284, _0x5a92f5) {
  const _0x4b557a = new Date()["getTime"]();
  _0x359a6b++;
  const _0x1d90be = {
    "body": "{\"pos\":" + JSON["stringify"](_0x5a92f5) + ",\"reqIdx\":" + _0x359a6b + " ,\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/onlineB/api/game/cropSell",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x4b557a + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0xad6628 = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x3b5284, _0x1d90be);
  if (_0xad6628["data"]) {
    for (let _0x2f318a = 0; _0x2f318a < _0x3c9869["length"]; _0x2f318a++) {
      let _0x3652a8 = _0x3c9869[_0x2f318a];
      if (_0xad6628["data"]["piece"]["pieceId"] === _0x3652a8["pieceId"]) {
        _0x3c9869[_0x2f318a] = _0xad6628["data"]["piece"];
      }
    }
    console["log"]("售卖植物，当前金币", _0xad6628["data"]["coin"]);
  }
  return _0xad6628;
}
async function _0x29a4cc(_0x3b2b92, _0x3b2c75, _0xd98edb) {
  const _0x4ca26a = {
    "accept": "application/json",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": _0x3b2c75,
    "x-miniapp-id-taobao": "3000000088680964",
    "x-miniapp-version": "0.0.17",
    "x-mini-appkey": "34351764",
    "x-miniapp-env": "{\"nbsn\":\"ONLINE\",\"nbsource\":\"online\"}",
    "x-req-appkey": "34351764",
    "x-open-biz": "mini-app",
    "x-open-biz-data": "%7B%22appId%22%3A%223000000088680964%22%2C%22invokerAppId%22%3A%223000000088680964%22%2C%22viaFusionApp%22%3Atrue%7D",
    "x-exttype": "isv_open_api",
    "appid": "3000000088680964"
  };
  const _0xef57e7 = new Date()["getTime"]();
  const _0x3373bf = 34351764;
  const _0x477ee8 = "data=" + encodeURIComponent(JSON["stringify"](_0xd98edb));
  const _0x3ec27f = await newSign(_0x3b2c75, '&' + _0xef57e7 + '&' + _0x3373bf + '&' + JSON["stringify"](_0xd98edb), _0x115063);
  const _0x4adacf = {
    "url": "https://shopping.ele.me/h5/" + _0x3b2b92 + "/1.0/?jsv=2.6.1&appKey=34351764&t=" + _0xef57e7 + "&sign=" + _0x3ec27f + "&api=" + _0x3b2b92 + "&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    "method": "POST",
    "headers": _0x4ca26a,
    "body": _0x477ee8
  };
  return tryCatchPromise(_0x51eb0b => {
    _0x5540ce(_0x4adacf, async (_0x26a2bb, _0x282f4f, _0x5b2c68) => {
      if (!_0x26a2bb && _0x282f4f["statusCode"] == 200) {
        try {
          const _0x3ce384 = JSON["parse"](_0x5b2c68);
          _0x51eb0b(_0x3ce384["data"]["data"]);
        } catch (_0x48f6a7) {
          console["log"](_0x5b2c68);
          _0x51eb0b(null);
        }
      } else {
        _0x51eb0b(null);
      }
    });
  });
}
function _0x357b34(_0x470f69, _0x595056) {
  var _0x3fe926 = Math["floor"](Math["random"]() * (_0x595056 - _0x470f69 + 1) + _0x470f69);
  return _0x3fe926;
}
let _0xba6bb7;
let _0x3df134;
let _0x3c9869 = [];
let _0xef4d9f = [];
let _0x4fd30f = [];
async function _0x1fe303(_0x20c593) {
  let _0x11d3aa = 0;
  for (let _0x2fd23b = 0; _0x2fd23b < _0xef4d9f["length"]; _0x2fd23b++) {
    let _0x596f2c = _0xef4d9f[_0x2fd23b];
    let _0x4b9db3 = _0x596f2c["needCropIds"];
    for (let _0x4cd3fa = 0; _0x4cd3fa < _0x4b9db3["length"]; _0x4cd3fa++) {
      let _0x2c168a = _0x4b9db3[_0x4cd3fa];
      _0x11d3aa = await _0x10672d(_0x20c593, _0x596f2c, _0x2c168a);
      if (_0x11d3aa === 3 || _0x11d3aa === -1) {
        break;
      }
      while (_0x11d3aa === 0) {
        _0x11d3aa = await _0x10672d(_0x20c593, _0x596f2c, _0x2c168a);
      }
      if (_0x11d3aa === 3 || _0x11d3aa === -1) {
        break;
      }
    }
    if (_0x11d3aa === 4) {
      _0x11d3aa = await _0x2e8894(_0x4b9db3, _0x20c593, _0x596f2c);
    }
    if (_0x11d3aa === 3 || _0x11d3aa === -1) {
      break;
    }
  }
  return _0x11d3aa;
}
async function _0x59ccf5(_0x335fda, _0x2b8873) {
  await _0x80976f(_0x2b8873);
  await _0x48769b(_0x335fda);
  let _0x5c4de6 = await _0x10672d(_0x335fda);
  while (_0x5c4de6 === 0) {
    let _0x4c0e88 = await _0x28d2a0(_0x335fda);
    await _0x80976f(_0x4c0e88);
    _0x5c4de6 = await _0x10672d(_0x335fda);
  }
  await _0x36b02a(_0x335fda);
}
async function _0x80976f(_0x3a539b) {
  _0xba6bb7 = null;
  _0x3df134 = null;
  _0x3c9869 = [];
  _0xef4d9f = [];
  _0x4fd30f = [];
  _0xba6bb7 = _0x3a539b["gameId"];
  _0x3df134 = _0x3a539b["token"];
  _0x7ccece = _0x3a539b["cropInfo"]["ownCropMap"];
  let _0x156102 = _0x3a539b["gardenInfo"]["checkerboard"];
  for (let _0x2b3556 = 0; _0x2b3556 < _0x156102["length"]; _0x2b3556++) {
    let _0xd4744a = _0x156102[_0x2b3556];
    for (let _0x12d3ca = 0; _0x12d3ca < _0xd4744a["length"]; _0x12d3ca++) {
      let _0x64f2c4 = _0xd4744a[_0x12d3ca];
      if (!_0x64f2c4["isLock"]) {
        _0x3c9869["push"](_0x64f2c4);
      }
    }
  }
  Object["keys"](_0x7ccece)["forEach"](_0x5174fe => {
    let _0x5f2991 = _0x7ccece[_0x5174fe];
    if (_0x5f2991["seeds"]["length"] > 0) {
      let _0x1c426d = _0x1ccbfe(_0x5f2991["queryId"]);
      if (_0x1c426d) {
        _0x1c426d["seeds"] = _0x5f2991["seeds"];
        _0x4fd30f["push"](_0x1c426d);
      }
    }
  });
  _0xef4d9f = _0x3a539b["orderInfo"]["orderArray"];
}
async function _0x13bfdb(_0x26ab3d, _0x550f42) {
  let _0x81a1b7 = _0x26ab3d - 1;
  let _0x455e8f = _0x81a1b7["toString"]();
  while (_0x455e8f["substring"](_0x455e8f["length"] - 2) !== '00') {
    let _0x290948;
    let _0x379ef2;
    let _0x424cd7 = [];
    let _0x22d115 = 0;
    for (let _0xba5331 = 0; _0xba5331 < _0x3c9869["length"]; _0xba5331++) {
      let _0x1d95de = _0x3c9869[_0xba5331];
      let _0x1bb5ef = _0x1d95de["cropQueryId"];
      if (_0x1bb5ef) {
        let _0x3a35c5 = _0x7ccece[_0x1bb5ef];
        if (_0x3a35c5) {
          if (_0x3a35c5['id'] === _0x81a1b7) {
            _0x22d115 += 1;
            if (_0x22d115 % 2 === 0) {
              _0x379ef2 = _0x1d95de["pos"];
              let _0x7e2b34 = {
                "type": 1,
                "pos1": _0x290948,
                "pos2": _0x379ef2,
                "timestamp": Date["now"](),
                "isSkipLevel": false,
                "surprisingCrop": null
              };
              if (!(_0x290948['x'] === _0x379ef2['x'] && _0x290948['y'] === _0x379ef2['y'])) {
                _0x424cd7["push"](_0x7e2b34);
              }
            } else {
              _0x290948 = _0x1d95de["pos"];
            }
          }
        }
      }
    }
    if (_0x424cd7["length"] > 0) {
      console["log"]("开始合成植物");
      await _0x1e9a4f(_0x550f42, _0x424cd7);
      _0x424cd7 = [];
    }
    _0x81a1b7 -= 1;
    _0x455e8f = _0x81a1b7["toString"]();
  }
  return _0x81a1b7;
}
async function _0x2e8894(_0x2c90f0, _0x2001f3, _0x352d62) {
  let _0x58b79e = true;
  let _0x33a95d = [];
  for (let _0x53331e = 0; _0x53331e < _0x2c90f0["length"]; _0x53331e++) {
    let _0x452751 = _0x2c90f0[_0x53331e];
    let _0x2f91f5 = _0x38c9ab(_0x452751);
    if (!_0x2f91f5) {
      _0x58b79e = false;
      break;
    } else {
      _0x33a95d["push"](_0x2f91f5["pos"]);
    }
  }
  if (_0x58b79e) {
    let _0xd46edd = await _0x3daa62(_0x2001f3, _0x352d62["queryId"], _0x33a95d, _0x352d62["customerId"], _0x352d62["type"]);
    if (_0xd46edd) {
      console["log"]("完成订单，获得", _0x352d62["orderValue"], '金币');
      return 3;
    }
  }
}
async function _0x111988(_0x41804e) {
  for (let _0x58c6d0 = 0; _0x58c6d0 < _0x4fd30f["length"]; _0x58c6d0++) {
    let _0x2833ff = _0x4fd30f[_0x58c6d0];
    if (!_0x2833ff) {
      console["log"]("需要解锁新母体植物");
      return;
    }
    let _0x39dca8 = [];
    for (let _0x5c81a7 = 0; _0x5c81a7 < _0x3c9869["length"]; _0x5c81a7++) {
      let _0x1a27da = _0x3c9869[_0x5c81a7];
      if (!_0x1a27da["cropQueryId"]) {
        const _0x476f27 = {
          "producedCrop": {},
          "type": 2,
          "pos1": _0x2833ff["pos"],
          "pos2": _0x1a27da["pos"],
          "timestamp": new Date()["getTime"]()
        };
        _0x476f27["producedCrop"]["queryId"] = _0x425936(_0x7ccece, 1);
        _0x476f27["producedCrop"]["cropId"] = _0x2833ff["seeds"][0];
        _0x39dca8["push"](_0x476f27);
      }
    }
    if (_0x39dca8["length"] > 0) {
      console["log"]("开始种植新的植物");
      let _0x25660f = await _0x1e9a4f(_0x41804e, _0x39dca8);
      if (_0x25660f === -1) {
        return -1;
      } else {
        if (_0x25660f === 1 || _0x25660f == null) {
          continue;
        }
      }
      return 0;
    }
  }
}
async function _0x10672d(_0x51e6f8) {
  for (let _0x279b2a = 0; _0x279b2a < _0x3c9869["length"]; _0x279b2a++) {
    let _0x4eab51 = _0x3c9869[_0x279b2a];
    if (_0x4eab51["cropQueryId"]) {
      if (_0x7ccece[_0x4eab51["cropQueryId"]]["type"] === 1) {
        await _0x27f656(_0x51e6f8, _0x4eab51["pos"]);
      }
    }
  }
  return await _0x111988(_0x51e6f8);
}
async function _0x590390(_0x4082a4) {
  const _0x50f3d5 = new Date()["getTime"]();
  _0x359a6b++;
  const _0x264efa = {
    "body": "{\"type\":2,\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/onlineB/api/game/refresh",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x50f3d5 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0xb041a7 = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x4082a4, _0x264efa);
  return _0xb041a7;
}
function _0x38c9ab(_0x22d012) {
  for (let _0x523013 = 0; _0x523013 < _0x3c9869["length"]; _0x523013++) {
    let _0x3deaf3 = _0x3c9869[_0x523013];
    let _0x269be6 = _0x3deaf3["cropQueryId"];
    if (_0x269be6) {
      let _0x4b065c = _0x7ccece[_0x269be6];
      if (_0x4b065c) {
        if (_0x4b065c['id'] === _0x22d012) {
          return _0x3deaf3;
        }
      }
    }
  }
  return null;
}
function _0xa6599(_0x20197a) {
  for (let _0x518482 = 0; _0x518482 < _0x4fd30f["length"]; _0x518482++) {
    let _0x3d48a1 = _0x4fd30f[_0x518482];
    if (_0x3d48a1["seeds"][0]["toString"]()["substring"](0, 4) === _0x20197a["toString"]()["substring"](0, 4)) {
      return _0x3d48a1;
    }
  }
  return null;
}
function _0x1ccbfe(_0x594dbc) {
  for (let _0x495cf1 = 0; _0x495cf1 < _0x3c9869["length"]; _0x495cf1++) {
    let _0x4f343f = _0x3c9869[_0x495cf1];
    if (_0x4f343f["cropQueryId"] === _0x594dbc) {
      return _0x4f343f;
    }
  }
  return null;
}
function _0x425936(_0xb0a3ff, _0x45ba36) {
  var _0x2161fc = _0x9faf1(Date["now"](), Math["random"]());
  if (!_0xb0a3ff || !_0xb0a3ff[_0x2161fc] || !_0x45ba36 || _0x45ba36 <= 0) {
    return _0x2161fc;
  }
  for (var _0x26c51c = 0; _0x26c51c < _0x45ba36; _0x26c51c++) {
    if (!_0xb0a3ff[_0x2161fc = _0x9faf1(Date["now"](), Math["random"]())]) {
      return _0x2161fc;
    }
    console["error"]("generate id failed, retry:" + (_0x26c51c + 1) + '/' + _0x45ba36);
  }
}
function _0x9faf1() {
  for (var _0x1f9cf2 = [], _0x63a8ff = 0; _0x63a8ff < arguments["length"]; _0x63a8ff++) {
    _0x1f9cf2[_0x63a8ff] = arguments[_0x63a8ff];
  }
  return _0x4e772d(_0x1f9cf2["join"]('+'))["toString"]();
}
async function _0x1e9a4f(_0x5ac1f0, _0x24f604) {
  await wait(3);
  _0x359a6b++;
  let _0x53af87 = JSON["stringify"](_0x24f604);
  const _0x47cb16 = {
    "body": "{\"cmds\":" + _0x53af87 + ",\"reqIdx\":" + _0x359a6b + ",\"gameId\":\"" + _0xba6bb7 + "\",\"token\":\"" + _0x3df134 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.2\"}",
    "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
    "instance": "INNER",
    "method": "POST",
    "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    "path": "/onlineB/api/game/cmdExec",
    "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + Date["now"]() + "\",\"mc-env\":\"online\",\"mc-network\":\"NOTREACHABLE\"}"
  };
  let _0x55f384 = await _0x29a4cc("mtop.miniapp.cloud.application.request", _0x5ac1f0, _0x47cb16);
  if (_0x55f384) {
    let _0x2e074c = _0x55f384["data"];
    if (!_0x2e074c) {
      console["log"](_0x55f384);
      return null;
    }
    if (_0x2e074c["dayUsedEnergyNum"]) {
      console["log"]("今日消耗的体力为：" + _0x2e074c["dayUsedEnergyNum"]);
      if (_0x2e074c["dayUsedEnergyNum"] > 299) {
        await _0x36b02a(_0x5ac1f0);
        console["log"]("今日所有乐园币任务已完成");
        return -1;
      }
    }
    let _0x42ce16 = _0x2e074c["changedPieceList"];
    if (_0x42ce16["length"] === 0) {
      if (_0x2e074c["energy"] === 0) {
        console["log"]("体力不足");
        return -1;
      } else {
        console["log"]("种植失败，稍后重试");
        return 1;
      }
    }
    if (_0x42ce16) {
      for (let _0x4de4ef = 0; _0x4de4ef < _0x42ce16["length"]; _0x4de4ef++) {
        let _0x5a9ec2 = _0x42ce16[_0x4de4ef];
        for (let _0x4351b7 = 0; _0x4351b7 < _0x3c9869["length"]; _0x4351b7++) {
          let _0x4c2102 = _0x3c9869[_0x4351b7];
          if (_0x5a9ec2["pieceId"] === _0x4c2102["pieceId"]) {
            _0x3c9869[_0x4351b7] = _0x5a9ec2;
          }
        }
      }
    }
    let _0x3b958f = _0x2e074c["changedCropMap"];
    if (_0x3b958f) {
      Object["keys"](_0x3b958f)["forEach"](_0x25747b => {
        if (_0x7ccece[_0x25747b]) {
          if (_0x3b958f[_0x25747b]["isDelete"]) {
            delete _0x7ccece[_0x25747b];
          } else {
            _0x7ccece[_0x25747b] = _0x3b958f[_0x25747b]["cropInfo"];
          }
        } else {
          _0x7ccece[_0x25747b] = _0x3b958f[_0x25747b]["cropInfo"];
        }
      });
    }
  }
  return _0x55f384;
}
async function _0x832076() {
  await validateCarmeWithType(_0x115063, 1);
  const _0xdf929f = getCookies();
  for (let _0x882729 = 0; _0x882729 < _0xdf929f["length"]; _0x882729++) {
    const _0x1960c2 = _0xdf929f[_0x882729];
    if (!_0x1960c2) {
      console["log"](" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x4ac2f6 = await checkCk(_0x1960c2, _0x882729);
        if (!_0x4ac2f6) {
          continue;
        }
        let _0x515bb4 = await getUserInfo(_0x4ac2f6);
        if (!_0x515bb4["username"]) {
          console["log"]('第', _0x882729 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x3529a0 = _0x515bb4["user_id"];
        await checkCarmeCount(_0x115063, _0x3529a0, _0x57fe70);
        console["log"]("******开始【饿了么账号", _0x882729 + 1, '】', _0x515bb4["username"], "*********");
        let _0x30ffa1 = await _0x392857(_0x4ac2f6);
        if (!_0x30ffa1) {
          console["log"]("请完成实名认证后再来玩游戏");
          continue;
        }
        let _0x247d6b = await _0x28d2a0(_0x4ac2f6);
        if (_0x247d6b["gardenInfo"]["level"] < 4) {
          console["log"]("请先玩到 4 级再运行脚本");
          continue;
        }
        await _0x59ccf5(_0x4ac2f6, _0x247d6b);
      } catch (_0x16b115) {
        console["log"](_0x16b115);
      }
    }
  }
  process["exit"](0);
}
_0x832076();
// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0);
  class s {
    constructor(t) {
      this["env"] = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        "url": t
      } : t;
      let s = this["get"];
      "POST" === e && (s = this["post"]);
      return new Promise((e, i) => {
        s["call"](this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this["send"]["call"](this["env"], t);
    }
    post(t) {
      return this["send"]["call"](this["env"], t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this["name"] = t;
      this["http"] = new s(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, e);
      this["log"]("", `🔔${this["name"]}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module["exports"];
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON["parse"](t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON["stringify"](t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this["getdata"](t);
      if (i) {
        try {
          s = JSON["parse"](this["getdata"](t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this["setdata"](JSON["stringify"](t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this["get"]({
          "url": t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i["replace"](/\n/g, "")["trim"]() : i;
        let r = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e["timeout"] ? e["timeout"] : r;
        const [o, h] = i["split"]("@");
        const n = {
          "url": `http://${h}/v1/scripting/evaluate`,
          "body": {
            "script_text": t,
            "mock_type": "cron",
            "timeout": r
          },
          "headers": {
            "X-Key": o,
            "Accept": "*/*"
          }
        };
        this["post"](n, (t, e, i) => s(i));
      })["catch"](t => this["logErr"](t));
    }
    loaddata() {
      if (!this["isNode"]()) {
        return {};
      }
      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]);
        const e = this["path"]["resolve"](process["cwd"](), this["dataFile"]);
        const s = this["fs"]["existsSync"](t);
        const i = !s && this["fs"]["existsSync"](e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON["parse"](this["fs"]["readFileSync"](i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]);
        const e = this["path"]["resolve"](process["cwd"](), this["dataFile"]);
        const s = this["fs"]["existsSync"](t);
        const i = !s && this["fs"]["existsSync"](e);
        const r = JSON["stringify"](this["data"]);
        s ? this["fs"]["writeFileSync"](t, r) : i ? this["fs"]["writeFileSync"](e, r) : this["fs"]["writeFileSync"](t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let r = t;
      r = Object(r)[t];
      for (const t of i) {
        if (void 0 === r) {
          return s;
        }
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array["isArray"](e) || (e = e["toString"]()["match"](/[^.[\]]+/g) || []), e["slice"](0, -1)["reduce"]((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math["abs"](e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e["length"] - 1]] = s, t);
    }
    getdata(t) {
      let e = this["getval"](t);
      if (/^@/["test"](t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/["exec"](t);
        const r = s ? this["getval"](s) : "";
        if (r) {
          try {
            const t = JSON["parse"](r);
            e = t ? this["lodash_get"](t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/["test"](e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/["exec"](e);
        const o = this["getval"](i);
        const h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON["parse"](h);
          this["lodash_set"](e, r, t);
          s = this["setval"](JSON["stringify"](e), i);
        } catch (e) {
          const o = {};
          this["lodash_set"](o, r, t);
          s = this["setval"](JSON["stringify"](o), i);
        }
      } else {
        s = this["setval"](t, e);
      }
      return s;
    }
    getval(t) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](t) : this["isQuanX"]() ? $prefs["valueForKey"](t) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][t]) : this["data"] && this["data"][t] || null;
    }
    setval(t, e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](t, e) : this["isQuanX"]() ? $prefs["setValueForKey"](t, e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][e] = t, this["writedata"](), true) : this["data"] && this["data"][e] || null;
    }
    initGotEnv(t) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      t && (t["headers"] = t["headers"] ? t["headers"] : {}, void 0 === t["headers"]["Cookie"] && void 0 === t["cookieJar"] && (t["cookieJar"] = this["ckjar"]));
    }
    get(t, e = () => {}) {
      t["headers"] && (delete t["headers"]["Content-Type"], delete t["headers"]["Content-Length"]);
      this["isSurge"]() || this["isLoon"]() ? (this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
        "X-Surge-Skip-Scripting": false
      })), $httpClient["get"](t, (t, s, i) => {
        !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
        e(t, s, i);
      })) : this["isQuanX"]() ? (this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
        "hints": false
      })), $task["fetch"](t)["then"](t => {
        const {
          "statusCode": s,
          "statusCode": i,
          "headers": r,
          "body": o
        } = t;
        e(null, {
          "status": s,
          "statusCode": i,
          "headers": r,
          "body": o
        }, o);
      }, t => e(t))) : this["isNode"]() && (this["initGotEnv"](t), this["got"](t)["on"]("redirect", (t, e) => {
        try {
          if (t["headers"]["set-cookie"]) {
            const s = t["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
            s && this["ckjar"]["setCookieSync"](s, null);
            e["cookieJar"] = this["ckjar"];
          }
        } catch (t) {
          this["logErr"](t);
        }
      })["then"](t => {
        const {
          "statusCode": s,
          "statusCode": i,
          "headers": r,
          "body": o
        } = t;
        e(null, {
          "status": s,
          "statusCode": i,
          "headers": r,
          "body": o
        }, o);
      }, t => {
        const {
          "message": s,
          "response": i
        } = t;
        e(s, i, i && i["body"]);
      }));
    }
    post(t, e = () => {}) {
      t["body"] && t["headers"] && !t["headers"]["Content-Type"] && (t["headers"]["Content-Type"] = "application/x-www-form-urlencoded");
      t["headers"] && delete t["headers"]["Content-Length"];
      this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
        "X-Surge-Skip-Scripting": false
      }));
      t["method"] = "POST";
      this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
        "hints": false
      }));
      if (this["isSurge"]() || this["isLoon"]()) {
        $httpClient["post"](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            this["initGotEnv"](t);
            const {
              "url": s,
              ...i
            } = t;
            this["got"]["post"](s, i)["then"](t => {
              const {
                "statusCode": s,
                "statusCode": i,
                "headers": r,
                "body": o
              } = t;
              e(null, {
                "status": s,
                "statusCode": i,
                "headers": r,
                "body": o
              }, o);
            }, t => {
              const {
                "message": s,
                "response": i
              } = t;
              e(s, i, i && i["body"]);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s["getMonth"]() + 1,
        "d+": s["getDate"](),
        "H+": s["getHours"](),
        "m+": s["getMinutes"](),
        "s+": s["getSeconds"](),
        "q+": Math["floor"]((s["getMonth"]() + 3) / 3),
        "S": s["getMilliseconds"]()
      };
      /(y+)/["test"](t) && (t = t["replace"](RegExp["$1"], (s["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));
      for (let e in i) {
        new RegExp("(" + e + ")")["test"](t) && (t = t["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? i[e] : ("00" + i[e])["substr"](("" + i[e])["length"])));
      }
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this["isLoon"]() ? t : this["isQuanX"]() ? {
            "open-url": t
          } : this["isSurge"]() ? {
            "url": t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this["isLoon"]()) {
            let e = t["openUrl"] || t["url"] || t["open-url"];
            let s = t["mediaUrl"] || t["media-url"];
            return {
              "openUrl": e,
              "mediaUrl": s
            };
          }
          if (this["isQuanX"]()) {
            let e = t["open-url"] || t["url"] || t["openUrl"];
            let s = t["media-url"] || t["mediaUrl"];
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this["isSurge"]()) {
            let e = t["url"] || t["openUrl"] || t["open-url"];
            return {
              "url": e
            };
          }
        }
      };
      this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](e, s, i, o(r)) : this["isQuanX"]() && $notify(e, s, i, o(r)));
      if (!this["isMuteLog"]) {
        let t = ["", "==============📣系统通知📣=============="];
        t["push"](e);
        s && t["push"](s);
        i && t["push"](i);
        console["log"](t["join"]("\n"));
        this["logs"] = this["logs"]["concat"](t);
      }
    }
    log(...t) {
      t["length"] > 0 && (this["logs"] = [...this["logs"], ...t]);
      console["log"](t["join"](this["logSeparator"]));
    }
    logErr(t, e) {
      const s = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      s ? this["log"]("", `❗️${this["name"]}, 错误!`, t["stack"]) : this["log"]("", `❗️${this["name"]}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date()["getTime"]();
      const s = (e - this["startTime"]) / 1e3;
      this["log"]("", `🔔${this["name"]}, 结束! 🕛 ${s} 秒`);
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(t);
    }
  }(t, e);
}