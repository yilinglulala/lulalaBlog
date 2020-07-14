/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "56451702f618544518efc68d0caf2ea8"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "d445bf073db0d139f81514b0663636ac"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "fa98985d615e87f791e33ce72e311349"
  },
  {
    "url": "Another/Project.html",
    "revision": "05f1952511978ff35c137242a4e4d210"
  },
  {
    "url": "Another/Review.html",
    "revision": "94ec119089a38e7f33fc0950343ec0bc"
  },
  {
    "url": "assets/css/0.styles.97bd2e26.css",
    "revision": "60bbab999dbe82731519056fa949e55b"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/modelLeft.3a975195.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "assets/img/modelRight.5b58ce3e.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.bbf6fc42.js",
    "revision": "2b654daa19e7df3e7d102591e1792cf7"
  },
  {
    "url": "assets/js/11.cea77c69.js",
    "revision": "d012aab78cba57a05b2d1097bb9afe4e"
  },
  {
    "url": "assets/js/12.0fff1a1c.js",
    "revision": "b5f5f112cd4dc478d14387d3f3aa0ddd"
  },
  {
    "url": "assets/js/13.a7500ad6.js",
    "revision": "53091c14d824cd61efb01f1486d42b73"
  },
  {
    "url": "assets/js/14.94c9dd1f.js",
    "revision": "447595d50a723f9f7839dd2b8b5201bb"
  },
  {
    "url": "assets/js/15.e47dcfb0.js",
    "revision": "b716e4b68826573842eadfa63350cbca"
  },
  {
    "url": "assets/js/16.e1718146.js",
    "revision": "84be1898391f7ecff7bef6d78685e28a"
  },
  {
    "url": "assets/js/17.63035854.js",
    "revision": "713763fa9cc0a163903657abdc2aae52"
  },
  {
    "url": "assets/js/18.4dc04e09.js",
    "revision": "6761172ec071f24a023ab3ef10041634"
  },
  {
    "url": "assets/js/19.44f13435.js",
    "revision": "42c30e188eba283264bf1d4ca90a5551"
  },
  {
    "url": "assets/js/2.82d30a4f.js",
    "revision": "27c1ce7e0bf8e2028b6f1546a4003e5f"
  },
  {
    "url": "assets/js/20.1e3995de.js",
    "revision": "b44ec15d594d481f048138124a932140"
  },
  {
    "url": "assets/js/21.c39a0f51.js",
    "revision": "73f54fb5d22abb7f45865ec342e96179"
  },
  {
    "url": "assets/js/22.5cf91e66.js",
    "revision": "498e8f20fb459f1175260d35e243934b"
  },
  {
    "url": "assets/js/23.365a8756.js",
    "revision": "6cbf26fe1473142f0fa61b874ab8f43a"
  },
  {
    "url": "assets/js/24.55bd291c.js",
    "revision": "dc60bc38ca35b911ed4feb2190fc25f9"
  },
  {
    "url": "assets/js/25.280d1761.js",
    "revision": "8c3a7c275d8da8766d9514b5c52fc9f4"
  },
  {
    "url": "assets/js/26.e0d3287e.js",
    "revision": "36daa934e87151e99d124eef2655c846"
  },
  {
    "url": "assets/js/27.015bba6e.js",
    "revision": "f1fc63ec7e699b548b1dda6f28f4be7e"
  },
  {
    "url": "assets/js/28.5e7ad222.js",
    "revision": "143e476b48f75ab1c2b37fe4feb36765"
  },
  {
    "url": "assets/js/29.6204399e.js",
    "revision": "475c1682b181e657c87cebd7ae37a127"
  },
  {
    "url": "assets/js/3.a648414e.js",
    "revision": "313652c2a788deb2c02720d2dc9fbfb7"
  },
  {
    "url": "assets/js/30.e08a2a0c.js",
    "revision": "07c42b93ab6df1f12579af273c11385c"
  },
  {
    "url": "assets/js/31.bfbb65a4.js",
    "revision": "11e7698038c99b2b6276bb09e0bb8051"
  },
  {
    "url": "assets/js/32.0ebf5b7c.js",
    "revision": "47248585e14a1d28f4a520f1bbd4a22e"
  },
  {
    "url": "assets/js/33.e140daac.js",
    "revision": "713937a6de58fa2e8dcb87c1932581fe"
  },
  {
    "url": "assets/js/34.d514bebf.js",
    "revision": "bffdd56161c5c9577f1b2011bfcfe226"
  },
  {
    "url": "assets/js/35.f701ad69.js",
    "revision": "311af5f8fae365aae8062110ef937cff"
  },
  {
    "url": "assets/js/36.573a4499.js",
    "revision": "8ec02f420d3d4b99d3a18fabe45bf677"
  },
  {
    "url": "assets/js/37.c9f9783d.js",
    "revision": "afbbd61c0c61006ce1943df6494e8a8c"
  },
  {
    "url": "assets/js/38.105f5cc6.js",
    "revision": "0dd7e018455c76853e5dbd24758d7c3e"
  },
  {
    "url": "assets/js/4.f123778b.js",
    "revision": "e9a3b3c8225426625a58a5d9667c39a3"
  },
  {
    "url": "assets/js/5.abf06e3b.js",
    "revision": "e1bafe25491dee2e1bf06a2851063ea2"
  },
  {
    "url": "assets/js/6.2273a763.js",
    "revision": "32915bb19708e89dc6acf58158a04488"
  },
  {
    "url": "assets/js/7.93917c38.js",
    "revision": "788492a99d915ae73a1643f8274ee594"
  },
  {
    "url": "assets/js/8.a112484f.js",
    "revision": "614ef9e038ce4715d1085ba247819ba6"
  },
  {
    "url": "assets/js/9.ce90edcb.js",
    "revision": "b626dae0db0e50cd0ff36031ad88bc06"
  },
  {
    "url": "assets/js/app.81830cf2.js",
    "revision": "35a21c34a899f43375b25906d68cf0ea"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "e4bc8e189dbba2217dc91cefebe4ab95"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "b04287c11f434dabff674815192f76e5"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "30fe92e4781fa4d997e82216c20fce36"
  },
  {
    "url": "FAQ/Console/jsbase.html",
    "revision": "0bff42c57297c5af4fc021f7e4cce7a7"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "c7b8c4d633140a27f0d74f0dcae9f630"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "7ee81fda2acd17472fa3d483137b5433"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "7f51f1695a5f9e02483d727bae541a09"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "dfa2e9266cf41f752722b15d3c266e3d"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/modelLeft.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "b887ac3edb3cc995f9a73bab13786077"
  },
  {
    "url": "JS/Base/list.html",
    "revision": "1686b487fc2a140594680bfdc45eb44c"
  },
  {
    "url": "JS/Base/scope.html",
    "revision": "12d9b41157155a07442df1d96363e5b7"
  },
  {
    "url": "JS/Console/A000.html",
    "revision": "2c974e57518dfa0603c25c1b8bba3e66"
  },
  {
    "url": "JS/Console/A001.html",
    "revision": "b4e2e9e6b3ed3b31089138ef4506dd78"
  },
  {
    "url": "JS/Console/A002.html",
    "revision": "dbbe2d61d7392ffeb85dc42163d6bb4c"
  },
  {
    "url": "JS/Console/jsbase.html",
    "revision": "c42adcd5049bb9cbff7e89b313267837"
  },
  {
    "url": "JS/Css/BFC.html",
    "revision": "20d54def627da780e2cdc0625abba5c3"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "d954dabf8ccaf1aedb150ced8b6f986a"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "4677eb59153e22842b1cb92eb1b8ed0c"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "a4a0daf37688f46fd331fcb7752c5508"
  },
  {
    "url": "Store/index.html",
    "revision": "4f238d50512d582836f4d696f6386cb1"
  },
  {
    "url": "Thought/index.html",
    "revision": "654288bb1d85846191a1e3e7b6d02918"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
