var r = function (f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() };


(function () {

    var ns = "AsosStylist",
        client;

    var statusCallbacks = [];



    client = window[ns] = { debug: false, settings: {} };

    // True if current agent is offline, but another agent is online
    // False otherwise
    client.onStatus = function (callback) {

        if (typeof callback === 'function') {
            // Get the Status
            res = $.ajax(client.settings.statusUrl.replace('agent', 'n'), function (response) {


                var status = response.response;

                if (!response.response) {
                    status = response.responseText
                }

                if (status == 'OFFLINE') {
                    callback(false);
                }
                else {
                    callback(true);
                }


            });
        }
        else {
            client.log("onStatus requires callback function");
        }
        /*
        statusCallbacks.push(callback);
        callback(true);
        */
    };

    // Tries to start a chat
    client.startChat = function () {
        if (client.div && client.div.el) {
            client.popup.addClass('active');
            if (client.iframe.attr('src') == 'about:blank') {
                client.iframe.attr('src', client.settings.chatUrl);                
            }

        } else {
            return "not ready";
        }
    }

    // Create the button
    client.createHTML = function () {

        // Create Stylsheet for the button
        var style = $('<style>', {
            id: ns + "StyleSheet",
            type: 'text/css'
        })
        .appendStyle('.', 'ChatTrigger:hover', {
            //background: '#CCC'
        })
        .appendStyle('.', 'ChatTriggerButton', {
            background: '#242424',
            'text-transform': 'uppercase',
            'font-size': '12px',
            'text-align': 'center',
            color: 'white',
            'letter-spacing': '0.5px',
            padding: '12px'
        })
        .appendStyle('.', 'ChatTriggerButton img', {
            'margin-left': '7px'
        })
        .appendStyle('.', 'ChatWindow', {
            position: 'fixed',
            bottom: '0px',
            right: '0px',
            width: '320px',
            height: '570px',
            'border-left': '2px solid #222222',
            'border-top': '2px solid #222222',
            'z-index': 10001,
            display: 'none',
            background: 'white'
        })
        .appendStyle('.', 'ChatWindow.active', {
            display: 'block'
        })
        .appendStyle('.', 'ChatWindowFrame', {
            border: 'none',
            width: '100%',
            height: '100%'
        })
        .appendStyle('.', 'ChatWindowOverlay', {
            background: 'rgba(255,255,255,0.5) no-repeat center center url(data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA)',
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            'z-index': 1,
            display: 'none'
        })
        .appendStyle('.', 'ChatWindowOverlay.active', {
            display: 'block'
        })
        .appendStyle('.', 'ChatWindowClose', {
            display: 'block',
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            'text-align': 'center',
            'line-height': '30px',
            'font-size': '16px',
            'color': 'black',
            'z-index': 10
        })
        .prependTo('head');


        if (this.settings.campaign == "Test") {

            style.appendStyle('.', 'ChatTrigger', {
                background: 'url(data:image/gif;base64,R0lGODlhHgEqAMQAAJmZmaenp9PT011dXeLi4j4+PrS0tPDw8IGBgU5OTuvr65OTk1RUVDExMXNzc/b29i8vL3p6esnJyd3d3by8vGxsbCIiIo6OjiYmJmJiYkJCQv///8TExImJifv7+8HBwSH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkZENDY3MEYwMTgyMDY4MTE4NzFGQ0Q2QzYzOTI4QkU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENTZEMjZBREE1NjExRTM4MTFGQzAzODc3RkNFQ0UwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENTZEMjY5REE1NjExRTM4MTFGQzAzODc3RkNFQ0UwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjUwQUJBNzJDMjA2ODExOTEwOURDOTg1OEFFRTE1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDQ2NzBGMDE4MjA2ODExODcxRkNENkM2MzkyOEJFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAeASoAAAX/4CaOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikZclsOp/QqHRKrVqv2Kx2y+16v2AmxBQum8/otHrNPo9L7bh8Tq/b3eS7fs/v+8FvJH+DhIWGdoEjh4uMjY5XiSKPk5SVhZEblpqbnG2YnaCholqflBgZAB8CARENo6+wTqWPAxMmDwsYsbuis40dGw8ADBAQDAsKGxIQvM2bvosOGwQFTxAGGx/O25TQhhAHDxpSFBsVWAMdFdUWBQMDTAkDCU7uA+xL8u/v9E76+/3iRegAj0oDflUqqHPVbt++JQ/zvXMlL+CSgwMYLlFYgaE9h4y8FQIGYEqDBwKs/0Q4MILDEmCZlnDY4LJJABEBmswkUVNniZ4JBJA4cE5KBBEETAodUQ2mIAsARJwbIMKATJpOqG4o2GCpiKZ5DokkJGGDRSjY8EWp0PJATZhMZva00GDEAY0AOLB0W9JJ3r0c+hZgOc1rUSheC0KJugFAgJoROBAQwaFm1w0HCkwmwFBuVhEFGTuGLJny3EthF4VjosuCrtYWjmagspldhJeSrs49OuK2z9NOPDO5ucF3ApZJoRQgkTPKzJR0m8BtkkAEYcXCmWgt+Pyi9NwhUx/aoIDJhAsXJmgwu3GDgynLiz+BWVkvViZCDWTXPWX/5OZL8KYWE1EdAMxdURB3QP8Ailkw3XcidPDbZ1stoSCDEDoy1iAKeNDaPe5YUEFrCFQoxXbznQCUCBEIOKEU+0XYBIpPsBRAfL49cdkIij3YhFDQxXWfdqBd5JWJDoK3yIZ/lMMAFR94oBEUdW0goRMw7SNUT8RVwFZjLzo3pAVbQjhlgBEOMFmQUCTAmFW4xRTcmBbsZwGN+bzJhI9iiWeINAC2qUwVMx1wm5txCtkTYSQkxx+MY8J0YwP0oXXCgBAVlN+eSio652k0vrPEpok2wuQfBHhwFhMNTPYkFcfxVGqd9/EGQAcddOkppHPtONSq8RmAK0x9zSnAUjny+aiQI1xJ43PIcirnkn4awsC8BghAUQuYViSATVWzCjeToxbYuKuYpzUQAKMGrJrkBvhgQ+6ejBb7LhR27iTjnUU6WG+GplZbiDQIOBYBAwlEUI4HuWiR0SEFuPuFqHZQ/IzAZKUwgcTcdEzIqX2sN0EHBRTggGMIvOrxytTC0UgCHLMs8zcYz2zzzVuAjPPOPFtTc89AA61z0ETPPHTRSHd8dNJM87J001CP8nTUVHMyddVYd5PE1lx37fXXYIct9thkl2322WinrTYPIQAAOw==) no-repeat top left;',
                'border-bottom': '1px solid #222;',
                width: '286px',
                height: '42px',
                cursor: 'pointer',
                'z-index': 10000,
                display: this.settings.showButton ? 'inline-block' : 'inline-block',
                display: 'none'
            });
        }
        else {

            style.appendStyle('.', 'ChatTrigger', {
                position: 'fixed',
                bottom: '0px',
                right: '0px',
                background: 'url(data:image/gif;base64,R0lGODlhHgEqAMQAAJmZmaenp9PT011dXeLi4j4+PrS0tPDw8IGBgU5OTuvr65OTk1RUVDExMXNzc/b29i8vL3p6esnJyd3d3by8vGxsbCIiIo6OjiYmJmJiYkJCQv///8TExImJifv7+8HBwSH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkZENDY3MEYwMTgyMDY4MTE4NzFGQ0Q2QzYzOTI4QkU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENTZEMjZBREE1NjExRTM4MTFGQzAzODc3RkNFQ0UwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENTZEMjY5REE1NjExRTM4MTFGQzAzODc3RkNFQ0UwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjUwQUJBNzJDMjA2ODExOTEwOURDOTg1OEFFRTE1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDQ2NzBGMDE4MjA2ODExODcxRkNENkM2MzkyOEJFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAeASoAAAX/4CaOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikZclsOp/QqHRKrVqv2Kx2y+16v2AmxBQum8/otHrNPo9L7bh8Tq/b3eS7fs/v+8FvJH+DhIWGdoEjh4uMjY5XiSKPk5SVhZEblpqbnG2YnaCholqflBgZAB8CARENo6+wTqWPAxMmDwsYsbuis40dGw8ADBAQDAsKGxIQvM2bvosOGwQFTxAGGx/O25TQhhAHDxpSFBsVWAMdFdUWBQMDTAkDCU7uA+xL8u/v9E76+/3iRegAj0oDflUqqHPVbt++JQ/zvXMlL+CSgwMYLlFYgaE9h4y8FQIGYEqDBwKs/0Q4MILDEmCZlnDY4LJJABEBmswkUVNniZ4JBJA4cE5KBBEETAodUQ2mIAsARJwbIMKATJpOqG4o2GCpiKZ5DokkJGGDRSjY8EWp0PJATZhMZva00GDEAY0AOLB0W9JJ3r0c+hZgOc1rUSheC0KJugFAgJoROBAQwaFm1w0HCkwmwFBuVhEFGTuGLJny3EthF4VjosuCrtYWjmagspldhJeSrs49OuK2z9NOPDO5ucF3ApZJoRQgkTPKzJR0m8BtkkAEYcXCmWgt+Pyi9NwhUx/aoIDJhAsXJmgwu3GDgynLiz+BWVkvViZCDWTXPWX/5OZL8KYWE1EdAMxdURB3QP8Ailkw3XcidPDbZ1stoSCDEDoy1iAKeNDaPe5YUEFrCFQoxXbznQCUCBEIOKEU+0XYBIpPsBRAfL49cdkIij3YhFDQxXWfdqBd5JWJDoK3yIZ/lMMAFR94oBEUdW0goRMw7SNUT8RVwFZjLzo3pAVbQjhlgBEOMFmQUCTAmFW4xRTcmBbsZwGN+bzJhI9iiWeINAC2qUwVMx1wm5txCtkTYSQkxx+MY8J0YwP0oXXCgBAVlN+eSio652k0vrPEpok2wuQfBHhwFhMNTPYkFcfxVGqd9/EGQAcddOkppHPtONSq8RmAK0x9zSnAUjny+aiQI1xJ43PIcirnkn4awsC8BghAUQuYViSATVWzCjeToxbYuKuYpzUQAKMGrJrkBvhgQ+6ejBb7LhR27iTjnUU6WG+GplZbiDQIOBYBAwlEUI4HuWiR0SEFuPuFqHZQ/IzAZKUwgcTcdEzIqX2sN0EHBRTggGMIvOrxytTC0UgCHLMs8zcYz2zzzVuAjPPOPFtTc89AA61z0ETPPHTRSHd8dNJM87J001CP8nTUVHMyddVYd5PE1lx37fXXYIct9thkl2322WinrTYPIQAAOw==) no-repeat top left;',
                width: '286px',
                height: '42px',
                cursor: 'pointer',
                'z-index': 10000,
                display: this.settings.showButton ? 'inline-block' : 'inline-block',
                display: 'none'
            });
        }

        if (client.settings.pageType == 'summary') {
            style.appendStyle('.', 'ChatTrigger.offline', {
                cursor: 'default',
                background: 'url(data:image/gif;base64,R0lGODlhHgEqAMQAALy8vJ6enrW1tdPT066ursrKypeXl/Dw8Kampu7u7uTk5KmpqcDAwNnZ2c3Nzenp6bm5ufv7+5CQkPX19d3d3cfHx5mZmaCgoP///+Hh4cTExPj4+JOTk5GRkf7+/uDg4CH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTFBMDIzRURBNTkxMUUzODVCMkRCNEFBREJERTMyRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTFBMDIzRkRBNTkxMUUzODVCMkRCNEFBREJERTMyRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBMUEwMjNDREE1OTExRTM4NUIyREI0QUFEQkRFMzJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBMUEwMjNEREE1OTExRTM4NUIyREI0QUFEQkRFMzJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAB4BKgAABf8gJo5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRkyWw6n9CodEqtWq/YrHbL7Xq/YKbBFC6bz+i0es0+j0vtuHxOr9vd5Lt+z+/7wW8kf4OEhYZ2gSOHi4yNjleJIo+TlJWFkRiWmpucbZidoKGiWp+VAg4fDwMAFqOur06ljwQJJhEVHLC6orKNGhgRDgsGBgsVExgKBrvMm72LAhgHAU8GDR4fzdqUz4YGExEXUhQYAlgEGgLUEgEEBEwIBAhO7QTrS/Hu7vNP8fz4GgDci4IOwL8lBvS5WyYh374l9Z64W+evyUSECt+96lboV4EpFiI8sAJgw4gMS37/ZVqSAQPKJgNEDGjSksRLJy1vxhwBIIoAkyMe/CNQQmNNES9VPhGhgaUIjRKYLiEqaGMeRgo8HITSAMNAKNGQbkgqyelNCYE2MJRQIIPJsR+f5FwStkGBA2ubhMXw4ICIDeuoPsiQgV/LsRniKnUiVUJNwEsaCyYMiyOhDRGY5JKQa7MEABigRvE7bUlPCYsdu2wCmifO1VHmohaxLG8Tvxv4tZ4pgapo1Wdnr2zS+OjIqBia9n66y/IgDxOYJKhQIcEFDPyimZMSQMTpJioJu4W95AGGBrKZpJcLu/X57026Y4Af88BUEYPjqkbMLzWT4tKI8JFk+FFmFRyNgNPB/1QBtNOBAJsxENoUvj2hUgk3IeBdawOt95pOJChnEXNMLEYVUuqRoJF/kSVnVmutKXdiWa449wc5C1DxgQe2xdIYeE+5Yx6I5YSlH3BSrBeABm9V86Nqx1GlgTwpPrBQSjT+5yKSMQElI1PuVHbVIhBgwFsUC3igQBWH9YSAYjSmBxQJ9qUYHE2wGaBcARhsAEVNGhgQwE5fTohncCwip9xcBphHoKFiIshIBwdEsBUTFviVIxUIzAlbarK1VoAGGuy0HZKxfSpNTWc20akJDzBU4aFOXEgegC+9uuWMw41i4x8LYMAAFLRg4MAVCHQlQgNYDidbS3UuYdKZHtIqgaYAfiHVIz7K9jnAWrPaWatNWi5KXliFKnJgVY2UyUABqyyAAADkeFDAglkQsK0d8ezrBAJfbdPHr34okEICmwqs8CIE83HddBYEAIEDAzCQ8MIYXzLmIQhcmvHHhzQM8sgkUyFyySinjNbGKrfs8sqSvixzyifPbHNzLN+ss8A17+xzJz3/LHQlQQ9tdCOYJKH00kw37fTTUEct9dRUV2311VhnbUMIADs=) no-repeat top left;'
            });
            style.appendStyle('.', 'ChatTrigger.available', {
                display: 'inline-block'
            });
            style.appendStyle('.', 'ChatTrigger.offline', {
                display: 'inline-block'
            });
            style.appendStyle('.', 'ChatTrigger.busy', {
                display: 'inline-block'
            });
            style.appendStyle('.', 'ChatTrigger.busy', {
                background: '#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAAqCAIAAADqN6OOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDFCODVDNUNEQTY0MTFFM0E2Qjc4OEUzM0MzOTA4QzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDFCODVDNUREQTY0MTFFM0E2Qjc4OEUzM0MzOTA4QzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMUI4NUM1QURBNjQxMUUzQTZCNzg4RTMzQzM5MDhDMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMUI4NUM1QkRBNjQxMUUzQTZCNzg4RTMzQzM5MDhDMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgCcXAAAAbcSURBVHja7FvPaxNb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) no-repeat top left;',
                display: 'inline-block',
                'font-size': '12px',
                'text-align': 'center',
                'padding-top': '40px',
                height: '24px',
            });
        }
        else if (client.settings.pageType == "home") {
            style.appendStyle('.', 'ChatTrigger.offline', {
                display: 'none'
            })
            style.appendStyle('.', 'ChatTrigger.busy', {
                display: 'none'
            })
            style.appendStyle('.', 'ChatTrigger.available', {
                display: 'inline-block'
            })
        }
        else {
            style.appendStyle('.', 'ChatTrigger', {
                display: 'inline-block'
            });
        }


        // The div for the trigger
        var div;
        var agent;

        // Should we create the button
        if (this.settings.createButton) {

            // Create the button
            div = $('<div>')
            .addClass('ChatTrigger', true);


            // Determine the campaign and where to append the button
            if (this.settings.campaign == "Test") {
                div.appendTo($('#campaign'));
            }
            else {
                div.appendTo('body')
            }

        } else if ($('#stylist-chat-button').el) {

            div = $('#stylist-chat-button');

            agent = div.el.getAttribute("data-id");

            this.settings.statusUrl += '?agent=' + agent;

        }


        this.div = div;

        // Create the chat window
        var popup = this.popup = $('<div>')
        .addClass('ChatWindow', true)
        .appendTo('body');

        // Create CLose button
        var close = this.close = $('<div>')
        .addClass('ChatWindowClose', true)
        .text('&times;')
        .appendTo(popup);

        // Create the iframe
        var iframe = this.iframe = $('<iframe>')
        .addClass('ChatWindowFrame', true)
        .attr("src", "about:blank")
        .appendTo(popup);

        // Create the Overlay
        var overlay = this.overlay = $('<div>')
        .addClass('ChatWindowOverlay', true)
        .addClass('active')
        .appendTo(popup);


        // Do we have an agent
        if (agent) {

            // Update the URL
            client.settings.chatUrl += '?agent=' + agent;

        }else if (this.settings.pageType == 'summary') {
            client.settings.chatUrl += '?summary=true';
        }


        // Update Button
        client.updateButton();




        // Listen for click
        div.on('click', function (e) {


            // Record
            var cookie = client.cookie.read("stylistchat");
            var cookieParts = client.parseQuerystring(cookie);
            var triggerStatus = '';


            if (client.buttonStatus == 'available') {
                triggerStatus = 'Online';
            }
            else if (client.buttonStatus == 'offline') {
                triggerStatus = 'Offline';
            }
            else if (client.buttonStatus == 'busy') {
                triggerStatus = 'Unavailable';
            }

            if (agent && triggerStatus == 'Offline' || (client.settings.pageType == 'summary' && triggerStatus == 'Offline')) {
                return;
            }

            if (typeof window.$ === 'function') {
                window.$(window).trigger("stylistClickButton", triggerStatus);
            }



            popup.addClass('active');

            ///console.log(client.settings.chatUrl);
            //return;


            if (iframe.attr('src') == 'about:blank') {
                iframe.attr('src', client.settings.chatUrl);
            }



        });

        // Do we have a session
        var cookie = client.cookie.read("stylistchat");

        // Cookie Parts 
        var cookieParts = client.parseQuerystring(cookie);

        if (cookieParts.chatid) {


            popup.addClass('active');
            if (iframe.attr('src') == 'about:blank') {
                iframe.attr('src', client.settings.chatUrl);
            }

        }
       

        //
        if (document.getElementById("customLaunch")) {
            var customLunch = $('#customLaunch').on('click', function (e) {
                popup.addClass('active');
                if (iframe.attr('src') == 'about:blank') {
                    iframe.attr('src', client.settings.chatUrl);
                }
            });
        }

        // Close
        close.on('click', function (e) {

            try {



                if (iframe.el.contentWindow.$('#requestChatForm').length == 1) {
                    client.closeWindow();
                }
                else if (iframe.el.contentWindow.$('#chatOffline').length == 1) {
                    client.closeWindow();
                }
                else if (iframe.el.contentWindow.$('#chatClosed').length == 1) {
                    client.closeWindow();
                }
                else if (iframe.el.contentWindow.$('#joinQueue').length == 1) {
                    client.closeWindow();
                }
                else if (iframe.el.contentWindow.$('#chatConcluded.active').length == 1) {
                    client.closeWindow();
                }
                else if (iframe.el.contentWindow.$('#chat.ended').length == 1) {
                    client.closeWindow();
                }

                else {

                    iframe.el.contentWindow.$('body').addClass('closeWindow');

                    iframe.el.contentWindow.$('#cancelChatForm').addClass('active');

                    popup.el.style.height = '250px';
                    close.el.style.display = 'none';
                }

            }
            catch (e) { console.log(e); };

            return;

        });

        // Listen for event from frame
        window["StylistFrameEvent"] = function (event) {
            if (event.shutdown) {
                iframe.attr('src', "about:blank");
                popup.removeClass("active");
            }
            if (event.ready) {
                overlay.removeClass('active');
            }
            if (event.concluded) {
                client.concluded = true;
            }
        }



    };


    // Cancel the close
    client.cancelClose = function () {

        this.popup.el.style.height = null;
        this.close.el.style.display = 'block';

    }

    // Close the client
    client.closeWindow = function () {

        try {
            if (this.iframe.el.contentWindow.document.getElementById("hiddenBoardID").value) {
                // Get the frame'
                $.ajax('/stylist/OracleRightNow/Chat/Terminate?close=true', function () { }, 'boardID=' + this.iframe.el.contentWindow.document.getElementById("hiddenBoardID").value);
            }
        } catch (e) { };
        this.popup.removeClass('active', false);
        if (client.concluded || true) {
            client.concluded = false;
            this.iframe.attr('src', 'about:blank');
            client.cookie.erase('stylistchat');
            setTimeout(function () {
                client.cookie.erase('stylistchat');
            }, 100);
        }
        this.popup.el.style.height = null;
        this.close.el.style.display = 'block';
        this.overlay.addClass('active');
    }

    // Merge to objects
    client.merge = function (o1, o2) {

        var o3 = {};
        for (var attrname in o1) { o3[attrname] = o1[attrname]; }
        for (var attrname in o2) { o3[attrname] = o2[attrname]; }
        return o3;

    };


    // Init the App
    client.init = function (settings) {


        var $this = this;

        // Extend the default settings
        this.settings = this.merge({
            debug: false,
            chatUrl: "http://www.asos.com/stylist/chat",
            statusUrl: 'http://www.asos.com/stylist/status',
            firstLoad: true,
            showButton: false,
            pageType: 'summary'
        }, settings);

        //
        this.log('Init: pageType='+this.settings.pageType);

        // 
        this.settings.createButton = true;

        // Do we have a agent div
        if ($('#stylist-chat-button').el) {
            
            this.settings.createButton = false;
            this.settings.showButton = true;
            this.settings.stylist = true;

            this.log('Agent element detected, createButton=false, stylist=true');
        }

        // Should we even show the button
        if (!this.settings.showButton) {


            // If we are instructed not to show the button, we should still show it if there is an active session
            var cookie = client.cookie.read("stylistchat");

            if (!cookie) {
                return;
            }

        }

        // Create the html
        $this.createHTML();


        client.getStatus();



        if (client.settings.pageType == 'home') {
            client.log('creating 5 minute timeout to stop polling');
            setTimeout(function () {
                stopPolling = true;
                client.log('polling disabled (5 minute timeout) ' + new Date().toString());
            }, 1000 * 60 * 5);
        }



    };

    // Update activity
    client.getStatus = function ()
    {
      

        if (client.settings.pageType == 'all') {
            this.log('pageType=all - ignoring get status request');
            return;
        }
        // 
        var time = 5000;

        if (client.popup.hasClass('active')) {
            setTimeout(client.getStatus, time);

        }
        else {

            //$.ajax('/stylist/status', function (response) {
                client.updateButton();
                setTimeout(client.getStatus, time);
            //});

        }

    }

    var stopPolling = false;

    var res;

    // Update the button
    client.updateButton = function () {

        if (client.settings.pageType == 'all') {
            return;
        }

        if (stopPolling) {
            return;
        }


        if (res) {
            return;
        }

        client.log('poll - ' + new Date().toString());

        // Get the Status
        res = $.ajax(client.settings.statusUrl, function (response) {


            var status = response.response;

            if (!response.response) {
                status = response.responseText
            }

            if (client.settings.firstLoad) {         

                client.settings.firstLoad = false;
                var triggerStatus = '';

                // Do we have a session
                var cookie = client.cookie.read("stylistchat");

                // Cookie Parts 
                var cookieParts = client.parseQuerystring(cookie);

                // We are queing
                if (cookieParts.status == 'queue') {
                    triggerStatus = 'In Queue';
                }
                    // We are already in a chat
                else if (cookieParts.status == 'inchat') {
                    triggerStatus = 'In Chat';
                }
                    // The chat is offline
                else if (status == 'OFFLINE') {
                    triggerStatus = 'Offline';
                }
                else if (status == 'AVAILABLE') {
                    triggerStatus = 'Online';
                }
                else {
                    triggerStatus = 'Unavailable';
                }
                if (client.settings.pageType == "home" && triggerStatus != "Online") {
                    stopPolling = true;
                    client.log('pageType==home && status != online : stop polling');
                }

                if (typeof window.$ === 'function') {
                    window.$(window).trigger("stylistDisplayButton", triggerStatus);
                }
            }



            client.div.removeClass('busy').removeClass('offline').removeClass('wait').removeClass('available');
            
            if (!client.settings.stylist){
                client.div.text('');
            }


            if (status == "AVAILABLE") {
                client.div.addClass('available');
                client.buttonStatus = 'available';
            } else if (status == "BUSY") {
                client.div.addClass('busy');
                client.buttonStatus = 'busy';
            } else if (status == "OFFLINE") {
                client.div.addClass('offline');
                client.buttonStatus = 'offline';
            }
            else {
                //div.addClass('available');
                client.div.addClass('busy');
                client.buttonStatus = 'busy';

                if (!client.settings.stylist) {
                    if (status) {
                        $('<div>').text(status).appendTo(client.div);
                    }
                }
            }

            if (client.settings.pageType == "home" && status != "AVAILABLE") {
                stopPolling = true;
                client.log('pageType==home && status != available : stop polling');
            }

            if (client.settings.pageType == 'home') {
                //stopPolling = true;
                //client.log('pageType==home : only poll once');
            }

            res = null;

        });

    }

    // Log
    client.log = function (message) {

        // Should we log this
        if (this.settings.debug && typeof console !== 'undefined' && typeof console.log !== 'undefined') {
            console.log(ns + ': ' + message);

            if (document.getElementById('shareRailsLog')) {
                $('<li>').text(message).appendTo($('#shareRailsLog'));

            }
        }

        // Chaining
        return this;

    };

    // Cookie
    client.cookie = {

        // Read a cookie
        read: function (name) {

            var nameEQ = name + "=";
            var ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
            }
            return null;

        },

        // Write / Create a cookie
        write: function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";

            //value = escape(value);
            document.cookie = name + "=" + value + expires + "; path=/";
        },

        // Destroy a cookie
        erase: function (name) {
            client.cookie.write(name, '', -1);
        }


    }


    // Parse a querystring
    client.parseQuerystring = function (qstr) {

        if (!qstr) {
            return {};
        }

        var query = {};
        var a = qstr.split('&');
        for (var i in a) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
        }

        return query;
    }


    // Simple HTML helper (Don't want the overhead of jQuery)
    var $ = client.$ = (function ($) {

        var $ = function () { };

        // Init
        $.prototype.init = function (el, p) {

            // Type if selector
            if (typeof el === 'string') {

                // Is this HTML el, class or id
                if (el.substring(0, 1) == '.') {
                    // Class
                }
                else if (el.substring(0, 1) == '#') {
                    // ID
                    this.el = document.getElementById(el.substring(1));
                }
                else if (el.substring(0, 1) == '<') {
                    // Create
                    this.el = this.create(el.replace('<', '').replace('>', ''), p);
                }
                else {
                    // Tag
                    var items = document.getElementsByTagName(el);

                    if (items.length === 1) {
                        this.el = items[0];
                    }
                    else {
                        this.el = items;
                    }
                }

            }
            else if (el.el) {
                this.el = el.el;
            }
            else {
                this.el = el;
            }

            return this;
        }

        // Create an element, pass in some attributes
        $.prototype.create = function (type, properties) {

            var el = document.createElement(type);

            for (property in properties) {
                el[property] = properties[property];
            }

            return el;

        }

        // Append this element
        $.prototype.appendTo = function (el) {
            var to = this.get(el).el;
            to.appendChild(this.el);
            return this;
        }

        // Prepend this element
        $.prototype.prependTo = function (el) {
            var to = this.get(el).el;
            to.insertBefore(this.el, to.childNodes[0]);
            return this;
        }

        // Appends a class
        $.prototype.appendStyle = function (prefix, name, values) {

            var style = '';
            style += prefix + ns + name + ' {';
            for (var property in values) {
                style += property + ':' + values[property] + ';';
            }
            style += '}\n';

            try {
                this.el.innerHTML += style;
            }
            catch (e) {
                this.el.styleSheet.cssText += style;
            }

            return this;
        }

        // Add a class
        $.prototype.addClass = function (name, prefix) {



            name = prefix ? ns + name : name;

            if (this.el.className.indexOf(name) == -1) {

                this.el.className += ' ' + name;
            }
            return this;
        }
        $.prototype.removeClass = function (name, prefix) {
            name = prefix ? ns + name : name;
            this.el.className = this.el.className.replace(name, "");
            this.el.className = this.el.className.replace("  ", " ");
            return this;
        }
        $.prototype.hasClass = function (name, prefix) {
            name = prefix ? ns + name : name;
            if (this.el.className.indexOf(name) == -1) {
                return false;
            }
            return true;


        }


        // Set the Inner HTML
        $.prototype.text = function (text) {
            this.el.innerHTML = text;
            return this;
        };

        // Change an attribute
        $.prototype.attr = function (name, value) {

            if (value) {
                this.el[name] = value;
            }
            else {
                return this.el[name];
            }

            return this;
        }

        // Remove
        $.prototype.remove = function () {
            this.el.parentElement.removeChild(this.el);
        }

        // Get
        $.prototype.get = function (el) {
            e = new $();
            return $.prototype.init.apply(e, arguments);
        }

        // Listen
        $.prototype.on = function (type, callback) {

            if (this.el.addEventListener) {
                this.el.addEventListener(type, callback, false);
            } else if (this.el.attachEvent) {
                this.el.attachEvent('on' + type, callback);
            }
        }

        return function (el) {
            var e = new $();
            return $.prototype.init.apply(e, arguments);
        }

    })();


    $.ajax = function (url, callback, postData) {

        function sendRequest(url, callback, postData) {
            var req = createXMLHTTPObject();
            if (!req) return;
            var method = (postData) ? "POST" : "GET";
            req.open(method, url, true);
            //req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
            if (postData)
                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.onreadystatechange = function () {
                if (req.readyState != 4) return;
                if (req.status != 200 && req.status != 304) {
                    //          alert('HTTP error ' + req.status);
                    return;
                }
                callback(req);
            }
            if (req.readyState == 4) return;
            req.send(postData);

            return req;
        }

        var XMLHttpFactories = [
            function () { return new XMLHttpRequest() },
            function () { return new ActiveXObject("Msxml2.XMLHTTP") },
            function () { return new ActiveXObject("Msxml3.XMLHTTP") },
            function () { return new ActiveXObject("Microsoft.XMLHTTP") }
        ];

        function createXMLHTTPObject() {
            var xmlhttp = false;
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = XMLHttpFactories[i]();
                }
                catch (e) {
                    continue;
                }
                break;
            }
            return xmlhttp;
        }

        return sendRequest(url, callback, postData);



    }

    //r(function () {
        window.stylistAsyncInit();
   // });

    if (typeof window.AsosStylistAsyncInit === 'function') {
        window.AsosStylistAsyncInit(client);
    }

})();