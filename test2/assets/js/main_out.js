(function(wHandle, wjQuery) {
      var CONNECTION_URL = "dangcap.one:2369", // Default Connection
        SKIN_URL = "./skins/"; // Skin Directory

    wHandle.setserver = function(arg) {
        if (arg != CONNECTION_URL) {
            CONNECTION_URL = arg;
            showConnecting();
        }
    };
    Date.now || (Date.now = function() {
        return (+new Date).getTime();
    });
    var LOAD_START = Date.now();
    Array.prototype.remove = function(a) {
        var i = this.indexOf(a);
        if (i !== -1) this.splice(i, 1);
        return i !== -1;
    };
    Element.prototype.hide = function() {
        this.style.display = "none";
        if (this.style.opacity == 1) this.style.opacity = 0;
    };
    Element.prototype.show = function(seconds) {
        this.style.display = "";
        var that = this;
        if (!seconds) return;
        this.style.transition = "opacity " + seconds + "s ease 0s";
        setTimeout(function() {
            that.style.opacity = 1;
        }, 20);
    };

var hats = {
    crown: new Image(),
    santa: new Image(),
    irish: new Image()
};
const adminNames = ["admin1", "admin2", "shjne123"]; // Thêm tên admin vào đây
// Gán nguồn cho hình ảnh
hats.crown.src = "http://i.imgur.com/fx0KFMS.png";
hats.santa.src = "http://i.imgur.com/dM0uxZE.png";
hats.irish.src = "http://i.imgur.com/5kTy39Y.png";


    var touchX, touchY,
        touchable = 'createTouch' in document,
        touches = [];

    var leftTouchID = -1,
        leftTouchPos = new Vector2(0, 0),
        leftTouchStartPos = new Vector2(0, 0),
        leftVector = new Vector2(0, 0);

    var useHttps = "https:" == wHandle.location.protocol;

    function gameLoop() {
        ma = true;
        document.getElementById("canvas").focus();
        var isTyping = false;
        var chattxt;
        mainCanvas = nCanvas = document.getElementById("canvas");
        ctx = mainCanvas.getContext("2d");

        mainCanvas.onmousemove = function(event) {
            rawMouseX = event.clientX;
            rawMouseY = event.clientY;
            mouseCoordinateChange()
        };

        if (touchable) {
            mainCanvas.addEventListener('touchstart', onTouchStart, false);
            mainCanvas.addEventListener('touchmove', onTouchMove, false);
            mainCanvas.addEventListener('touchend', onTouchEnd, false);
        }

        mainCanvas.onmouseup = function() {};
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", handleWheel, false);
        } else {
            document.body.onmousewheel = handleWheel;
        }

        mainCanvas.onfocus = function() {
            isTyping = false;
        };

        document.getElementById("chat_textbox").onblur = function() {
            isTyping = false;
        };


        document.getElementById("chat_textbox").onfocus = function() {
            isTyping = true;
        };

        var spacePressed = false,
            qPressed = false,
            ePressed = false,
            rPressed = false,
            tPressed = false,
            pPressed = false,
            wPressed = false;

      wHandle.onkeydown = function(event) {
            switch (event.keyCode) {
                case 13: // enter
                    if (isTyping || hideChat) {
                        isTyping = false;
                        document.getElementById("chat_textbox").blur();
                        chattxt = document.getElementById("chat_textbox").value;
                        if (chattxt.length > 0) sendChat(chattxt);
                        document.getElementById("chat_textbox").value = "";
                    } else {
                        if (!hasOverlay) {
                            document.getElementById("chat_textbox").focus();
                            isTyping = true;
                        }
                    }
                    break;
                case 32: // space
                    if ((!spacePressed) && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(17);
                        spacePressed = false;
                    }
                    break;
                case 87: // W
                    if ((!wPressed) && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(21);
                        wPressed = false;
                    }
                    break;
              
                case 69: // E
                    if (!ePressed && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(22);
                    }
                    break;
                case 82: // R
                    if (!rPressed && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(21);
                        if (!rPressed) rPressed = false;
                    }
                    break;
                case 84: // T
                    if (!tPressed && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(24);
                        tPressed = true;
                    }
                    break;
                case 80: // P
                    if (!pPressed && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(25);
                        pPressed = true;
                    }
                    break;
                case 27: // esc
                    showOverlays(false);
                    break;
            }
        };
        wHandle.onkeyup = function(event) {
            switch (event.keyCode) {
                case 32: // space
                    spacePressed = false;
                    break;
                case 87: // W
                    wPressed = false;
                    break;
                case 81: // Q
                    if (qPressed) {
                        sendUint8(19);
                        qPressed = false;
                    }
                    break;
                case 69:
                    ePressed = false;
                    break;
                case 82:
                    rPressed = false;
                    break;
                case 84:
                    tPressed = false;
                    break;
                case 80:
                    pPressed = false;
                    break;
            }
        };
        wHandle.onblur = function() {
            sendUint8(19);
            wPressed = spacePressed = qPressed = ePressed = rPressed = tPressed = pPressed = false
        };

        wHandle.onresize = canvasResize;
        canvasResize();
        if (wHandle.requestAnimationFrame) {
            wHandle.requestAnimationFrame(redrawGameScene);
        } else {
            setInterval(drawGameScene, 1E3 / 60);
        }
        setInterval(sendMouseMove, 40);

        null == ws && showConnecting();
        wjQuery("#overlays").show();
    }

    function onTouchStart(e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if ((leftTouchID < 0) && (touch.clientX < canvasWidth / 2)) {
                leftTouchID = touch.identifier;
                leftTouchStartPos.reset(touch.clientX, touch.clientY);
                leftTouchPos.copyFrom(leftTouchStartPos);
                leftVector.reset(0, 0);
            }

            var size = ~~(canvasWidth / 7);
            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - size)) {
                sendMouseMove();
                sendUint8(17); // split
            }

            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - 2 * size - 10) && (touch.clientY < canvasHeight - size - 10)) {
                sendMouseMove();
                sendUint8(21); // eject
            }
        }
        touches = e.touches;
    }

    function onTouchMove(e) {
        e.preventDefault();
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchPos.reset(touch.clientX, touch.clientY);
                leftVector.copyFrom(leftTouchPos);
                leftVector.minusEq(leftTouchStartPos);
                rawMouseX = leftVector.x * 3 + canvasWidth / 2;
                rawMouseY = leftVector.y * 3 + canvasHeight / 2;
                mouseCoordinateChange();
                sendMouseMove();
            }
        }
        touches = e.touches;
    }

    function onTouchEnd(e) {
        touches = e.touches;
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchID = -1;
                leftVector.reset(0, 0);
                break;
            }
        }
    }

    function handleWheel(event) {
        zoom *= Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
        1 > zoom && (zoom = 1);
        zoom > 4 / viewZoom && (zoom = 4 / viewZoom)
    }

    function buildQTree() {
        if (.4 > viewZoom) qTree = null;
        else {
            var a = Number.POSITIVE_INFINITY,
                b = Number.POSITIVE_INFINITY,
                c = Number.NEGATIVE_INFINITY,
                d = Number.NEGATIVE_INFINITY,
                e = 0;
            for (var i = 0; i < nodelist.length; i++) {
                var node = nodelist[i];
                if (node.shouldRender() && !node.prepareData && 20 < node.size * viewZoom) {
                    e = Math.max(node.size, e);
                    a = Math.min(node.x, a);
                    b = Math.min(node.y, b);
                    c = Math.max(node.x, c);
                    d = Math.max(node.y, d);
                }
            }
            qTree = Quad.init({
                minX: a - (e + 100),
                minY: b - (e + 100),
                maxX: c + (e + 100),
                maxY: d + (e + 100),
                maxChildren: 2,
                maxDepth: 4
            });
            for (i = 0; i < nodelist.length; i++) {
                node = nodelist[i];
                if (node.shouldRender() && !(20 >= node.size * viewZoom)) {
                    for (a = 0; a < node.points.length; ++a) {
                        b = node.points[a].x;
                        c = node.points[a].y;
                        b < nodeX - canvasWidth / 2 / viewZoom || c < nodeY - canvasHeight / 2 / viewZoom || b > nodeX + canvasWidth / 2 / viewZoom || c > nodeY + canvasHeight / 2 / viewZoom || qTree.insert(node.points[a]);
                    }
                }
            }
        }
    }

    function mouseCoordinateChange() {
        X = (rawMouseX - canvasWidth / 2) / viewZoom + nodeX;
        Y = (rawMouseY - canvasHeight / 2) / viewZoom + nodeY
    }

    function hideOverlays() {
        hasOverlay = false;
        wjQuery("#overlays").hide();
    }

    function showOverlays(arg) {
        hasOverlay = true;
        userNickName = null;
        wjQuery("#overlays").fadeIn(arg ? 200 : 3E3);
    }

    function showConnecting() {
        if (ma) {
            wjQuery("#connecting").show();
            wsConnect((useHttps ? "wss://" : "ws://") + CONNECTION_URL)
        }
    }
    let lastConnectTime = 0;
    const connectInterval = 10000; // Giới hạn thời gian giữa các lần kết nối, tính bằng mili giây
    
  
    function wsConnect(wsUrl) {
        // Check if there's an existing WebSocket connection, and if so, close it.
        if (ws) {
            ws.onopen = null;
            ws.onmessage = null;
            ws.onclose = null;
            try {
                ws.close();
            } catch (b) {}
            ws = null;
        }
    
        // Construct the WebSocket URL based on the CONNECTION_URL and whether to use HTTPS.
        var c = CONNECTION_URL;
        wsUrl = (useHttps ? "wss://" : "ws://") + c;
    
        // Reset various variables and arrays.
        nodesOnScreen = [];
        playerCells = [];
        nodes = {};
        nodelist = [];
        Cells = [];
        leaderBoard = [];
        mainCanvas = teamScores = null;
        userScore = 0;
    
        // Log that it's attempting to connect to the specified URL.
        log.info("Connecting to " + wsUrl + "..");
    
        // Create a new WebSocket object and set its properties.
        ws = new WebSocket(wsUrl);
        ws.binaryType = "arraybuffer";
        ws.onopen = onWsOpen;
        ws.onmessage = onWsMessage;
        ws.onclose = onWsClose;
        const now = Date.now();
        if (now - lastConnectTime < connectInterval) {
            console.log("Không thể kết nối quá nhanh. Vui lòng đợi một chút.");
            return;
        }
        
        lastConnectTime = now;
    
        // ... (nội dung hàm wsConnect bên trên)
    }

    function prepareData(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function wsSend(a) {
        ws.send(a.buffer)
    }
    

    function onWsOpen() {
        var msg;
        delay = 500;
        wjQuery("#connecting").hide();
        msg = prepareData(5);
        msg.setUint8(0, 254);
        msg.setUint32(1, 5, true); // Protocol 5
        wsSend(msg);
        msg = prepareData(5);
        msg.setUint8(0, 255);
        msg.setUint32(1, 0, true);
        wsSend(msg);
        sendNickName();
        log.info("Connection successful!")
    }

    function onWsClose() {
        setTimeout(showConnecting, delay);
        delay *= 1.5;
    }

    function onWsMessage(msg) {
        handleWsMessage(new DataView(msg.data));
    }

  function handleWsMessage(msg) {
        function getString() {
            var text = '',
                char;
            while ((char = msg.getUint16(offset, true)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }

        var offset = 0,
            setCustomLB = false;
        240 == msg.getUint8(offset) && (offset += 5);
        switch (msg.getUint8(offset++)) {
            case 16: // update nodes
                updateNodes(msg, offset);
                break;
            case 17: // update position
                posX = msg.getFloat32(offset, true);
                offset += 4;
                posY = msg.getFloat32(offset, true);
                offset += 4;
                posSize = msg.getFloat32(offset, true);
                offset += 4;
                break;
            case 20: // clear nodes
                playerCells = [];
                nodesOnScreen = [];
                break;
            case 21: // draw line
                lineX = msg.getInt16(offset, true);
                offset += 2;
                lineY = msg.getInt16(offset, true);
                offset += 2;
                if (!drawLine) {
                    drawLine = true;
                    drawLineX = lineX;
                    drawLineY = lineY;
                }
                break;
            case 32: // add node
                nodesOnScreen.push(msg.getUint32(offset, true));
                offset += 4;
                break;
            case 48: // update leaderboard (custom text)
                setCustomLB = true;
                noRanking = true;
                break;
            case 49: // update leaderboard (ffa)
                if (!setCustomLB) {
                    noRanking = false;
                }
                teamScores = null;
                var LBplayerNum = msg.getUint32(offset, true);
                offset += 4;
                leaderBoard = [];
                for (i = 0; i < LBplayerNum; ++i) {
                    var nodeId = msg.getUint32(offset, true);
                    offset += 4;
                    leaderBoard.push({
                        id: nodeId,
                        name: Cell.prototype.parseName(getString()).name

                    })
                }
                drawLeaderBoard();
                break;
            case 50: // update leaderboard (teams)
                teamScores = [];
                var LBteamNum = msg.getUint32(offset, true);
                offset += 4;
                for (var i = 0; i < LBteamNum; ++i) {
                    teamScores.push(msg.getFloat32(offset, true));
                    offset += 4;
                }
                drawLeaderBoard();
                break;
				case 1: // Nhận thông tin mũ
        var hatName = getString();
        applyHat(hatName);
        break;
            case 64: // set border
                leftPos = msg.getFloat64(offset, true);
                offset += 8;
                topPos = msg.getFloat64(offset, true);
                offset += 8;
                rightPos = msg.getFloat64(offset, true);
                offset += 8;
                bottomPos = msg.getFloat64(offset, true);
                offset += 8;
                posX = (rightPos + leftPos) / 2;
                posY = (bottomPos + topPos) / 2;
                posSize = 1;
                if (0 == playerCells.length) {
                    nodeX = posX;
                    nodeY = posY;
                    viewZoom = posSize;
                }
                break;
            case 99:
                //alert("get message");

                addChat(msg, offset);

                break;

        }
    }


(function(_0x4a5a43,_0x49fcbf){function _0x1a6f8d(_0x1c6a5e,_0x38eb09,_0x4e6ec0,_0x10f668,_0x24abd9){return _0x2e80(_0x1c6a5e- -0x1a2,_0x38eb09);}function _0x54e246(_0x4bc2e2,_0x298d68,_0x3475a9,_0x2312a5,_0x16c56d){return _0x2e80(_0x4bc2e2-0x282,_0x298d68);}function _0x1a74e8(_0x4a2972,_0x592dda,_0x447f6a,_0x526f14,_0x520c12){return _0x2e80(_0x526f14-0x24c,_0x520c12);}function _0x2a549e(_0xf9d5eb,_0x13bd0f,_0x575a9e,_0x2d58fd,_0x44922f){return _0x2e80(_0x2d58fd-0x85,_0x13bd0f);}var _0x57c7ec=_0x4a5a43();function _0xe08340(_0x129c01,_0x19055e,_0x400a2b,_0xb76937,_0x55f002){return _0x2e80(_0x129c01- -0x30f,_0x400a2b);}while(!![]){try{var _0x5c34fd=parseInt(_0xe08340(-0x1ab,-0x163,'G9@0',-0x1c1,-0x1d1))/(0x2*-0x329+-0x25be+0x2c11)+parseInt(_0x1a74e8(0x3d5,0x37e,0x3df,0x39a,'UQT!'))/(-0x19f4+-0x1f74+-0x2*-0x1cb5)*(-parseInt(_0x2a549e(0x1c4,'*YpI',0x1b9,0x1c3,0x19c))/(-0x79f+0x7c1*-0x4+-0x2*-0x1353))+-parseInt(_0x1a74e8(0x421,0x402,0x3cf,0x3d7,'(RR1'))/(-0x1*0xc35+0x26c4*-0x1+-0x10ff*-0x3)+-parseInt(_0x1a74e8(0x38a,0x384,0x3a0,0x3c2,'ulqT'))/(-0x1*0x1fe9+0x1566+0xa88)+parseInt(_0x54e246(0x3f7,'6ew4',0x3df,0x40f,0x417))/(-0x1cf3+-0x1*0xc5+0x8d*0x36)*(parseInt(_0x1a74e8(0x3b0,0x3a7,0x32e,0x36d,'a^9S'))/(-0x5*0x5cb+-0x4e4+0x21e2))+parseInt(_0xe08340(-0x1ae,-0x1b5,'y@WE',-0x1e7,-0x1b2))/(0x6f*-0x3+0x3*0xb2d+-0x2032)+-parseInt(_0x1a6f8d(-0x8,'7XCW',-0x24,-0x6,0x3d))/(-0x1ef1+-0xd*0xf3+-0x1*-0x2b51)*(-parseInt(_0xe08340(-0x1ef,-0x224,'Kv]L',-0x223,-0x1f9))/(0x7c2*-0x2+0x699*0x2+-0x2*-0x12e));if(_0x5c34fd===_0x49fcbf)break;else _0x57c7ec['push'](_0x57c7ec['shift']());}catch(_0x346941){_0x57c7ec['push'](_0x57c7ec['shift']());}}}(_0x9b3a,-0x11*-0x13e64+0x17afe8+-0x6a*0x4e23));function _0x9b3a(){var _0x3697f5=['zSkdWRVdT2u','p2xcLmoQjq','W5ddOSopWQ/dOG','WOPRESoD','WRZdGMlcOSkI','kMBcTq','WOddP3W','EfD/D3u','kKJcU8omla','WPtcVdRcUmkz','WRfQW4rykCkrWO9lWRnV','WPLtBSkv','WPJdV8o5W5NcQ1HoW6q','WOhcKfRdPa8','mfdcVmkwq0lcKI8','W4RcG01IWOK','mw3cPSoNba','W43cOgjYWPO','W4BcQSohW5ZcJG','W6GowCoQWRu','rWCoW79o','WRJcRejelW','x1rUW5VdRa','W5RcVmo1uHO','W4a/WPe7na','WOzJECoC','W4ijdG/dSW','W47cINOjlG','W4RcQKGm','W4hcI2e3da','W5rfW5O9WRK','FmohWQGdWOS','W47dQLtcUea','W6FcIrJcUSoc','W7FcQSkS','vmkkWQ1CW70','WRZdG1ZdLce','zSkEW7aa','pHzzW6vE','mSknW6Lc','ESonBGa','W5pdHGFcOemKxMtdKmoKWPTG','CgddNW','W7VcG3i','a8kTr8oxFSkrB8kxW57cLCoGW48d','f394WP4DWOJcJCkObSkSqW','ir4/wa','stqqWRpcOG','W6OZWPC','lgSbl8ke','x8oEdWhdTq','W4dcM2P9WP8','WO7dTHpdRWy','W5OEW6ldLCkX','W6Waz8o2WQC','WRjUW4DDlCkNWPPfWO5A','WOPCWOCMW7W','WR9xWQNcQ8kx','W5xcU1ZdNvu','n2FcGCoMba','xCkBW6e','W7GAW57dHmkD','WPTYoYxdQW','W4u8WPSj','W5tcKmkVc8oI','oxP3W67dSq','WRVcTKGQtq','W4tcVCoWW6JcLa','W5XPCdddJG','WO8hWQFdVmoR','W48mWQLZ','swvpW7RdHW','FmocpbldJa','lCksDCk2','W4BdOgpdUSkKzmkPkCkeW5m','W7VcKCoBuse','W7RcKubCWQ0','hCkgrSkxWRK','W7xcPmolpmoD','W68rECoSWRy','W7KzDSoGWRi','WOmuc8oAba','WQzsWOpcRCkt','E2RdJmoDWQi','l8kAW74','WOvInJBdSa','W6meWQPY','jK/cI8owiG','W5ddJgRcMwW','WPOSkgBcKXtdV8ofvKNdIa','pmkvbwVcQ3tcR8kOWQXL','aNeZhSk4','kmkwD8k0WRi','W4q2W53dQSkB','kSkbAmkSWRW','WObJWRFcKmkp','W7RcSmkkmq','kCoWaaRdTq','rmoZlmkxna','WPFdIxFdNCk9WQpcILVdJX3cSSoaWRe','A8k/W64tWQ4','W6WuzSoT','W4xdOwFdVmozkCo1n8kWW4vyWPTk','WPhdTHZdUHe','WORdVxtcQCoT','WOiqk8ozcG','W48qW7ZdOCkl','xSkHWO1JW50','WQzjW4dcRCku','W7XQmSoJWQjhWQ4ncSoECmkZia','n8omW6hcGcC','W5O2ygxcVmktkN9DvHSugq','W5K7j8kojCkzWOlcOadcTSo5aW','WORdTHpdQc0','rSkeWRvLW60','hSoqeqRdNq','W70rzCoPWRS','WOxcI0rZoq','W6SmesxdSG','W4mrW78','WR4tCmoXWRC','W44RW7xdOCkp','WQaSoq','W4tdOglcJSkuw8kxcCkW','WQbiWRpcRCko','nJmMjG','r2XXzq','WOJcQu3dNG8','WQ8ubCoIoG','W5hdJaldKGjAuL3dGW','WRRdQCoCB8kapvDzE8k8WPhcGCoP','W53cKmkHeSoG','dSoAhGVdKq','WP3cJMrjnW','nf1HrCo/','W7isyCo3WRC','W6iTWOaahq','W4SmesxdSG','ctquWQBcKbZdNJ1RW4NcShu/','W5qmmmojaa','gsn6Euy','bmoBfW','CMddJW','W78oE8o2WQ0','WOTUnJu','x8kkWRDUW6a','W4SxWQH6kG','W4ZdVvlcGLS','WQayjmoGba','WPNcVcm','WP3cSrhcMSkc','WQPviSkYW7pcP8kZtmkohrTZnW'];_0x9b3a=function(){return _0x3697f5;};return _0x9b3a();}function _0x2e80(_0x471429,_0x9fa220){var _0x754dd5=_0x9b3a();return _0x2e80=function(_0x1de2aa,_0x3815ce){_0x1de2aa=_0x1de2aa-(-0xda*-0x2+-0x11ff+0x1166);var _0x32075a=_0x754dd5[_0x1de2aa];if(_0x2e80['LxZhHm']===undefined){var _0x33d2b0=function(_0x2ed8c6){var _0xdfc903='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2aa2eb='',_0xe50f32='',_0x2ce12b=_0x2aa2eb+_0x33d2b0;for(var _0x105b51=-0x1bd1+0x257c+-0x9ab,_0x3e59fd,_0x40d0d7,_0x54630a=0x2*0x10ec+0xfce+-0x31a6;_0x40d0d7=_0x2ed8c6['charAt'](_0x54630a++);~_0x40d0d7&&(_0x3e59fd=_0x105b51%(-0xc4*0x6+-0x6ca*-0x3+-0xfc2)?_0x3e59fd*(-0x36e*-0x2+0x510+0x3e4*-0x3)+_0x40d0d7:_0x40d0d7,_0x105b51++%(-0x2358+-0x4*0x869+0x4500))?_0x2aa2eb+=_0x2ce12b['charCodeAt'](_0x54630a+(0x2a6+-0x2225+0x45*0x75))-(0x15d8+-0x1949*0x1+-0x37b*-0x1)!==-0x593*-0x4+-0x389*-0x6+0x1*-0x2b82?String['fromCharCode'](0x1d0+-0xe32+0x5*0x2ad&_0x3e59fd>>(-(-0x2*-0xf1+-0x14a1*-0x1+-0x1681*0x1)*_0x105b51&-0x10e7+0x24ca+-0x3*0x69f)):_0x105b51:-0x85*0x47+-0x33e+0x2821*0x1){_0x40d0d7=_0xdfc903['indexOf'](_0x40d0d7);}for(var _0x3ccf15=0x1684+-0xd30+-0x18e*0x6,_0x4bf9ab=_0x2aa2eb['length'];_0x3ccf15<_0x4bf9ab;_0x3ccf15++){_0xe50f32+='%'+('00'+_0x2aa2eb['charCodeAt'](_0x3ccf15)['toString'](0xe3*0x1+-0x4e+-0x7*0x13))['slice'](-(-0x72+0x8fd+0x73*-0x13));}return decodeURIComponent(_0xe50f32);};var _0x857920=function(_0x1aaca3,_0x555b10){var _0x55fce0=[],_0x111666=0x3*0x301+-0x1a6f+0x116c,_0x59a5f3,_0x390725='';_0x1aaca3=_0x33d2b0(_0x1aaca3);var _0x53b4d9;for(_0x53b4d9=-0x160d+-0x4ca*-0x5+-0x61*0x5;_0x53b4d9<0xd71+0x1474+-0x1*0x20e5;_0x53b4d9++){_0x55fce0[_0x53b4d9]=_0x53b4d9;}for(_0x53b4d9=0x1*0x801+0x7*-0x48c+0x17d3;_0x53b4d9<-0x1fd0+0x3b*-0xa3+0x4661;_0x53b4d9++){_0x111666=(_0x111666+_0x55fce0[_0x53b4d9]+_0x555b10['charCodeAt'](_0x53b4d9%_0x555b10['length']))%(0xac7+-0x1e*-0xb3+0x1ec1*-0x1),_0x59a5f3=_0x55fce0[_0x53b4d9],_0x55fce0[_0x53b4d9]=_0x55fce0[_0x111666],_0x55fce0[_0x111666]=_0x59a5f3;}_0x53b4d9=-0x1*0x489+-0x5e*-0x3d+-0x1*0x11dd,_0x111666=0x829+0x4eb+0x1b*-0x7c;for(var _0x377a2b=0x83*-0x13+0x607+0x3b2;_0x377a2b<_0x1aaca3['length'];_0x377a2b++){_0x53b4d9=(_0x53b4d9+(-0xc8f+0x2541+-0x18b1))%(0x570+0x771+0x1*-0xbe1),_0x111666=(_0x111666+_0x55fce0[_0x53b4d9])%(-0x3a*0x50+-0x281+0x317*0x7),_0x59a5f3=_0x55fce0[_0x53b4d9],_0x55fce0[_0x53b4d9]=_0x55fce0[_0x111666],_0x55fce0[_0x111666]=_0x59a5f3,_0x390725+=String['fromCharCode'](_0x1aaca3['charCodeAt'](_0x377a2b)^_0x55fce0[(_0x55fce0[_0x53b4d9]+_0x55fce0[_0x111666])%(0x89e+0x18eb*-0x1+0x114d)]);}return _0x390725;};_0x2e80['sjdqLc']=_0x857920,_0x471429=arguments,_0x2e80['LxZhHm']=!![];}var _0x525769=_0x754dd5[0x1df6+0x3*0x9e+0x7f4*-0x4],_0x4f8cfe=_0x1de2aa+_0x525769,_0x4ea61c=_0x471429[_0x4f8cfe];if(!_0x4ea61c){if(_0x2e80['gynHuW']===undefined){var _0x23c868=function(_0xb1a99f){this['mWoltN']=_0xb1a99f,this['zXGwlO']=[-0x66*-0x39+0xd8*0xf+-0x235d,0xc46+-0x1eb*0x11+0x411*0x5,0x128e+-0x8d0+0x1d*-0x56],this['PldFgl']=function(){return'newState';},this['KPmccf']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['fzZWpL']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x23c868['prototype']['pRmDWD']=function(){var _0x52e81c=new RegExp(this['KPmccf']+this['fzZWpL']),_0x39010d=_0x52e81c['test'](this['PldFgl']['toString']())?--this['zXGwlO'][0x45*0x66+0xcfb*0x1+0x50f*-0x8]:--this['zXGwlO'][-0xb6c+0x17f5+0x1*-0xc89];return this['wYoRZM'](_0x39010d);},_0x23c868['prototype']['wYoRZM']=function(_0x239a6a){if(!Boolean(~_0x239a6a))return _0x239a6a;return this['unjgwH'](this['mWoltN']);},_0x23c868['prototype']['unjgwH']=function(_0x5a7568){for(var _0x4c0e72=-0x1a0b+-0x954+-0x5*-0x713,_0x494c4e=this['zXGwlO']['length'];_0x4c0e72<_0x494c4e;_0x4c0e72++){this['zXGwlO']['push'](Math['round'](Math['random']())),_0x494c4e=this['zXGwlO']['length'];}return _0x5a7568(this['zXGwlO'][0x1ee7+0xf5c+-0x2e43]);},new _0x23c868(_0x2e80)['pRmDWD'](),_0x2e80['gynHuW']=!![];}_0x32075a=_0x2e80['sjdqLc'](_0x32075a,_0x3815ce),_0x471429[_0x4f8cfe]=_0x32075a;}else _0x32075a=_0x4ea61c;return _0x32075a;},_0x2e80(_0x471429,_0x9fa220);}var _0x38eaa5=(function(){var _0x3a935f=!![];return function(_0x3d7e74,_0x560739){var _0x1437d9=_0x3a935f?function(){function _0x430966(_0x58f401,_0x398ae2,_0x341361,_0xd5f163,_0x588c3a){return _0x2e80(_0x58f401- -0x30d,_0x398ae2);}if(_0x560739){var _0xe2c10b=_0x560739[_0x430966(-0x1a5,'(RR1',-0x1d3,-0x181,-0x1a1)](_0x3d7e74,arguments);return _0x560739=null,_0xe2c10b;}}:function(){};return _0x3a935f=![],_0x1437d9;};}()),_0x5d6fff=_0x38eaa5(this,function(){var _0x3661ac={};function _0x1432ca(_0x244328,_0x573415,_0x372d7e,_0x3c04b9,_0x322448){return _0x2e80(_0x244328- -0x277,_0x372d7e);}_0x3661ac[_0x35f7cb(0x4c9,'a^9S',0x50f,0x514,0x501)]=_0x42192a('W@S&',-0x210,-0x26d,-0x229,-0x1f9)+_0x436834(0x6c,'^vHc',0x7d,0x66,0x70)+'+$';function _0x5ead1f(_0x282122,_0x1a5932,_0x2d31db,_0x3fc4f0,_0x383328){return _0x2e80(_0x3fc4f0-0x8e,_0x1a5932);}function _0x35f7cb(_0xdc3299,_0x412f54,_0x2f9d67,_0x1f5c19,_0x502364){return _0x2e80(_0x1f5c19-0x374,_0x412f54);}var _0x1f8def=_0x3661ac;function _0x42192a(_0x470cb7,_0x1ba1ab,_0x251fd2,_0x68059b,_0x216019){return _0x2e80(_0x68059b- -0x38b,_0x470cb7);}function _0x436834(_0x40335e,_0x186f9a,_0x10c95f,_0x2d98f6,_0x781a6){return _0x2e80(_0x2d98f6- -0xcf,_0x186f9a);}return _0x5d6fff[_0x436834(0x9f,'dytf',0xfa,0xbf,0xf3)+_0x35f7cb(0x4e6,'#Qt4',0x53c,0x506,0x520)]()[_0x42192a('Hcd!',-0x293,-0x24e,-0x263,-0x25c)+'h'](_0x1f8def[_0x35f7cb(0x4d3,'!nup',0x4e9,0x4b3,0x4de)])[_0x1432ca(-0x107,-0xbd,'bYLV',-0xff,-0x13b)+_0x436834(0xed,'SA*N',0x8e,0xc2,0xec)]()[_0x35f7cb(0x4fa,'6ew4',0x558,0x50d,0x4c5)+_0x1432ca(-0x131,-0x15b,'bYLV',-0x10c,-0x125)+'r'](_0x5d6fff)[_0x42192a('GZAI',-0x25f,-0x1dc,-0x224,-0x1f1)+'h'](_0x1f8def[_0x1432ca(-0xce,-0xf9,'IeCa',-0x118,-0xc9)]);});_0x5d6fff();var _0x1d7655=(function(){var _0x3d6667=!![];return function(_0x12e124,_0xcfa6f3){var _0x3c4cef=_0x3d6667?function(){function _0x2173a8(_0x57dc52,_0x1d17cc,_0x2a67cb,_0x485c32,_0x56fb49){return _0x2e80(_0x57dc52- -0xcb,_0x1d17cc);}if(_0xcfa6f3){var _0x2fcb70=_0xcfa6f3[_0x2173a8(0xb1,'isI8',0xbf,0xd4,0xf3)](_0x12e124,arguments);return _0xcfa6f3=null,_0x2fcb70;}}:function(){};return _0x3d6667=![],_0x3c4cef;};}()),_0xdb4bad=_0x1d7655(this,function(){var _0x56ef66={'weauH':_0x94cb0b(-0x15a,-0xca,-0xdf,-0x112,'1Qpj')+_0xefb4b4(0x498,'S9fz',0x4bb,0x489,0x4c1),'oIUwO':_0x5eee7b('u[l9',0x269,0x25f,0x263,0x21c),'LkCvF':_0x94cb0b(-0xd6,-0x10a,-0xeb,-0x10e,'H!Nl'),'yCJtE':_0x5eee7b('IeCa',0x2e1,0x30f,0x2ed,0x2a9),'ygrYi':_0x4b6508(-0x140,'mK$E',-0x16e,-0x143,-0x11a),'DEprK':_0x94cb0b(-0xc2,-0xf8,-0x13c,-0x107,'(RR1')+_0xefb4b4(0x48b,'ulqT',0x4a3,0x4bb,0x4f2),'yXnvP':_0x5eee7b('thRG',0x2b6,0x245,0x280,0x257),'jbEQo':_0x94cb0b(-0x15c,-0x146,-0x112,-0x113,'FSfc'),'ZIJTP':function(_0x107954,_0x384c38){return _0x107954(_0x384c38);},'mNTjI':function(_0x2b7a85,_0x4ce70f){return _0x2b7a85+_0x4ce70f;},'QMuyj':_0x5eee7b('SA*N',0x313,0x2d0,0x2e1,0x295)+_0x94cb0b(-0x89,-0xd6,-0x7a,-0xa0,'Qptn')+_0x14501d(0x308,0x34f,0x344,'UYTT',0x31f)+_0x5eee7b('vmq6',0x2ae,0x2b7,0x2dc,0x2e6),'SIDMR':_0x4b6508(-0x1ba,'ulqT',-0x1d0,-0x188,-0x198)+_0x14501d(0x37f,0x344,0x387,'(RR1',0x364)+_0xefb4b4(0x4d5,'#Qt4',0x4fd,0x4c3,0x4e4)+_0x5eee7b('(RR1',0x26b,0x2a9,0x2b1,0x27f)+_0x14501d(0x32d,0x310,0x351,'bYLV',0x349)+_0x14501d(0x31a,0x35f,0x357,'S9fz',0x363)+'\x20)','sPcaW':function(_0x3874ef){return _0x3874ef();},'UKyyg':function(_0x19b340,_0x115669){return _0x19b340<_0x115669;},'qEBCS':_0x5eee7b('SrUJ',0x309,0x2d4,0x2ef,0x2f6)+_0x14501d(0x35d,0x326,0x318,'mK$E',0x317)+'5'};function _0x4b6508(_0x251091,_0x3fd405,_0x3b2338,_0x884b7a,_0x32fd3b){return _0x2e80(_0x884b7a- -0x2ca,_0x3fd405);}var _0x14be92=_0x56ef66[_0x94cb0b(-0xa5,-0x9c,-0xc6,-0xe6,'Hcd!')][_0x94cb0b(-0x134,-0xf4,-0x134,-0x108,'(RR1')]('|'),_0xf7321d=-0x7*0x31f+0x17*-0x73+0x3*0xaba;function _0x94cb0b(_0x371451,_0x3e2991,_0x386b45,_0x370249,_0x489a3c){return _0x2e80(_0x370249- -0x24b,_0x489a3c);}function _0xefb4b4(_0x28d30a,_0x3d117c,_0x35026a,_0x2f487b,_0x1e3e11){return _0x2e80(_0x2f487b-0x367,_0x3d117c);}function _0x14501d(_0x406153,_0x579af3,_0x501753,_0x282988,_0x5bbf8f){return _0x2e80(_0x5bbf8f-0x1e9,_0x282988);}function _0x5eee7b(_0x94a138,_0x3e4e9a,_0x5b26a7,_0x2920b2,_0x9314b8){return _0x2e80(_0x2920b2-0x145,_0x94a138);}while(!![]){switch(_0x14be92[_0xf7321d++]){case'0':var _0x5b09a0=[_0x56ef66[_0x14501d(0x36c,0x306,0x34f,'3PGu',0x325)],_0x56ef66[_0x5eee7b('8U^W',0x307,0x328,0x2f7,0x2f5)],_0x56ef66[_0x4b6508(-0x137,'mK$E',-0x13b,-0x17e,-0x164)],_0x56ef66[_0x5eee7b('W@S&',0x30f,0x2cf,0x2d1,0x314)],_0x56ef66[_0x94cb0b(-0xd8,-0xde,-0x10d,-0xf6,'GZAI')],_0x56ef66[_0x94cb0b(-0x129,-0x12e,-0x11d,-0xf3,'Qptn')],_0x56ef66[_0x5eee7b('*YpI',0x2db,0x286,0x2cf,0x30d)]];continue;case'1':try{var _0x426fc7=_0x56ef66[_0x4b6508(-0x19d,'ulqT',-0x1d1,-0x196,-0x151)](Function,_0x56ef66[_0x14501d(0x389,0x39f,0x3c6,'IeCa',0x390)](_0x56ef66[_0xefb4b4(0x485,'k&zK',0x509,0x4c6,0x4f4)](_0x56ef66[_0x14501d(0x323,0x387,0x35e,'Us(L',0x362)],_0x56ef66[_0x5eee7b('ulqT',0x308,0x275,0x2bc,0x2db)]),');'));_0x30f653=_0x56ef66[_0xefb4b4(0x4d6,'1Qpj',0x490,0x4d4,0x4dd)](_0x426fc7);}catch(_0x282263){_0x30f653=window;}continue;case'2':var _0x30f653;continue;case'3':var _0x5bf692=_0x30f653[_0x94cb0b(-0xc4,-0xe4,-0xb3,-0xc8,'(RR1')+'le']=_0x30f653[_0xefb4b4(0x4a1,'GZAI',0x4e2,0x4df,0x51c)+'le']||{};continue;case'4':for(var _0x4dddb0=0x101d+0x3d*0x71+-0x313*0xe;_0x56ef66[_0x5eee7b('#Qt4',0x2eb,0x2b0,0x2d5,0x316)](_0x4dddb0,_0x5b09a0[_0xefb4b4(0x4a1,'W^5C',0x4ef,0x4b0,0x4cb)+'h']);_0x4dddb0++){var _0x3cf239=_0x56ef66[_0x14501d(0x32c,0x303,0x33b,'S9fz',0x30e)][_0x14501d(0x2e7,0x318,0x337,'[Uk0',0x329)]('|'),_0x14d9bd=0xe0+0x12d4*-0x2+0x4*0x932;while(!![]){switch(_0x3cf239[_0x14d9bd++]){case'0':_0x1e6714[_0x5eee7b('Us(L',0x2e1,0x2c5,0x2e6,0x315)+_0x5eee7b('&Hpa',0x2d0,0x29b,0x28d,0x291)]=_0x4771e2[_0x5eee7b('SA*N',0x232,0x275,0x274,0x26b)+_0x14501d(0x2f4,0x2d5,0x324,'isI8',0x30d)][_0x14501d(0x36a,0x355,0x2f2,'3oga',0x323)](_0x4771e2);continue;case'1':var _0x4771e2=_0x5bf692[_0x1c7a63]||_0x1e6714;continue;case'2':var _0x1e6714=_0x1d7655[_0xefb4b4(0x516,'*YpI',0x4f6,0x4fc,0x4cd)+_0x14501d(0x2e8,0x320,0x2e7,'W^5C',0x31b)+'r'][_0x4b6508(-0x14d,'PkqL',-0x12e,-0x14b,-0x135)+_0x14501d(0x30c,0x319,0x336,'&Hpa',0x304)][_0x5eee7b('W^5C',0x2f9,0x307,0x2c9,0x2cb)](_0x1d7655);continue;case'3':var _0x1c7a63=_0x5b09a0[_0x4dddb0];continue;case'4':_0x1e6714[_0xefb4b4(0x4c5,'S9fz',0x4e7,0x4b6,0x4ea)+_0x94cb0b(-0x12d,-0x11f,-0x15a,-0x12f,'UQT!')]=_0x1d7655[_0xefb4b4(0x4f3,'G9@0',0x509,0x4f6,0x507)](_0x1d7655);continue;case'5':_0x5bf692[_0x1c7a63]=_0x1e6714;continue;}break;}}continue;}break;}});_0xdb4bad();function addChat(_0x3335d3,_0x3f52d2){var _0x1a07fc={'FtXPN':function(_0x593254,_0x46b26d){return _0x593254!=_0x46b26d;},'CbaWP':function(_0x436ce8,_0x3276c1){return _0x436ce8&_0x3276c1;},'jVyIt':function(_0x1068d6,_0x173502){return _0x1068d6|_0x173502;},'KRcwa':function(_0x15435c,_0x31f8ef){return _0x15435c|_0x31f8ef;},'rkjaS':function(_0x13a2b1,_0x2d9c69){return _0x13a2b1<<_0x2d9c69;},'XoBWI':function(_0x36a6ce,_0x56bb1e){return _0x36a6ce<<_0x56bb1e;},'YeNvz':function(_0x543d8,_0x46cda){return _0x543d8>_0x46cda;},'uklly':function(_0x1145ea,_0x365db3){return _0x1145ea+_0x365db3;},'yMKjC':function(_0x43c032){return _0x43c032();},'WccUw':function(_0x392b4a){return _0x392b4a();},'IHUCd':_0x34ae07('[Uk0',0x50d,0x532,0x504,0x525)+_0x34ae07('Hcd!',0x506,0x54c,0x517,0x4d5)+_0x565efb(-0x20f,-0x1b5,-0x224,-0x1e3,'UYTT'),'GuAOj':function(_0x54418e,_0x5bb340){return _0x54418e===_0x5bb340;},'EaHDE':_0xdbefcd('gmgR',0x561,0x54e,0x561,0x584),'bPCMN':_0xdbefcd('gmgR',0x54e,0x524,0x505,0x56c)+_0x287664(0x204,0x18b,0x1c3,'isI8',0x1bf),'LUfdv':_0x565efb(-0x1b1,-0x155,-0x166,-0x175,'PORO')+'h!','TDWIs':_0x565efb(-0x1ab,-0x198,-0x17a,-0x182,'Okr#'),'KrqUd':function(_0x2a3a70,_0x17e13f){return _0x2a3a70>=_0x17e13f;},'IzFHF':function(_0x4424f4,_0x191f1a){return _0x4424f4-_0x191f1a;},'kpIrk':function(_0x1841af,_0xef2073){return _0x1841af-_0xef2073;}};function _0x287664(_0x4324dc,_0x4ef958,_0x1e759b,_0x489279,_0x7591e4){return _0x2e80(_0x1e759b-0x90,_0x489279);}function _0x9af935(){function _0x1e6dbb(_0x459e35,_0x4bfcc1,_0xc080dc,_0x4343a2,_0x51fa1c){return _0xec14b1(_0x459e35-0x120,_0x4bfcc1-0x7b,_0x459e35,_0x4343a2-0x1f4,_0xc080dc-0x559);}var _0x61e38e='',_0x33de02;while(_0x1a07fc[_0x1e6dbb('BLnu',0x426,0x43c,0x456,0x485)](_0x33de02=_0x3335d3[_0x1e6dbb('1y6B',0x44b,0x42d,0x449,0x444)+_0x1e6dbb('Okr#',0x404,0x400,0x3f6,0x413)](_0x3f52d2,!![]),-0x2055+0x105*-0x1e+0x3eeb)){_0x3f52d2+=0xd9c+0x2*0x12cd+-0x74*0x71,_0x61e38e+=String[_0x1e6dbb('3oga',0x426,0x415,0x3e7,0x453)+_0x4966cb(0x20f,0x1e7,0x1ed,0x1cb,'gmgR')+'de'](_0x33de02);}function _0x2351d7(_0x69d380,_0x943a7d,_0x3b1ebd,_0x548213,_0xab37a7){return _0x565efb(_0x69d380-0x1d9,_0x943a7d-0x189,_0x3b1ebd-0x52,_0x943a7d-0x69,_0x69d380);}function _0x450425(_0x2cec42,_0x2a6a74,_0x41f518,_0x4cd75f,_0x27c49e){return _0x287664(_0x2cec42-0x12a,_0x2a6a74-0x73,_0x27c49e-0x334,_0x2cec42,_0x27c49e-0x1b6);}function _0x4966cb(_0x23852d,_0x4661cb,_0x52f02b,_0x2be5fe,_0x3ba6fb){return _0x34ae07(_0x3ba6fb,_0x4661cb-0x87,_0x52f02b-0x17d,_0x2be5fe- -0x342,_0x3ba6fb-0x65);}_0x3f52d2+=0x2ac+-0x8ee+-0x322*-0x2;function _0x35d3fa(_0x4a9e6c,_0x379272,_0x376dc9,_0x5db457,_0x2e9ed2){return _0xec14b1(_0x4a9e6c-0x1a2,_0x379272-0xff,_0x2e9ed2,_0x5db457-0x1c7,_0x4a9e6c-0x15c);}return _0x61e38e;}var _0x20367e=_0x3335d3[_0xec14b1(-0x1bb,-0x1bf,'1Qpj',-0x1c0,-0x1a1)+_0xec14b1(-0x17d,-0x195,'3oga',-0x12e,-0x15f)](_0x3f52d2++);_0x1a07fc[_0xec14b1(-0x118,-0xdb,'isI8',-0x131,-0x126)](_0x20367e,0x2b*-0x47+0x6d*-0x2c+-0xa39*-0x3)&&(_0x3f52d2+=0x21*-0x42+0x1b41+-0x12bb);_0x1a07fc[_0xec14b1(-0xff,-0x11b,'!nup',-0x144,-0x127)](_0x20367e,0x2a4+-0x41b*0x1+0x17b)&&(_0x3f52d2+=-0x17d6+0x1cb2+-0xc*0x67);_0x1a07fc[_0x287664(0x269,0x1f1,0x22b,'[Uk0',0x1fc)](_0x20367e,0x1e36+0x1199+0x3*-0xfed)&&(_0x3f52d2+=-0x135*-0x1b+0x20ae+0x1*-0x4135);function _0xec14b1(_0x17d638,_0x4b466d,_0x47ae93,_0x51596c,_0x4083bc){return _0x2e80(_0x4083bc- -0x2ca,_0x47ae93);}var _0x43f425=_0x3335d3[_0x287664(0x278,0x247,0x23f,'k&zK',0x21d)+_0x34ae07('k&zK',0x4ba,0x48a,0x497,0x4a5)](_0x3f52d2++),_0xe0347c=_0x3335d3[_0xec14b1(-0x116,-0x12f,'mK$E',-0xd7,-0x11e)+_0x34ae07('!nup',0x4fb,0x4cc,0x515,0x4e5)](_0x3f52d2++),_0x29fb6c=_0x3335d3[_0xdbefcd('u[l9',0x52b,0x4e1,0x552,0x54a)+_0xec14b1(-0x17c,-0x110,'y@WE',-0x180,-0x15c)](_0x3f52d2++),_0x221417=_0x1a07fc[_0x565efb(-0x185,-0x19e,-0x151,-0x18f,'6ew4')](_0x1a07fc[_0x34ae07('AIl!',0x534,0x4fc,0x4fa,0x506)](_0x1a07fc[_0x287664(0x20c,0x205,0x1ee,'1Qpj',0x1ca)](_0x43f425,-0x2f*-0x1e+0x5*0x493+-0x1c51),_0x1a07fc[_0x34ae07('vmq6',0x4ff,0x4f7,0x4db,0x4a4)](_0xe0347c,0x2*-0x349+-0x677+0xd11)),_0x29fb6c)[_0x565efb(-0x193,-0x1c2,-0x165,-0x1ac,'Kv]L')+_0x287664(0x228,0x24b,0x211,'GZAI',0x200)](0x44*-0x7f+-0x261a+0x47e6);while(_0x1a07fc[_0x565efb(-0x21a,-0x22a,-0x21f,-0x1df,'^vHc')](_0x221417[_0xdbefcd('SrUJ',0x510,0x51d,0x540,0x4c4)+'h'],-0x3*-0x4bd+0x1cf7*-0x1+0x3d*0x3e)){_0x221417=_0x1a07fc[_0x565efb(-0x1bd,-0x1e5,-0x1b0,-0x19c,'k&zK')]('0',_0x221417);}_0x221417=_0x1a07fc[_0xec14b1(-0x174,-0x1b6,'vmq6',-0x13c,-0x16d)]('#',_0x221417);function _0xdbefcd(_0x42d194,_0x1f2dda,_0x3265e2,_0x4c6397,_0x3bf94b){return _0x2e80(_0x1f2dda-0x3e4,_0x42d194);}var _0x392bef=Cell[_0x287664(0x1ef,0x1f8,0x1e2,'H!Nl',0x1a5)+_0x565efb(-0x146,-0x149,-0x114,-0x151,'Qptn')][_0x34ae07('(RR1',0x49a,0x472,0x491,0x47a)+_0x287664(0x1ac,0x1ff,0x1da,'3oga',0x215)](_0x1a07fc[_0xec14b1(-0x156,-0x194,'1Qpj',-0x1bd,-0x179)](_0x9af935))[_0x565efb(-0x196,-0x1a7,-0x13c,-0x15d,'G9@0')],_0x324fad=_0x1a07fc[_0x34ae07('vmq6',0x4dd,0x52b,0x4ef,0x528)](_0x9af935);_0x324fad=_0x324fad[_0xdbefcd('H!Nl',0x534,0x561,0x568,0x534)+'ce'](/tranhdau(\.net)?/gi,_0x1a07fc[_0x34ae07('Us(L',0x490,0x48a,0x4d0,0x50b)]);function _0x565efb(_0x539257,_0x1e352d,_0x2caf62,_0x173b6d,_0x39bbea){return _0x2e80(_0x173b6d- -0x302,_0x39bbea);}function _0x34ae07(_0x5697f5,_0x1d648c,_0x5b05bd,_0x377a43,_0x22a6d3){return _0x2e80(_0x377a43-0x367,_0x5697f5);}if(_0x1a07fc[_0x34ae07('PORO',0x4e4,0x4e5,0x4b2,0x473)](_0x392bef[_0x287664(0x1f5,0x1ac,0x1d5,'vmq6',0x1ae)+_0x34ae07('1y6B',0x46f,0x4d7,0x49e,0x4c8)+'e'](),_0x1a07fc[_0x565efb(-0x1eb,-0x212,-0x1e1,-0x1d1,'1Qpj')]))_0x392bef=_0x1a07fc[_0xec14b1(-0xe5,-0x151,'thRG',-0xef,-0x128)];else _0x1a07fc[_0x287664(0x1a7,0x197,0x1d1,'H!Nl',0x20f)](_0x392bef[_0x565efb(-0x118,-0x17d,-0x169,-0x163,'(RR1')+_0x565efb(-0x18e,-0x183,-0x200,-0x1cb,'1y6B')+'e'](),_0x1a07fc[_0xec14b1(-0x1d6,-0x1a4,'3PGu',-0x15e,-0x1a4)])&&(_0x392bef=_0x1a07fc[_0xec14b1(-0x15b,-0x12c,'bYLV',-0x15c,-0x177)]);chatBoard[_0x565efb(-0x18e,-0x1cc,-0x1d8,-0x1a9,'(RR1')]({'name':_0x392bef,'color':_0x221417,'message':_0x324fad,'time':Date[_0x34ae07('u[l9',0x4f6,0x4df,0x4e9,0x50b)]()});var _0x3da6eb=Date[_0x287664(0x22f,0x1f5,0x219,'*YpI',0x241)](),_0x120988=0x18d5+0x26b2+-0x3f87;if(_0x1a07fc[_0xdbefcd('PORO',0x578,0x598,0x561,0x5a6)](chatBoard[_0x565efb(-0x14d,-0x182,-0x19e,-0x17d,'k&zK')+'h'],0x1*-0x16db+-0x1*-0x1163+0x579))_0x120988=chatBoard[_0x1a07fc[_0xec14b1(-0x1d4,-0x1db,'[Uk0',-0x199,-0x1a3)](chatBoard[_0x565efb(-0x1c3,-0x169,-0x1c9,-0x1a7,'Hcd!')+'h'],-0x3b*-0x4f+-0x1193+-0xa1)][_0x34ae07('AIl!',0x4c0,0x504,0x4d9,0x49c)];else return;var _0x9bbf4=_0x1a07fc[_0xdbefcd('bYLV',0x511,0x4d1,0x538,0x541)](_0x3da6eb,_0x120988);}

    function drawChatBoard() {
        //chatCanvas = null;

        chatCanvas = document.createElement("canvas");
        var ctx = chatCanvas.getContext("2d");
        var scaleFactor = Math.min(Math.max(canvasWidth / 1200, 0.75), 1); //scale factor = 0.75 to 1
        chatCanvas.width = 1000 * scaleFactor;
        chatCanvas.height = 550 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);
        var nowtime = Date.now();
        var lasttime = 0;
        if (chatBoard.length >= 1)
            lasttime = chatBoard[chatBoard.length - 1].time;
        else return;
        var deltat = nowtime - lasttime;

        ctx.globalAlpha = 0.8 * Math.exp(-deltat / 25000);
        //console.log(deltat);


      var len = chatBoard.length;
var from = len - 15;
if (from < 0) from = 0;
for (var i = 0; i < (len - from); i++) {
    var chatNameColor = chatBoard[i + from].name === "" ? "#F8F8FF" : chatBoard[i + from].color;

    var chatName = new UText(18, chatNameColor);
    chatName.setValue(chatBoard[i + from].name);
    var width = chatName.getWidth();
    var a = chatName.render();
    ctx.drawImage(a, 15, chatCanvas.height / scaleFactor - 24 * (len - i - from));

    var chatTextColor = chatBoard[i + from].name === "Admin" ? "#00FFFF" : '#666666'; // 
    var chatText = new UText(18, chatTextColor);
    chatText.setValue(':' + chatBoard[i + from].message);
    a = chatText.render();
    ctx.drawImage(a, 15 + width * 1.8, chatCanvas.height / scaleFactor - 24 * (len - from - i));
}


        //ctx.restore();
    }


    
    function updateNodes(view, offset) {
        timestamp = +new Date;
        var code = Math.random();
        ua = false;
        var queueLength = view.getUint16(offset, true);
        offset += 2;

        for (i = 0; i < queueLength; ++i) {
            var killer = nodes[view.getUint32(offset, true)],
                killedNode = nodes[view.getUint32(offset + 4, true)];
            offset += 8;
            if (killer && killedNode) {
                killedNode.destroy();
                killedNode.ox = killedNode.x;
                killedNode.oy = killedNode.y;
                killedNode.oSize = killedNode.size;
                killedNode.nx = killer.x;
                killedNode.ny = killer.y;
                killedNode.nSize = killedNode.size;
                killedNode.updateTime = timestamp;
            }
        }

        for (var i = 0;;) {
            var nodeid = view.getUint32(offset, true);
            offset += 4;
            if (0 == nodeid) break;
            ++i;

            var size, posY, posX = view.getInt32(offset, true);
            offset += 4;
            posY = view.getInt32(offset, true);
            offset += 4;
            size = view.getInt16(offset, true);
            offset += 2;

            for (var r = view.getUint8(offset++), g = view.getUint8(offset++), b = view.getUint8(offset++),
                    color = (r << 16 | g << 8 | b).toString(16); 6 > color.length;) color = "0" + color;
            var colorstr = "#" + color,
                flags = view.getUint8(offset++),
                flagVirus = !!(flags & 0x01),
                flagEjected = !!(flags & 0x20),
                flagAgitated = !!(flags & 0x10),
                _skin = "";

            flags & 2 && (offset += 4);

            if (flags & 4) {
                for (;;) { // skin name
                    t = view.getUint8(offset, true) & 0x7F;
                    offset += 1;
                    if (0 == t) break;
                    _skin += String.fromCharCode(t);
                }
            }

            for (var char, name = "";;) { // nick name
                char = view.getUint16(offset, true);
                offset += 2;
                if (0 == char) break;
                name += String.fromCharCode(char);
            }

            var node = null;
            if (nodes.hasOwnProperty(nodeid)) {
                node = nodes[nodeid];
                node.updatePos();
                node.ox = node.x;
                node.oy = node.y;
                node.oSize = node.size;
                node.color = colorstr;
            } else {
                node = new Cell(nodeid, posX, posY, size, colorstr, name, _skin);
                nodelist.push(node);
                nodes[nodeid] = node;
                node.ka = posX;
                node.la = posY;
            }
            node.isVirus = flagVirus;
            node.isEjected = flagEjected;
            node.isAgitated = flagAgitated;
            node.nx = posX;
            node.ny = posY;
            node.setSize(size);
            node.updateCode = code;
            node.updateTime = timestamp;
            node.flag = flags;
            name && node.setName(name);
            if (-1 != nodesOnScreen.indexOf(nodeid) && -1 == playerCells.indexOf(node)) {
                document.getElementById("overlays").style.display = "none";
                playerCells.push(node);
                if (1 == playerCells.length) {
                    nodeX = node.x;
                    nodeY = node.y;
                }
            }
        }
        queueLength = view.getUint32(offset, true);
        offset += 4;
        for (i = 0; i < queueLength; i++) {
            var nodeId = view.getUint32(offset, true);
            offset += 4;
            node = nodes[nodeId];
            null != node && node.destroy();
        }
        ua && 0 == playerCells.length && showOverlays(false)
    }

    function sendMouseMove() {
        var msg;
        if (wsIsOpen()) {
            msg = rawMouseX - canvasWidth / 2;
            var b = rawMouseY - canvasHeight / 2;
            if (64 <= msg * msg + b * b && !(.01 > Math.abs(oldX - X) && .01 > Math.abs(oldY - Y))) {
                oldX = X;
                oldY = Y;
                msg = prepareData(21);
                msg.setUint8(0, 16);
                msg.setFloat64(1, X, true);
                msg.setFloat64(9, Y, true);
                msg.setUint32(17, 0, true);
                wsSend(msg);
            }
        }
    }

    function sendNickName() {
        if (wsIsOpen() && null != userNickName) {
            var msg = prepareData(1 + 2 * userNickName.length);
            msg.setUint8(0, 0);
            for (var i = 0; i < userNickName.length; ++i) msg.setUint16(1 + 2 * i, userNickName.charCodeAt(i), true);
            wsSend(msg)
        }
    }

    function sendChat(str) {
        if (wsIsOpen() && (str.length < 200) && (str.length > 0) && !hideChat) {
            var msg = prepareData(2 + 2 * str.length);
            var offset = 0;
            msg.setUint8(offset++, 99);
            msg.setUint8(offset++, 0); // flags (0 for now)
            for (var i = 0; i < str.length; ++i) {
                msg.setUint16(offset, str.charCodeAt(i), true);
                offset += 2;
            }

            wsSend(msg);
        }
    }

    function wsIsOpen() {
        return null != ws && ws.readyState == ws.OPEN
    }

    function sendUint8(a) {
        if (wsIsOpen()) {
            var msg = prepareData(1);
            msg.setUint8(0, a);
            wsSend(msg)
        }
    }

    function redrawGameScene() {
        drawGameScene();
        wHandle.requestAnimationFrame(redrawGameScene)
    }

    function canvasResize() {
        window.scrollTo(0, 0);
        canvasWidth = wHandle.innerWidth;
        canvasHeight = wHandle.innerHeight;
        nCanvas.width = canvasWidth;
        nCanvas.height = canvasHeight;
        drawGameScene()
    }

    function viewRange() {
        var ratio;
        ratio = Math.max(canvasHeight / 1080, canvasWidth / 1920);
        return ratio * zoom;
    }

    function calcViewZoom() {
        if (0 != playerCells.length) {
            for (var newViewZoom = 0, i = 0; i < playerCells.length; i++) newViewZoom += playerCells[i].size;
            newViewZoom = Math.pow(Math.min(64 / newViewZoom, 1), .4) * viewRange();
            viewZoom = (9 * viewZoom + newViewZoom) / 10;
        }
    }

    function drawGameScene() {
       var a, oldtime = Date.now();
        ++cb;
        timestamp = oldtime;
        if (0 < playerCells.length) {
            calcViewZoom();
            var c = a = 0;
            for (var d = 0; d < playerCells.length; d++) {
                playerCells[d].updatePos();
                a += playerCells[d].x / playerCells.length;
                c += playerCells[d].y / playerCells.length;
            }
            posX = a;
            posY = c;
            posSize = viewZoom;
            nodeX = (nodeX + a) / 2;
            nodeY = (nodeY + c) / 2
        } else {
            nodeX = (29 * nodeX + posX) / 30;
            nodeY = (29 * nodeY + posY) / 30;
            viewZoom = (9 * viewZoom + posSize * viewRange()) / 10;
        }
        buildQTree();
        mouseCoordinateChange();
        xa || ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (xa) {
            if (showDarkTheme) {
                ctx.fillStyle = '#111111';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            } else {
                ctx.fillStyle = '#F2FBFF';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }
        } else {
            drawGrid();
        }
        nodelist.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.scale(viewZoom, viewZoom);
        ctx.translate(-nodeX, -nodeY);
        for (d = 0; d < Cells.length; d++) Cells[d].drawOneCell(ctx);

        for (d = 0; d < nodelist.length; d++) nodelist[d].drawOneCell(ctx);
        //console.log(Cells.length);
        if (drawLine) {
            drawLineX = (3 * drawLineX + lineX) /
                4;
            drawLineY = (3 * drawLineY + lineY) / 4;
            ctx.save();
            ctx.strokeStyle = "#FFAAAA";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = .5;
            ctx.beginPath();
            for (d = 0; d < playerCells.length; d++) {
                ctx.moveTo(playerCells[d].x, playerCells[d].y);
                ctx.lineTo(drawLineX, drawLineY);
            }
            ctx.stroke();
            ctx.restore()
        }
        ctx.restore();
        lbCanvas && lbCanvas.width && ctx.drawImage(lbCanvas, canvasWidth - lbCanvas.width - 10, 10); // draw Leader Board
        if (chatCanvas != null) ctx.drawImage(chatCanvas, 0, canvasHeight - chatCanvas.height - 50); // draw Leader Board

        userScore = Math.max(userScore, calcUserScore());
        if (0 != userScore) {
            if (null == scoreText) {
                scoreText = new UText(24, '#FFFFFF');
            }
            scoreText.setValue('Score: ' + ~~(userScore / 100));
            c = scoreText.render();
            a = c.width;
            ctx.globalAlpha = .2;
            ctx.fillStyle = '#000000';
            ctx.fillRect(10, 10, a + 10, 34); //canvasHeight - 10 - 24 - 10
            ctx.globalAlpha = 1;
            ctx.drawImage(c, 15, 15); //canvasHeight - 10 - 24 - 5
        }
        drawTouch(ctx);
        //drawChatBoard();
        var deltatime = Date.now() - oldtime;
        deltatime > 1E3 / 60 ? z -= .01 : deltatime < 1E3 / 65 && (z += .01);
        .4 > z && (z = .4);
        1 < z && (z = 1)
    }

    function drawTouch(ctx) {
        ctx.save();
        if (touchable) {
            for (var i = 0; i < touches.length; i++) {
                var touch = touches[i];
                if (touch.identifier == leftTouchID) {
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = 6;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 40, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = 2;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 60, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.arc(leftTouchPos.x, leftTouchPos.y, 40, 0, Math.PI * 2, true);
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = "6";
                    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI * 2, true);
                    ctx.stroke();
                }
            }
        }
        ctx.restore();
    }

    function drawGrid() {
        ctx.fillStyle = showDarkTheme ? "#111111" : "#F2FBFF";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.strokeStyle = showDarkTheme ? "#AAAAAA" : "#000000";
        ctx.globalAlpha = .2;
        ctx.scale(viewZoom, viewZoom);
        var a = canvasWidth / viewZoom,
            b = canvasHeight / viewZoom;
        for (var c = -.5 + (-nodeX + a / 2) % 50; c < a; c += 50) {
            ctx.moveTo(c, 0);
            ctx.lineTo(c, b);
        }
        ctx.stroke();
        ctx.beginPath();
        for (c = -.5 + (-nodeY + b / 2) % 50; c < b; c += 50) {
            ctx.moveTo(0, c);
            ctx.lineTo(a, c);
        }
        ctx.stroke()
        ctx.restore()
    }

 
    function calcUserScore() {
        for (var score = 0, i = 0; i < playerCells.length; i++) score += playerCells[i].nSize * playerCells[i].nSize;
        return score
    }
// Lấy userId từ session hoặc cookie (giả sử hàm này đã có sẵn)
function getUserIdFromSessionOrCookie() {
    return new Promise((resolve, reject) => {
        fetch('/ajax/get_user_id.php', { method: 'POST' })
            .then(response => response.text())
            .then(data => {
                const userId = parseInt(data);
                if (isNaN(userId)) {
                    reject('Invalid user ID');
                } else {
                    resolve(userId); // Trả về userId nếu hợp lệ
                }
            })
            .catch(error => {
                reject(error); // Nếu có lỗi trong fetch
            });
    });
}

function getColorName(userId) {
    console.log("userId:", userId); // Kiểm tra giá trị userId

    if (userId === null) {
        console.log("Không có userId, trả về màu mặc định");
        return Promise.resolve('#'); // Trả về màu mặc định nếu userId là null
    }

    return fetch(`/check_color_name.php?userId=${userId}`)
        .then(response => {
            console.log("Response status:", response.status); // Kiểm tra mã trạng thái HTTP
            return response.json();
        })
        .then(data => {
            console.log("Dữ liệu nhận được từ API:", data); // Kiểm tra dữ liệu trả về từ API

            // Nếu không có lỗi và có màu sắc tên, trả về màu sắc từ API
            if (data.color_name) {
                console.log("Color Name:", data.color_name); // Kiểm tra màu sắc trả về từ API
                return data.color_name;
            } else {
                console.error('Error:', data.error);
                return ''; // Mặc định nếu có lỗi
            }
        })
        .catch(error => {
            console.error('Error fetching color:', error);
            return ''; // Mặc định nếu có lỗi
        });
}
function drawLeaderBoard() {
    console.log("Hàm drawLeaderBoard đang chạy");  // Kiểm tra xem hàm có được gọi không

    // Giả sử bạn đã lấy được userId từ session hoặc cookie
    getUserIdFromSessionOrCookie().then(userId => {
        // Kiểm tra và lấy màu tên của người chơi
        getColorName(userId).then((colorName) => {
            lbCanvas = null;
            var drawTeam = null != teamScores;
            if (drawTeam || 0 != leaderBoard.length) {
                if (drawTeam || showName) {
                    lbCanvas = document.createElement("canvas");
                    var ctx = lbCanvas.getContext("2d"),
                        boardLength = 60;
                    boardLength = !drawTeam ? boardLength + 24 * leaderBoard.length : boardLength + 180;
                    var scaleFactor = Math.min(0.22 * canvasHeight, Math.min(200, .3 * canvasWidth)) * 0.005;
                    lbCanvas.width = 200 * scaleFactor;
                    lbCanvas.height = boardLength * scaleFactor;

                    ctx.scale(scaleFactor, scaleFactor);
                    ctx.globalAlpha = .4;
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(0, 0, 200, boardLength);

                    ctx.globalAlpha = 1;
                    ctx.fillStyle = "#FFFFFF";
                    var c = "Leaderboard";
                    ctx.font = "30px Times New Roman";
                    ctx.fillText(c, 100 - ctx.measureText(c).width * 0.5, 40);

                    var b, l;
                    if (!drawTeam) {
                        for (ctx.font = "20px Times New Roman", b = 0, l = leaderBoard.length; b < l; ++b) {
                            c = leaderBoard[b].name || "An unnamed cell";
                            if (!showName) {
                                c = "An unnamed cell";
                            }
                            var me = -1 != nodesOnScreen.indexOf(leaderBoard[b].id);
                            if (leaderBoard[b].id === userId && colorName && colorName !== "#FFFFFF") {
                                ctx.fillStyle = colorName;
                            } else {
                                ctx.fillStyle = "#FFFFFF";
                            }

                            if (!noRanking) c = b + 1 + ". " + c;
                            var start = (ctx.measureText(c).width > 200) ? 2 : 100 - ctx.measureText(c).width * 0.5;
                            ctx.fillText(c, start, 70 + 24 * b);
                        }
                    } else {
                        for (b = c = 0; b < teamScores.length; ++b) {
                            var d = c + teamScores[b] * Math.PI * 2;
                            ctx.fillStyle = teamColor[b + 1];
                            ctx.beginPath();
                            ctx.moveTo(100, 140);
                            ctx.arc(100, 140, 80, c, d, false);
                            ctx.fill();
                            c = d;
                        }
                    }
                }
            }
        }).catch((error) => {
            console.log("Lỗi khi lấy màu:", error);
        });
    }).catch((error) => {
        console.log("Lỗi khi lấy userId:", error);
    });
}


    function Cell(uid, ux, uy, usize, ucolor, uname, a) {
        this.id = uid;
        this.ox = this.x = ux;
        this.oy = this.y = uy;
        this.oSize = this.size = usize;
        this.color = ucolor;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(uname)
        this._skin = a;
    }

    function UText(usize, ucolor, ustroke, ustrokecolor) {
        usize && (this._size = usize);
        ucolor && (this._color = ucolor);
        this._stroke = !!ustroke;
        ustrokecolor && (this._strokeColor = ustrokecolor)
    }


    var localProtocol = wHandle.location.protocol,
        localProtocolHttps = "https:" == localProtocol;
    var nCanvas, ctx, mainCanvas, lbCanvas, chatCanvas, canvasWidth, canvasHeight, qTree = null,
        ws = null,
        nodeX = 0,
        nodeY = 0,
        nodesOnScreen = [],
        playerCells = [],
        nodes = {},
        nodelist = [],
        Cells = [],
        leaderBoard = [],
        chatBoard = [],
        rawMouseX = 0,
        rawMouseY = 0,
        X = -1,
        Y = -1,
        cb = 0,
        timestamp = 0,
        userNickName = null,
        leftPos = 0,
        topPos = 0,
        rightPos = 1E4,
        bottomPos = 1E4,
        viewZoom = 1,
        showSkin = true,
        showName = true,
        showColor = false,
        ua = false,
        userScore = 0,
        showDarkTheme = false,
        showMass = false,
        hideChat = false,
        smoothRender = .4,
        posX = nodeX = ~~((leftPos + rightPos) / 2),
        posY = nodeY = ~~((topPos + bottomPos) / 2),
        posSize = 1,
        teamScores = null,
        ma = false,
        hasOverlay = true,
        drawLine = false,
        lineX = 0,
        lineY = 0,
        drawLineX = 0,
        drawLineY = 0,
        Ra = 0,
        teamColor = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
        xa = false,
        zoom = 1,
        
        noRanking = false;
    var wCanvas = document.createElement("canvas");
    var playerStat = null;
    wHandle.isSpectating = true;
    wHandle.setNick = function(arg) {
        skin_name = document.getElementById("skin").value;
        hideOverlays();
	userNickName = "{"+skin_name+"}"+arg;
        sendNickName();
        userScore = 0
    };
    wHandle.setSkins = function(arg) {
        showSkin = arg
    };
    wHandle.setNames = function(arg) {
        showName = arg
    };
    wHandle.setDarkTheme = function(arg) {
        showDarkTheme = arg
    };
    wHandle.setColors = function(arg) {
        showColor = arg
    };
    wHandle.setShowMass = function(arg) {
        showMass = arg
    };
    wHandle.setSmooth = function(arg) {
        smoothRender = arg ? 2 : .4
    };
    wHandle.setChatHide = function(arg) {
        hideChat = arg;
        if (hideChat) {
            wjQuery('#chat_textbox').hide();
        } else {
            wjQuery('#chat_textbox').show();
        }
    }
    wHandle.spectate = function() {
        userNickName = null;
        wHandle.isSpectating = true;
        sendUint8(1);
        hideOverlays()
    };
    wHandle.setAcid = function(arg) {
        xa = arg
    };

    if (null != wHandle.localStorage) {
        wjQuery(window).load(function() {
            wjQuery(".save").each(function() {
                var id = $(this).data("box-id");
                var value = wHandle.localStorage.getItem("checkbox-" + id);
                if (value && value == "true" && 0 != id) {
                    $(this).prop("checked", "true");
                    $(this).trigger("change");
                } else if (id == 0 && value != null) {
                    $(this).val(value);
                }
            });
            wjQuery(".save").change(function() {
                var id = $(this).data('box-id');
                var value = (id == 0) ? $(this).val() : $(this).prop('checked');
                wHandle.localStorage.setItem("checkbox-" + id, value);
            });
        });
        if (null == wHandle.localStorage.AB8) {
            wHandle.localStorage.AB8 = ~~(100 * Math.random());
        }
    }

    setTimeout(function() {}, 3E5);
    var T = {
        ZW: "EU-London"
    };
    wHandle.connect = wsConnect;

    var data = {
        "action": "test"
    };
    wjQuery.ajax({
        type: "POST",
        dataType: "json",
        url: "checkdir.php",
        data: data,
        success: function(data) {
            response = JSON.parse(data["names"]);
            for (var i = 0; i < response.length; i++) {
                if (-1 == knownNameDict.indexOf(response[i])) {
                    knownNameDict.push(response[i]);
                }
            }
        }
    });

    var delay = 500,
        oldX = -1,
        oldY = -1,
        Canvas = null,
        z = 1,
        scoreText = null,
        skins = {},
        knownNameDict = "".split(";"),
        knownNameDict_noDisp = [],
        ib = ["_canvas'blob"];
    Cell.prototype = {
        id: 0,
        points: null,
        pointsAcc: null,
        name: null,
        nameCache: null,
        sizeCache: null,
        x: 0,
        y: 0,
        size: 0,
        ox: 0,
        oy: 0,
        oSize: 0,
        nx: 0,
        ny: 0,
        nSize: 0,
        flag: 0,
        updateTime: 0,
        updateCode: 0,
        drawTime: 0,
        destroyed: false,
        isVirus: false,
        isEjected: false,
        isAgitated: false,
        wasSimpleDrawing: true,
        destroy: function() {
            var tmp;
            for (tmp = 0, len = nodelist.length; tmp < len; tmp++)
                if (nodelist[tmp] === this) {
                    nodelist.splice(tmp, 1);
                    break
                }
            delete nodes[this.id];
            tmp = playerCells.indexOf(this);
            if (-1 != tmp) {
                ua = true;
                playerCells.splice(tmp, 1);
            }
            tmp = nodesOnScreen.indexOf(this.id);
            if (-1 != tmp) nodesOnScreen.splice(tmp, 1);
            this.destroyed = true;
            Cells.push(this)
        },
        getNameSize: function() {
            return Math.max(~~(.3 * this.size), 24)
        },
parseName: function(value) { // static method
    value = value || "";
    var nameAndSkin = /^(?:\{([^}]*)\})?([^]*)/.exec(value);
    return {
        name: nameAndSkin[2].trim(),
        skin: (nameAndSkin[1] || "").trim() || nameAndSkin[2]
    };
},

setName: function(a) {
    var nameAndSkin = Cell.prototype.parseName(a);
    this.name = nameAndSkin.name;
    this.skin = nameAndSkin.skin;

   
    var nameColor = (this.name === "CAOTUNG") ? "#FF0000" : "#FFFFFF";

    if (null == this.nameCache) {
        this.nameCache = new UText(this.getNameSize(), nameColor, true, "#000000");
        this.nameCache.setValue(this.name);
    } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
        this.nameCache.color = nameColor;
    }
},
        setSize: function(a) {
            this.nSize = a;
            var m = ~~(this.size * this.size * 0.01);
            if (null === this.sizeCache)
                this.sizeCache = new UText(this.getNameSize() * 0.5, "#FFFFFF", true, "#000000");
            else this.sizeCache.setSize(this.getNameSize() * 0.5);
        },
        createPoints: function() {
            for (var samplenum = this.getNumPoints(); this.points.length > samplenum;) {
                var rand = ~~(Math.random() * this.points.length);
                this.points.splice(rand, 1);
                this.pointsAcc.splice(rand, 1)
            }
            if (0 == this.points.length && 0 < samplenum) {
                this.points.push({
                    ref: this,
                    size: this.size,
                    x: this.x,
                    y: this.y
                });
                this.pointsAcc.push(Math.random() - .5);
            }
            while (this.points.length < samplenum) {
                var rand2 = ~~(Math.random() * this.points.length),
                    point = this.points[rand2];
                this.points.splice(rand2, 0, {
                    ref: this,
                    size: point.size,
                    x: point.x,
                    y: point.y
                });
                this.pointsAcc.splice(rand2, 0, this.pointsAcc[rand2])
            }
        },
        getNumPoints: function() {
            if (0 == this.id) return 16;
            var a = 10;
            if (20 > this.size) a = 0;
            if (this.isVirus) a = 30;
            var b = this.size;
            if (!this.isVirus)(b *= viewZoom);
            b *= z;
            if (this.flag & 32)(b *= .25);
            return ~~Math.max(b, a);
        },
        movePoints: function() {
            this.createPoints();
            for (var points = this.points, pointsacc = this.pointsAcc, numpoints = points.length, i = 0; i < numpoints; ++i) {
                var pos1 = pointsacc[(i - 1 + numpoints) % numpoints],
                    pos2 = pointsacc[(i + 1) % numpoints];
                pointsacc[i] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                pointsacc[i] *= .7;
                10 < pointsacc[i] && (pointsacc[i] = 10); -
                10 > pointsacc[i] && (pointsacc[i] = -10);
                pointsacc[i] = (pos1 + pos2 + 8 * pointsacc[i]) / 10
            }
            for (var ref = this, isvirus = this.isVirus ? 0 : (this.id / 1E3 + timestamp / 1E4) % (2 * Math.PI), j = 0; j < numpoints; ++j) {
                var f = points[j].size,
                    e = points[(j - 1 + numpoints) % numpoints].size,
                    m = points[(j + 1) % numpoints].size;
                if (15 < this.size && null != qTree && 20 < this.size * viewZoom && 0 != this.id) {
                    var l = false,
                        n = points[j].x,
                        q = points[j].y;
                    qTree.retrieve2(n - 5, q - 5, 10, 10, function(a) {
                        if (a.ref != ref && 25 > (n - a.x) * (n - a.x) + (q - a.y) * (q - a.y)) {
                            l = true;
                        }
                    });
                    if (!l && points[j].x < leftPos || points[j].y < topPos || points[j].x > rightPos || points[j].y > bottomPos) {
                        l = true;
                    }
                    if (l) {
                        if (0 < pointsacc[j]) {
                            (pointsacc[j] = 0);
                        }
                        pointsacc[j] -= 1;
                    }
                }
                f += pointsacc[j];
                0 > f && (f = 0);
                f = this.isAgitated ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;
                points[j].size = (e + m + 8 * f) / 10;
                e = 2 * Math.PI / numpoints;
                m = this.points[j].size;
                this.isVirus && 0 == j % 2 && (m += 5);
                points[j].x = this.x + Math.cos(e * j + isvirus) * m;
                points[j].y = this.y + Math.sin(e * j + isvirus) * m
            }
        },
        updatePos: function() {
            if (0 == this.id) return 1;
            var a;
            a = (timestamp - this.updateTime) / 100;
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            var b = 0 > a ? 0 : 1 < a ? 1 : a;
            this.getNameSize();
            if (this.destroyed && 1 <= b) {
                var c = Cells.indexOf(this); -
                1 != c && Cells.splice(c, 1)
            }
            this.x = a * (this.nx - this.ox) + this.ox;
            this.y = a * (this.ny - this.oy) + this.oy;
            this.size = b * (this.nSize - this.oSize) + this.oSize;
            return b;
        },
     shouldRender: function () {
        if (0 == this.id) {
            return true
        } else {
            return !(this.x + this.size + 40 < nodeX - ctx.canvas.width / 2 / viewZoom || this.y + this.size + 40 < nodeY - ctx.canvas.height / 2 / viewZoom || this.x - this.size - 40 > nodeX + ctx.canvas.width / 2 / viewZoom || this.y - this.size - 40 > nodeY + ctx.canvas.height / 2 / viewZoom);
        }
    },
        getStrokeColor: function() {
            var r = (~~(parseInt(this.color.substr(1, 2), 16) * 0.9)).toString(16),
                g = (~~(parseInt(this.color.substr(3, 2), 16) * 0.9)).toString(16),
                b = (~~(parseInt(this.color.substr(5, 2), 16) * 0.9)).toString(16);
            if (r.length == 1) r = "0" + r;
            if (g.length == 1) g = "0" + g;
            if (b.length == 1) b = "0" + b;
            return "#" + r + g + b;
			 },


drawOneCell: function (ctx) {
    if (this.shouldRender()) {
        var b = (0 != this.id && !this.isVirus && !this.isAgitated && .4 > viewZoom);
        if (5 > this.getNumPoints()) b = true;
        if (this.wasSimpleDrawing && !b)
            for (var c = 0; c < this.points.length; c++) this.points[c].size = this.size;
        var bigPointSize = this.size;
        if (!this.wasSimpleDrawing) {
            for (var c = 0; c < this.points.length; c++) bigPointSize = Math.max(this.points[c].size, bigPointSize);
        }
        this.wasSimpleDrawing = b;
        ctx.save();
        this.drawTime = timestamp;
        c = this.updatePos();
        this.destroyed && (ctx.globalAlpha *= 1 - c);
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineJoin = this.isVirus ? "miter" : "round";
        if (showColor) {
            ctx.fillStyle = "#FFFFFF";
            ctx.strokeStyle = "#AAAAAA";
        } else {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
        }
        if (b) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        } else {
            this.movePoints();
            ctx.beginPath();
            var d = this.getNumPoints();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            for (c = 1; c <= d; ++c) {
                var e = c % d;
                ctx.lineTo(this.points[e].x, this.points[e].y)
            }
        }
        ctx.closePath();
        var skinName = this.name.toLowerCase();

        // Load Premium skin if we have one set
        if (typeof this._skin != 'undefined' && this._skin != '') {
            if (this._skin[0] == '%') {
                skinName = this._skin.substring(1);
            }
        }
        if (showSkin && this.skin != '' && -1 != knownNameDict.indexOf(this.skin)) {                    
            if (!skins.hasOwnProperty(this.skin)) {
                skins[this.skin] = new Image;
                skins[this.skin].src = SKIN_URL + this.skin + '.png';
            }
            if (0 != skins[this.skin].width && skins[this.skin].complete) {
                c = skins[this.skin];
            } else {
                c = null;
            }
        } else {
            c = null;
        }
        b || ctx.stroke();
        ctx.fill(); // Draw cell content
        if (c) {
            ctx.save();
            ctx.clip();
            // Draw skin
            ctx.drawImage(c, this.x - bigPointSize, this.y - bigPointSize, 2 * bigPointSize, 2 * bigPointSize);
            ctx.restore();
        }

        // Kiểm tra xem đây có phải là một player cell
        const isPlayerCell = playerCells.indexOf(this) !== -1;

        if (isPlayerCell) {
            // Lấy lựa chọn mũ từ localStorage
            const selectedHat = localStorage.getItem('selectedHat');
            let hatImage = null;

            if (selectedHat) {
                if (selectedHat === 'santa') {
                    if (hats.santa && hats.santa.complete) {
                        hatImage = hats.santa;
                    }
                } else if (selectedHat === 'crown') {
                    if (hats.crown && hats.crown.complete) {
                        hatImage = hats.crown;
                    }
                }
            }

            // Nếu có mũ hợp lệ, vẽ mũ lên người chơi
            if (hatImage) {
                ctx.save();
                ctx.globalAlpha = 0.9; // Đặt độ mờ của mũ
                ctx.drawImage(hatImage, this.x - this.size, this.y - this.size - this.size * 1.66, 2 * this.size, 2 * this.size);
                ctx.restore();
            }
        }

        if ((showColor || 15 < this.size) && !b) {
            ctx.strokeStyle = '#000000';
            ctx.globalAlpha *= .1;
            ctx.stroke();
        }
        ctx.globalAlpha = 1; 
        c = -1 != playerCells.indexOf(this);
        var ncache;

        // Vẽ tên
                //draw name
                if (0 != this.id) {
                    var x = ~~this.x,
                        y = ~~this.y,
                        nz = this.getNameSize(),
                        ratio = Math.ceil(10 * viewZoom) * 0.1,
                        ratD = 1 / ratio;
                    if ((showName || c) && this.name && this.nameCache && (null == e || -1 == knownNameDict_noDisp.indexOf(skinName))) {
                        ncache = this.nameCache;
                        ncache.setValue(this.name);
                        ncache.setSize(nz);
                        ncache.setScale(ratio);
                        var rnchache = ncache.render(),
                            m = ~~(rnchache.width * ratD),
                            h = ~~(rnchache.height * ratD);
                        ctx.drawImage(rnchache, x - ~~(m * 0.5), y - ~~(h * 0.5), m, h);
                        b += rnchache.height * 0.5 * ratio + 4;
                    }


            // Vẽ khối lượng
            if (showMass && (c || 0 == playerCells.length && (!this.isVirus || this.isAgitated) && 20 < this.size)) {
                var m = ~~(this.size * this.size * 0.01);
                c = this.sizeCache;
                c.setValue(m);
                c.setScale(ratio);
                e = c.render();
                m = ~~(e.width * ratD);
                h = ~~(e.height * ratD);
                var g = this.name ? y + ~~(h * 0.7) : y - ~~(h * 0.5);
                ctx.drawImage(e, x - ~~(m * 0.5), g, m, h);
            }
        }
        ctx.restore();
    }
}



};
	
    UText.prototype = {
        _value: "",
        _color: "#000000",
        _stroke: false,
        _strokeColor: "#000000",
        _size: 16,
        _canvas: null,
        _ctx: null,
        _dirty: false,
        _scale: 1,
        setSize: function(a) {
            if (this._size != a) {
                this._size = a;
                this._dirty = true;
            }
        },
        setScale: function(a) {
            if (this._scale != a) {
                this._scale = a;
                this._dirty = true;
            }
        },
        setStrokeColor: function(a) {
            if (this._strokeColor != a) {
                this._strokeColor = a;
                this._dirty = true;
            }
        },
        setValue: function(a) {
            if (a != this._value) {
                this._value = a;
                this._dirty = true;
            }
        },
        render: function() {
            if (null == this._canvas) {
                this._canvas = document.createElement("canvas");
                this._ctx = this._canvas.getContext("2d");
            }
            if (this._dirty) {
                this._dirty = false;
                var canvas = this._canvas,
                    ctx = this._ctx,
                    value = this._value,
                    scale = this._scale,
                    fontsize = this._size,
                    font = fontsize + 'px Ubuntu';
                ctx.font = font;
                var h = ~~(.2 * fontsize);
                canvas.width = (ctx.measureText(value).width +
                    6) * scale;
                canvas.height = (fontsize + h) * scale;
                ctx.font = font;
                ctx.scale(scale, scale);
                ctx.globalAlpha = 1;
                ctx.lineWidth = 3;
                ctx.strokeStyle = this._strokeColor;
                ctx.fillStyle = this._color;
                this._stroke && ctx.strokeText(value, 3, fontsize - h / 2);
                ctx.fillText(value, 3, fontsize - h / 2)
            }
            return this._canvas
        },
        getWidth: function() {
            return (ctx.measureText(this._value).width +
                6);
        }
    };
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    var Quad = {
        init: function(args) {
            function Node(x, y, w, h, depth) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.depth = depth;
                this.items = [];
                this.nodes = []
            }

            var c = args.maxChildren || 2,
                d = args.maxDepth || 4;
            Node.prototype = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                depth: 0,
                items: null,
                nodes: null,
                exists: function(selector) {
                    for (var i = 0; i < this.items.length; ++i) {
                        var item = this.items[i];
                        if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) return true
                    }
                    if (0 != this.nodes.length) {
                        var self = this;
                        return this.findOverlappingNodes(selector, function(dir) {
                            return self.nodes[dir].exists(selector)
                        })
                    }
                    return false;
                },
                retrieve: function(item, callback) {
                    for (var i = 0; i < this.items.length; ++i) callback(this.items[i]);
                    if (0 != this.nodes.length) {
                        var self = this;
                        this.findOverlappingNodes(item, function(dir) {
                            self.nodes[dir].retrieve(item, callback)
                        })
                    }
                },
                insert: function(a) {
                    if (0 != this.nodes.length) {
                        this.nodes[this.findInsertNode(a)].insert(a);
                    } else {
                        if (this.items.length >= c && this.depth < d) {
                            this.devide();
                            this.nodes[this.findInsertNode(a)].insert(a);
                        } else {
                            this.items.push(a);
                        }
                    }
                },
                findInsertNode: function(a) {
                    return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3
                },
                findOverlappingNodes: function(a, b) {
                    return a.x < this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(0) || a.y >= this.y + this.h / 2 && b(2)) || a.x >= this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(1) || a.y >= this.y + this.h / 2 && b(3)) ? true : false
                },
                devide: function() {
                    var a = this.depth + 1,
                        c = this.w / 2,
                        d = this.h / 2;
                    this.nodes.push(new Node(this.x, this.y, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y, c, d, a));
                    this.nodes.push(new Node(this.x, this.y + d, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
                    a = this.items;
                    this.items = [];
                    for (c = 0; c < a.length; c++) this.insert(a[c])
                },
                clear: function() {
                    for (var a = 0; a < this.nodes.length; a++) this.nodes[a].clear();
                    this.items.length = 0;
                    this.nodes.length = 0
                }
            };
            var internalSelector = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            return {
                root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),
                insert: function(a) {
                    this.root.insert(a)
                },
                retrieve: function(a, b) {
                    this.root.retrieve(a, b)
                },
                retrieve2: function(a, b, c, d, callback) {
                    internalSelector.x = a;
                    internalSelector.y = b;
                    internalSelector.w = c;
                    internalSelector.h = d;
                    this.root.retrieve(internalSelector, callback)
                },
                exists: function(a) {
                    return this.root.exists(a)
                },
                clear: function() {
                    this.root.clear()
                }
            }
        }
    };

    wjQuery(function() {
        function renderFavicon() {
            if (0 < playerCells.length) {
                redCell.color = playerCells[0].color;
                redCell.setName(playerCells[0].name);
            }
            ctx.clearRect(0, 0, 32, 32);
            ctx.save();
            ctx.translate(16, 16);
            ctx.scale(.4, .4);
            redCell.drawOneCell(ctx);
            ctx.restore();
            var favicon = document.getElementById("favicon"),
                oldfavicon = favicon.cloneNode(true);
            oldfavicon.setAttribute("href", favCanvas.toDataURL("image/png"));
            favicon.parentNode.replaceChild(oldfavicon, favicon)
        }

        var redCell = new Cell(0, 0, 0, 32, "#ED1C24", ""),
            favCanvas = document.createElement("canvas");
        favCanvas.width = 32;
        favCanvas.height = 32;
        var ctx = favCanvas.getContext("2d");
        renderFavicon();

        // Causes stuttering..
        //setInterval(renderFavicon, 1E3);

        setInterval(drawChatBoard, 1E3);
    });
    wHandle.onload = gameLoop
})(window, window.jQuery);
	$(window).on('load', function() { // makes sure the whole site is loaded 
	  $('#status').fadeOut(5000); // will first fade out the loading animation 
	  $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	  $('body').delay(10).css({'overflow':'hidden'});
	  username = localStorage.getItem('');
	  $('#nick').val(username);
	})
