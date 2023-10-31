/*! For license information please see 714.41f6221b.chunk.js.LICENSE.txt */
(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[714],{82464:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(87462),r=o(72791),i={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M292.7 840h438.6l24.2-512h-487z",fill:t}},{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z",fill:e}}]}},name:"delete",theme:"twotone"},a=o(54291),s=function(e,t){return r.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:i}))};var c=r.forwardRef(s)},65841:function(e,t,o){"use strict";o.d(t,{Z:function(){return G}});var n=o(4942),r=o(74165),i=o(29439);function a(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}function s(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function s(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var c=o(80184),p=o(72638),u=o(40959),d=o(76452),h=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,l=function(e){if("string"!==typeof e)throw new TypeError("Invalid argument expected string");var t=e.match(h);if(!t)throw new Error("Invalid argument not valid semver ('".concat(e,"' received)"));return t.shift(),t},f=function(e){return"*"===e||"x"===e||"X"===e},m=function(e){var t=parseInt(e,10);return isNaN(t)?e:t},v=function(e,t){if(f(e)||f(t))return 0;var o=function(e,t){return typeof e!==typeof t?[String(e),String(t)]:[e,t]}(m(e),m(t)),n=(0,i.Z)(o,2),r=n[0],a=n[1];return r>a?1:r<a?-1:0},g=function(e,t){for(var o=0;o<Math.max(e.length,t.length);o++){var n=v(e[o]||"0",t[o]||"0");if(0!==n)return n}return 0},w=o(72791),x=o(2641),y=o(37708),C=function(e,t){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},C(e,t)};var b=function(){return b=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},b.apply(this,arguments)};Object.create;Object.create;var S=o(38136),R=o.n(S);function z(e,t,o,n,r){void 0===r&&(r=0);var i=N(t.width,t.height,r),a=i.width,s=i.height;return{x:P(e.x,a,o.width,n),y:P(e.y,s,o.height,n)}}function P(e,t,o,n){var r=t*n/2-o/2;return T(e,-r,r)}function M(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function E(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}function D(e,t){return Math.min(e,Math.max(0,t))}function O(e,t){return t}function Z(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function N(e,t,o){var n=o*Math.PI/180;return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function T(e,t,o){return Math.min(Math.max(e,t),o)}function j(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"===typeof e&&e.length>0})).join(" ").trim()}var W=function(e){function t(){var o=null!==e&&e.apply(this,arguments)||this;return o.imageRef=w.createRef(),o.videoRef=w.createRef(),o.containerPosition={x:0,y:0},o.containerRef=null,o.styleRef=null,o.containerRect=null,o.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},o.dragStartPosition={x:0,y:0},o.dragStartCrop={x:0,y:0},o.gestureZoomStart=0,o.gestureRotationStart=0,o.isTouching=!1,o.lastPinchDistance=0,o.lastPinchRotation=0,o.rafDragTimeout=null,o.rafPinchTimeout=null,o.wheelTimer=null,o.currentDoc="undefined"!==typeof document?document:null,o.currentWindow="undefined"!==typeof window?window:null,o.resizeObserver=null,o.state={cropSize:null,hasWheelJustStarted:!1},o.initResizeObserver=function(){if("undefined"!==typeof window.ResizeObserver&&o.containerRef){var e=!0;o.resizeObserver=new window.ResizeObserver((function(t){e?e=!1:o.computeSizes()})),o.resizeObserver.observe(o.containerRef)}},o.preventZoomSafari=function(e){return e.preventDefault()},o.cleanEvents=function(){o.currentDoc&&(o.currentDoc.removeEventListener("mousemove",o.onMouseMove),o.currentDoc.removeEventListener("mouseup",o.onDragStopped),o.currentDoc.removeEventListener("touchmove",o.onTouchMove),o.currentDoc.removeEventListener("touchend",o.onDragStopped),o.currentDoc.removeEventListener("gesturemove",o.onGestureMove),o.currentDoc.removeEventListener("gestureend",o.onGestureEnd),o.currentDoc.removeEventListener("scroll",o.onScroll))},o.clearScrollEvent=function(){o.containerRef&&o.containerRef.removeEventListener("wheel",o.onWheel),o.wheelTimer&&clearTimeout(o.wheelTimer)},o.onMediaLoad=function(){var e=o.computeSizes();e&&(o.emitCropData(),o.setInitialCrop(e)),o.props.onMediaLoaded&&o.props.onMediaLoaded(o.mediaSize)},o.setInitialCrop=function(e){if(o.props.initialCroppedAreaPercentages){var t=function(e,t,o,n,r,i){var a=N(t.width,t.height,o),s=T(n.width/a.width*(100/e.width),r,i);return{crop:{x:s*a.width/2-n.width/2-a.width*s*(e.x/100),y:s*a.height/2-n.height/2-a.height*s*(e.y/100)},zoom:s}}(o.props.initialCroppedAreaPercentages,o.mediaSize,o.props.rotation,e,o.props.minZoom,o.props.maxZoom),n=t.crop,r=t.zoom;o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}else if(o.props.initialCroppedAreaPixels){var i=function(e,t,o,n,r,i){void 0===o&&(o=0);var a=N(t.naturalWidth,t.naturalHeight,o),s=T(function(e,t,o){var n=function(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}(t);return o.height>o.width?o.height/(e.height*n):o.width/(e.width*n)}(e,t,n),r,i),c=n.height>n.width?n.height/e.height:n.width/e.width;return{crop:{x:((a.width-e.width)/2-e.x)*c,y:((a.height-e.height)/2-e.y)*c},zoom:s}}(o.props.initialCroppedAreaPixels,o.mediaSize,o.props.rotation,e,o.props.minZoom,o.props.maxZoom);n=i.crop,r=i.zoom;o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}},o.computeSizes=function(){var e,t,n,r,i,a,s=o.imageRef.current||o.videoRef.current;if(s&&o.containerRef){o.containerRect=o.containerRef.getBoundingClientRect(),o.saveContainerPosition();var c=o.containerRect.width/o.containerRect.height,p=(null===(e=o.imageRef.current)||void 0===e?void 0:e.naturalWidth)||(null===(t=o.videoRef.current)||void 0===t?void 0:t.videoWidth)||0,u=(null===(n=o.imageRef.current)||void 0===n?void 0:n.naturalHeight)||(null===(r=o.videoRef.current)||void 0===r?void 0:r.videoHeight)||0,d=p/u,h=void 0;if(s.offsetWidth<p||s.offsetHeight<u)switch(o.getObjectFit()){default:case"contain":h=c>d?{width:o.containerRect.height*d,height:o.containerRect.height}:{width:o.containerRect.width,height:o.containerRect.width/d};break;case"horizontal-cover":h={width:o.containerRect.width,height:o.containerRect.width/d};break;case"vertical-cover":h={width:o.containerRect.height*d,height:o.containerRect.height}}else h={width:s.offsetWidth,height:s.offsetHeight};o.mediaSize=b(b({},h),{naturalWidth:p,naturalHeight:u}),o.props.setMediaSize&&o.props.setMediaSize(o.mediaSize);var l=o.props.cropSize?o.props.cropSize:function(e,t,o,n,r,i){void 0===i&&(i=0);var a=N(e,t,i),s=a.width,c=a.height,p=Math.min(s,o),u=Math.min(c,n);return p>u*r?{width:u*r,height:u}:{width:p,height:p/r}}(o.mediaSize.width,o.mediaSize.height,o.containerRect.width,o.containerRect.height,o.props.aspect,o.props.rotation);return(null===(i=o.state.cropSize)||void 0===i?void 0:i.height)===l.height&&(null===(a=o.state.cropSize)||void 0===a?void 0:a.width)===l.width||o.props.onCropSizeChange&&o.props.onCropSizeChange(l),o.setState({cropSize:l},o.recomputeCropPosition),o.props.setCropSize&&o.props.setCropSize(l),l}},o.saveContainerPosition=function(){if(o.containerRef){var e=o.containerRef.getBoundingClientRect();o.containerPosition={x:e.left,y:e.top}}},o.onMouseDown=function(e){o.currentDoc&&(e.preventDefault(),o.currentDoc.addEventListener("mousemove",o.onMouseMove),o.currentDoc.addEventListener("mouseup",o.onDragStopped),o.saveContainerPosition(),o.onDragStart(t.getMousePoint(e)))},o.onMouseMove=function(e){return o.onDrag(t.getMousePoint(e))},o.onScroll=function(e){o.currentDoc&&(e.preventDefault(),o.saveContainerPosition())},o.onTouchStart=function(e){o.currentDoc&&(o.isTouching=!0,o.props.onTouchRequest&&!o.props.onTouchRequest(e)||(o.currentDoc.addEventListener("touchmove",o.onTouchMove,{passive:!1}),o.currentDoc.addEventListener("touchend",o.onDragStopped),o.saveContainerPosition(),2===e.touches.length?o.onPinchStart(e):1===e.touches.length&&o.onDragStart(t.getTouchPoint(e.touches[0]))))},o.onTouchMove=function(e){e.preventDefault(),2===e.touches.length?o.onPinchMove(e):1===e.touches.length&&o.onDrag(t.getTouchPoint(e.touches[0]))},o.onGestureStart=function(e){o.currentDoc&&(e.preventDefault(),o.currentDoc.addEventListener("gesturechange",o.onGestureMove),o.currentDoc.addEventListener("gestureend",o.onGestureEnd),o.gestureZoomStart=o.props.zoom,o.gestureRotationStart=o.props.rotation)},o.onGestureMove=function(e){if(e.preventDefault(),!o.isTouching){var n=t.getMousePoint(e),r=o.gestureZoomStart-1+e.scale;if(o.setNewZoom(r,n,{shouldUpdatePosition:!0}),o.props.onRotationChange){var i=o.gestureRotationStart+e.rotation;o.props.onRotationChange(i)}}},o.onGestureEnd=function(e){o.cleanEvents()},o.onDragStart=function(e){var t,n,r=e.x,i=e.y;o.dragStartPosition={x:r,y:i},o.dragStartCrop=b({},o.props.crop),null===(n=(t=o.props).onInteractionStart)||void 0===n||n.call(t)},o.onDrag=function(e){var t=e.x,n=e.y;o.currentWindow&&(o.rafDragTimeout&&o.currentWindow.cancelAnimationFrame(o.rafDragTimeout),o.rafDragTimeout=o.currentWindow.requestAnimationFrame((function(){if(o.state.cropSize&&void 0!==t&&void 0!==n){var e=t-o.dragStartPosition.x,r=n-o.dragStartPosition.y,i={x:o.dragStartCrop.x+e,y:o.dragStartCrop.y+r},a=o.props.restrictPosition?z(i,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):i;o.props.onCropChange(a)}})))},o.onDragStopped=function(){var e,t;o.isTouching=!1,o.cleanEvents(),o.emitCropData(),null===(t=(e=o.props).onInteractionEnd)||void 0===t||t.call(e)},o.onWheel=function(e){if(o.currentWindow&&(!o.props.onWheelRequest||o.props.onWheelRequest(e))){e.preventDefault();var n=t.getMousePoint(e),r=R()(e).pixelY,i=o.props.zoom-r*o.props.zoomSpeed/200;o.setNewZoom(i,n,{shouldUpdatePosition:!0}),o.state.hasWheelJustStarted||o.setState({hasWheelJustStarted:!0},(function(){var e,t;return null===(t=(e=o.props).onInteractionStart)||void 0===t?void 0:t.call(e)})),o.wheelTimer&&clearTimeout(o.wheelTimer),o.wheelTimer=o.currentWindow.setTimeout((function(){return o.setState({hasWheelJustStarted:!1},(function(){var e,t;return null===(t=(e=o.props).onInteractionEnd)||void 0===t?void 0:t.call(e)}))}),250)}},o.getPointOnContainer=function(e,t){var n=e.x,r=e.y;if(!o.containerRect)throw new Error("The Cropper is not mounted");return{x:o.containerRect.width/2-(n-t.x),y:o.containerRect.height/2-(r-t.y)}},o.getPointOnMedia=function(e){var t=e.x,n=e.y,r=o.props,i=r.crop,a=r.zoom;return{x:(t+i.x)/a,y:(n+i.y)/a}},o.setNewZoom=function(e,t,n){var r=(void 0===n?{}:n).shouldUpdatePosition,i=void 0===r||r;if(o.state.cropSize&&o.props.onZoomChange){var a=T(e,o.props.minZoom,o.props.maxZoom);if(i){var s=o.getPointOnContainer(t,o.containerPosition),c=o.getPointOnMedia(s),p={x:c.x*a-s.x,y:c.y*a-s.y},u=o.props.restrictPosition?z(p,o.mediaSize,o.state.cropSize,a,o.props.rotation):p;o.props.onCropChange(u)}o.props.onZoomChange(a)}},o.getCropData=function(){return o.state.cropSize?function(e,t,o,n,r,i,a){void 0===i&&(i=0),void 0===a&&(a=!0);var s=a?D:O,c=N(t.width,t.height,i),p=N(t.naturalWidth,t.naturalHeight,i),u={x:s(100,((c.width-o.width/r)/2-e.x/r)/c.width*100),y:s(100,((c.height-o.height/r)/2-e.y/r)/c.height*100),width:s(100,o.width/c.width*100/r),height:s(100,o.height/c.height*100/r)},d=Math.round(s(p.width,u.width*p.width/100)),h=Math.round(s(p.height,u.height*p.height/100)),l=p.width>=p.height*n?{width:Math.round(h*n),height:h}:{width:d,height:Math.round(d/n)};return{croppedAreaPercentages:u,croppedAreaPixels:b(b({},l),{x:Math.round(s(p.width-l.width,u.x*p.width/100)),y:Math.round(s(p.height-l.height,u.y*p.height/100))})}}(o.props.restrictPosition?z(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop,o.mediaSize,o.state.cropSize,o.getAspect(),o.props.zoom,o.props.rotation,o.props.restrictPosition):null},o.emitCropData=function(){var e=o.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;o.props.onCropComplete&&o.props.onCropComplete(t,n),o.props.onCropAreaChange&&o.props.onCropAreaChange(t,n)}},o.emitCropAreaChange=function(){var e=o.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;o.props.onCropAreaChange&&o.props.onCropAreaChange(t,n)}},o.recomputeCropPosition=function(){if(o.state.cropSize){var e=o.props.restrictPosition?z(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop;o.props.onCropChange(e),o.emitCropData()}},o}return function(e,t){function o(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){this.currentDoc&&this.currentWindow&&(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),"undefined"===typeof window.ResizeObserver&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},t.prototype.componentWillUnmount=function(){var e,t;this.currentDoc&&this.currentWindow&&("undefined"===typeof window.ResizeObserver&&this.currentWindow.removeEventListener("resize",this.computeSizes),null===(e=this.resizeObserver)||void 0===e||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&(null===(t=this.styleRef.parentNode)||void 0===t||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(e){var t,o,n,r,i,a,s,c,p;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect||e.objectFit!==this.props.objectFit?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(t=e.cropSize)||void 0===t?void 0:t.height)!==(null===(o=this.props.cropSize)||void 0===o?void 0:o.height)||(null===(n=e.cropSize)||void 0===n?void 0:n.width)!==(null===(r=this.props.cropSize)||void 0===r?void 0:r.width)?this.computeSizes():(null===(i=e.crop)||void 0===i?void 0:i.x)===(null===(a=this.props.crop)||void 0===a?void 0:a.x)&&(null===(s=e.crop)||void 0===s?void 0:s.y)===(null===(c=this.props.crop)||void 0===c?void 0:c.y)||this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&(null===(p=this.videoRef.current)||void 0===p||p.load())},t.prototype.getAspect=function(){var e=this.props,t=e.cropSize,o=e.aspect;return t?t.width/t.height:o},t.prototype.getObjectFit=function(){var e,t,o,n;if("cover"===this.props.objectFit){if((this.imageRef.current||this.videoRef.current)&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var r=this.containerRect.width/this.containerRect.height;return((null===(e=this.imageRef.current)||void 0===e?void 0:e.naturalWidth)||(null===(t=this.videoRef.current)||void 0===t?void 0:t.videoWidth)||0)/((null===(o=this.imageRef.current)||void 0===o?void 0:o.naturalHeight)||(null===(n=this.videoRef.current)||void 0===n?void 0:n.videoHeight)||0)<r?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(e){var o=t.getTouchPoint(e.touches[0]),n=t.getTouchPoint(e.touches[1]);this.lastPinchDistance=M(o,n),this.lastPinchRotation=E(o,n),this.onDragStart(Z(o,n))},t.prototype.onPinchMove=function(e){var o=this;if(this.currentDoc&&this.currentWindow){var n=t.getTouchPoint(e.touches[0]),r=t.getTouchPoint(e.touches[1]),i=Z(n,r);this.onDrag(i),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame((function(){var e=M(n,r),t=o.props.zoom*(e/o.lastPinchDistance);o.setNewZoom(t,i,{shouldUpdatePosition:!1}),o.lastPinchDistance=e;var a=E(n,r),s=o.props.rotation+(a-o.lastPinchRotation);o.props.onRotationChange&&o.props.onRotationChange(s),o.lastPinchRotation=a}))}},t.prototype.render=function(){var e=this,t=this.props,o=t.image,n=t.video,r=t.mediaProps,i=t.transform,a=t.crop,s=a.x,c=a.y,p=t.rotation,u=t.zoom,d=t.cropShape,h=t.showGrid,l=t.style,f=l.containerStyle,m=l.cropAreaStyle,v=l.mediaStyle,g=t.classes,x=g.containerClassName,y=g.cropAreaClassName,C=g.mediaClassName,S=this.getObjectFit();return w.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(t){return e.containerRef=t},"data-testid":"container",style:f,className:j("reactEasyCrop_Container",x)},o?w.createElement("img",b({alt:"",className:j("reactEasyCrop_Image","contain"===S&&"reactEasyCrop_Contain","horizontal-cover"===S&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===S&&"reactEasyCrop_Cover_Vertical",C)},r,{src:o,ref:this.imageRef,style:b(b({},v),{transform:i||"translate(".concat(s,"px, ").concat(c,"px) rotate(").concat(p,"deg) scale(").concat(u,")")}),onLoad:this.onMediaLoad})):n&&w.createElement("video",b({autoPlay:!0,loop:!0,muted:!0,className:j("reactEasyCrop_Video","contain"===S&&"reactEasyCrop_Contain","horizontal-cover"===S&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===S&&"reactEasyCrop_Cover_Vertical",C)},r,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:b(b({},v),{transform:i||"translate(".concat(s,"px, ").concat(c,"px) rotate(").concat(p,"deg) scale(").concat(u,")")}),controls:!1}),(Array.isArray(n)?n:[{src:n}]).map((function(e){return w.createElement("source",b({key:e.src},e))}))),this.state.cropSize&&w.createElement("div",{style:b(b({},m),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:j("reactEasyCrop_CropArea","round"===d&&"reactEasyCrop_CropAreaRound",h&&"reactEasyCrop_CropAreaGrid",y)}))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},t.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t}(w.Component),A="img-crop",_=.1,k=.01,L=(0,w.forwardRef)((function(e,t){var o=e.cropperRef,n=e.zoomSlider,r=e.rotationSlider,a=e.aspectSlider,s=e.showReset,p=e.resetBtnText,u=e.modalImage,d=e.aspect,h=e.minZoom,l=e.maxZoom,f=e.cropShape,m=e.showGrid,v=e.cropperProps,g=(0,w.useState)(1),C=(0,i.Z)(g,2),b=C[0],S=C[1],R=(0,w.useState)(0),z=(0,i.Z)(R,2),P=z[0],M=z[1],E=(0,w.useState)(d),D=(0,i.Z)(E,2),O=D[0],Z=D[1],N=1!==b||0!==P||O!==d,T=function(){S(1),M(0),Z(d)},j=(0,w.useState)({x:0,y:0}),L=(0,i.Z)(j,2),I=L[0],F=L[1],H=(0,w.useRef)({width:0,height:0,x:0,y:0}),G=(0,w.useCallback)((function(e,t){H.current=t}),[]);(0,w.useImperativeHandle)(t,(function(){return{rotation:P,cropPixelsRef:H,onReset:T}}));var U="[display:flex] [align-items:center] [width:60%] [margin-inline:auto]",X="[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]",V="[flex:1]";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(W,Object.assign({},v,{ref:o,image:u,crop:I,zoom:b,rotation:P,aspect:O,minZoom:h,maxZoom:l,zoomWithScroll:n,cropShape:f,showGrid:m,onCropChange:F,onZoomChange:S,onRotationChange:M,onCropComplete:G,classes:{containerClassName:"".concat(A,"-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]"),mediaClassName:"".concat(A,"-media")}})),n&&(0,c.jsxs)("section",{className:"".concat(A,"-control ").concat(A,"-control-zoom ").concat(U),children:[(0,c.jsx)("button",{className:X,onClick:function(){return S(b-_)},disabled:b-_<h,children:"\uff0d"}),(0,c.jsx)(y.Z,{className:V,min:h,max:l,step:_,value:b,onChange:S}),(0,c.jsx)("button",{className:X,onClick:function(){return S(b+_)},disabled:b+_>l,children:"\uff0b"})]}),r&&(0,c.jsxs)("section",{className:"".concat(A,"-control ").concat(A,"-control-rotation ").concat(U),children:[(0,c.jsx)("button",{className:"".concat(X," [font-size:16px]"),onClick:function(){return M(P-1)},disabled:-180===P,children:"\u21ba"}),(0,c.jsx)(y.Z,{className:V,min:-180,max:180,step:1,value:P,onChange:M}),(0,c.jsx)("button",{className:"".concat(X," [font-size:16px]"),onClick:function(){return M(P+1)},disabled:180===P,children:"\u21bb"})]}),a&&(0,c.jsxs)("section",{className:"".concat(A,"-control ").concat(A,"-control-aspect ").concat(U),children:[(0,c.jsx)("button",{className:X,onClick:function(){return Z(O-k)},disabled:O-k<.5,children:"\u2195\ufe0f"}),(0,c.jsx)(y.Z,{className:V,min:.5,max:2,step:k,value:O,onChange:Z}),(0,c.jsx)("button",{className:X,onClick:function(){return Z(O+k)},disabled:O+k>2,children:"\u2194\ufe0f"})]}),s&&(n||r||a)&&(0,c.jsx)(x.ZP,{className:"[bottom:20px] [position:absolute]",style:N?{}:{opacity:.3,pointerEvents:"none"},onClick:T,children:p})]})})),I=(0,w.memo)(L);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".visible{visibility:visible}.grid{display:grid}.\\!\\[position\\:relative\\]{position:relative!important}.\\[align-items\\:center\\]{align-items:center}.\\[background\\:transparent\\]{background:transparent}.\\[border\\:0\\]{border:0}.\\[bottom\\:20px\\]{bottom:20px}.\\[cursor\\:pointer\\]{cursor:pointer}.\\[display\\:flex\\]{display:flex}.\\[flex\\:1\\]{flex:1}.\\[font-family\\:inherit\\]{font-family:inherit}.\\[font-size\\:16px\\]{font-size:16px}.\\[font-size\\:18px\\]{font-size:18px}.\\[height\\:32px\\]{height:32px}.\\[height\\:40vh\\]{height:40vh}.\\[justify-content\\:center\\]{justify-content:center}.\\[margin-inline\\:auto\\]{margin-inline:auto}.\\[position\\:absolute\\]{position:absolute}.\\[width\\:100\\%\\]{width:100%}.\\[width\\:32px\\]{width:32px}.\\[width\\:60\\%\\]{width:60%}.disabled\\:\\[cursor\\:default\\]:disabled{cursor:default}.disabled\\:\\[opacity\\:20\\%\\]:disabled{opacity:20%}.\\[\\&\\~section\\:first-of-type\\]\\:\\[margin-top\\:16px\\]~section:first-of-type{margin-top:16px}.\\[\\&\\~section\\:last-of-type\\]\\:\\[margin-bottom\\:16px\\]~section:last-of-type{margin-bottom:16px}",{insertAt:"top"});var F=-1===function(e,t){var o=l(e),n=l(t),r=o.pop(),i=n.pop(),a=g(o,n);return 0!==a?a:r&&i?g(r.split("."),i.split(".")):r||i?r?-1:1:0}(p.Z,"4.23.0")?"visible":"open",H=function(e,t,o){return t in e?(console.error("`".concat(t,"` is deprecated, please use `").concat(o,"` instead")),e[t]):e[o]},G=(0,w.forwardRef)((function(e,t){var o,p=e.quality,h=void 0===p?.4:p,l=e.fillColor,f=void 0===l?"white":l,m=(e.zoomSlider,e.rotationSlider,e.aspectSlider),v=void 0!==m&&m,g=e.showReset,x=void 0!==g&&g,y=e.resetText,C=e.aspect,b=void 0===C?1:C,S=e.minZoom,R=void 0===S?1:S,z=e.maxZoom,P=void 0===z?3:z,M=(e.cropShape,e.showGrid,e.cropperProps),E=e.modalClassName,D=e.modalTitle,O=e.modalWidth,Z=e.modalOk,N=e.modalCancel,T=e.onModalOk,j=e.onModalCancel,W=e.modalProps,_=e.beforeCrop,k=e.children,L=H(e,"zoom","zoomSlider")||!0,G=H(e,"rotate","rotationSlider")||!1,U=H(e,"shape","cropShape")||"rect",X=H(e,"grid","showGrid")||!1;"onUploadFail"in e&&console.error("`onUploadFail` is removed, because the only way it is called, is when the file is rejected by beforeUpload"),H(e,"modalMaskTransitionName","modalProps.maskTransitionName"),H(e,"modalTransitionName","modalProps.transitionName");var V=(0,w.useRef)({});V.current.onModalOk=T,V.current.onModalCancel=j,V.current.beforeCrop=_;var B=(0,w.useRef)(null),q=(0,w.useCallback)((function(e){var t,o=document.createElement("canvas"),n=o.getContext("2d"),r=((null===(t=null===e||void 0===e?void 0:e.getRootNode)||void 0===t?void 0:t.call(e))||document).querySelector(".".concat(A,"-media")),i=B.current.cropPixelsRef.current,a=i.width,s=i.height,c=i.x,p=i.y;if(G&&0!==B.current.rotation){var u=r.naturalWidth,d=r.naturalHeight,h=B.current.rotation*(Math.PI/180),l=Math.abs(Math.sin(h)),m=Math.abs(Math.cos(h)),v=u*m+d*l,g=d*m+u*l;o.width=v,o.height=g,n.fillStyle=f,n.fillRect(0,0,v,g);var w=v/2,x=g/2;n.translate(w,x),n.rotate(h),n.translate(-w,-x);var y=(v-u)/2,C=(g-d)/2;n.drawImage(r,0,0,u,d,y,C,u,d);var b=n.getImageData(0,0,v,g);o.width=a,o.height=s,n.putImageData(b,-c,-p)}else o.width=a,o.height=s,n.fillStyle=f,n.fillRect(0,0,a,s),n.drawImage(r,c,p,a,s,0,0,a,s);return o}),[f,G]),Y=(0,w.useState)(""),J=(0,i.Z)(Y,2),K=J[0],$=J[1],Q=(0,w.useRef)(),ee=(0,w.useRef)(),te=(0,w.useMemo)((function(){var e=Array.isArray(k)?k[0]:k,t=e.props,o=t.beforeUpload,n=t.accept,i=a(t,["beforeUpload","accept"]);return Object.assign(Object.assign({},e),{props:Object.assign(Object.assign({},i),{accept:n||"image/*",beforeUpload:function(e,t){return new Promise((function(n){return s(void 0,void 0,void 0,(0,r.Z)().mark((function i(){var a,c;return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("function"!==typeof V.current.beforeCrop){i.next=12;break}return i.prev=1,i.next=4,V.current.beforeCrop(e,t);case 4:if(!0===(a=i.sent)){i.next=7;break}return i.abrupt("return",n(a));case 7:i.next=12;break;case 9:return i.prev=9,i.t0=i.catch(1),i.abrupt("return",n(i.t0));case 12:(c=new FileReader).addEventListener("load",(function(){"string"===typeof c.result&&$(c.result)})),c.readAsDataURL(e),Q.current=function(){var e,t;$(""),B.current.onReset(),n(d.Z.LIST_IGNORE),null===(t=(e=V.current).onModalCancel)||void 0===t||t.call(e)},ee.current=function(t){return s(void 0,void 0,void 0,(0,r.Z)().mark((function i(){var a,c,p,u;return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:$(""),B.current.onReset(),a=q(t.target),c=e.type,p=e.name,u=e.uid,a.toBlob((function(e){return s(void 0,void 0,void 0,(0,r.Z)().mark((function t(){var i,a,s,d,h,l,f,m,v;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f=new File([e],p,{type:c}),Object.assign(f,{uid:u}),"function"===typeof o){t.next=6;break}return n(f),null===(a=(i=V.current).onModalOk)||void 0===a||a.call(i,f),t.abrupt("return");case 6:return t.prev=6,t.next=9,o(f,[f]);case 9:m=t.sent,n(v=!0===m?f:m),null===(d=(s=V.current).onModalOk)||void 0===d||d.call(s,v),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),n(t.t0),null===(l=(h=V.current).onModalOk)||void 0===l||l.call(h,t.t0);case 19:case"end":return t.stop()}}),t,null,[[6,15]])})))}),c,h);case 5:case"end":return i.stop()}}),i)})))};case 17:case"end":return i.stop()}}),i,null,[[1,9]])})))}))}})})}),[k,q,h]),oe=(0,w.useMemo)((function(){var e={};return void 0!==O&&(e.width=O),void 0!==Z&&(e.okText=Z),void 0!==N&&(e.cancelText=N),e}),[N,Z,O]),ne="".concat(A,"-modal").concat(E?" ".concat(E):""),re="zh-CN"===("undefined"===typeof window?"":window.navigator.language),ie=D||(re?"\u7f16\u8f91\u56fe\u7247":"Edit image"),ae=y||(re?"\u91cd\u7f6e":"Reset");return(0,c.jsxs)(c.Fragment,{children:[te,K&&(0,c.jsx)(u.Z,Object.assign({},W,oe,(o={},(0,n.Z)(o,F,!0),(0,n.Z)(o,"title",ie),(0,n.Z)(o,"onCancel",Q.current),(0,n.Z)(o,"onOk",ee.current),(0,n.Z)(o,"wrapClassName",ne),(0,n.Z)(o,"maskClosable",!1),(0,n.Z)(o,"destroyOnClose",!0),(0,n.Z)(o,"children",(0,c.jsx)(I,{ref:B,cropperRef:t,zoomSlider:L,rotationSlider:G,aspectSlider:v,showReset:x,resetBtnText:ae,modalImage:K,aspect:b,minZoom:R,maxZoom:P,cropShape:U,showGrid:X,cropperProps:M})),o)))]})}))},38136:function(e,t,o){e.exports=o(20166)},24872:function(e){"use strict";var t=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:t,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t};e.exports=o},65811:function(e){var t,o,n,r,i,a,s,c,p,u,d,h,l,f,m,v=!1;function g(){if(!v){v=!0;var e=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),w=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(h=/\b(iPhone|iP[ao]d)/.exec(e),l=/\b(iP[ao]d)/.exec(e),u=/Android/i.exec(e),f=/FBAN\/\w+;/i.exec(e),m=/Mobile/i.exec(e),d=!!/Win64/.exec(e),g){(t=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN)&&document&&document.documentMode&&(t=document.documentMode);var x=/(?:Trident\/(\d+.\d+))/.exec(e);a=x?parseFloat(x[1])+4:t,o=g[2]?parseFloat(g[2]):NaN,n=g[3]?parseFloat(g[3]):NaN,(r=g[4]?parseFloat(g[4]):NaN)?(g=/(?:Chrome\/(\d+\.\d+))/.exec(e),i=g&&g[1]?parseFloat(g[1]):NaN):i=NaN}else t=o=n=i=r=NaN;if(w){if(w[1]){var y=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);s=!y||parseFloat(y[1].replace("_","."))}else s=!1;c=!!w[2],p=!!w[3]}else s=c=p=!1}}var w={ie:function(){return g()||t},ieCompatibilityMode:function(){return g()||a>t},ie64:function(){return w.ie()&&d},firefox:function(){return g()||o},opera:function(){return g()||n},webkit:function(){return g()||r},safari:function(){return w.webkit()},chrome:function(){return g()||i},windows:function(){return g()||c},osx:function(){return g()||s},linux:function(){return g()||p},iphone:function(){return g()||h},mobile:function(){return g()||h||l||u||m},nativeApp:function(){return g()||f},android:function(){return g()||u},ipad:function(){return g()||l}};e.exports=w},95780:function(e,t,o){"use strict";var n,r=o(24872);r.canUseDOM&&(n=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=function(e,t){if(!r.canUseDOM||t&&!("addEventListener"in document))return!1;var o="on"+e,i=o in document;if(!i){var a=document.createElement("div");a.setAttribute(o,"return;"),i="function"===typeof a[o]}return!i&&n&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}},20166:function(e,t,o){"use strict";var n=o(65811),r=o(95780);function i(e){var t=0,o=0,n=0,r=0;return"detail"in e&&(o=e.detail),"wheelDelta"in e&&(o=-e.wheelDelta/120),"wheelDeltaY"in e&&(o=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=o,o=0),n=10*t,r=10*o,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||r)&&e.deltaMode&&(1==e.deltaMode?(n*=40,r*=40):(n*=800,r*=800)),n&&!t&&(t=n<1?-1:1),r&&!o&&(o=r<1?-1:1),{spinX:t,spinY:o,pixelX:n,pixelY:r}}i.getEventType=function(){return n.firefox()?"DOMMouseScroll":r("wheel")?"wheel":"mousewheel"},e.exports=i}}]);
//# sourceMappingURL=714.41f6221b.chunk.js.map